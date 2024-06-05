interface SurveyQuestionOption {
  optionId: number;
  text: string;
  selected: boolean;
}

interface SurveyListByPage {
  questionId: number;
  text: string;
  options: SurveyQuestionOption[];
  totalPage: number;
}
