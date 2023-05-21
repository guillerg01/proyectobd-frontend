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

  // const postData = async (nombre, apellido,user,password,type,nom_prof,ape_prof) => {
  //   let rolecompuesto = "Profesor"
  //   if(type === "Estudiante") { rolecompuesto=`Estudiante_${nom_prof}_${ape_prof}`;}
   
  //   const url = "http://localhost:3000/people";
  //   const response = await fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       name: nombre,
  //       surname: apellido,
  //       usuario: user,
  //       password: password,
  //       role: rolecompuesto,
  //       value: 1
  //     }),
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   })
    
  //   return response.json();
  // };















  const handleclick = () => {
    const res = axios.post('https://proyectobd.onrender.com/api/auth/login', {
      name: nom.value,
      surname: ape.value,
      email: email.value,
      password: password.value,
      ci: ci.value,
      centro_id : centro.value,
     rol_id: type,
    },{
    headers: {"Content-Type": "application/json"}
    })




   // postData(nom.value, ape.value , user.value, password.value, type, nom_prof.value,ape_prof.value);
    enqueueSnackbar("Añadido exitosamente!"),{
      persist: false,
      variant:"success"
    } 
    
  };

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
            <Button onClick={handleclick} colorScheme="blue" mr={3}>
              Guardar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
