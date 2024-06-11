export interface TextValueOptionType {
  text: string | number;
  optionId: string | number;
}

export const GENDER_OPTIONS: TextValueOptionType[] = [
  { text: "남성", optionId: "male" },
  { text: "여성", optionId: "female" },
];

export const BLOOD_TYPE_OTPIONS: TextValueOptionType[] = [
  { text: "A", optionId: "A" },
  { text: "B", optionId: "B" },
  { text: "AB", optionId: "AB" },
  { text: "O", optionId: "O" },
];
