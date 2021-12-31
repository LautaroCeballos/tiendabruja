import { useEffect } from "react"
import { useContext } from "react/cjs/react.development"
import { getProducts } from "services/firebase"
import ProductsContext from 'context/ProductsContext'
import { Box } from '@chakra-ui/react'

import ProductList from "componentes/ProductList"
import AddEditNav from "componentes/AddEditNav"
import SkeletonProductList from "componentes/ProductList/skeleton"


//Optimizar a un custom hook
export default function Home(){
    const {products, setProducts} = useContext(ProductsContext)

    useEffect(() => {
        getProducts().then(listOfProducts => {
            setProducts(listOfProducts)
        })
    }, [setProducts])

    return <>
        <Box w={{base: "100%", md: "48em"}} minHeight="100vh" bg="white" margin="5em auto 0" padding="0 2em" boxShadow="lg">
            { products.length !== 0 ?
                <ProductList items={products}/>
                : <SkeletonProductList/>
            }
            <AddEditNav/>
        </Box>
    </>
    
}