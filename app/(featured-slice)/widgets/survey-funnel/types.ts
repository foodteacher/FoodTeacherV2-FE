export interface RadioOption {
  name: string;
  icon: string;
  colorIcon: string;
  text: string;
  w: string;
}

export interface FormData {
  questionId: number;
  optionIdList: number[];
  textAnswer?: {
    optionId: number;
    answer: string;
  };
}
