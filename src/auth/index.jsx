import React, { useState } from "react";
import {
  Stack,
  Box,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  FormHelperText,
  Heading
} from "@chakra-ui/react";
import { PhoneIcon, CheckIcon } from "@chakra-ui/icons";
import { Spacer } from "@chakra-ui/react";

import SingIn from "./components/SingIn";
import SingUp from "./components/SingUp";
import Burbujas from "../components/burbujas";


function Auth() {
  



  return (
    

     <Flex direction='column'>
      <Burbujas></Burbujas>
       <Heading  textShadow='1px 1px' m='6' size='lg' fontSize='45px'>
 Assistence App
</Heading>
    <Box
     boxShadow='lg'  
      
      p= {[8, 10,10,10]}
      mt={[20, "10vh"]}
      mx="auto"
      border={["none", "1px"]}
      borderColor={["", "gray.300"]}
      borderRadius={10}
      minW="30%"
      
      zIndex={1}
    > 
      
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Login</Tab>
          <Tab>Register</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SingIn />
              
            
          </TabPanel>
          <TabPanel>
          
          <SingUp/>

           


          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
    </Flex>
  );
}
export default Auth;
