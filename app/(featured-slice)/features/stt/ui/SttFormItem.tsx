"use client";
import { ReactNode, createContext, useContext } from "react";
import { UseSttType, useStt } from "../hooks";
import { Button } from "@/app/(featured-slice)/shared/UI";
import { PhoneIcon } from "@chakra-ui/icons";
import Input from "@/app/(featured-slice)/shared/UI/Input/Input";

export const SttContext = createContext<UseSttType>({
  listening: false,
  startListening: () => {},
  stopListening: () => {},
  transcript: "",
});

const SttFormItem = ({ children }: { children?: ReactNode }) => {
  const { listening, startListening, stopListening, transcript } = useStt();

  return (
    <SttContext.Provider
      value={{ listening, startListening, stopListening, transcript }}
    >
      {children}
    </SttContext.Provider>
  );
};

const SttButton = () => {
  const { listening, startListening, stopListening } =
    useContext<UseSttType>(SttContext);

  return (
    <>
      {!listening ? (
        <Button onClick={() => startListening()}>
          <PhoneIcon />
        </Button>
      ) : (
        <Button onClick={() => stopListening()}>Stop</Button>
      )}
    </>
  );
};

const SttInput = () => {
  const context = useContext(SttContext);

  return (
    <>
      <Input defaultValue={context?.transcript} />
    </>
  );
};

SttFormItem.SttButton = SttButton;
SttFormItem.sttInput = SttInput;

export default SttFormItem;
