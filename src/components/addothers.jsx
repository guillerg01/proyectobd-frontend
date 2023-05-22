import React from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { useState } from "react";
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
    Flex,
    Center,
  } from "@chakra-ui/react";
  import {  useDisclosure } from "@chakra-ui/react";

import { enqueueSnackbar } from "notistack";


export const Addothers = ()=>{
    const { isOpen, onOpen, onClose } = useDisclosure();
   const[centro,SetCentro]=useState("")
   const [cookies] = useCookies(['token']);
 


    const handlecentro=()=>{
      const res = axios.post('https://proyectobd.onrender.com/api/center', {
      nombre: centro
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
      }).then((response) => {console.log(response.data.result)})

  }

  function Eliminar(urlfinal,id){

    const res2 = axios.get(`https://proyectobd.onrender.com/api/${urlfinal}/delete/:${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${cookies.token}`
    }
      }).then((response) => {console.log(response.data.result)})

  }

  const handlecentrolist=()=>{
    listar("center")
    }
  const handlecentroeliminar=()=>{

Eliminar("center",centro)

  }




    return (
<>
        <Button onClick={onOpen} fontSize="xl" colorScheme="teal" variant="ghost">
        Añadir Otros...
      </Button>


<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Añadir otros</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={7}>
            <FormControl>
              <FormLabel >Añadir Centro</FormLabel>
              <Input value={centro} onChange={(e)=>{SetCentro(e.target.value)}} width='100%' margin='7px' id="nom" placeholder="Nombre" name="nombre" />
              <Button onClick={handlecentro} marginBottom='7px' colorScheme="blue" mr={3}>
              Guardar
            </Button>
            <Button onClick={handlecentrolist} marginBottom='7px' colorScheme="blue" mr={3}>
              Listar
            </Button>
            <Button onClick={handlecentroeliminar} marginBottom='7px' colorScheme="blue" mr={3}>
              Eliminar
            </Button>
            </FormControl>

            <FormControl pb={6}>
              <FormLabel >Añadir Facultad</FormLabel>
              <Input width='50%' margin='7px' id="nom" placeholder="Nombre" name="nombre" />
              <Button marginBottom='7px' colorScheme="blue" mr={3}>
              Guardar
            </Button>
            <Button  marginBottom='7px' colorScheme="blue" mr={3}>
              Listar
            </Button>
            </FormControl>

            <FormControl pb={6}>
              <FormLabel >Añadir Semestre</FormLabel>
              <Input width='50%' margin='7px' id="nom" placeholder="Nombre" name="nombre" />
              <Button marginBottom='7px' colorScheme="blue" mr={3}>
              Guardar
            </Button>
            <Button  marginBottom='7px' colorScheme="blue" mr={3}>
              Listar
            </Button>
            </FormControl>

            <FormControl pb={6}>
              <FormLabel >Añadir Carrera</FormLabel>
              <Input width='50%' margin='7px' id="nom" placeholder="Nombre" name="nombre" />
              <Button marginBottom='7px' colorScheme="blue" mr={3}>
              Guardar
            </Button>
            <Button  marginBottom='7px' colorScheme="blue" mr={3}>
              Listar
            </Button>
            </FormControl>
            <FormControl pb={6}>
              <FormLabel >Añadir Roles</FormLabel>
              <Input width='50%' margin='7px' id="nom" placeholder="Nombre" name="nombre" />
              <Button marginBottom='7px' colorScheme="blue" mr={3}>
              Guardar
            </Button>
            <Button  marginBottom='7px' colorScheme="blue" mr={3}>
              Listar
            </Button>
            </FormControl>

            <FormControl pb={6}>
              <FormLabel >Añadir Departamentos</FormLabel>
              <Input width='50%' margin='7px' id="nom" placeholder="Nombre" name="nombre" />
              <Button marginBottom='7px' colorScheme="blue" mr={3}>
              Guardar
            </Button>
            <Button  marginBottom='7px' colorScheme="blue" mr={3}>
              Listar
            </Button>
            </FormControl>


            <FormControl pb={6}>
              <FormLabel >Añadir Curso</FormLabel>
              <Input width='50%' margin='7px' id="nom" placeholder="Nombre" name="nombre" />
              <Button marginBottom='7px' colorScheme="blue" mr={3}>
              Guardar
            </Button>
            <Button marginBottom='7px' colorScheme="blue" mr={3}>
              Listar
            </Button>
            </FormControl>









            

          </ModalBody>

          <ModalFooter>
           
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );







    
}