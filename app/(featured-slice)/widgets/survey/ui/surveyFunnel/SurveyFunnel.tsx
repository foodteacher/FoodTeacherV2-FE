"use client";
import Funnel from "@/app/(featured-slice)/shared/UI/Funnel/Funnel";
import React from "react";
import { AgeStep } from "../step";
import { useFunnel } from "@/app/(featured-slice)/shared/UI/Funnel/hook";

const SurveyFunnel = () => {
  const {} = useFunnel(["age", "gender"]);

  return (
    <Funnel>
      <Funnel.Step>
        <AgeStep />
      </Funnel.Step>
    </Funnel>
  );
};

export default SurveyFunnel;
