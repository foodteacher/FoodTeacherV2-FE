"use client";
import { UserInfo, UserPysicalStep } from "../step";
import { useState } from "react";
import { useFunnel } from "@/app/(featured-slice)/shared/hooks/useFunnel";
import Funnel from "@/app/(featured-slice)/shared/ui/funnel/Funnel";
import { SignupState } from "../../types";
import { ProgressBar } from "@/app/(featured-slice)/shared/ui/progress-box";

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
        padding={["0px 16px", "0px 16px", "0px 120px"]}
        margin={"0 auto"}
        bg={"#FDFBF8"}
        h={"100%"}
        w={["100%", "100%", "740px"]}
        overflow={"scroll"}
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
        <Funnel.Step name="info">
          {/* <UserInfo goNextStep={changeNextStep} setState={setSurveyState} /> */}
          <UserPysicalStep
            goNextStep={changeNextStep}
            setState={setSurveyState}
          />
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
