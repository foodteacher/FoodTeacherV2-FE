import { instance } from "@/app/(featured-slice)/shared/auth/api/SharedApi";
import { SurveyListByPage } from "../types";

/**모든 설문조사 데이터 받아오기 */
const getAllSurvey = async () => {};

/**id로 설문조사 데이터 받아오기 */
const getSurveyByPage = async (params: {
  pageNum: number;
}): Promise<SurveyListByPage[]> => {
  // const accessToken = localStorage.getItem("accessToken");

  const res = await instance.get(`/survey/regist`, {
    params,
    // headers: {
    //   Authorization: `Bearer ${accessToken}`,
    // },
  });
  return res.data;
};

export { getSurveyByPage };
