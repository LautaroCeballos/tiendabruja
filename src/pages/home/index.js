import ProductList from "componentes/ProductList"
import SkeletonProductList from "componentes/ProductList/skeleton"
import { useEffect, useState } from "react"
import { getProducts } from "services/firebase"
import { Box } from '@chakra-ui/react'

export default function Home(){
    const [products, setProducts] = useState()

    useEffect(() => {
        getProducts().then(listOfProducts => {
            setProducts(listOfProducts)
        })
    }, [])

    return <>
        <Box w={{base: "100%", md: "48em"}}  minHeight="100vh" bg="white" margin="5em auto 0" padding="0 2em" boxShadow="lg">
        { products ?
                <ProductList items={products}/>
                : <SkeletonProductList/>
            }
        </Box>
    </>
    
}