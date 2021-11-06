import ProductList from "componentes/ProductList"
import SkeletonProductList from "componentes/ProductList/skeleton"
import { useEffect, useState } from "react"
import { getProducts } from "services/products"

export default function Home(){
    const [products, setProducts] = useState()

    useEffect(() => {
        getProducts().then(listOfProducts => {
            setProducts(listOfProducts)
        })
    }, [])

    return <>
       { products ?
            <ProductList items={products}/>
            : <SkeletonProductList/>
        }
    </>
    
}