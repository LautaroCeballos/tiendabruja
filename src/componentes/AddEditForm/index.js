import { Formik, Form} from "formik"
import { addProduct } from "services/products.js"
import imgDefault from "images/default.jpg"
import InputField from "./InputField"
import validations from "./validations"
import InputTagField from "./InputTagField"
import {
    Button,
    Flex,
    Grid,
    GridItem,
    Image
} from "@chakra-ui/react"



export default function AddEditForm() {
    return <>
        <Formik
            initialValues={{
                nombre: '',
                img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/03/como-hacer-velas-caseras.jpg',
                stock: '',
                costoMayorista: '',
                bultoCant: '',
                costoUnitario: '',
                precioVenta: '',
                promo: '',
                proveedor: '',
                ganancia: '',
                tags: []
            }}

            validate={validations}

            onSubmit={(dataForm, { resetForm }) => {
                console.log(dataForm)
                addProduct(dataForm)
                    .then(() => {
                        resetForm();
                    }).catch((error) => {
                        console.log(error)
                    })
            }}
        >
            {({ values }) => (
                <Form>
                    <Flex display="flex" flexWrap="wrap" alignContent="start" width="100%">
                        {values.img !== "" ?
                            <Image src={values.img} alt={values.nombre} width="100%" height={["8em", "15em"]} objectFit="cover" />
                            : <Image src={imgDefault} alt={values.nombre} width="100%" height={["8em", "15em"]} objectFit="cover" />
                        }

                        <Grid templateColumns="repeat(2, 1fr)" gap="0 1em" width="100%">
                            <GridItem colSpan={2} marginTop="1em">
                                <InputField name="nombre" label="Nombre" type="text" placeholder="Nombre del Producto" isRequired/>
                            </GridItem>

                            <GridItem>
                                <InputField name="bultoCant" label="Cant por Bulto" type="number" placeholder="100 unidades" isRequired/>
                                <InputField name="costoUnitario" label="Costo Unitario" type="number" placeholder="$0" isRequired/>
                                <InputField name="ganancia" label="Ganancia" type="number" placeholder="0%" isRequired/>
                                <InputField name="promo" label="Promo" type="text" placeholder="Promociones y detalles"/>
                            </GridItem>

                            <GridItem>
                                <InputField name="costoMayorista" label="Costo Mayorista" type="number" placeholder="$0" isRequired/>
                                <InputField name="precioVenta" label="Precio Final" type="number" placeholder="$0" isRequired/>
                                <InputField name="proveedor" label="Proveedor" type="text" placeholder="NatuShop" isRequired/>
                                <InputField name="stock" label="Stock" type="number" placeholder="stock" isRequired/>
                            </GridItem>

                            <GridItem colSpan={2}>
                                <InputTagField data={values.tags} />
                                <Button type="submit" colorScheme="purple" width="100%" margin="1.5em auto">Agregar producto</Button>
                            </GridItem>
                        </Grid>
                    </Flex>
                </Form>
            )}
        </Formik>
    </>
}