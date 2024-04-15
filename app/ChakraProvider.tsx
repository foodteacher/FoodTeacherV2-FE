"use client";
import { ChakraProvider, Progress, extendTheme } from "@chakra-ui/react";
import React from "react";

const ChakraProviders = ({ children }: { children: React.ReactNode }) => {
  const customTheme = extendTheme({
    components: {
      Progress: {
        baseStyle: {
          filledTrack: {
            bg: "skyblue",
          },
        },
      },
    },
  });
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
};

export default ChakraProviders;
