import { Formik, Form } from "formik"
import { useState } from "react"
import { addProduct, updateProduct } from "services/firebase.js"
import { Button, Flex, Grid, GridItem } from "@chakra-ui/react"
import validations from "./validations"
import InputField from "./InputField"
import InputTagField from "./InputTagField"
import InputImgField from "./InputImgField"
import { useNavigate } from 'react-router'

export default function AddEditForm({ defaultValues }) {
    const [imgFile, setImgFile] = useState('')
    const navigate = useNavigate()

    const initialValues = {
        nombre: '',
        img: '',
        stock: '',
        costoMayorista: '',
        bultoCant: '',
        costoUnitario: '',
        precioVenta: '',
        promo: '',
        proveedor: '',
        ganancia: '',
        tags: []
    }

    return <>
        <Formik
            initialValues={defaultValues ? defaultValues : initialValues}

            validate={validations}

            onSubmit={(dataForm) => {
                defaultValues ?
                    updateProduct(dataForm, imgFile)
                        .then(() => {
                            navigate('/products')
                        }).catch((err) => {
                            console.log(err)
                        })
                :   addProduct(imgFile, dataForm)
                        .then(() => {
                            navigate('/products')
                        }).catch((error) => {
                            console.log(error)
                        })
            }}
        >
            {({ values }) => (
                <Flex display="flex" flexWrap="wrap" alignContent="start" w={{ base: "100%", md: "48em" }} bg="white" margin="5em auto 0" padding="0 2em" boxShadow="lg">
                    <Form >
                        <Flex display="flex" flexWrap="wrap" alignContent="start" width='100%'>
                            <InputImgField values={values} setImgFile={setImgFile} />
                            <Grid templateColumns="repeat(2, 1fr)" gap="0 1em" width="100%">
                                <GridItem colSpan={2} marginTop="1em">
                                    <InputField name="nombre" label="Nombre" type="text" placeholder="Nombre del Producto" isRequired />
                                </GridItem>

                                <GridItem>
                                    <InputField name="bultoCant" label="Cant por Bulto" type="number" placeholder="100 unidades" isRequired />
                                    <InputField name="costoUnitario" label="Costo Unitario" type="number" placeholder="$0" isRequired />
                                    <InputField name="ganancia" label="Ganancia" type="number" placeholder="0%" isRequired />
                                    <InputField name="promo" label="Promo" type="text" placeholder="Promociones y detalles" />
                                </GridItem>

                                <GridItem>
                                    <InputField name="costoMayorista" label="Costo Mayorista" type="number" placeholder="$0" isRequired />
                                    <InputField name="precioVenta" label="Precio Final" type="number" placeholder="$0" isRequired />
                                    <InputField name="proveedor" label="Proveedor" type="text" placeholder="NatuShop" isRequired />
                                    <InputField name="stock" label="Stock" type="number" placeholder="stock" isRequired />
                                </GridItem>

                                <GridItem colSpan={2}>
                                    <InputTagField data={values.tags} />
                                    <Button type="submit" colorScheme="purple" width="100%" margin="1.5em auto">
                                        { defaultValues ? "Editar Producto" : "Agregar Producto" }
                                    </Button>
                                </GridItem>
                            </Grid>
                        </Flex>
                    </Form>
                </Flex>
            )}
        </Formik>
    </>
}