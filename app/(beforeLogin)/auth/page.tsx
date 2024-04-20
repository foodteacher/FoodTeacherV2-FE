import { AccessToken, PageParams } from "@/app/(featured-slice)/shared/type";
import AuthConfirm from "@/app/(featured-slice)/widgets/authConfim/ui/AuthConfirm";

const Page = async ({ searchParams }: PageParams<unknown, AccessToken>) => {
  const { accessToken } = searchParams;

  return (
    <>
      <AuthConfirm accessToken={accessToken} />
    </>
  );
};

export default Page;
