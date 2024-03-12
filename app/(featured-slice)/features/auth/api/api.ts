import { instacne } from "@/app/(featured-slice)/shared/api/SharedApi";
import { redirect } from "next/navigation";

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
