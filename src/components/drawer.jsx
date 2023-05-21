import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
   
    Stack,
    Button
    
  } from '@chakra-ui/react'
  import React from 'react'
  import { useState } from 'react'
  import { Add } from './add'
import { useNavigate } from 'react-router-dom'
import { Addothers } from './addothers'


  export function DrawerComponent({isOpen,onClose}){
    const navigate = useNavigate();
    
const handleclickbuttonajustes = () => {navigate("/ajustes")}
const handleclickbuttondashboard = () => {navigate("/dashboard")}
  
    return (
      <>
     
       
        <Drawer  placement='left'  focusOnMount={false}    isOpen={isOpen}  onClose={onClose} >
          <DrawerOverlay />
          <DrawerContent >
            <DrawerHeader borderBottomWidth='1px' align='center' fontSize='2xl' >    Panel de control </DrawerHeader>
            
            <DrawerBody m='15'>

            <Stack direction='column' spacing={4} align='center'>
                 <Button fontSize='xl' onClick={handleclickbuttondashboard} colorScheme='teal' variant='ghost'>
                     Informe general
                </Button>
                <Button onClick={handleclickbuttonajustes} fontSize='xl' colorScheme='teal' variant='ghost'>
                     Ajustes
                </Button>
                <Add type={"Estudiante"} variable={"Añadir nuevo Estudiante"}/>
                <Add type={"Profesor"} variable={"Añadir nuevo Profesor"}/>
               <Addothers></Addothers>
                </Stack>

            </DrawerBody>
          </DrawerContent>
        </Drawer>


       
      </>
    )


  }