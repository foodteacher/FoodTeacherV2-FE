import AuthConfirm from "@/app/(featured-slice)/widgets/authConfim/ui/authConfirm";
import { Code } from "@/app/(featured-slice)/shared/type";

interface LoginPageParams {
  searchParams: Code;
}

const Page = async ({ searchParams }: LoginPageParams) => {
  const code = searchParams;

  return (
    <>
      <AuthConfirm codeInfo={code} />
    </>
  );
};

export default Page;
