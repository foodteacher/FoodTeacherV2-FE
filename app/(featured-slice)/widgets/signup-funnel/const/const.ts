export interface TextValueOptionType {
  text: string | number;
  optionId: string | number;
  selected?: boolean;
  isCostom?: boolean;
}

export const GENDER_OPTIONS: TextValueOptionType[] = [
  { text: "남성", optionId: "male" },
  { text: "여성", optionId: "female" },
];

export const BLOOD_TYPE_OTPIONS: TextValueOptionType[] = [
  { text: "A", optionId: "1" },
  { text: "B", optionId: "2" },
  { text: "AB", optionId: "3" },
  { text: "O", optionId: "4" },
];
