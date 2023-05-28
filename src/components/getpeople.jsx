import { useState, useEffect } from "react";
import React from "react";
import axiosapi from "./axiosapi";
import { SimpleGrid, Box ,TableContainer,Table,TableCaption,Thead,Tr,Th,Tbody,Tfoot} from "@chakra-ui/react";
import { useQuery } from "react-query";
import {ContenTable}  from "./Contentable"
import axios from "axios";
import { useCookies } from 'react-cookie';

import { Spinner } from "react-bootstrap";

export const Getpeople = ({profesor,esajustes}) => {
  const [cookies] = useCookies(['token']);
 

  const {
    data: array,
    isSuccess,
    isLoading,
    error,
    isPreviousData
  } = useQuery(["dataList"], () =>{
  const res2 = axios.get('https://proyectobd.onrender.com/api/user/list', {
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${cookies.token}`
  }
    }).then((res) =>{console.log(res);
    //   const profesor = res.data.result[0]
    // console.log(profesor)
  }
    )}, {
      keepPreviousData: true,
      
    }
  );
  



  // const [state, setState] = useState("")

  // const formatDate = (date, format = 'DD MMMM yyyy HH:mm', castFormat = 'YYYY-MM-DD HH:mm Z') =>
  // moment(date, castFormat).format(format);

  // useEffect( () => {
    
  //   const fecha = new Date();
  //   const parseDate = formatDate(fecha)
  //   console.log(parseDate)
  // },[])
    
  // useEffect(()=>{
  //   console.log(state)
  // }, [state])

  

  //useEffect(() => {
  //  get();
//}, []);

 // get();// no lo use
  return (
    <SimpleGrid columns={1} p="3%" spacingX="40px" spacingY="20px">
      {isLoading && (
        <Box >
          <Spinner
            thickness="4px"
            speed="0.65s"
         
            color="blue.500"
            size="xl"
          />
        </Box>
      )}

     
          
          <TableContainer boxShadow='2xl' whiteSpace="normal" width="100%">
  <Table variant='simple'   size='md'>
    <TableCaption>Control de asistencia UCI</TableCaption>
    <Thead>
      <Tr>
        <Th>Nombre</Th>
        <Th>Apellidos</Th>
        <Th isNumeric>fecha</Th>
        <Th>  Marcar </Th>
        {esajustes&&<Th>es ajustes</Th>}
      </Tr>
    </Thead>
    <Tbody> 
      
      {isSuccess &&array?.map((data, i) => {
          return (i<30&&data?.role===`Estudiante_${profesor.name}_${profesor.surname}`&&<ContenTable nombre={data?.name} valor={data?.value} apellidos={data?.surname} id={data?.id} esajustes={esajustes} key={data?.id} ></ContenTable>)})}  
       
          </Tbody>
    
  </Table>
</TableContainer>
          
          
          
          
          
          
        
    </SimpleGrid>
  );
};
