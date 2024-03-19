"use client";
import { ReactNode, createContext, useContext } from "react";
import { UseSttType, useStt } from "../hooks";
import { Button } from "@/app/(featured-slice)/shared/UI";
import { PhoneIcon } from "@chakra-ui/icons";
import Input from "@/app/(featured-slice)/shared/UI/Input/Input";
import { FormControl, FormLabel } from "@chakra-ui/react";

export const SttContext = createContext<UseSttType>({
  listening: false,
  startListening: () => {},
  stopListening: () => {},
  transcript: "",
});

const SttFormItem = ({ children }: { children?: ReactNode }) => {
  const { listening, startListening, stopListening, transcript } = useStt();

  return (
    <FormControl>
      <SttContext.Provider
        value={{ listening, startListening, stopListening, transcript }}
      >
        {children}
      </SttContext.Provider>
    </FormControl>
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

const SttLabel = ({ children }: { children: ReactNode }) => {
  const context = useContext(SttContext);
  return (
    <>
      <FormLabel>{children}</FormLabel>
    </>
  );
};

SttFormItem.SttButton = SttButton;
SttFormItem.sttInput = SttInput;
SttFormItem.Label = SttLabel;

export default SttFormItem;
