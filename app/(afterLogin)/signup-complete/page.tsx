import { UserRegisterStep } from "@/app/(featured-slice)/widgets/signup-funnel/ui/step";
import { Box } from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <Box
      padding={["0 15px", "0 15px", "0 120px"]}
      margin={"0 auto"}
      h={"100%"}
      bg={"#FDFBF8"}
      w={["100%", "100%", "740px"]}
    >
      <UserRegisterStep />
    </Box>
  );
};

export default page;
