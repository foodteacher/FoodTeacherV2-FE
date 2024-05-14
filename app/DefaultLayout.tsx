import { Box } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box w={["360px", "768px", "968px"]} margin={"0 auto"}>
      {children}
    </Box>
  );
};

export default DefaultLayout;
