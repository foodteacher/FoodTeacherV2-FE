"use client";
import React, { ReactNode, createContext, useContext } from "react";

const FunnelProvider = createContext<any>(null);

interface FunnelProps {
  children: ReactNode;
  currentStep: string;
}

const Funnel = ({ currentStep, children }: FunnelProps) => {
  return (
    <FunnelProvider.Provider value={currentStep}>
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
