import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ProductsContext from "context/ProductsContext"
import { getProduct } from "services/firebase"

import AddEditForm from "componentes/AddEditForm"

export default function EditProductForm(){
    
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

    return <>
        {
            product && <AddEditForm defaultValues={product}/>
        }
    </>
}