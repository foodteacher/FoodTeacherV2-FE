"use client";
import { createContext, useContext } from "react";
import { PhoneIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormControlProps,
  FormLabel,
  FormLabelProps,
  Input,
} from "@chakra-ui/react";
import { UseSttType, useStt } from "../../hooks/hooks";
import { MainButton } from "../button/MainButton";
import { SttInputProps } from "./types";

export const SttContext = createContext<UseSttType>({
  listening: false,
  startListening: () => {},
  stopListening: () => {},
  transcript: "",
});

const SttFormItem = ({ children, ...props }: FormControlProps) => {
  const { listening, startListening, stopListening, transcript } = useStt();

  return (
    <SttContext.Provider
      value={{ listening, startListening, stopListening, transcript }}
    >
      <FormControl {...props}>{children}</FormControl>
    </SttContext.Provider>
  );
};

const SttButton = () => {
  const { listening, startListening, stopListening } =
    useContext<UseSttType>(SttContext);

  return (
    <>
      {!listening ? (
        <MainButton onClick={() => startListening()}>
          <PhoneIcon />
        </MainButton>
      ) : (
        <MainButton onClick={() => stopListening()}>Stop</MainButton>
      )}
    </>
  );
};
const SttLabel = ({ children, ...props }: FormLabelProps) => {
  return (
    <>
      <FormLabel {...props}>{children}</FormLabel>
    </>
  );
};

const SttInput = ({ register, ...props }: SttInputProps) => {
  const context = useContext(SttContext);
  return (
    <>
      <Input
        defaultValue={context?.transcript}
        borderColor={"gray.200"}
        _placeholder={{ color: "gray.400" }}
        {...register}
        {...props}
      />
    </>
  );
};

SttFormItem.SttButton = SttButton;
SttFormItem.SttInput = SttInput;
SttFormItem.Label = SttLabel;

export default SttFormItem;
