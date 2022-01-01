import { getProducts } from "services/firebase"
import ProductsContext from 'context/ProductsContext'
import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProduct } from "services/firebase"


export function useProducts(){
    const {products, setProducts} = useContext(ProductsContext)

    useEffect(() => {
        getProducts().then(listOfProducts => {
            setProducts(listOfProducts)
        })
    }, [setProducts])
    
    return products
}

export function useProduct(){
    const { productId } = useParams()
    const { products } = useContext(ProductsContext)
    const [product, setProduct] = useState()

    useEffect(() => {
        if(products.length > 0){
            setProduct(products.find(singleProduct =>  singleProduct.id === productId))
        } else {
            getProduct(productId).then((result) => {
                setProduct(result)
            })
        } 
    }, [productId, products])

    return product
}