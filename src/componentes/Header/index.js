import { 
    chakra, 
    Image, 
    Flex,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { signOutUser } from 'services/firebase'
import useUser from 'hooks/useUser'

import logoTiendaBruja from 'images/tbruja.svg'

export default function Header() {
    const user =  useUser()

    return <>
        <chakra.header 
            width="100%"
            h="5em"
            padding="0 2em"
            display="flex" 
            justifyContent="space-between" 
            alignItems="center" 
            position="fixed" 
            zIndex="99" 
            top="0" 
            boxShadow="md" 
            bg="brand.primary"
        >
            <Flex w={{base: "100%", md: "48em"}} margin="0 auto" justifyContent="space-between">
                <Link to="/products">
                    <Image width="200px" src={logoTiendaBruja} alt="Logo TiendaBruja"/>
                </Link>

                <Flex>
                    {user && 
                        <Menu>
                            <MenuButton>
                                <Image src={user.imgProfile} boxSize="2.5em" borderRadius="full" boxShadow="md"/>
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Ver Perfil</MenuItem>
                                <MenuItem onClick={() => signOutUser()}>Salir</MenuItem>
                            </MenuList>
                        </Menu>
                    }
                </Flex>
            </Flex>
        </chakra.header>
    </>
}