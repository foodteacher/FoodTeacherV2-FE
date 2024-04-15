/**step props */
export interface StepProps {
  goNextStep: () => void;
  goPrevStep?: () => void;
}

export interface SurveyState {
  age: number;
  gender: string;
  weight: string;
}

export type FunnelInfo = SurveyState;

export type FunnelState = {
  currentStep: string;
  funnelState: FunnelInfo;
};
