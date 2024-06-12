"use client";

import { useFunnel } from "@/app/(featured-slice)/shared/hooks/useFunnel";
import Funnel from "@/app/(featured-slice)/shared/ui/funnel/Funnel";
import React, { useState } from "react";
import {
  FifthSurveyStep,
  FirstSurveyStep,
  FourthSurveyStep,
  SecondSurveyStep,
  SixthSurveyStep,
  TestStep,
  ThirdSurveyStep,
} from "../step";
import { ProgressBar } from "@/app/(featured-slice)/shared/ui/progress-box";

export const SurveyFunnel = () => {
  const { changeNextStep, changePrevStep, currentStep, progress, steps } =
    useFunnel([1, 2, 3, 4, 5, 6]);

  return (
    <Funnel
      currentStep={currentStep}
      progress={progress}
      steps={steps}
      margin={"0 auto"}
      h={"100%"}
      bg={"#FDFBF8"}
      overflow={"scroll"}
      w={["100%", "100%", "740px"]}
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
        "&::-webkit-scrollbar-track": {},
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "24px",
        },
      }}
    >
      <ProgressBar
        stepArr={steps}
        currentStep={currentStep}
        boxWidth={"28px"}
      />
      <Funnel.Step name={1}>
        <FirstSurveyStep goNextStep={changeNextStep} />
        {/* <SecondSurveyStep
          goNextStep={changeNextStep}
          goPrevStep={changePrevStep}
        /> */}
        {/* <ThirdSurveyFunnel
          goNextStep={changeNextStep}
          setState={setSurveyState}
        /> */}
        {/* <FourthSurveyStep goNextStep={changeNextStep} /> */}
        {/* <FifthSurveyStep goNextStep={changeNextStep} /> */}
        {/* <SixthSurveyStep
          goNextStep={changeNextStep}
          setState={setSurveyState}
        /> */}
        {/* <TestStep /> */}
      </Funnel.Step>
      <Funnel.Step name={2}>
        <SecondSurveyStep
          goNextStep={changeNextStep}
          goPrevStep={changePrevStep}
        />
      </Funnel.Step>
      <Funnel.Step name={3}>
        <ThirdSurveyStep
          goNextStep={changeNextStep}
          goPrevStep={changePrevStep}
        />
      </Funnel.Step>
      <Funnel.Step name={4}>
        <FourthSurveyStep
          goNextStep={changeNextStep}
          goPrevStep={changePrevStep}
        />
      </Funnel.Step>
      <Funnel.Step name={5}>
        <FifthSurveyStep
          goNextStep={changeNextStep}
          goPrevStep={changePrevStep}
        />
      </Funnel.Step>
      <Funnel.Step name={6}>
        <SixthSurveyStep
          goNextStep={changeNextStep}
          goPrevStep={changePrevStep}
        />
      </Funnel.Step>
    </Funnel>
  );
};
