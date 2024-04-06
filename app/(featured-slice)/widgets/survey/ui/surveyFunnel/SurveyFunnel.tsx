"use client";
import Funnel from "@/app/(featured-slice)/shared/ui/Funnel/Funnel";
import { AgeStep, GenderStep, WeightStep } from "../step";
import { useFunnel } from "@/app/(featured-slice)/shared/ui/Funnel/hook";
import { Button } from "@/app/(featured-slice)/shared/ui";
import { updateAccessToken } from "@/app/(featured-slice)/shared/api/SharedApi";
import { useUser } from "@/app/(featured-slice)/shared/hooks";

export const SurveyFunnel = () => {
  const { onChangeNextStep, onChangePrevStep, currentStep } = useFunnel([
    "age",
    "gender",
    "weight",
  ]);

  // const refreshAccess = async () => {
  //   const data = await updateAccessToken();
  //   console.log(data);
  // };

  // const {} = useUser();

  return (
    <Funnel currentStep={currentStep}>
      <Funnel.Step name="age">
        <AgeStep nextStep={onChangeNextStep} />
        {/* <Button onClick={refreshAccess}>refresh</Button> */}
      </Funnel.Step>
      <Funnel.Step name="gender">
        <GenderStep />
      </Funnel.Step>
      <Funnel.Step name="weight">
        <WeightStep />
      </Funnel.Step>
    </Funnel>
  );
};
