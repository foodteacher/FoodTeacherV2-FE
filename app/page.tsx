"use client";

import { Button } from "@chakra-ui/react";
import LoginForm from "./(featured-slice)/widgets/login/ui/LoginForm";
import { useTTS } from "./(featured-slice)/features/stt/model/useStt";
import { UserInfoForm } from "./(featured-slice)/widgets/userInfo-form.tsx/ui/UserInfoForm";

export default function Home() {
  const { mutateAsync: speechReqMutate } = useTTS();

  return (
    <main>
      <LoginForm />
      {/* <UserInfoForm /> */}
      <UserInfoForm />
      <Button onClick={() => speechReqMutate("hello")}>req</Button>
    </main>
  );
}
