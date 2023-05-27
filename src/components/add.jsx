import React, { useState } from "react";
import { useCookies } from 'react-cookie';
import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Select 
} from "@chakra-ui/react";
import axios from "axios";
import {  useDisclosure } from "@chakra-ui/react";

import { enqueueSnackbar } from "notistack";


export const Add = ({ variable,type }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();  




  const [cookies] = useCookies(['token']);



  const[centros,SetCentros]=useState([])
  const[departamentos,SetDepartamentos]=useState([])


  const[valorselectcentros,SetValorselectcentros]=useState();
  const[valorselectdepartamentos,SetValorselectdepartamentos]=useState();


  const handlecentrolist=()=>{listar("center")}
  const handledepartamentoslist=()=>{listar("deparment")}


  const handleprofesor=()=>{
    const res = axios.post('https://proyectobd.onrender.com/api/create-professor', {
      name: nom.value,
      surname: ape.value,
      email: email.value,
      password: password.value,
      ci: ci.value,
      centro_id : centros[valorselectcentros].id,
      typo_profesor_id : typography.value,
     rol_id: type,
     departamento_id : departamentos[valorselectdepartamentos].id


  },{
  headers: {
    "Content-Type": "application/json",
    "Authorization" : `Bearer ${cookies.token}`
  }
  }).then((response)=>{console.log(response)})
  }
  const handleestudiante=()=>{
    const res = axios.post('https://proyectobd.onrender.com/api/create-student', {
      name: nom.value,
      surname: ape.value,
      password: password.value,
      email: email.value,
      ci: ci.value,
      centro_id : centro.value,
     rol_id: type,
     esRepitente: esRepitente.value,
     matricula_id: matricula.value

  },{
  headers: {
    "Content-Type": "application/json",
    "Authorization" : `Bearer ${cookies.token}`
  }
  }).then((response)=>{console.log(response)})
  }
  
  function listar(urlfinal){

    const res2 = axios.get(`https://proyectobd.onrender.com/api/${urlfinal}/list`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${cookies.token}`
    }
      }).then((response) => {
        
        if(urlfinal ==="center"){SetCentros(response.data.result)}  ;  
        if(urlfinal ==="deparment"){SetDepartamentos(response.data.result)}  ; 
        console.log(response.data.result);    
        
    
       
    })

  }


  

  return (
    <>
      <Button onClick={onOpen} fontSize="xl" colorScheme="teal" variant="ghost">
        {variable}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{variable}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input id="nom" placeholder="Nombre" name="nombre" />
            </FormControl>

            <FormControl pb={6} isRequired mt={4}>
              <FormLabel>Apellido</FormLabel>
              <Input id="ape" placeholder="Apellido" name="apellido" />
            </FormControl>

            {/* <FormControl pb={6} isRequired >
              <FormLabel>Centro</FormLabel>
              <Input id="centro" placeholder="usuario" name="userinput" />
            </FormControl> */}

             <FormControl pb={6} isRequired>
              <FormLabel>email</FormLabel>
              <Input id="email" type="email" placeholder="email" name="email" />
            </FormControl>

            <FormControl pb={6} isRequired >
              <FormLabel>Contraseña</FormLabel>
              <Input
              id="password"
              pr='4.5rem'
               type='password'
               placeholder='Escriba la contraseña'

               />
              
            </FormControl>
           
             
            
            

            {/* {type==="Estudiante" && <FormControl pb={6} isRequired>
              <FormLabel>Asignatura</FormLabel>
              <Input id="asig" placeholder="Asignatura" name="Asignatura" />
            </FormControl>} */}


           

            <FormControl pb={6} isRequired>
              <FormLabel>CI</FormLabel>
              <Input id="ci" type="number" placeholder="CI" name="CI" />
            </FormControl>


            {type==="Profesor" && <FormControl pb={6} isRequired>
              <FormLabel>Tipo de profesor</FormLabel>
              <Input id="typo" placeholder="CP o CF" name="Asignatura" />
            </FormControl>}


            <Select pb={6} marginTop={5} onClick={handlecentrolist} value={valorselectcentros} onChange={(e)=>{SetValorselectcentros(e.target.value) ;}} marginBottom="7px" placeholder='Selecionar un centro'>
                {centros.map((centro,i)=>{
                  return(
                  <option value={i} key={i}>{centro.nombre}</option>
                   
                   )
                })}
  
              </Select>

              {type==="Profesor" && <Select pb={6} marginTop={5} onClick={handledepartamentoslist} value={valorselectdepartamentos} onChange={(e)=>{SetValorselectdepartamentos(e.target.value) ;}} marginBottom="7px" placeholder='Selecionar un departamento '>
                {departamentos.map((departamento,i)=>{
                  return(
                  <option value={i} key={i}>{departamento.nombre}</option>
                   
                   )
                })}
  
              </Select>}

          </ModalBody>

          <ModalFooter>
            {type==="Profesor"&&<Button onClick={handleprofesor} colorScheme="blue" mr={3}>
              Guardar profesor
            </Button>}
            {type==="Estudiantes"&& <Button onClick={handleestudiante} colorScheme="blue" mr={3}>
              Guardar estudiantes
            </Button>}
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
