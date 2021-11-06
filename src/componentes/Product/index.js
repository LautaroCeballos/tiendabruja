import { Flex, Text, Box } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import { chakra } from "@chakra-ui/system"
import { 
    // Tag, 
    Divider 
} from "@chakra-ui/react"
import { useState } from "react"
import { useEffect } from "react/cjs/react.development"


export default function Product({ item }) {

    const [product, setProduct] = useState()
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setProduct(item)
    }, [item])

    const handleClick = () => {
        setIsVisible(!isVisible)
    }

    return <>
        { product && 
            <chakra.article display="flex" flexWrap="wrap">
                <Flex onClick={handleClick}>
                    <Box minWidth="5em" marginRight="1em" textAlign="center">
                        <Image src={product.img} alt={product.nombre} boxSize="5em" margin="auto" objectFit="cover" borderRadius="md" />
                        <Text color="gray.500">Stock: {product.stock}</Text>
                    </Box>
                    <Box>
                        <Text fontWeight="semibold" fontSize="xl" color="brand.secondary">{product.nombre}</Text>
                        <Divider />
                        <Text color="green.500" fontWeight="semibold">Precio Venta: ${product.precioVenta}</Text>
                        <Text color="gray.500">Promo: {product.promo}</Text>
                    </Box>
                </Flex>

                {isVisible &&  
                    <Flex flexWrap="wrap" marginTop=".5em" justifyContent="space-between" bg="gray.200" padding=".5em 1em" borderRadius="xl" width="100%">
                        <Text color="green.700">Costo Pack: ${product.costoMayorista}</Text> 
                        <Text color="green.700">Costo Unitario: ${product.costoUnitario}</Text> 
                        <Text>Proveedor: {product.proveedor}</Text>
                        {/* <Box width="100%" marginTop=".5em">
                            {product.tags.map(tag => {
                                return <Tag key={tag} variant="outline" colorScheme="purple" margin="0 .5em .5em 0">{tag}</Tag>
                            })}
                        </Box> */}
                    </Flex>
                }
                <Divider marginBottom="1em"/>
            </chakra.article>
        }

    </>
}