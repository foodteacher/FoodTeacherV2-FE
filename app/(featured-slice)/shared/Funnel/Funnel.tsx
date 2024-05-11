"use client";
import { FunnelState } from "@/app/(featured-slice)/widgets/signupFunnel/types";
import { Box, Button, ButtonGroup, Progress, VStack } from "@chakra-ui/react";
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
      <Box margin={"0 10px"}>
        <Progress value={progress} />
        <ButtonGroup margin={"24px 0"}>
          <Button w={"36px"} h={"36px"} color={"#8F00FF"} bg={"#F2E2FF"}>
            1
          </Button>
          <Button w={"36px"} h={"36px"} color={"#868686"} bg={"#EEEEEF"}>
            2
          </Button>
        </ButtonGroup>
        {children}
      </Box>
    </FunnelProvider.Provider>
  );
};

const Step = ({ children, name }: PropsWithChildren<{ name: string }>) => {
  const context = useContext(FunnelProvider);
  if (!context) {
    throw new Error("not Context");
  }

  return <>{context.currentStep === name && children}</>;
};

Funnel.Step = Step;

export default Funnel;
