import {
  postKakaoCode,
  postNaverLogin,
} from "@/app/(featured-slice)/features/auth/api";
import { create } from "./create";
import AuthConfirm from "@/app/(featured-slice)/widgets/authConfim/ui/authConfirm";

interface LoginPageParams {
  searchParams: { code: string; state?: string; error: string };
}

const Page = async ({ searchParams }: LoginPageParams) => {
  const code = searchParams;

  let jwtToken;

  if (code.state) {
    const naverCode = { code: code.code, state: code.state };
    jwtToken = await postNaverLogin(naverCode);
    // create(jwtToken);
  } else {
    const kakaoCode = { code: code.code };
    jwtToken = await postKakaoCode(kakaoCode);
  }

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
