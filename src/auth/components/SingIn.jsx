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
  const [password, SetPassword] = useState("");
  const [username, Setusername] = useState("");
  const [email, SetEmail] = useState("");
  const handleClickdone = ()=>{
    const newUser = {
      surname: username,
      email: email,
      password: password
    };

    const postData = async ({username,password,email, ci,}) => {
    
   
      const url = "https://proyectobd.onrender.com";
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          
          username: username,
          password: password,
           email: email,
          ci:  ci,
          centro_id: centro_id 
        }),
        headers: {
          "content-type": "application/json",
        },
      }).then((e)=>{console.log(e)})
      
      return response.json();
    };
  


console.log(newUser)


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

SetEmail("");
    SetPassword("");
    Setusername("");
  }

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

    return(
       
        <Stack >

<FormControl  mt="10px" isRequired>
          <FormLabel>username</FormLabel>
          <Input
          
            value={username}
            onChange={(e) => {
              Setusername(e.target.value);
            }}
          />
        </FormControl>
                 <FormControl mt="10px" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            value={email}
            type="email"
            onChange={(e) => {
              SetEmail(e.target.value);
            }}
          />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
                
                <InputGroup  size="md">
                  <Input id="pass"
                  value={password}
                  onChange={(e) => {
                    SetPassword(e.target.value);
                  }}
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