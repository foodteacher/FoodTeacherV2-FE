import {
  postKakaoLogin,
  postNaverLogin,
} from "@/app/(featured-slice)/features/auth/api";
import { create } from "./create";
import AuthConfirm from "@/app/(featured-slice)/widgets/authConfim/ui/authConfirm";
import { instacne } from "@/app/(featured-slice)/shared/api/SharedApi";

interface LoginPageParams {
  searchParams: { code: string; state?: string; error: string };
}

const Page = async ({ searchParams }: LoginPageParams) => {
  const code = searchParams;

  // if (code.state) {
  //   const naverCode = { code: code.code, state: code.state };
  //   jwtToken = await postNaverLogin(naverCode);
  //   // create(jwtToken);
  // } else {
  //   const kakaoCode = { code: code.code };
  //   jwtToken = await postKakaoLogin(kakaoCode);
  // }

  return (
    <>
      {/* <AuthConfirm kakaoCode={kakaoCode} /> */}
      {/* {refresh} */}
      {/* <AuthConfirm kakaoCode={jwtToken} /> */}

      <AuthConfirm code={code} />
    </>
  );
};

export default Page;
