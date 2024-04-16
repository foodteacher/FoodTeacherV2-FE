"use client";
import { FunnelState } from "@/app/(featured-slice)/widgets/surveyFunnel/types";
import { Progress } from "@chakra-ui/react";
import React, {
  ReactNode,
  createContext,
  useContext,
  PropsWithChildren,
} from "react";

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

const Step = ({ children, name }: { children: ReactNode; name: string }) => {
  const context = useContext(FunnelProvider);
  if (!context) {
    throw new Error("not Context");
  }

  return <>{context.currentStep === name && children}</>;
};

Funnel.Step = Step;

export default Funnel;
