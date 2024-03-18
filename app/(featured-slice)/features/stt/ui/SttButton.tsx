"use client";
import { Box, ButtonGroup } from "@chakra-ui/react";

import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Button } from "@/app/(featured-slice)/shared/UI";
import { PhoneIcon } from "@chakra-ui/icons";

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
      <ButtonGroup display={"flex"}>
        {!listening ? (
          <Button onClick={() => startListening()}>
            <PhoneIcon />
          </Button>
        ) : (
          <Button
            className="btn btn-secondary btn-sm"
            onClick={() => stopListening()}
          >
            Stop
          </Button>
        )}
      </ButtonGroup>
    </Box>
  );
};

export default SttForm;
