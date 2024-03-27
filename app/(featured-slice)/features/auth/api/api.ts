import { instacne } from "@/app/(featured-slice)/shared/api/SharedApi";
import { Code } from "@/app/(featured-slice)/shared/type";
import { useRouter } from "next/navigation";

export const getUser = async () => {
  const res = await instacne.get("/me");
  return res.data;
};

// export const postKakaoCode = async (code: Code) => {
//   try {
//     const res = await instacne.post(`/login/kakao`, code);

//     const refresh = res.headers;
//     const access = res.data;

//     return { access, refresh };
//   } catch (err) {
//     // return redirect("/");
//   }
// };

export const postKakaoLogin = async (code: Code) => {
  const router = useRouter();
  try {
    const res = await instacne.post(`/login/kakao`, code);
    return res.data;
  } catch {
    return router.replace("/");
  }
};

export const postNaverLogin = async (code: Code) => {
  const router = useRouter();

  try {
    const res = await instacne.post("/login/naver", { code });
    return res.data;
  } catch {
    return router.replace("/");
  }
};
