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
  Spacer,
} from "@chakra-ui/react";
import React, { useState } from "react";

function SingUp() {
  const [show, setShow] = useState(false);
  const [password, SetPassword] = useState("");
  const [surname, Setsurname] = useState("");
  const [email, SetEmail] = useState("");
  const [ci, SetCi] = useState("");
  const [centro_id, SetCentroid] = useState("");

  const handleClick = () => setShow(!show);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      surname: surname,
      email: email,
      password: password,
      ci: ci,
      centro_id : centro_id
    };

    postData(newUser);

    console.log(newUser);

    SetEmail("");
    SetPassword("");
    Setsurname("");
    SetCi("");
    SetCentroid("");
  };




  const postData = async ({nombre, apellido,password,email, ci,centro_id}) => {
    
   
    const url = "https://proyectobd.onrender.com";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        name: nombre,
        surname: apellido,
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





  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Apellido</FormLabel>
          <Input
            value={surname}
            onChange={(e) => {
              Setsurname(e.target.value);
            }}
          />
        </FormControl>

        <FormControl  mt="10px" isRequired>
          <FormLabel>Centro Id</FormLabel>
          <Input
            value={centro_id}
            onChange={(e) => {
              SetCentroid(e.target.value);
            }}
          />
        </FormControl>

        <FormControl  mt="10px" isRequired>
          <FormLabel>CI</FormLabel>
          <Input
          type="number"
            value={ci}
            onChange={(e) => {
              SetCi(e.target.value);
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

        <InputGroup size="md" mt="10px">
          <Input
            value={password}
            onChange={(e) => {
              SetPassword(e.target.value);
            }}
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Spacer marginTop="15px" />
        <Button
          marginLeft="50%"
          colorScheme="teal"
          variant="outline"
          type="submit"
        >
          Registrarse
        </Button>
      </form>
    </div>
  );
}

export default SingUp;
