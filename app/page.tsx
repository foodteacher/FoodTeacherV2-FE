import { Box, Button } from "@chakra-ui/react";
import LoginForm from "./(featured-slice)/widgets/login/ui/LoginForm";
import UserInfoForm from "./(featured-slice)/widgets/userInfoForm.tsx/ui/UserInfoForm";
import { useTTS } from "./(featured-slice)/entities/STT/hooks";

export default function Home() {
  const { mutateAsync: speechReqMutate } = useTTS();

  return (
    <main>
      <LoginForm />
      <UserInfoForm />
      <Box>text fewqfeqwfewq</Box>
      <Button onClick={() => speechReqMutate("안녕하세요")}>req</Button>
    </main>
  );
}
