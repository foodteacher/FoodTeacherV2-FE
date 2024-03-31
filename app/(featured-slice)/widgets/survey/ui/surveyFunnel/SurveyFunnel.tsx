"use client";
import Funnel from "@/app/(featured-slice)/shared/UI/Funnel/Funnel";
import React, { useEffect } from "react";
import { AgeStep } from "../step";
import { useFunnel } from "@/app/(featured-slice)/shared/UI/Funnel/hook";
import { instacne } from "@/app/(featured-slice)/shared/api/SharedApi";

const SurveyFunnel = () => {
  const { onChangeNextStep, onChangePrevStep, currentStep } = useFunnel([
    "age",
    "gender",
  ]);

  useEffect(() => {
    instacne.get("/user/user-info", {
      headers: {},
    });
  });

  return (
    <Funnel>
      <Funnel.Step name="age">
        <AgeStep />
      </Funnel.Step>
    </Funnel>
  );
};

export default SurveyFunnel;
