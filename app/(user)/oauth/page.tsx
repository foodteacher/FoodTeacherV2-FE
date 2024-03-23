import { postKakaoCode } from "@/app/(featured-slice)/features/auth/api";
import { cookies, headers } from "next/headers";
interface LoginPageParams {
  searchParams: { code: string; error: string };
}

const Page = async ({ searchParams }: LoginPageParams) => {
  const kakaoCode = searchParams.code;

  let jwtToken;

  if (kakaoCode) {
    jwtToken = await postKakaoCode(kakaoCode);
  }

  const cookieStore = cookies();

  return (
    <>
      {kakaoCode ? (
        <div>Authentication success</div>
      ) : (
        <div>Not Authentication</div>
      )}
    </>
  );
};

export default Page;
