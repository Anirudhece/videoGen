"use client";
import React from "react";
import { Box, Text, Flex, IconButton } from "@chakra-ui/react";
import { FaAnglesLeft } from "react-icons/fa6";
const RightDrawer = () => {
  return (
    <>
      <Box w="25%">
        <Flex m="2" align="center" justify="space-between">
          <Text>Templates</Text>
          <IconButton
            variant="ghost"
            //  onClick={onOpen}
            //  aria-label="open menu"
            icon={<FaAnglesLeft />}
          />
        </Flex>
        
      </Box>
    </>
  );
};

export default RightDrawer;
