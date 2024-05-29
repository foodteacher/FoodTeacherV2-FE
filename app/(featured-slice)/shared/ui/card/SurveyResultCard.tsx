"use client";

import { Card, CardBody, CardProps } from "@chakra-ui/react";

interface SurveyResultCard extends CardProps {}

export const SurveyResultCard = ({ children }: SurveyResultCard) => {
  return (
    <Card
      w={"100%"}
      border={"2px solid #F2F2F2"}
      borderRadius={"12px"}
      bg={"#FFFFFF"}
    >
      <CardBody padding={"20px 24px"}>{children}</CardBody>
    </Card>
  );
};
