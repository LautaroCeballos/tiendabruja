import imgDefault from "images/default.jpg"
import { useDisclosure } from "@chakra-ui/hooks"
import { Flex, Image, IconButton, Input, FormControl, FormLabel } from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons'
import { useEffect, useState } from "react"
import ModalImage from "componentes/ModalImage"

// const IMAGE_STATES = {
//     ERROR: -1,
//     NONE: 0,
//     UPLOADING: 1,
//     COMPLETE: 2
// }

export default function InputImgField({values, setImgFile}){
    const modalEvent = useDisclosure()
    
    const [blobURL, setBlobURL] = useState('')
    const [imgURL, setImgURL] = useState('')

    useEffect(() => {
        let valuesImg = values.img
        
        if(!blobURL && valuesImg.length === 0){
            setImgURL(imgDefault)
        } else if (!blobURL && valuesImg.length > 0) {
            setImgURL(valuesImg)
        } else {
            setImgURL(blobURL)
        }
    }, [blobURL, values])

    const handleChange = (e) => {
        const file = e.target.files[0]
        const blobURL = window.URL.createObjectURL(file)
        setBlobURL(blobURL)
        setImgFile(file)  
    }

    return <>
        <Flex flexWrap="wrap" width="100%" position="relative">
            <Image
                onClick={modalEvent.onOpen}
                src={imgURL}
                alt={values.nombre} 
                minWidth="100%" 
                height={["8em", "15em"]}
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
                <Input type="file" onChange={handleChange} display="none" name="img" id="img"/>
            </FormControl>
        </Flex>
        
        <ModalImage src={imgURL} alt={values.name} event={modalEvent}/>
    </>
}
