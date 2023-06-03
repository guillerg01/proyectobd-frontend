import React, { useState } from "react";
import AuthContext from "./AuthToken";
import { useContext } from "react";
import { useCookies } from 'react-cookie';
import {
  Stack,

  InputGroup,
  Input,

  InputRightElement,
  
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  FormHelperText,
  getToken,
} from "@chakra-ui/react";
import { Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import instance from "../../components/axiosapi";
import axios from "axios";





function SingIn(){

  const auth = useContext(AuthContext)
  const navigate = useNavigate();
  const [password, SetPassword] = useState("");
  const [email, SetEmail] = useState("");
  const [cookies, setCookie] = useCookies(['token']);
  // const cookieprofesor = new Cookies();
  const handleClickdone = ()=>{
    
    const res = axios.post('https://proyectobd.onrender.com/api/auth/login', {
      email: email,
      password: password,
    },{
    headers: {"Content-Type": "application/json"}
    })
      .then((response) => {
         
        setCookie('token', `${response.data.token}`, { path: '/' });
        // cookieprofesor.set('profesor', response.data.result, { path: '/' });
     

              console.log(response.data.token );
              const res2 = axios.get('https://proyectobd.onrender.com/api/user/profile', {
              headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${response.data.token}`
            }
              }).then((response) => { console.log(response);
               if( response.data.result.rol_id===11 || response.data.result.rol_id===13){

                enqueueSnackbar("Hecho"),{
                      persist: false,
                      variant:"success"
                    }; 
                      navigate("/dashboard",
                      {
                        replace: true
                      });
               }
               if(response.data.result.rol_id===12){

                enqueueSnackbar("Hecho"),{
                  persist: false,
                  variant:"success"
                }; 
                navigate("/estudiantes",
                  {
                    replace: true
                  });
               }
               else{
               
               
               
                }

               

              }).catch((error) => {
                console.log(error);
                
                enqueueSnackbar("Error de Usuario o Contraseña"),{
                persist: false,
                variant:"error"
              }; 
                
                {
                  replace: true
                };
});
        
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar("Error de Usuario o Contraseña"),{
            persist: false,
            variant: "error"
          } 
      });



SetEmail("");
    SetPassword("");
   
  }

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

    return(
       
        <Stack >


    
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