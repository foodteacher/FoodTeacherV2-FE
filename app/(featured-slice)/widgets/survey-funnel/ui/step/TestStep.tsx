"use client";
import { StepProps } from "../../../signup-funnel/types";
import { useRouter } from "next/navigation";
import {
  Button,
  ButtonGroup,
  Flex,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  OrderedList,
  Text,
  UseCheckboxProps,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BLOOD_TYPE_OTPIONS } from "../../../signup-funnel/const/const";
import { FrontCheckBox } from "@/app/(featured-slice)/shared/ui/checkbox";
import { SurveyResultCard } from "@/app/(featured-slice)/shared/ui/card";
import { SurveryResultList } from "@/app/(featured-slice)/shared/ui/list";
import { PencilIcon } from "@/app/(featured-slice)/shared/ui/Icons";
import {
  RevertButton,
  SignupButton,
} from "@/app/(featured-slice)/shared/ui/button";
import { MainButton } from "@/app/(featured-slice)/shared/ui/button/MainButton";

interface TestStep extends UseCheckboxProps, StepProps {}
interface FormType {
  bloodType: string;
}

export const TestStep = ({ goNextStep, setState, ...props }: any) => {
  const router = useRouter();
  const {
    formState: { errors, isValid },
    register,
    control,
    handleSubmit,
  } = useForm<FormType>();

  const submitFormHandler: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <VStack as="form" onSubmit={handleSubmit(submitFormHandler)} gap={"100px"}>
      <FrontCheckBox
        options={BLOOD_TYPE_OTPIONS}
        name={"bloodType"}
        control={control}
        w={"100%"}
        padding={"12px 16px"}
        gap={"10px"}
        flexDir={"column"}
      />

      <VStack spacing={"16px"} w={"100%"}>
        <Flex h={"29px"} w={"100%"} justifyContent={"space-between"}>
          <Text fontWeight={"bold"} fontSize={"16px"} lineHeight={2}>
            건강 정보
          </Text>
          <Button
            bg={"#E5E4DC"}
            color={"#1A1918"}
            fontSize={"14px"}
            w={"69px"}
            h={"29px"}
            padding={"6px 12px"}
            borderRadius={"40px"}
            leftIcon={<PencilIcon />}
            onClick={() => onOpen()}
          >
            수정
          </Button>
        </Flex>
        <SurveyResultCard>
          <OrderedList listStyleType={"none"} margin={"0"} spacing={"16px"}>
            <ListItem display={"flex"} gap={"16px"}>
              <SurveryResultList idx={1} query={"건강 유지"} fontSize={"16px"}>
                건강 목표는 건강 유지 입니다.
              </SurveryResultList>
            </ListItem>
            <ListItem display={"flex"} gap={"16px"}>
              <SurveryResultList idx={2} query={"매년"} fontSize={"16px"}>
                건강 검진을 매년 받습니다.
              </SurveryResultList>
            </ListItem>
            <ListItem display={"flex"} gap={"16px"}>
              <SurveryResultList
                idx={3}
                query={"전혀 하지 않습니다."}
                fontSize={"16px"}
              >
                흡연을 전혀 하지 않습니다.
              </SurveryResultList>
            </ListItem>
          </OrderedList>
        </SurveyResultCard>
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"#FDFBF8"} padding={"24px 16px"} w={"328px"}>
          <VStack spacing={"24px"}>
            <ModalBody padding={"0"}>
              <Flex gap={"8px"} alignItems={"center"}>
                <SurveryResultList query={""} idx={1} fontSize={"20px"}>
                  바라시는 건강 목표를 알려주세요
                </SurveryResultList>
              </Flex>
            </ModalBody>

            <ModalFooter padding={0} w={"100%"}>
              <ButtonGroup w={"100%"}>
                <RevertButton w={"64px"} onClick={() => onClose()}>
                  취소
                </RevertButton>
                <SignupButton w={"220px"}>적용</SignupButton>
              </ButtonGroup>
            </ModalFooter>
          </VStack>
        </ModalContent>
      </Modal>

      <Button type={"submit"}>click</Button>
    </VStack>
  );
};
