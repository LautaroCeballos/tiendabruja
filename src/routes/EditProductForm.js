import { useProduct } from 'hooks/useProducts'
import AddEditForm from "componentes/AddEditForm"

export default function EditProductForm(){
    const product = useProduct()
    
    return <>
        {
            product && <AddEditForm defaultValues={product}/>
        }
    </>
}