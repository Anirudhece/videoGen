"use client";

import React, { ReactNode } from "react";
import {
  IconButton,
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { FiCompass, FiMenu } from "react-icons/fi";
import { BsGrid1X2 } from "react-icons/bs";
import { FaSliders } from "react-icons/fa6";
import { PiImageSquareBold } from "react-icons/pi";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineCloudUpload } from "react-icons/md";
import { CiText } from "react-icons/ci";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { SiPixabay } from "react-icons/si";

const LinkItems = [
  { name: "Templates", icon: BsGrid1X2 },
  { name: "Customize", icon: FaSliders },
  { name: "Elements", icon: FiCompass },
  { name: "Images", icon: PiImageSquareBold },
  { name: "Videos", icon: IoVideocamOutline },
  { name: "Upload", icon: MdOutlineCloudUpload },
  { name: "Text", icon: CiText },
  { name: "Graphics", icon: AiOutlineThunderbolt },
  { name: "Pixaby", icon: SiPixabay },
];

export default function SimpleSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        w={{ base: "40", md: "40" }} // Set a fixed width for both base and md screen sizes
        pos="fixed"
        h="full"
      >
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
        />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
          bg="#FC8181"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
        {/* <Box ml={{ base: 0, md: 60 }} p="4"></Box> */}
      </Box>
    </>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      //   bg={useColorModeValue("white", "gray.900")}
      bg="RGBA(0, 0, 0, 0.06)"
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 40 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Box
        align="center"
        my="3"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
      >
        <Box>
          {icon && (
            <Icon
              fontSize="2xl"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
        </Box>
        <Text align={"center"}>{children}</Text>
      </Box>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
