import { Box, Flex } from "@chakra-ui/react";
import React, { PropsWithChildren, ReactNode } from "react";

interface TheHeaderProps {
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  w?: string;
}

export const TheHeader = ({
  leftElement,
  children,
  rightElement,
  w,
}: PropsWithChildren<TheHeaderProps>) => {
  return (
    <Flex
      w={"100%"}
      bg={"#FDFBF8"}
      justifyContent={"space-between"}
      padding={["16px", "16px", "30px"]}
      pos={"sticky"}
      top={"0"}
      zIndex={"100"}
    >
      <Box w={w} h={"24px"}>
        {leftElement}
      </Box>
      {children}
      <Box w={w} h={"24px"}>
        {rightElement}
      </Box>
    </Flex>
  );
};
