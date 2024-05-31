"use client";
import { StepProps } from "../../../signup-funnel/types";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  OrderedList,
  Text,
  UnorderedList,
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
import { LevelRadioGroup } from "@/app/(featured-slice)/shared/ui/radio";
import { useSurveyById } from "@/app/(featured-slice)/entities/survey/hooks";
import SignupInput from "@/app/(featured-slice)/shared/ui/Input/SignupInput";
import { useState } from "react";

interface TestStep extends UseCheckboxProps, StepProps {}
interface FormType {
  bloodType: string;
}

const DOSING_FREQUENCY = ["주 1회 이하", "주 2~3회", "주 4~6회", "매일"];

export const TestStep = ({ goNextStep, setState, ...props }: any) => {
  const router = useRouter();
  const [selectValue, setSelectValue] = useState("복용 횟수");
  const {
    formState: { errors, isValid },
    register,
    control,
    handleSubmit,
  } = useForm<FormType>();

  const submitFormHandler: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };

  // const { data } = useSurveyById(1);

  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenDrawer,
    onClose: onCloseDrawer,
    onOpen: onOpenDrawer,
  } = useDisclosure();

  const handleSelectBox = () => {
    onOpenDrawer();
  };

  const setSelectValueHandler = (value: string) => {
    setSelectValue(value);
    onCloseDrawer();
  };

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit(submitFormHandler)}
      flexDir={"column"}
    >
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

      <LevelRadioGroup />

      <Flex gap={"12px"} w={"100%"}>
        <SignupInput
          id="name"
          placeholder="약 이름"
          // register={{
          //   ...register("name", {
          //     required: { value: true, message: "이름을 입력해주세요." },
          //   }),
          // }}
        />

        <Box
          id="medicine"
          borderColor={"gray.200"}
          bgColor={"#FFFFFF"}
          fontWeight={"semibold"}
          h={"53px"}
          w={"123px"}
          _placeholder={{ color: "#D1D1D1" }}
          _focus={{ border: "2px" }}
          _invalid={{ border: "2px solid #282828" }}
          pos={"relative"}
        >
          <Button onClick={() => handleSelectBox()} h={"53px"} w={"123px"}>
            {selectValue}
          </Button>
        </Box>
      </Flex>

      <Drawer
        placement={"bottom"}
        onClose={onCloseDrawer}
        isOpen={isOpenDrawer}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <UnorderedList>
              {DOSING_FREQUENCY.map((frequency) => {
                return (
                  <ListItem
                    onClick={() => setSelectValueHandler(frequency)}
                    value={"주 1회 이하"}
                    cursor={"pointer"}
                  >
                    {frequency}
                  </ListItem>
                );
              })}
              {/* <ListItem
                onClick={(e) => setSelectValueHandler(e)}
                value={"주 1회 이하"}
                cursor={"pointer"}
              >
                주 1회 이하
              </ListItem>
              <ListItem
                onClick={setSelectValueHandler}
                value={"주 2~3회"}
                cursor={"pointer"}
              >
                주 2~3회
              </ListItem>
              <ListItem
                onClick={setSelectValueHandler}
                value={"주 4~6회"}
                cursor={"pointer"}
              >
                주 4~6회
              </ListItem>
              <ListItem
                onClick={setSelectValueHandler}
                value={"매일"}
                cursor={"pointer"}
              >
                매일
              </ListItem> */}
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"}>
        <ModalOverlay />
        <ModalContent
          bg={"#FDFBF8"}
          w={"328px"}
          minH={"425px"}
          overflow={"scroll"}
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "&::-webkit-scrollbar-track": {},
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "24px",
            },
          }}
        >
          <VStack spacing={"24px"}>
            <ModalBody padding={"24px 16px"}>
              <VStack gap={"20px"} w={"100%"}>
                <Flex gap={"8px"} alignItems={"center"} dir={"column"}>
                  <SurveryResultList query={""} idx={1} fontSize={"20px"}>
                    바라시는 건강 목표를 알려주세요
                  </SurveryResultList>
                </Flex>
                <FrontCheckBox
                  name=""
                  options={BLOOD_TYPE_OTPIONS}
                  w={"100%"}
                  control={control}
                  flexDir={"column"}
                />
              </VStack>
              <Divider borderColor={"#F4F3EB"} margin={"24px 0"} />
              <VStack gap={"20px"} w={"100%"}>
                <Flex gap={"8px"} alignItems={"center"} dir={"column"}>
                  <SurveryResultList query={""} idx={1} fontSize={"20px"}>
                    바라시는 건강 목표를 알려주세요
                  </SurveryResultList>
                </Flex>
                <FrontCheckBox
                  name=""
                  options={BLOOD_TYPE_OTPIONS}
                  w={"100%"}
                  control={control}
                  flexDir={"column"}
                />
              </VStack>
              <Divider borderColor={"#F4F3EB"} margin={"24px 0"} />

              <VStack gap={"20px"} w={"100%"}>
                <Flex gap={"8px"} alignItems={"center"} dir={"column"}>
                  <SurveryResultList query={""} idx={1} fontSize={"20px"}>
                    바라시는 건강 목표를 알려주세요
                  </SurveryResultList>
                </Flex>
                <FrontCheckBox
                  name=""
                  options={BLOOD_TYPE_OTPIONS}
                  w={"100%"}
                  control={control}
                  flexDir={"column"}
                />
              </VStack>
            </ModalBody>

            <ModalFooter
              w={"100%"}
              bottom={"0"}
              pos={"sticky"}
              bg={"#FDFBF8"}
              padding={"24px 16px"}
            >
              <ButtonGroup w={"100%"} spacing={"12px"}>
                <RevertButton
                  w={"70px"}
                  h={"53px"}
                  borderRadius={"32%"}
                  onClick={() => onClose()}
                >
                  취소
                </RevertButton>
                <SignupButton w={"220px"} h={"53px"}>
                  적용
                </SignupButton>
              </ButtonGroup>
            </ModalFooter>
          </VStack>
        </ModalContent>
      </Modal>

      <Button type={"submit"}>click</Button>
    </Flex>
  );
};
