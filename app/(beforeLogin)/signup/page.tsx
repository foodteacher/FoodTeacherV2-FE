import { SignupFunnel } from "@/app/(featured-slice)/widgets/signup-funnel/ui/funnel/SignupFunnel";
import { Box } from "@chakra-ui/react";
import React from "react";

const SurveyPage = () => {
  return (
    <Box
      padding={["0 15px", "0 15px", "0 120px"]}
      margin={"0 auto"}
      h={"100%"}
      bg={"#FDFBF8"}
      w={["100%", "100%", "740px"]}
    >
      <SignupFunnel />
    </Box>
  );
};

export default SurveyPage;
