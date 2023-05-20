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
} from "@chakra-ui/react";
import { PhoneIcon, CheckIcon } from "@chakra-ui/icons";
import { Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";





function SingIn(){

  const navigate = useNavigate();
  const handleClickdone = ()=>{
 if(email.value==="admin"&&pass.value==="admin"){
  
  enqueueSnackbar("Hecho"),{
    persist: false,
    variant:"success"
  }; 
    navigate("/dashboard",
    {
      replace: true
    });
 }
 else( enqueueSnackbar("Error de Usuario o Contraseña"),{
  persist: false,
  variant: "error"
} )

  }

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

    return(
       
        <Stack >
                <FormControl >
                  <FormLabel>Email address</FormLabel>
                  <Input id="email" type="email" />
                  <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                
                <InputGroup  size="md">
                  <Input id="pass"
                   pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                  />
                  <InputRightElement >
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Stack direction="row" spacing={4} align="end"  >
                  <Spacer  />
                  <Checkbox size="lg" colorScheme="orange" defaultChecked>
                    Remember password
                  </Checkbox>
                  <Button onClick={handleClickdone} colorScheme="teal" variant="solid">
                    Done
                  </Button>
                 
                </Stack>
              </Stack>
              
    )
}

export default SingIn;