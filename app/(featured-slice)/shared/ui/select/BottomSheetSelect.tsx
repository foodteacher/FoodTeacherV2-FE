"use client";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  ListItem,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { DropDownIcon } from "../Icons";
import { ReactNode, useState } from "react";

interface BottomSheetSelectProps {
  id: string;
  initialText: string;
  sheetHeader?: ReactNode;
  list: string[];
}

export const BottomSheetSelect = ({
  id,
  initialText,
  list,
  sheetHeader,
}: BottomSheetSelectProps) => {
  const [selectValue, setSelectValue] = useState<string>(() => initialText);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleSelectBox = () => {
    onOpen();
  };

  const setSelectValueHandler = (value: string) => {
    setSelectValue(value);
    onClose();
  };

  return (
    <>
      <Flex>
        <Box
          id={id}
          borderColor={"gray.200"}
          bgColor={"#FFFFFF"}
          fontWeight={"semibold"}
          border={"1px solid #DADADA"}
          borderRadius={"8px"}
          color={selectValue === initialText ? "#AEAEAE" : "#242424"}
          h={"53px"}
          w={"123px"}
          flexShrink={0}
          _placeholder={{ color: "#D1D1D1" }}
          _focus={{ border: "2px" }}
          _invalid={{ border: "2px solid #282828" }}
          pos={"relative"}
          cursor={"pointer"}
          onClick={() => handleSelectBox()}
          padding={"12px 12px"}
        >
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"auto"}
          >
            <Text>{selectValue}</Text>
            <DropDownIcon />
          </Flex>
        </Box>
      </Flex>

      <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent h={"45%"} minH={"332px"}>
          <DrawerHeader fontSize={"20px"} margin={"0px 0px"} padding={"16px"}>
            {sheetHeader}
          </DrawerHeader>
          <DrawerBody padding={"0px 16px"}>
            <UnorderedList
              margin={"0px"}
              listStyleType={"none"}
              display={"flex"}
              flexDir={"column"}
              gap={"12px"}
              color={"#242424"}
              fontSize={"18px"}
            >
              {list.map((ele: string) => {
                return (
                  <ListItem
                    onClick={() => setSelectValueHandler(ele)}
                    padding={"12px 6px"}
                    value={ele}
                    cursor={"pointer"}
                    key={ele}
                  >
                    {ele}
                  </ListItem>
                );
              })}
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
