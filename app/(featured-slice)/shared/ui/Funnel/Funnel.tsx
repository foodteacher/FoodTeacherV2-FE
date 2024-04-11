"use client";
import { SurveyState } from "@/app/(featured-slice)/widgets/survey/types";
import React, { ReactNode, createContext, useContext } from "react";

const FunnelProvider = createContext<any>(null);

type FunnelState = SurveyState;

interface FunnelProps<T> {
  children: ReactNode;
  currentStep: string;
  funnelState: T;
}

const Funnel = <T extends FunnelState>({
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

  return <>{context === name && children}</>;
};

Funnel.Step = Step;

export default Funnel;
