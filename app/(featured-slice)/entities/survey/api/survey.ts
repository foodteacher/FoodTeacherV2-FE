import { instance } from "@/app/(featured-slice)/shared/auth/api/SharedApi";

/**모든 설문조사 데이터 받아오기 */
const getAllSurvey = async () => {};

/**id로 설문조사 데이터 받아오기 */
const getSurveyById = async (id: number) => {
  // const accessToken = localStorage.getItem("accessToken");

  const res = await instance.get(`/survey/${id}`, {
    // headers: {
    //   Authorization: `Bearer ${accessToken}`,
    // },
  });
  return res.data;
};

export { getSurveyById };
