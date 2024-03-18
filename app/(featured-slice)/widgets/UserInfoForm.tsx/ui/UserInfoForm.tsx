"use client";

import SttButton from "@/app/(featured-slice)/features/stt/ui/SttButton";
import SttItem from "@/app/(featured-slice)/features/stt/ui/SttFormItem";
import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";

const UserInfoForm = () => {
  return (
    <FormControl>
      <FormLabel display={"flex"}>
        <Text as={"label"}>나이</Text>
        <SttButton />
      </FormLabel>
      <Input />

      <SttItem>
        <SttItem.SttButton />
        <SttItem.sttInput />
      </SttItem>
      <SttItem>
        <SttItem.SttButton />
        <SttItem.sttInput />
      </SttItem>
      <SttItem>
        <SttItem.SttButton />
        <SttItem.sttInput />
      </SttItem>
    </FormControl>
  );
};

export default UserInfoForm;
