import { instacne } from "@/app/(featured-slice)/shared/api/SharedApi";
import { redirect } from "next/navigation";

type Code = { code: string; state?: string } | { code: string };

export const getUser = async () => {
  const res = await instacne.get("/me");
  return res.data;
};

export const postKakaoCode = async (code: Code) => {
  try {
    const res = await instacne.post(`/login/kakao`, code);

    console.log(res);
    const refresh = res.headers;
    const access = res.data;

    return { access, refresh };
  } catch (err) {
    // return redirect("/");
  }
};

export const postKakaoLogin = async (code: Code) => {
  try {
    const res = await instacne.post(`/login/kakao`, { code });
    return res.data;
  } catch {
    return redirect("/");
  }
};

export const postNaverLogin = async (code: Code) => {
  try {
    const res = await instacne.post("/login/naver", { code });
    console.log(res);
    return res.data;
  } catch {
    return redirect("/");
  }
};
