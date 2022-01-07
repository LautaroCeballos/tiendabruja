import { Box } from '@chakra-ui/react'
import ProductList from "componentes/ProductList"
import AddEditNav from "componentes/AddEditNav"
import SkeletonProductList from "componentes/ProductList/skeleton"

import { useProducts } from 'hooks/useProducts'

export default function Home(){
    const products = useProducts()

    return <>
        <Box w={{base: "100%", md: "48em"}} minHeight="90vh" bg="white" margin="5em auto 0" padding="0 2em" boxShadow="lg">
            { products.length !== 0 ?
                <ProductList items={products}/>
                : <SkeletonProductList/>
            }
            <AddEditNav/>
        </Box>
    </>
    
}