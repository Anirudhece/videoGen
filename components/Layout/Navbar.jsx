"use client";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  useColorModeValue,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { BsStack } from "react-icons/bs";
import { AiOutlinePlaySquare } from "react-icons/ai";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        justify={"space-between"}
        bg="black"
        color="white"
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex justify={{ base: "center", md: "start" }}>
          <BsStack />
        </Flex>
        <Flex>
          <Center>
            <Text>Untitled Design </Text>
          </Center>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button variant="link" color="white" fontSize={"sm"}>
            Import
          </Button>
          <Button variant="link" color="white" fontSize={"sm"}>
            Export
          </Button>
          <IconButton
            variant="link"
            color="white"
            icon={<AiOutlinePlaySquare />}
          />
        </Stack>
      </Flex>
    </Box>
  );
}
