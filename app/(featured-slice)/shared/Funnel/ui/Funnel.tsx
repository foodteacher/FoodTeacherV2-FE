"use client";
import { FunnelState } from "@/app/(featured-slice)/widgets/signupFunnel/types";
import { Box, Button, ButtonGroup, Progress } from "@chakra-ui/react";
import React, { createContext, useContext, PropsWithChildren } from "react";

const FunnelProvider = createContext<FunnelState | null>(null);

const Funnel = ({
  funnelState,
  currentStep,
  children,
  progress,
  steps,
}: PropsWithChildren<FunnelState>) => {
  return (
    <FunnelProvider.Provider value={{ currentStep, funnelState }}>
      <Box
        padding={["0 15px", "0 15px", "0 120px"]}
        margin={"0 auto"}
        h={"100%"}
        bg={"#FDFBF8"}
        w={["100%", "100%", "740px"]}
      >
        <ButtonGroup margin={"24px 0"}>
          {steps?.map((ele, idx) => {
            return (
              <Button
                key={ele}
                w={"36px"}
                h={"36px"}
                color={progress !== idx + 1 ? "#868686" : "#8F00FF"}
                bg={progress !== idx + 1 ? "#EEEEEF" : "#F2E2FF"}
              >
                {idx + 1}
              </Button>
            );
          })}
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
