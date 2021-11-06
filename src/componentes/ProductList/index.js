import { Stack} from "@chakra-ui/layout"
import Product from "componentes/Product"
import { useState, useEffect } from "react"


export default function ProductList({items}) {
    const [products, setProducts] = useState()

    useEffect(() => {
        setProducts(items)
    }, [items])

    return <>
        <Stack direction="column" paddingTop="1.5em">
            {
                products &&
                products.map(product => {
                    return <Product key={product.id} item={product}></Product>
                })
            }
        </Stack>
    </>
}