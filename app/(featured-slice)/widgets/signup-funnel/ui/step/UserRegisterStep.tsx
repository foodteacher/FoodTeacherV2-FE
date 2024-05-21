import { SignupButton } from "@/app/(featured-slice)/shared/ui/button";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";

export const UserRegisterStep = () => {
  return (
    <Box>
      <Heading fontSize={"24px"} fontWeight={"bold"} w={"280px"}>
        건강 정보를 더 알아야 자세한
      </Heading>
      <Heading fontSize={"24px"} fontWeight={"bold"} w={"280px"}>
        식단 제공이 가능해요🥰
      </Heading>
      <Heading fontSize={"24px"} fontWeight={"bold"} w={"280px"}>
        조금만 더 작성하러 가볼까요?
      </Heading>

      <Flex
        pos={"fixed"}
        right={0}
        bottom={0}
        left={0}
        padding={"20px 10px"}
        w={["100%", "100%", "740px"]}
        margin={"0 auto"}
        flexDir={"column"}
        gap={"16px"}
      >
        <Button
          bg={"transparent"}
          _hover={{ bg: "transparent" }}
          color={"#8B8B8B"}
          fontWeight={"bold"}
        >
          나중에 쓸래요
        </Button>
        <SignupButton type={"submit"}>계속하기</SignupButton>
      </Flex>
    </Box>
  );
};
