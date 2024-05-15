"use client";
import { UserPysicalStep, UserInfo } from "../step";
import { useState } from "react";
import { SurveyState } from "../../types";
import { useFunnel } from "@/app/(featured-slice)/shared/Funnel/model/useFunnel";
import Funnel from "@/app/(featured-slice)/shared/Funnel/ui/Funnel";

export const SurveyFunnel = () => {
  const { onChangeNextStep, initializeStep, currentStep, progress } = useFunnel(
    ["age", "physical"]
  );

  const [surveyState, setSurveyState] = useState<SurveyState>({
    age: 0,
    weight: 0,
    gender: "",
  });

  return (
    <>
      <Funnel
        currentStep={currentStep}
        funnelState={surveyState}
        progress={progress}
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
