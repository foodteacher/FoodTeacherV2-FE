import { Code, PageParams } from "@/app/(featured-slice)/shared/type";
import AuthConfirm from "@/app/(featured-slice)/widgets/authConfim/ui/AuthConfirm";

const Page = async ({ searchParams }: PageParams<any, Code>) => {
  const code = searchParams;

  return (
    <>
      <AuthConfirm codeInfo={code} />
    </>
  );
};

export default Page;
