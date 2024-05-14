"use client";

import { PhoneIcon } from "@chakra-ui/icons";
import { useStt } from "../hooks";
import { MainButton } from "../../Button/ui/MainButton";

const SttButton = () => {
  const { listening, startListening, stopListening } = useStt();

  return (
    <>
      {!listening ? (
        <MainButton onClick={() => startListening()}>
          <PhoneIcon />
        </MainButton>
      ) : (
        <MainButton
          className="btn btn-secondary btn-sm"
          onClick={() => stopListening()}
        >
          Stop
        </MainButton>
      )}
    </>
  );
};

export default SttButton;
