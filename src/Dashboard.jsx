import { useState } from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DrawerComponent } from './components/drawer'
import { useColorMode,Button ,Divider,Text,Stack, useDisclosure, Box  } from '@chakra-ui/react'
import { Nav } from './components/nav'
import { Getpeople } from './components/getpeople'
import { useNavigate } from 'react-router-dom'
import { Ajustes } from './components/ajustes'
import { Estudiantes } from './components/estudiantes'




function Dashboad() {
  const [count, setCount] = useState(0)
  const { colorMode, toggleColorMode } = useColorMode()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate();


  const profesor = {
    nombre:"Pedro",
    apellido:"Rodriguez"  
  }
 
  return (
    <Box>
    



<Stack spacing={5}     width='100%'  alignItems='center'
      direction='row'>
  
     <Nav  onOpen={onOpen}  />
     <DrawerComponent isOpen={isOpen} onClose={onClose}></DrawerComponent>
   
      <Text    fontSize='3xl'>Assistence App {profesor.nombre}</Text>
      
      <Button marginLeft={15} onClick={()=>{navigate("/",{replace:true})}} >Cerrar session</Button>
      
      </Stack>
      <Divider />


      
      
      
        <Routes>
            <Route path="/ajustes" element={<Ajustes profesor={profesor}/>} />
            <Route path="/dashboard" element={<Getpeople profesor={profesor} esajustes={false} ></Getpeople>}/>
            <Route path="/estudiantes" element={<Estudiantes/>}/>

        
        </Routes>
        </Box>
        


   
  )
}

export default Dashboad
