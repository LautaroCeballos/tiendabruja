import { useEffect, useState } from "react/cjs/react.development"
import { Button } from "@chakra-ui/button"
import { useHistory } from 'react-router-dom'
import { addProduct } from "services/products.js"
import imgDefault from "images/default.jpg"
import {
    chakra,
    Grid,
    GridItem,
    Image,
    FormControl,
    FormLabel,
    Input,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper
} from "@chakra-ui/react"

const FORM_STATES = {
    USER_NOT_KNOWN: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1
}

export default function AddEditForm() {
    const history = useHistory()

    const [isEdit, setIsEdit] = useState()
    const [status, setStatus] = useState(FORM_STATES.USER_NOT_KNOWN)
    
    const [dataForm, setDataForm] = useState({
        nombre: '',
        img: "https://dam.cocinafacil.com.mx/wp-content/uploads/2021/03/como-hacer-velas-caseras.jpg",
        stock: '',
        costoMayorista: '',
        bultoCant: '', //Cantidad de unidades que trae un bulto cerrado
        costoUnitario: '',
        precioVenta: '',
        promo: '',
        proveedor: '',
        ganancia: '',
        uid: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        setStatus(FORM_STATES.LOADING)

        //AGREGAR PRODUCTO---------------------------------------
        addProduct(dataForm)
            .then(() => {
                history.push('/')
            }).catch((error) => {
                console.log(error)
                setStatus(FORM_STATES.ERROR)
            })
        //------------------------------------------------
    }

    const handleChange = (event) => {
        const target = event.target
        const name = target.name
        const value = target.value
        
        setDataForm({
            ...dataForm,
            [name]: value
        })

        console.log(name)
    }

    useEffect(() => {
        setIsEdit(false)
    },[])

    return <>

        <chakra.form onSubmit={handleSubmit} display="flex" flexWrap="wrap" alignContent="start" width="100%">
            {dataForm.img !== "" ?
                <Image src={dataForm.img} alt={dataForm.nombre} width="100%" height={["8em", "15em"]} objectFit="cover" />
                : <Image src={imgDefault} alt={dataForm.nombre} width="100%" height={["8em", "15em"]} objectFit="cover" />
            }
            <Grid templateColumns="repeat(2, 1fr)" gap="0 1em" width="100%">
                <GridItem colSpan={2} marginTop="1em">
                    <FormControl id="nombre">
                        <FormLabel>Nombre</FormLabel>
                        <Input type="text" onChange={handleChange} placeholder="Nombre del Producto" name="nombre" value={dataForm.nombre}/>
                    </FormControl>
                </GridItem>
                <GridItem>
                    <FormControl id="costoUnitario" marginTop="1em">
                        <FormLabel>Costo Unitario</FormLabel>
                        <NumberInput defaultValue={dataForm.costoUnitario}>
                            <NumberInputField placeholder="$0" onChange={handleChange} name="costoUnitario"/>
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                    <FormControl id="costoMayorista" marginTop="1em">
                        <FormLabel>Costo Mayorista</FormLabel>
                        <NumberInput defaultValue={dataForm.costoMayorista}>
                            <NumberInputField placeholder="$0" onChange={handleChange} name="costoMayorista"/>
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                    <FormControl id="ganancia" marginTop="1em">
                        <FormLabel>Ganancia</FormLabel>
                        <NumberInput defaultValue={dataForm.ganancia}>
                            <NumberInputField placeholder="0%" onChange={handleChange} name="ganancia" />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                </GridItem>
                <GridItem>
                    <FormControl id="precioVenta" marginTop="1em">
                        <FormLabel>Precio Final</FormLabel>
                        <NumberInput defaultValue={dataForm.precioVenta}>
                            <NumberInputField placeholder="$0" onChange={handleChange} name="precioVenta" />
                        </NumberInput>
                    </FormControl>
                    <FormControl id="proveedor" marginTop="1em">
                        <FormLabel>Proveedor</FormLabel>
                        <Input type="text" placeholder="Proveedor" onChange={handleChange} name="proveedor" value={dataForm.proveedor}/>
                    </FormControl>
                    <FormControl id="stock" marginTop="1em">
                        <FormLabel>Stock</FormLabel>
                        <NumberInput defaultValue={dataForm.stock}>
                            <NumberInputField placeholder="stock" onChange={handleChange} name="stock" />
                        </NumberInput>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl id="promo" marginTop="1em">
                        <FormLabel>Promo</FormLabel>
                        <Input type="text" placeholder="Promociones y detalles" onChange={handleChange} name="promo" value={dataForm.promo}/>
                    </FormControl>
                    <FormControl id="tags" marginTop="1em">
                        <FormLabel>Etiquetas</FormLabel>
                        <Input type="text" placeholder="Etiquetas" onChange={handleChange} name="tags" />
                
                    </FormControl>
                    <Button type="submit" colorScheme="purple" width="100%" margin="1.5em auto">{isEdit ? "Editar producto" : "Agregar producto"}</Button>
                </GridItem>
            </Grid>
        </chakra.form>
    </>
}