"use client";
import Funnel from "@/app/(featured-slice)/shared/UI/Funnel/Funnel";
import React, { useEffect } from "react";
import { AgeStep } from "../step";
import { useFunnel } from "@/app/(featured-slice)/shared/UI/Funnel/hook";
import { Button } from "@/app/(featured-slice)/shared/UI";
import { updateAccessToken } from "@/app/(featured-slice)/shared/api/SharedApi";
import { useUser } from "@/app/(featured-slice)/shared/hooks";

const SurveyFunnel = () => {
  const { onChangeNextStep, onChangePrevStep, currentStep } = useFunnel([
    "age",
    "gender",
  ]);

  const refreshAccess = async () => {
    const data = await updateAccessToken();
    console.log(data);
  };

  const {} = useUser();

  return (
    <Funnel>
      <Funnel.Step name="age">
        <AgeStep />
        <Button onClick={refreshAccess}>refresh</Button>
      </Funnel.Step>
    </Funnel>
  );
};

export default SurveyFunnel;
