export type OptionsType = (string | number)[];

export interface TextValueOptionType {
  text: string | number;
  optionId: string | number;
}

export const GENDER_OPTIONS: OptionsType = ["남성", "여성"];

export const BLOOD_TYPE_OTPIONS: TextValueOptionType[] = [
  { text: "A", optionId: "A" },
  { text: "B", optionId: "B" },
  { text: "AB", optionId: "AB" },
  { text: "O", optionId: "O" },
];
