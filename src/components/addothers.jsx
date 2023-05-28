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
   const[departamento,SetDepartamento]=useState("")
   const[cursofin,SetCursofin]=useState(0)
   const[cursoinicio,SetCursoinicio]=useState(0)
   const[carrera,SetCarrera]=useState("")
   const[matricula,SetMatricula]=useState()
  const[materia,SetMateria]=useState("")


  const[semestres,SetSemestres]=useState([])
   const[materias,SetMaterias]=useState([])
   const[centros,SetCentros]=useState([])
   const[facultades,SetFacultades]=useState([])   
   const[carreras,SetCarreras]=useState([])  
   const[cursos,SetCursos]=useState([])
   const[departamentos,SetDepartamentos]=useState([])
   const[users,SetUsers]=useState([])



   const[valorselectcentros,SetValorselectcentros]=useState("")
   const[valorselectfacultades,SetValorselectfacultades]=useState("")
   const[valorselectcarreras,SetValorselectcarreras]=useState("")
   const[valorselectcursos,SetValorselectcursos]=useState("")
   const[valorselectmaterias,SetValorselectmaterias]=useState("")
const [valorselectdepartamento,SetValorselectdepartamento]=useState("")
const [valorselectsemestre,SetValorselectsemestre]=useState("")
const [valorselectuser,SetValorselectuser]=useState("")


   const handlecentroeliminar=()=>{Eliminar("center",centro)}
   const handlefacultadeliminar=()=>{Eliminar("faculty",facultad)}
   const handlecarreraeliminar=()=>{Eliminar("carreer",carrera)}
   const handlesemestreeliminar=()=>{Eliminar("semester",carrera)}
   const handledepartamentoseliminar=()=>{Eliminar("deparment",carrera)}
   const handlecursoseliminar=()=>{Eliminar("course",carrera)}
   const handlematriculaeliminar=()=>{Eliminar("enrollment",carrera)}
const handlemateriaeliminar=()=>{Eliminar("subject",carrera)}




   const handlecentrolist=()=>{listar("center")}
   const handlefacultadlist=()=>{listar("faculty")}
   const handlesemestrelist=()=>{listar("semester")}
   const handledepartamentoslist=()=>{listar("deparment")}
   const handlecursolist=()=>{listar("course")}
   const handlecarreralist=()=>{listar("carreer")}
  const handlematriculalist=()=>{listar("enrollment")}
  const handlematerialist=()=>{listar("subject")}
  const handleuserlist=()=>{listar("user")}



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
       if(urlfinal ==="subject"){SetMaterias(response.data.result)}
       if(urlfinal ==="deparment"){SetDepartamentos(response.data.result)}
       if(urlfinal ==="semester"){SetSemestres(response.data.result)}
       if(urlfinal ==="user"){SetUsers(response.data.result)}
       if(urlfinal ==="enrollment"){SetMaterias(response.data.result)}
        console.log(response.data.result);    
        console.log(urlfinal); 
        
    
       
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
    nombre: departamento,
    
    facultad_id: facultades[valorselectcursos].id
},{
headers: {
  "Content-Type": "application/json",
  "Authorization" : `Bearer ${cookies.token}`
}
}).then((response)=>{console.log(response)})
}


const handlematricula=()=>{
  const res = axios.post('https://proyectobd.onrender.com/api/enrollment', {
    materia_id : materias[valorselectmaterias].id
    
    
},{
headers: {
  "Content-Type": "application/json",
  "Authorization" : `Bearer ${cookies.token}`
}
}).then((response)=>{console.log(response)})
}

const  handlemateria=()=>{
  const res = axios.post('https://proyectobd.onrender.com/api/subject', {
    nombre: materia,
    departamento_id: departamentos[valorselectdepartamento].id,
    semestre_id: semestres[valorselectsemestre].id,
    profesor_id : users[valorselectuser].id
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
              <Input  value={departamento} onChange={(e)=>{SetDepartamento(e.target.value)}} marginBottom='15px' id="nom" placeholder="Nombre" name="nombre" />
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



            <FormControl>
              <FormLabel >Añadir Materia</FormLabel>
              <Input value={materia} onChange={(e)=>{SetMateria(e.target.value)}} width='100%' marginBottom='15px' id="nom" placeholder="Nombre" name="nombre" />
              <Select onClick={handledepartamentoslist} value={valorselectdepartamento} onChange={(e)=>{SetValorselectdepartamento(e.target.value) ;}} marginBottom="7px" placeholder='Seleccionar un Departamento primero'>
                {departamentos.map((d,i)=>{
                  return(
                  <option value={i} key={i}>{d.nombre}</option>
                   
                   )
                })}</Select>

<Select onClick={handlesemestrelist} value={valorselectsemestre} onChange={(e)=>{SetValorselectsemestre(e.target.value) ;}} marginBottom="7px" placeholder='Selecionar un semestre'>
                {semestres.map((s,i)=>{
                  return(
                  <option value={i} key={i}>{s.nombre }</option>
                   
                   )
                })}
  
</Select>


<Select onClick={handleuserlist} value={valorselectuser} onChange={(e)=>{SetValorselectuser(e.target.value) ;}} marginBottom="7px" placeholder='Selecionar un profesor'>
                {users.map((u,i)=>{
                  return(
                 u.rol_id===13 && <option value={i} key={i}>{u.name }</option>
                
                   )
                })}
  
</Select>
              <Button onClick={handlemateria} marginBottom='7px' colorScheme="blue" mr={3}>
              Guardar
            </Button>
            <Button onClick={handlematerialist} marginBottom='7px' colorScheme="blue" mr={3}>
              Listar
            </Button>
            <Button onClick={handlemateriaeliminar} marginBottom='7px' colorScheme="blue" mr={3}>
              Eliminar
            </Button>
            <Divider m={3}/>
            </FormControl>


            <FormControl>
              <FormLabel >Añadir Matricula</FormLabel>
             
              <Select onClick={handlematerialist} value={valorselectmaterias} onChange={(e)=>{SetValorselectmaterias(e.target.value) ;}} marginBottom="7px" placeholder='Selecionar una materia'>
                {materias.map((m,i)=>{
                  return(
                <option value={i} key={i}>{m.nombre }</option>
                
                   )
                })}
  
              </Select>
              <Button onClick={handlematricula} marginBottom='7px' colorScheme="blue" mr={3}>
              Guardar
            </Button>
            <Button onClick={handlematriculalist} marginBottom='7px' colorScheme="blue" mr={3}>
              Listar
            </Button>
            <Button onClick={handlematriculaeliminar} marginBottom='7px' colorScheme="blue" mr={3}>
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