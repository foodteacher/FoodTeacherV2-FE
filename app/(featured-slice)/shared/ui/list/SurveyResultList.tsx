"use client";
import {
  Box,
  Highlight,
  HighlightProps,
  ListItem,
  Text,
} from "@chakra-ui/react";

interface SignupResultListProps extends HighlightProps {
  idx?: number;
  fontSize: string;
}

export const SurveryResultList = ({
  idx,
  children,
  query,
  fontSize,
  ...props
}: SignupResultListProps) => {
  return (
    <>
      <Box
        bg={"#D9D9D9"}
        h={"25px"}
        aspectRatio={"1"}
        borderRadius={"50%"}
        textAlign={"center"}
        fontSize={"16px"}
        fontWeight={"bold"}
      >
        {idx}
      </Box>
      <Text color={"#333331"} fontWeight={"bold"} fontSize={fontSize}>
        <Highlight
          query={query}
          styles={{
            border: "1px solid #961AFF",
            padding: "4px 8px",
            margin: "0px 4px",
            borderRadius: "5px",
            color: "#6D00A3",
          }}
        >
          {children}
        </Highlight>
      </Text>
    </>
  );
};
