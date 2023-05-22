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
    Divider,
    Select
  } from "@chakra-ui/react";
  import {  useDisclosure } from "@chakra-ui/react";

import { enqueueSnackbar } from "notistack";


export const Addothers = ()=>{
  const [cookies] = useCookies(['token']);
    const { isOpen, onOpen, onClose } = useDisclosure();

   const[centro,SetCentro]=useState("")
   const[facultad,SetFacultad]=useState("")
   const[semestre,SetSemestre]=useState("")
   const[departamentos,SetDepartamentos]=useState("")
   const[cursofin,SetCursofin]=useState(0)
   const[cursoinicio,SetCursoinicio]=useState(0)
   const[carrera,SetCarrera]=useState("")





   const[centros,SetCentros]=useState([])
   const[facultades,SetFacultades]=useState([])   
   const[carreras,SetCarreras]=useState([])  
   const[cursos,SetCursos]=useState([])

   const[valorselectcentros,SetValorselectcentros]=useState("")
   const[valorselectfacultades,SetValorselectfacultades]=useState("")
   const[valorselectcarreras,SetValorselectcarreras]=useState("")
   const[valorselectcursos,SetValorselectcursos]=useState("")



   const handlecentroeliminar=()=>{Eliminar("center",centro)}
   const handlefacultadeliminar=()=>{Eliminar("faculty",facultad)}
   const handlecarreraeliminar=()=>{Eliminar("carreer",carrera)}




   const handlecentrolist=()=>{listar("center")}
   const handlefacultadlist=()=>{listar("faculty")}
   const handlesemestrelist=()=>{listar("semester")}
   const handledepartamentoslist=()=>{listar("deparment")}
   const handlecursolist=()=>{listar("course")}
   const handlecarreralist=()=>{listar("carreer")}


   function listar(urlfinal){

    const res2 = axios.get(`https://proyectobd.onrender.com/api/${urlfinal}/list`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${cookies.token}`
    }
      }).then((response) => {
        
        if(urlfinal ==="center"){SetCentros(response.data.result)}  ;  
       if(urlfinal ==="faculty"){SetFacultades(response.data.result)}
       if(urlfinal ==="carreer"){SetCarreras(response.data.result)}
       if(urlfinal ==="course"){SetCursos(response.data.result)}
        console.log(response.data.result);    
        
    
       
    })

  }

  function Eliminar(urlfinal,id){
const res2 = axios.delete(`https://proyectobd.onrender.com/api/${urlfinal}/delete/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${cookies.token}`
    }
      }).then((response) => {console.log(response.data.result)})

  }






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

  const handlefacultad=()=>{
    const res = axios.post('https://proyectobd.onrender.com/api/faculty', {
    nombre: facultad,
    centro_id: centros[valorselectcentros].id
  },{
  headers: {
    "Content-Type": "application/json",
    "Authorization" : `Bearer ${cookies.token}`
  }
  }).then((response)=>{console.log(response)})
}

const handlecarrera=()=>{
  const res = axios.post('https://proyectobd.onrender.com/api/carreer', {
  nombre: carrera,
  facultad_id: facultades[valorselectfacultades].id
},{
headers: {
  "Content-Type": "application/json",
  "Authorization" : `Bearer ${cookies.token}`
}
}).then((response)=>{console.log(response)})
}


const handlecurso=()=>{
  const res = axios.post('https://proyectobd.onrender.com/api/course', {
    anno_inicio: cursoinicio,
    anno_fin: cursofin,
    carrera_id: carreras[valorselectcarreras].id
},{
headers: {
  "Content-Type": "application/json",
  "Authorization" : `Bearer ${cookies.token}`
}
}).then((response)=>{console.log(response)})
}


const handlesemestre=()=>{
  const res = axios.post('https://proyectobd.onrender.com/api/semester', {
    nombre: semestre,
    
    curso_id: cursos[valorselectcursos].id
},{
headers: {
  "Content-Type": "application/json",
  "Authorization" : `Bearer ${cookies.token}`
}
}).then((response)=>{console.log(response)})
}

const handledepartamentos=()=>{
  const res = axios.post('https://proyectobd.onrender.com/api/deparment', {
    nombre: departamentos,
    
    facultad_id: facultades[valorselectcursos].id
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
              <Input value={centro} onChange={(e)=>{SetCentro(e.target.value)}} width='100%' marginBottom='15px' id="nom" placeholder="Nombre" name="nombre" />
              <Button onClick={handlecentro} marginBottom='7px' colorScheme="blue" mr={3}>
              Guardar
            </Button>
            <Button onClick={handlecentrolist} marginBottom='7px' colorScheme="blue" mr={3}>
              Listar
            </Button>
            <Button onClick={handlecentroeliminar} marginBottom='7px' colorScheme="blue" mr={3}>
              Eliminar
            </Button>
            <Divider m={3}/>
            </FormControl>



            <FormControl pb={6}>
              <FormLabel >Añadir Facultad</FormLabel>
              <Input value={facultad} onChange={(e)=>{SetFacultad(e.target.value)}} marginBottom='15px' id="nom" placeholder="Nombre" name="nombre" />
              <Select onClick={handlecentrolist} value={valorselectcentros} onChange={(e)=>{SetValorselectcentros(e.target.value) ;}} marginBottom="7px" placeholder='Selecionar un centro primero'>
                {centros.map((centro,i)=>{
                  return(
                  <option value={i} key={i}>{centro.nombre}</option>
                   
                   )
                })}
  
</Select>
              <Button onClick={handlefacultad} marginBottom='7px' colorScheme="blue" mr={3}>
              Guardar
            </Button>
            <Button onClick={handlefacultadlist} marginBottom='7px' colorScheme="blue" mr={3}>
              Listar
            </Button>
            <Button onClick={handlefacultadeliminar} marginBottom='7px' colorScheme="blue" mr={3}>
              Eliminar
            </Button>
            <Divider m={3}/>
            </FormControl>

            <FormControl pb={6}>
              <FormLabel >Añadir Carrera</FormLabel>
              <Input  value={carrera} onChange={(e)=>{SetCarrera(e.target.value)}} marginBottom='15px' id="nom" placeholder="Nombre" name="nombre" />
              <Select onClick={handlefacultadlist} value={valorselectfacultades} onChange={(e)=>{SetValorselectfacultades(e.target.value) ;}} marginBottom="7px" placeholder='Seleccionar una Facultad primero'>
                {facultades.map((f,i)=>{
                  return(
                  <option value={i} key={i}>{f.nombre}</option>
                   
                   )
                })}
  
</Select>
              <Button onClick={handlecarrera} marginBottom='7px' colorScheme="blue" mr={3}>
              Guardar
            </Button>
            <Button onClick={handlecarreralist} marginBottom='7px' colorScheme="blue" mr={3}>
              Listar
            </Button>
            <Button onClick={handlecarreraeliminar} marginBottom='7px' colorScheme="blue" mr={3}>
              Eliminar
            </Button>
            <Divider m={3}/>
            </FormControl>

            <FormControl pb={6}>
              <FormLabel >Añadir Curso</FormLabel>
              <Input value={cursoinicio} onChange={(e)=>{SetCursoinicio(e.target.value)}}  marginBottom='15px' id="nom" placeholder="Fecha inicial" name="nombre" />
              <Input value={cursofin} onChange={(e)=>{SetCursofin(e.target.value)}}  marginBottom='15px' id="nom" placeholder="Fecha final" name="nombre" />
              <Select onClick={handlecarreralist} value={valorselectcarreras} onChange={(e)=>{SetValorselectcarreras(e.target.value) ;}} marginBottom="7px" placeholder='Seleccionar una Facultad primero'>
                {carreras.map((c,i)=>{
                  return(
                  <option value={i} key={i}>{c.nombre}</option>
                   
                   )
                })}
  
</Select>
              <Button onClick={handlecurso} marginBottom='7px' colorScheme="blue" mr={3}>
              Guardar
            </Button>
            <Button onClick={handlecursolist} marginBottom='7px' colorScheme="blue" mr={3}>
              Listar
            </Button>
            <Button  marginBottom='7px' colorScheme="blue" mr={3}>
              Eliminar
            </Button>
            <Divider m={3}/>
            </FormControl>








            <FormControl pb={6}>
              <FormLabel >Añadir Semestre</FormLabel>
              <Input value={semestre} onChange={(e)=>{SetSemestre(e.target.value)}}  marginBottom='15px' id="nom" placeholder="Nombre" name="nombre" />
              <Select onClick={handlecursolist} value={valorselectcursos} onChange={(e)=>{SetValorselectcursos(e.target.value) ;}} marginBottom="7px" placeholder='Selecionar un centro primero'>
                {cursos.map((curso,i)=>{
                  return(
                  <option value={i} key={i}>{curso.anno_inicio}-{curso.anno_fin }</option>
                   
                   )
                })}
  
</Select>
              <Button onClick={handlesemestre} marginBottom='7px' colorScheme="blue" mr={3}>
              Guardar
            </Button>
            <Button onClick={handlesemestrelist} marginBottom='7px' colorScheme="blue" mr={3}>
              Listar
            </Button>
            <Button marginBottom='7px' colorScheme="blue" mr={3}>
              Eliminar
            </Button>
            <Divider m={3}/>
            </FormControl>

            


           

            <FormControl pb={6}>
              <FormLabel >Añadir Departamentos</FormLabel>
              <Input  value={departamentos} onChange={(e)=>{SetDepartamentos(e.target.value)}} marginBottom='15px' id="nom" placeholder="Nombre" name="nombre" />
              <Select onClick={handlefacultadlist} value={valorselectfacultades} onChange={(e)=>{SetValorselectfacultades(e.target.value) ;}} marginBottom="7px" placeholder='Seleccionar una Facultad primero'>
                {facultades.map((f,i)=>{
                  return(
                  <option value={i} key={i}>{f.nombre}</option>
                   
                   )
                })}
  
</Select>
              <Button onClick={handledepartamentos} marginBottom='7px' colorScheme="blue" mr={3}>
              Guardar
            </Button>
            <Button onClick={handledepartamentoslist} marginBottom='7px' colorScheme="blue" mr={3}>
              Listar
            </Button>
            <Button  marginBottom='7px' colorScheme="blue" mr={3}>
              Eliminar
            </Button>
            <Divider m={3}/>
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