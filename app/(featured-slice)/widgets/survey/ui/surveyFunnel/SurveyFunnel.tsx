"use client";
import Funnel from "@/app/(featured-slice)/shared/UI/Funnel/Funnel";
import React, { useEffect } from "react";
import { AgeStep } from "../step";
import { useFunnel } from "@/app/(featured-slice)/shared/UI/Funnel/hook";
import { useUser } from "@/app/(featured-slice)/shared/hooks";

const SurveyFunnel = () => {
  const { onChangeNextStep, onChangePrevStep, currentStep } = useFunnel([
    "age",
    "gender",
  ]);

  const { userData } = useUser();

  console.log(userData);

  return (
    <Funnel>
      <Funnel.Step name="age">
        <AgeStep />
      </Funnel.Step>
    </Funnel>
  );
};

export default SurveyFunnel;
