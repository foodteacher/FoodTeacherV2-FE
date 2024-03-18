"use client";
import { Box } from "@chakra-ui/react";

import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Button } from "@/app/(featured-slice)/shared/UI";

const SttForm = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: false });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  return (
    <Box>
      <h1 className="lg:text-5xl font-bold underline decoration-wavy text-2xl">
        Speech to text
      </h1>
      <p className=" mt-6 pb-32 mb-4 rounded-md bg-base-100 lg:w-96 lg:h-48 w-64 h-64">
        <span className="ml-2 font-bold text-xl bg-base-100">
          generated text:
        </span>
        {transcript}
      </p>
      <p className="mb-2 text-xl font-bold">
        Microphone: {listening ? "Listing to your voice.." : "off"}
      </p>
      <div className="flex gap-3">
        <Button
          className="btn btn-primary btn-sm"
          onClick={() => startListening()}
        >
          Start
        </Button>
        <Button
          className="btn btn-secondary btn-sm"
          onClick={() => stopListening()}
        >
          Stop
        </Button>
        <Button className="btn btn-accent btn-sm" onClick={resetTranscript}>
          Reset
        </Button>
      </div>
    </Box>
  );
};

export default SttForm;
