"use client";

import { Box, Button } from "@chakra-ui/react";
import LoginForm from "./(featured-slice)/widgets/login/ui/LoginForm";
import UserInfoForm from "./(featured-slice)/widgets/userInfoForm.tsx/ui/UserInfoForm";
import { useTTS } from "./(featured-slice)/features/stt/model/useStt";

export default function Home() {
  const { mutateAsync: speechReqMutate } = useTTS();

  return (
    <main>
      <LoginForm />
      <UserInfoForm />
      <Button onClick={() => speechReqMutate("hello")}>req</Button>
    </main>
  );
}
