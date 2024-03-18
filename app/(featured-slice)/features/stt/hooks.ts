import { useState } from "react";
import "regenerator-runtime/runtime";

export interface UseSttType {
  transcript: string;
  listening: boolean;
  startListening: () => void;
  stopListening: () => void;
}

export const useStt = (): UseSttType => {
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  let recognition: any;

  if (typeof window !== "undefined") {
    recognition = new window.webkitSpeechRecognition();
  }

  const startListening = () => {
    if (recognition) {
      recognition.start();
      setListening(true);
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setListening(false);
    }
  };

  if (recognition) {
    recognition.onresult = (event: any) => {
      setListening(false);

      const result = event.results[0][0].transcript;
      setTranscript(result);
    };

    recognition.onend = () => {
      setListening(false);
    };
  }

  return {
    transcript,
    listening,
    startListening,
    stopListening,
  };
};
