"use client";

import SttItem from "@/app/(featured-slice)/features/stt/ui/SttFormItem";
import { Flex } from "@chakra-ui/react";

const UserInfoForm = () => {
  return (
    <Flex as={"form"}>
      <SttItem>
        <Flex>
          <SttItem.Label>123</SttItem.Label>
          <SttItem.SttButton />
        </Flex>
        <SttItem.sttInput />
      </SttItem>
      <SttItem>
        <SttItem.SttButton />
        <SttItem.sttInput />
      </SttItem>
    </Flex>
  );
};

export default UserInfoForm;
