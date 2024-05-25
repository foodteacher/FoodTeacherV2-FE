import { Box, Flex } from "@chakra-ui/react";
import React, { PropsWithChildren, ReactNode } from "react";

interface TheHeaderProps {
  leftElement?: ReactNode;
  rightElement?: ReactNode;
}

export const TheHeader = ({
  leftElement,
  children,
  rightElement,
}: PropsWithChildren<TheHeaderProps>) => {
  return (
    <Flex
      w={"100%"}
      h={"46px"}
      bg={"#FDFBF8"}
      justifyContent={"space-between"}
      padding={["16px", "16px", "30px"]}
      pos={"sticky"}
      top={"0"}
      zIndex={"100"}
    >
      <Box w={"24px"} h={"24px"}>
        {leftElement}
      </Box>
      {children}
      <Box w={"24px"} h={"24px"}>
        {rightElement}
      </Box>
    </Flex>
  );
};
