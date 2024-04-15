"use client";
import {
  FunnelState,
  SurveyState,
} from "@/app/(featured-slice)/widgets/survey/types";
import React, { ReactNode, createContext, useContext } from "react";

interface FunnelProps<T> {
  children: ReactNode;
  currentStep: string;
  funnelState: T;
}
const FunnelProvider = createContext<FunnelState | null>(null);

const Funnel = <T extends SurveyState>({
  funnelState,
  currentStep,
  children,
}: FunnelProps<T>) => {
  return (
    <FunnelProvider.Provider value={{ currentStep, funnelState }}>
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
