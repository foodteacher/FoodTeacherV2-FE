import { Box } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

const DefaultLayout = ({ children }: PropsWithChildren) => {
  const breakpoints = {
    base: "0px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  };
  return (
    /**반응형 사이즈
     * 360px 모바일
     * 768px 태블릿
     * 968px pc
     */
    <Box w={"100%"} margin={"0 auto"} h={"100%"}>
      {children}
    </Box>
  );
};

export default DefaultLayout;
