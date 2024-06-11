"use client";

import { TheHeader } from "@/app/(featured-slice)/shared/ui/header";
import { SurveyFunnel } from "@/app/(featured-slice)/widgets/survey-funnel/ui/funnel";
import { Text } from "@chakra-ui/react";

const page = () => {
  return (
    <>
      <TheHeader
        leftElement={
          <Text color={"#959390"} fontSize={"14px"} lineHeight={2}>
            홈으로
          </Text>
        }
        w={"48px"}
      >
        나의 건강 정보
      </TheHeader>
      <SurveyFunnel />
    </>
  );
};

export default page;
