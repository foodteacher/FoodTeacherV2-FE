"use client";
import { UserInfo, UserPysicalStep } from "../step";
import { useState } from "react";
import { useFunnel } from "@/app/(featured-slice)/shared/hooks/useFunnel";
import Funnel from "@/app/(featured-slice)/shared/ui/funnel/Funnel";
import { SignupState } from "../../types";

export const SignupFunnel = () => {
  const { changeNextStep, initializeStep, currentStep, progress, steps } =
    useFunnel(["info", "physical"]);

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
        <Funnel.Step name="info">
          <UserInfo goNextStep={changeNextStep} setState={setSurveyState} />
        </Funnel.Step>
        <Funnel.Step name="physical">
          <UserPysicalStep
            goNextStep={changeNextStep}
            setState={setSurveyState}
          />
        </Funnel.Step>
      </Funnel>
    </>
  );
};
