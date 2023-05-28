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
let rol_id = 0
if(type==="Estudiante"){ rol_id = 12}
if(type==="Profesor"){ rol_id = 13}



  const [cookies] = useCookies(['token']);



  const[centros,SetCentros]=useState([])
  const[departamentos,SetDepartamentos]=useState([])
const [esRepitente,SetEsRepitente] = useState(false)
const[matriculas,SetMatriculas]=useState([])
  const[valorselectcentros,SetValorselectcentros]=useState();
  const[valorselectdepartamentos,SetValorselectdepartamentos]=useState();
  const[typo_profesor_id,SetTypo_profesor_id]=useState();
  const [valorselectmatricula,SetValorselectmatricula]=useState("")
  const handlecentrolist=()=>{listar("center")}
  const handledepartamentoslist=()=>{listar("deparment")}
  const handlematriculalist=()=>{listar("enrollment")}


  const handleprofesor=()=>{
    const res = axios.post('https://proyectobd.onrender.com/api/auth/create-professor', {
      name: nom.value,
      surname: ape.value,
      email: email.value,
      password: password.value,
      ci: ci.value,
      centro_id : centros[valorselectcentros].id,
      typo_profesor_id :  typo_profesor_id,
     rol_id: rol_id,
     departamento_id : departamentos[valorselectdepartamentos].id


  },{
  headers: {
    "Content-Type": "application/json",
    "Authorization" : `Bearer ${cookies.token}`
  }
  }).then((response)=>{console.log(response)})
  }
  const handleestudiante=()=>{
    const res = axios.post('https://proyectobd.onrender.com/api/auth/create-student', {
      name: nom.value,
      surname: ape.value,
      password: password.value,
      email: email.value,
      ci: ci.value,
      centro_id :centros[valorselectcentros].id,
     rol_id: rol_id,
     esRepitente: esRepitente.value,
     matricula_id: matriculas[valorselectmatricula].id

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
        if(urlfinal ==="subject"){SetMatriculas(response.data.result)}  ; 
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
              <Select pb={6} marginTop={5}  value={typo_profesor_id} onChange={(e)=>{SetTypo_profesor_id(e.target.value) ;}} marginBottom="7px" placeholder='Selecionar un Tipo de profesor'>
                
                  <option value={4} >Conferencia</option>
                  <option value={5} >Clase Practica</option>
                  <option value={6} >Jefe de departamento</option>
                   
                
  
              </Select>
           
            </FormControl>}




            <Select pb={6} marginTop={5} onClick={handlecentrolist} value={valorselectcentros} onChange={(e)=>{SetValorselectcentros(e.target.value) ;}} marginBottom="7px" placeholder='Selecionar un centro'>
                {centros.map((centro,i)=>{
                  return(
                  <option value={i} key={i}>{centro.nombre}</option>
                   
                   )
                })}
  
              </Select>

              {type==="Estudiante" &&<>
              <FormLabel>Es Repitente</FormLabel>
              <Select pb={6} marginTop={5}  value={esRepitente} onChange={(e)=>{SetEsRepitente(e.target.value) ;}} marginBottom="7px" >
               
                  <option value={false} >No</option>
                  <option value={true} >Si</option>
                   
                
  
              </Select></>}

              {type==="Profesor" && <Select pb={6} marginTop={5} onClick={handledepartamentoslist} value={valorselectdepartamentos} onChange={(e)=>{SetValorselectdepartamentos(e.target.value) ;}} marginBottom="7px" placeholder='Selecionar un departamento '>
                {departamentos.map((departamento,i)=>{
                  return(
                  <option value={i} key={i}>{departamento.nombre}</option>
                   
                   )
                })}
  
              </Select>}

              {type==="Estudiante" && <Select onClick={handlematriculalist} value={valorselectmatricula} onChange={(e)=>{SetValorselectmatricula(e.target.value) ;}} marginBottom="7px" placeholder='Selecionar una matricula'>
                {matriculas.map((m,i)=>{
                  return(
                <option value={i} key={i}>{m.id }</option>
                
                   )
                })}
  
              </Select>}

          </ModalBody>

          <ModalFooter>
            {type==="Profesor"&&<Button onClick={handleprofesor} colorScheme="blue" mr={3}>
              Guardar profesor
            </Button>}
            {type==="Estudiante"&& <Button onClick={handleestudiante} colorScheme="blue" mr={3}>
              Guardar estudiantes
            </Button>}
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
