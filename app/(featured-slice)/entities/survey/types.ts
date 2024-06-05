export interface SurveyQuestionOption {
  optionId: number;
  text: string;
  selected: boolean;
}

export interface SurveyListByPage {
  questionId: number;
  text: string;
  options: SurveyQuestionOption[];
  totalPage: number;
}
