import imgDefault from "images/default.jpg"
import { useDisclosure } from "@chakra-ui/hooks"
import {
    Flex,
    Image,
    IconButton,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    FormControl, 
    FormLabel,
} from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons'

import { useEffect, useState } from "react"
// import { useFormikContext } from 'formik'
import { uploadImage } from "services/firebase"

// const IMAGE_STATES = {
//     ERROR: -1,
//     NONE: 0,
//     UPLOADING: 1,
//     COMPLETE: 2
// }


export default function InpuetImgField({values}){
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const { setFieldValue } = useFormikContext()
    
    const [task, setTask] = useState('')

    useEffect(() => {
        if(task){
            let onProgress = () => {}
            let onError = () => {
                console.log('Error')
            }
            let onComplete = () => {
                console.log('onComplete')
            }

            task.on('state_changed', onProgress, onError, onComplete)
        }
    }, [task])

    const handleChange = (e) => {
        const file = e.target.files[0]
        // console.log(file)
        const task = uploadImage(file, values.name)
        setTask(task)
        console.log(task)
        // setFieldValue('img', file)
    }

    return <>
        <Flex flexWrap="wrap" width="100%" position="relative">
            <Image
                onClick={onOpen}
                src={values.img !== "" ? values.img : imgDefault}
                alt={values.nombre} width="100%" height={["8em", "15em"]}
                objectFit="cover"
            /> 

            <FormControl>
                <IconButton as={FormLabel} 
                    htmlFor="img"
                    boxSize="3em" 
                    aria-label="Agregar imagen"
                    icon={<AddIcon/>}
                    margin="1em" 
                    position="absolute" 
                    display="flex"
                    bottom="0" 
                    right="0"
                    cursor="pointer"
                />
                <Input 
                    type="file"
                    onChange={handleChange}
                    display="none"
                    name="img"
                    id="img"
                />
            </FormControl>
        </Flex>
        

        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent bg="transparent">
                <ModalCloseButton bg="white"/>
                <ModalBody padding="0">
                    <Image
                        onClick={onOpen}
                        src={values.img !== "" ? values.img : imgDefault}
                        alt={values.nombre} width="100%" height="100%"
                        objectFit="cover"
                        borderRadius="md"
                    />
                </ModalBody>
            </ModalContent>
        </Modal>
    </>
}
