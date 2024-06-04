"use client";
import { FunnelState } from "@/app/(featured-slice)/widgets/signup-funnel/types";
import { Box } from "@chakra-ui/react";
import React, { createContext, useContext, PropsWithChildren } from "react";

const FunnelProvider = createContext<FunnelState | null>(null);

const Funnel = ({
  funnelState,
  currentStep,
  children,
  progress,
  steps,
  ...props
}: PropsWithChildren<FunnelState>) => {
  return (
    <FunnelProvider.Provider value={{ currentStep, funnelState }}>
      <Box {...props}>{children}</Box>
    </FunnelProvider.Provider>
  );
};

const Step = ({
  children,
  name,
}: PropsWithChildren<{ name: string | number }>) => {
  const context = useContext(FunnelProvider);
  if (!context) {
    throw new Error("not Context");
  }

  return <>{context.currentStep === name && children}</>;
};

Funnel.Step = Step;

export default Funnel;
