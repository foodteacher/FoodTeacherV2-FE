import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const ProgressBox = ({ focus }: { focus: string }) => {
  const progressColor =
    focus === "0" ? "#E7E5E2" : focus === "1" ? "#D49EFF" : "#8F00FF";

  return (
    <Box bg={progressColor} flexGrow={"1"} h={"5px"} borderRadius={"4px"} />
  );
};

export const ProgressBar = ({ orderArr }: { orderArr: string[] }) => {
  return (
    <Flex
      gap={"3px"}
      margin={"0px auto 28px auto"}
      w={"300px"}
      justifyContent={"center"}
    >
      {orderArr.map((ele) => {
        return <ProgressBox key={ele} focus={ele} />;
      })}
    </Flex>
  );
};
