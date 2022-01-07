import { Flex, Text, Box } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import { chakra } from "@chakra-ui/system"
import { Tag, Divider, Collapse, IconButton } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/hooks"
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import imgDefault from "images/default.jpg"

import ModalImage from "componentes/ModalImage"
import { deleteProduct } from 'services/firebase'


export default function Product({ item }) {
    const modalImageEvent = useDisclosure()
    const moreInfoEvent = useDisclosure()
    const imgUrl = item.img ? item.img : imgDefault

    const suprProduct = async (productId) => {
        const result = await deleteProduct(productId)
        console.log(result)
    }

    return <>
        {item && 
            <chakra.article display="flex" flexWrap="wrap">
                <ModalImage src={imgUrl} alt={item.nombre} event={modalImageEvent} />
                <Flex width="100%">
                    <Box minWidth="5em" marginRight="1em" textAlign="center" cursor="pointer" onClick={modalImageEvent.onOpen}>
                        <Image src={imgUrl} alt={item.nombre} boxSize="5em" margin="auto" objectFit="cover" borderRadius="md" />
                        <Text color="gray.500" fontSize=".8em" margin=".5em 0">stock: {item.stock}</Text>
                    </Box>

                    <Box onClick={moreInfoEvent.onToggle} width="100%" cursor="pointer">
                        <Flex justifyContent="space-between" alignItems="center">
                            <Text fontWeight="semibold" fontSize="xl" color="brand.secondary">{item.nombre}</Text>
                        </Flex>
                        <Divider />
                        <Text color="green.500" fontWeight="semibold">Precio Venta: ${item.precioVenta}</Text>
                        <Text color="gray.500">Promo: {item.promo}</Text>
                    </Box>
                    <Flex justifyContent="flex-end" alignContent="flex-start" flexWrap="wrap">
                        <Link to={`/products/edit/${item.id}`}>
                            <IconButton bg="transparent" color="brand.secondary" size="sm" aria-label="Editar articulo" icon={<EditIcon/>}/>
                        </Link>
                        <IconButton bg="transparent" color="brand.secondary" size="sm" aria-label="Eliminar articulo" icon={<DeleteIcon/>} onClick={() => suprProduct(item.id)}/>
                    </Flex>
                </Flex>

                <Flex  as={Collapse} in={moreInfoEvent.isOpen} width="100%">
                   <Flex flexWrap="wrap" marginTop=".5em" justifyContent="space-between" bg="gray.200" padding=".5em 1em" borderRadius="md" marginBottom="0.5em" width="100%">
                        <Text color="green.700">Costo Unitario: ${item.costoUnitario}</Text>
                        <Text color="green.700">Costo Pack: ${item.costoMayorista}</Text>
                        <Text color="green.700">Proveedor: {item.proveedor}</Text>
                        <Box width="100%" marginTop=".5em">
                            {
                                item.tags && Array.isArray(item.tags) && item.tags.length > 0 &&
                                item.tags.map((tag, index) => {
                                    return <Tag key={index} variant="outline" colorScheme="purple" cursor="pointer" margin="0 .5em .5em 0">{tag}</Tag>
                                })
                            }
                        </Box>
                    </Flex>
                </Flex>
                <Divider marginBottom="1em" />
            </chakra.article>
        }

    </>
}