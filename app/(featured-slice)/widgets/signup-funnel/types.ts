import { BoxProps } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

/**step props */
export interface StepProps {
  goNextStep: () => void;
  goPrevStep?: () => void;
  setState?: Dispatch<SetStateAction<SignupState>>;
}

export type BloodType = "A" | "B" | "AB" | "O";

export interface UserInfoType {
  name: string;
  birthday: string;
  gender: string;
}

export interface PhysicalInfo {
  height: number;
  weight: number;
  targetWeight: number;
  bloodType: string;
}

export type SignupState = UserInfoType & PhysicalInfo;

export type FunnelInfo = SignupState;

export interface FunnelState extends BoxProps {
  currentStep: string | number;
  funnelState?: FunnelInfo;
  progress?: number;
  steps?: (string | number)[];
}
