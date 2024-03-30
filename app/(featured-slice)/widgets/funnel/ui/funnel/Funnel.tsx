"use client";
import React from "react";
import { AgeStep, GenderStep } from "../step";
import { useFunnel } from "../../hooks";
import { Button } from "@/app/(featured-slice)/shared/UI";

const Funnel = () => {
  const { currentStep, onChangeNextStep, onChangePrevStep } = useFunnel([
    "age",
    "gender",
  ]);

  return (
    <>
      <AgeStep />
      <GenderStep />
      <Button
        onClick={() => {
          onChangeNextStep();
          console.log(currentStep);
        }}
      >
        go Next Step{" "}
      </Button>
    </>
  );
};

export default Funnel;
