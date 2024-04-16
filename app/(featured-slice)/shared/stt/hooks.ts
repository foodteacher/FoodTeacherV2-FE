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

  if (recognition) {
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      setListening(false);

      const result = event.results[0][0].transcript;
      setTranscript(result);
    };

    recognition.onend = () => {
      setListening(false);
    };
  }

  /**음성 인식 시작 */
  const startListening = () => {
    if (recognition) {
      recognition.start();
      setListening(true);
    }
  };

  /**음성 인식 멈춤 */
  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setListening(false);
    }
  };

  return {
    transcript,
    listening,
    startListening,
    stopListening,
  };
};
