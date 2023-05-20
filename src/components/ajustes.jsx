import { Text } from "@chakra-ui/react"
import { Getpeople } from "./getpeople"

export const Ajustes = ({profesor})=>{


    return (<Getpeople profesor={profesor} esajustes={true} />)
}