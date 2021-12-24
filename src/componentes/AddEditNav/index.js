import {Flex, Button } from '@chakra-ui/react'
import { BellIcon, AddIcon, RepeatIcon, Search2Icon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";

export default function AddEditNav(){
    return <>
        <Flex 
            width="100%"
            margin="auto"
            h="3em"
            justifyContent="space-around"
            alignItems="center" 
            position="sticky"
            zIndex="99" 
            bottom=".5em" 
            boxShadow="md"
            borderRadius="md"
            bg="brand.primary"
            color="brand.secondary"
        >
            <Link to="/"><Button leftIcon={<BellIcon/>} bg="brand.primary">Vender</Button></Link>
            <Link to="/agregar"><Button leftIcon={<AddIcon/>} bg="brand.primary">Agregar</Button></Link>
            <Link to="/actualizar"><Button leftIcon={<RepeatIcon/>} bg="brand.primary">Actualizar</Button></Link>
            <Link to="/"><Button leftIcon={<Search2Icon/>} bg="brand.primary">Buscar</Button></Link> 
        </Flex>
    </>
}