import { 
    chakra, 
    Image, 
    Button, 
    Flex,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";

import logoTiendaBruja from 'images/tbruja.svg'

export default function Header() {
    return <>
        <chakra.header 
            width="100%"
            h="5em"
            padding="0 2em"
            display="flex" 
            justifyContent="space-between" 
            alignItems="center" 
            position="fixed" 
            zIndex="99" top="0" 
            boxShadow="md" 
            bg="brand.primary"
        >
            <Flex w={{base: "100%", md: "48em"}} margin="0 auto" justifyContent="space-between">
                <Link to="/">
                    <Image width="200px" src={logoTiendaBruja} alt="Logo TiendaBruja"/>
                </Link>

                <Menu>
                    <MenuButton 
                        as={Button} 
                        bg="brand.primary" 
                        _hover={{
                            bg: "brand.accent",
                        }}
                        _active={{bg: "brand.accent"}} 
                        boxShadow="md"
                    >
                        <HamburgerIcon color="brand.secondary"  fontWeight="bold"/>
                    </MenuButton>
                    <MenuList>
                        <Link to="/agregar"><MenuItem>Agregar</MenuItem></Link>
                        <MenuItem>Actualizar Productos</MenuItem>
                        <MenuItem>Vender</MenuItem>
                        <MenuItem>Configuraciones</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </chakra.header>
    </>
}