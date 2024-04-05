import { Code, PageParams } from "@/app/(featured-slice)/shared/type";
import AuthConfirm from "@/app/(featured-slice)/widgets/authConfim/ui/AuthConfirm";

const Page = async ({ searchParams }: PageParams<any, Code>) => {
  const code = searchParams;

  // let accessToken;
  // if (code?.state) {
  //   const data = await postNaverLogin(code);
  //   accessToken = data;
  // } else {
  //   const data = await postKakaoLogin(code);
  //   accessToken = data;
  // }

  // await ServerAction();

  // console.log(accessToken);

  return (
    <>
      <AuthConfirm codeInfo={code} />
    </>
  );
};

export default Page;
