import React from "react";
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
} from "@chakra-ui/react";
import {  useDisclosure } from "@chakra-ui/react";

import { enqueueSnackbar } from "notistack";


export const Add = ({ variable,type }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();


  const handleprofesor=()=>{
    const res = axios.post('https://proyectobd.onrender.com/api/create-professor', {
      name: nom.value,
      surname: ape.value,
      email: email.value,
      password: password.value,
      ci: ci.value,
      centro_id : centro.value,
     rol_id: type,

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
      email: email.value,
      password: password.value,
      ci: ci.value,
      centro_id : centro.value,
     rol_id: type,

  },{
  headers: {
    "Content-Type": "application/json",
    "Authorization" : `Bearer ${cookies.token}`
  }
  }).then((response)=>{console.log(response)})
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

            <FormControl pb={6} isRequired >
              <FormLabel>Centro</FormLabel>
              <Input id="centro" placeholder="usuario" name="userinput" />
            </FormControl>

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
           
           {type==="Estudiante" && <FormControl pb={6} isRequired>
              <FormLabel>Nombre de Profesor</FormLabel>
              <Input id="nom_prof" placeholder="Nombre" name="nombre" />
            </FormControl>}        
            
            {type==="Estudiante" && <FormControl pb={6} isRequired>
              <FormLabel>Apellido Profesor</FormLabel>
              <Input id="ape_prof" placeholder="Apellido" name="apellido" />
            </FormControl>}

            {type==="Estudiante" && <FormControl pb={6} isRequired>
              <FormLabel>Asignatura</FormLabel>
              <Input id="asig" placeholder="Asignatura" name="Asignatura" />
            </FormControl>}

            {type==="Estudiante" && <FormControl pb={6} isRequired>
              <FormLabel>Año</FormLabel>
              <Input id="ano" type="number" placeholder="Año" name="Año" />
            </FormControl>}

            {type==="Profesor" && <FormControl isRequired>
              <FormLabel>Facultad</FormLabel>
              <Input id="facultad" type="number" placeholder="Facultad" name="Facultad" />
            </FormControl>}

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
