import React from 'react'
import Navbar from '../components/Layout/Navbar';
import Sidebar from '../components/Layout/Sidebar'
import RightDrawer from '../components/Layout/RightDrawer';
import { Box } from '@chakra-ui/react'
export default function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Box ml={{ base: "40", md: "40" }} >
        <RightDrawer />
      </ Box>
    </>
  );
}