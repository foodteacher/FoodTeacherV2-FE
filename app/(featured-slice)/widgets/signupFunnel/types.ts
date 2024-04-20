import { Dispatch, SetStateAction } from "react";

/**step props */
export interface StepProps {
  goNextStep: () => void;
  goPrevStep?: () => void;
  setState: Dispatch<SetStateAction<SurveyState>>;
}

export interface SurveyState {
  age: number;
  gender: string;
  weight: number;
}

export type FunnelInfo = SurveyState;

export type FunnelState = {
  currentStep: string;
  funnelState: FunnelInfo;
  progress?: number;
};
