"use client";

import { Button } from "@/app/(featured-slice)/shared/ui";
import { PhoneIcon } from "@chakra-ui/icons";
import { useStt } from "../hooks";

const SttButton = () => {
  const { listening, startListening, stopListening } = useStt();

  return (
    <>
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
    </>
  );
};

export default SttButton;
