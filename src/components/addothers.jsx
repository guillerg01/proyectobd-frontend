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
    Flex,
  } from "@chakra-ui/react";
  import {  useDisclosure } from "@chakra-ui/react";

import { enqueueSnackbar } from "notistack";


export const Addothers = ()=>{
    const { isOpen, onOpen, onClose } = useDisclosure();








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
              <Input width='70%' margin='7px' id="nom" placeholder="Nombre" name="nombre" />
              <Button marginBottom='7px' colorScheme="blue" mr={3}>
              Guardar
            </Button>
            </FormControl>

            <FormControl pb={6}>
              <FormLabel >Añadir Facultad</FormLabel>
              <Input width='70%' margin='7px' id="nom" placeholder="Nombre" name="nombre" />
              <Button marginBottom='7px' colorScheme="blue" mr={3}>
              Guardar
            </Button>
            </FormControl>

            <FormControl pb={6}>
              <FormLabel >Añadir Semestre</FormLabel>
              <Input width='70%' margin='7px' id="nom" placeholder="Nombre" name="nombre" />
              <Button marginBottom='7px' colorScheme="blue" mr={3}>
              Guardar
            </Button>
            </FormControl>

            <FormControl pb={6}>
              <FormLabel >Añadir Carrera</FormLabel>
              <Input width='70%' margin='7px' id="nom" placeholder="Nombre" name="nombre" />
              <Button marginBottom='7px' colorScheme="blue" mr={3}>
              Guardar
            </Button>
            </FormControl>
            <FormControl pb={6}>
              <FormLabel >Añadir Roles</FormLabel>
              <Input width='70%' margin='7px' id="nom" placeholder="Nombre" name="nombre" />
              <Button marginBottom='7px' colorScheme="blue" mr={3}>
              Guardar
            </Button>
            </FormControl>

            <FormControl pb={6}>
              <FormLabel >Añadir Departamentos</FormLabel>
              <Input width='70%' margin='7px' id="nom" placeholder="Nombre" name="nombre" />
              <Button marginBottom='7px' colorScheme="blue" mr={3}>
              Guardar
            </Button>
            </FormControl>


            <FormControl pb={6}>
              <FormLabel >Añadir Curso</FormLabel>
              <Input width='70%' margin='7px' id="nom" placeholder="Nombre" name="nombre" />
              <Button marginBottom='7px' colorScheme="blue" mr={3}>
              Guardar
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