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

  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const handleClick = () => setShow(!show);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      username: username,
      email: email,
      password: password,
    };

    

    console.log(newUser);

    SetEmail("");
    SetPassword("");
    SetUsername("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            value={username}
            onChange={(e) => {
              SetUsername(e.target.value);
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
