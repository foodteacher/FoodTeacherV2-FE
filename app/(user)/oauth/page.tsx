import AuthConfirm from "@/app/(featured-slice)/widgets/authConfim/ui/authConfirm";
import { Code, PageParams } from "@/app/(featured-slice)/shared/type";

const Page = async ({ searchParams }: PageParams<any, Code>) => {
  const code = searchParams;

  return (
    <>
      <AuthConfirm codeInfo={code} />
    </>
  );
};

export default Page;
