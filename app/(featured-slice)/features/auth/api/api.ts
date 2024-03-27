import { instacne } from "@/app/(featured-slice)/shared/api/SharedApi";
import { Code } from "@/app/(featured-slice)/shared/type";

export const getUser = async () => {
  const res = await instacne.get("/me");
  return res.data;
};

export const postKakaoLogin = async (code: Code) => {
  try {
    const res = await instacne.post(`/login/kakao`, code);
    return res.data;
  } catch (err) {
    return null;
  }
};

export const postNaverLogin = async (code: Code) => {
  // const router = useRouter();

  try {
    const res = await instacne.post("/login/naver", { code });
    return res.data;
  } catch (err) {
    return null;
  }
};
