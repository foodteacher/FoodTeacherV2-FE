"use client";
import React, { ReactNode, createContext } from "react";

const FunnelProvider = createContext<any>(null);

const Funnel = ({ children }: { children: ReactNode }) => {
  return (
    <FunnelProvider.Provider value={null}>{children}</FunnelProvider.Provider>
  );
};

const Step = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

Funnel.Step = Step;

export default Funnel;
