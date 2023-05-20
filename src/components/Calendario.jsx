import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import {
    
    Box,
    useToast
  
  } from "@chakra-ui/react";
export const Calendario = ()=>{

    const toast = useToast();
    return(<Box  p={10} >  
              <FullCalendar
              height={800}
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        
       
        events={[
            { title: 'ausencia justificada', 
                date: '2023-05-01' , 
                description: 'certificado medico',
                asignatura: 'matematica'
            },
            { title: 'ausencia sin justificar', date: '2023-05-02' }
          ]}


          eventClick ={function(info) {
            
            {info.event.extendedProps.description&&toast({
          title: 'Ausencia',
          description: `Ausencia por: ${info.event.extendedProps.description} en ${info.event.extendedProps.asignatura}`,
          status: 'info',
          duration: 9000,
          isClosable: true,
        })
    }
    console.log(info.event)
            
           
        
            
            
          }}


      /></Box>

    )
}