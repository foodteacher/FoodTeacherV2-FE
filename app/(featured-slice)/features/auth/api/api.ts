import { instacne } from "@/app/(featured-slice)/shared/api/SharedApi";
import { redirect } from "next/navigation";

export const getUser = async () => {
  const res = await instacne.get("/me");
  return res.data;
};

export const postKakaoCode = async (code: string) => {
  try {
    const res = await instacne.post(`/login/kakao`, { code });
    return res.data;
  } catch (err) {
    return redirect("/");
  }
};

export const postKakaoLogin = async (code: string) => {
  try {
    const res = await instacne.post(`/login`, { code });
    return res.data;
  } catch {
    return redirect("/");
  }
};

export const postNaverLogin = async (code: string) => {
  try {
    const res = await instacne.post("/login", { code });
    return res.data;
  } catch {
    return redirect("/");
  }
};
