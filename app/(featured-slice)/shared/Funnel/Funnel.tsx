"use client";
import { FunnelState } from "@/app/(featured-slice)/widgets/signupFunnel/types";
import { Box, Progress } from "@chakra-ui/react";
import React, { createContext, useContext, PropsWithChildren } from "react";

const FunnelProvider = createContext<FunnelState | null>(null);

const Funnel = ({
  funnelState,
  currentStep,
  children,
  progress,
}: PropsWithChildren<FunnelState>) => {
  return (
    <FunnelProvider.Provider value={{ currentStep, funnelState }}>
      <Progress value={progress} />
      {children}
    </FunnelProvider.Provider>
  );
};

const Step = ({ children, name }: PropsWithChildren<{ name: string }>) => {
  const context = useContext(FunnelProvider);
  if (!context) {
    throw new Error("not Context");
  }

  return (
    <Box margin={"0 10px"}>{context.currentStep === name && children}</Box>
  );
};

Funnel.Step = Step;

export default Funnel;
