import {
  postKakaoCode,
  postNaverLogin,
} from "@/app/(featured-slice)/features/auth/api";
import { create } from "./create";
import AuthConfirm from "@/app/(featured-slice)/widgets/authConfim/ui/AuthConfirm";

export type Code = { code: string; state?: string };
interface LoginPageParams {
  searchParams: { code: Code; error: string };
}

const Page = async ({ searchParams }: LoginPageParams) => {
  const code = searchParams.code;

  let jwtToken;

  if (code.state) {
    jwtToken = await postNaverLogin(code);
    // create(jwtToken);
  } else {
    jwtToken = await postKakaoCode(code);
  }

  return (
    <>
      {/* <AuthConfirm kakaoCode={kakaoCode} /> */}
      {/* {refresh} */}
      {/* <AuthConfirm kakaoCode={jwtToken} /> */}

      <AuthConfirm token={jwtToken} />
    </>
  );
};

export default Page;
