import { Box } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    /**반응형 사이즈
     * 360px 모바일
     * 768px 태블릿
     * 968px pc
     */
    <Box w={["360px", "768px", "968px"]} margin={"0 auto"}>
      {children}
    </Box>
  );
};

export default DefaultLayout;
