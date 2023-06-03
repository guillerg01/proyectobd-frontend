import React, { useEffect, useState } from "react"
import axios from "axios";
import { Tr,Modal,Collapse,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,FormControl,FormLabel,Input,ModalFooter,Button ,Td, RadioGroup,Stack,Radio,SimpleGrid,useDisclosure} from '@chakra-ui/react'
import { postRadio } from "../services/services"
import { useCookies } from 'react-cookie';


export const ContenTable = ({nombre,apellidos,valor ,id,esajustes})=>{
    const[value, setValue] = useState(`${valor}`)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [cookies] = useCookies(['token']);
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
     

    const res2 = axios.get(`https://proyectobd.onrender.com/api/assistence/get/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${cookies.token}`
    }
      }).then((response) => {
        // console.log(response) 
      })

      // const res2 = axios.get(`https://proyectobd.onrender.com/api/user/students`, {
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Authorization" : `Bearer ${cookies.token}`
      // }
      //   }).then((response) => {
      //     console.log("estudiantes")
      //     console.log(response) 
      //   })
  








    useEffect(  () => {

      
      //   const res = axios.post(`https://proyectobd.onrender.com/api/assistence/update/${id}/:subjectid/:date`, {
      //   nombre: centro
      // },{
      // headers: {
      //   "Content-Type": "application/json",
      //   "Authorization" : `Bearer ${cookies.token}`
      // }
      // }).then((response)=>{console.log(response)})
    
      // console.log(value)
      // console.log("cambio")


    },[value])
 

    const Eliminar = async (id) => {
      const url = `http://localhost:3000/people/${id}`;
      const response = await fetch(url, {
        method: "DELETE",
       })
      
    };

   
    
    return(
        <>
      <Tr>
      <Td   width='30%' >{nombre}</Td>
      <Td  width='30%'   >{apellidos}</Td>
      <Td width='15%'  ><Input 
                placeholder="Select Date and Time"
                type="datetime-local"
                size="sm"
                id="fecha"
                onChange={(e)=>{setState(e.target.value)}}
               
/></Td>
       
      <Td width='15%'>
        <RadioGroup onChange={setValue} value={value} >
  <Stack spacing={2}  direction='row'>
    
    <SimpleGrid columns={1} p="5%">
    <Radio  value='2'>Presente</Radio>
    <Radio  value='3'>Ausente</Radio>
    <Radio  value='4'>Cuartelero</Radio>
    <Radio  onClick={onOpen} value='5'>Justificado
    
    
    <Collapse in={isOpen} animateOpacity>
                
    <Modal
    initialFocusRef={initialRef}
    finalFocusRef={finalRef}
    isOpen={isOpen}
    onClose={onClose}
  >
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Describa su Ausencia</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <FormControl>
          <FormLabel>Descripcion</FormLabel>
          <Input ref={initialRef} htmlSize={10} placeholder='Descripcion' />
        </FormControl>

       
      </ModalBody>

      <ModalFooter>
        <Button onClick={onClose} colorScheme='blue' mr={3}>
          Save
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  </Collapse>
    
    
    
    
    </Radio></SimpleGrid>
  </Stack>
</RadioGroup></Td>
{esajustes&&<Td><Button onClick={Eliminar} marginBottom={3}>Eliminar</Button><Button>Editar</Button></Td>}
    </Tr>
  

    </>       
    )
} 

