"use client";
import { UserPysicalStep, UserInfo } from "../step";
import { useState } from "react";
import { useFunnel } from "@/app/(featured-slice)/shared/Funnel/model/useFunnel";
import Funnel from "@/app/(featured-slice)/shared/Funnel/ui/Funnel";
import { SignupState } from "../../types";

export const SurveyFunnel = () => {
  const { onChangeNextStep, initializeStep, currentStep, progress, steps } =
    useFunnel(["age", "physical"]);

  const [surveyState, setSurveyState] = useState<SignupState>({
    name: "",
    height: 0,
    weight: 0,
    birthday: "",
    gender: "",
    targetWeight: 0,
    bloodType: "A",
  });

  return (
    <>
      <Funnel
        currentStep={currentStep}
        funnelState={surveyState}
        progress={progress}
        steps={steps}
      >
        <Funnel.Step name="age">
          <UserInfo goNextStep={onChangeNextStep} setState={setSurveyState} />
        </Funnel.Step>
        <Funnel.Step name="physical">
          <UserPysicalStep
            goNextStep={onChangeNextStep}
            setState={setSurveyState}
          />
        </Funnel.Step>
      </Funnel>
    </>
  );
};
