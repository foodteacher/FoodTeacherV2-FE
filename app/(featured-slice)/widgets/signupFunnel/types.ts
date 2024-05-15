import { Dispatch, SetStateAction } from "react";

/**step props */
export interface StepProps {
  goNextStep: () => void;
  goPrevStep?: () => void;
  setState: Dispatch<SetStateAction<SignupState>>;
}

export type BloodType = "A" | "B" | "AB" | "O";
export interface SignupState {
  name: string;
  height: number;
  weight: number;
  birthday: string;
  gender: string;
  targetWeight: number;
  bloodType: BloodType;
}

export type FunnelInfo = SignupState;

export type FunnelState = {
  currentStep: string;
  funnelState: FunnelInfo;
  progress?: number;
  steps?: string[];
};
