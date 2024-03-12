interface LoginPageParams {
  searchParams: { code: string; error: string };
}

const Page = async ({ searchParams }: LoginPageParams) => {
  const kakaoCode = searchParams.code;

  let jwtToken;
  if (kakaoCode) {
    jwtToken;
  }
  return <div></div>;
};

export default Page;
