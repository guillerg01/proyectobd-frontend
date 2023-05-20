import { HamburgerIcon } from "@chakra-ui/icons";
import { Box ,Button, IconButton} from "@chakra-ui/react";
import React from 'react'

export function Nav({onOpen}){



    const btnRef = React.useRef()
    


    return(

   <Box position={"0,0,0"} m='15px' w='40%' bg="2d3748" >

   
<IconButton icon={<HamburgerIcon/>} ref={btnRef}  colorScheme='teal' onClick={onOpen}>
        Open
      </IconButton>

   </Box>





    )
}