import { Button, Flex, Heading, Spinner } from '@chakra-ui/react'
import { UnlockIcon, WarningTwoIcon, CheckIcon } from '@chakra-ui/icons'
import { loginWithGoogle } from 'services/firebase'
import useUser from 'hooks/useUser'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

export default function Login(){ 
    const user = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        if(user) navigate('/products')
    }, [user, navigate])

    const handleClickAuth = (e) => {
        loginWithGoogle()
    }

    return <>
    
        <Flex  justifyContent="center" alignItems="flex-end" flexWrap="wrap" width="30em" height="30em" margin="0 auto 0" bg="white" boxShadow="lg" borderRadius=".5em">
            <Flex flexWrap="wrap" justifyContent="center" alignContent="center" bg="brand.primary" height="15em">
                <WarningTwoIcon boxSize="6em"  color="brand.secondary"/>
                <Heading width="100%" textAlign="center" fontSize="1.2em" marginTop="1.5em" color="brand.secondary">¡El inicio de sesion es requerido para continuar!</Heading>
            </Flex>
            { user === null &&
                <Button leftIcon={<UnlockIcon/>} onClick={handleClickAuth} bg="red.500" color="white" _hover={{ bg: "red.300" }} alignSelf="flex-end" marginBottom="3em">
                    Login with Google
                </Button>
            }{ user === undefined &&
                <Button leftIcon={<Spinner boxSize="1em"/>} bg="blue.500" color="white" _hover={{ bg: "red.300" }} alignSelf="flex-end" marginBottom="3em">
                    Loading
                </Button>
            }{ user &&
                <Button leftIcon={<CheckIcon/>} bg="green.500" color="white" _hover={{ bg: "green.300" }} alignSelf="flex-end" marginBottom="3em">
                    Access 
                </Button>
            }
        </Flex>

    </>
}