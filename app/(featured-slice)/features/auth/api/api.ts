import { instacne } from "@/app/(featured-slice)/shared/api/SharedApi";
import { AccessToken } from "@/app/(featured-slice)/shared/type";

export const postKakaoLogin = async (code: AccessToken) => {
  try {
    const res = await instacne.post(`/login/kakao`, code);
    return res.data;
  } catch (err) {
    return null;
  }
};

export const postNaverLogin = async (code: AccessToken) => {
  try {
    const res = await instacne.post("/login/naver", code);
    return res.data;
  } catch (err) {
    return null;
  }
};
