import { useFunnel } from "@/app/(featured-slice)/shared/hooks/useFunnel";
import Funnel from "@/app/(featured-slice)/shared/ui/funnel/Funnel";
import React, { useState } from "react";
import { TestStep } from "../step";

export const SurveyFunnel = () => {
  const { changeNextStep, initializeStep, currentStep, progress, steps } =
    useFunnel(["1", "2"]);

  const [surveyState, setSurveyState] = useState<any>({
    name: "",
    height: 0,
    weight: 0,
    birthday: "",
    gender: "",
    targetWeight: 0,
    bloodType: "A",
  });
  return (
    <Funnel
      currentStep={currentStep}
      funnelState={surveyState}
      progress={progress}
      steps={steps}
      padding={["16px", "16px", "120px"]}
      margin={"0 auto"}
      h={"100%"}
      bg={"#FDFBF8"}
      w={["100%", "100%", "740px"]}
    >
      <Funnel.Step name="1">
        <TestStep goNextStep={changeNextStep} setState={setSurveyState} />
      </Funnel.Step>
    </Funnel>
  );
};
