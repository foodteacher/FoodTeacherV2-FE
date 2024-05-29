"use client";
import { BackArrowIcon } from "@/app/(featured-slice)/shared/ui/Icons";
import { TheHeader } from "@/app/(featured-slice)/shared/ui/header";
import { SignupFunnel } from "@/app/(featured-slice)/widgets/signup-funnel/ui/funnel/SignupFunnel";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <Box h={"100%"}>
      <TheHeader leftElement={<BackArrowIcon />}>
        <Text fontSize={"16px"}>회원가입</Text>
      </TheHeader>
      <SignupFunnel />
    </Box>
  );
};

export default page;
