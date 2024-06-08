import { useFunnel } from "@/app/(featured-slice)/shared/hooks/useFunnel";
import Funnel from "@/app/(featured-slice)/shared/ui/funnel/Funnel";
import React, { useState } from "react";
import {
  FifthSurveyStep,
  FirstSurveyStep,
  FourthSurveyStep,
  SecondSurveyStep,
  SixthSurveyStep,
  ThirdSurveyStep,
} from "../step";
import { ProgressBar } from "@/app/(featured-slice)/shared/ui/progress-box";

export const SurveyFunnel = () => {
  const { changeNextStep, currentStep, progress, steps } = useFunnel([
    1, 2, 3, 4, 5, 6,
  ]);

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
      // padding={["16px", "16px", "10%"]}
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
        {/* <FirstSurveyStep goNextStep={changeNextStep} /> */}
        {/* <SecondSurveyFunnel
          goNextStep={changeNextStep}
          setState={setSurveyState}
        /> */}
        {/* <ThirdSurveyFunnel
          goNextStep={changeNextStep}
          setState={setSurveyState}
        /> */}
        <FourthSurveyStep goNextStep={changeNextStep} />
        {/* <FifthSurveyStep
          goNextStep={changeNextStep}
          setState={setSurveyState}
        /> */}
        {/* <SixthSurveyStep
          goNextStep={changeNextStep}
          setState={setSurveyState}
        /> */}
      </Funnel.Step>
      <Funnel.Step name={2}>
        <SecondSurveyStep
          goNextStep={changeNextStep}
          setState={setSurveyState}
        />
      </Funnel.Step>
      <Funnel.Step name={3}>
        <ThirdSurveyStep
          goNextStep={changeNextStep}
          setState={setSurveyState}
        />
      </Funnel.Step>
      <Funnel.Step name={4}>
        <FourthSurveyStep
          goNextStep={changeNextStep}
          setState={setSurveyState}
        />
      </Funnel.Step>
      <Funnel.Step name={5}>
        <FifthSurveyStep
          goNextStep={changeNextStep}
          setState={setSurveyState}
        />
      </Funnel.Step>
      <Funnel.Step name={6}>
        <SixthSurveyStep
          goNextStep={changeNextStep}
          setState={setSurveyState}
        />
      </Funnel.Step>
    </Funnel>
  );
};
