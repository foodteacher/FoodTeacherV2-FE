"use client";
import { SignupFunnel } from "@/app/(featured-slice)/widgets/signup-funnel/ui/funnel/SignupFunnel";
import { Box } from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <Box h={"100%"}>
      <SignupFunnel />
    </Box>
  );
};

export default page;
