import { instance } from "@/app/(featured-slice)/shared/auth/api/SharedApi";

/**설문조사 제출*/
const postSurveyByPage = async (body: any) => {
  const url = "/survey/register/answers";

  const res = await instance.post(url, body);

  return res.data;
};

export { postSurveyByPage };
