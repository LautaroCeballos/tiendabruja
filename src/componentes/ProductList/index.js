import { Stack} from "@chakra-ui/layout"
import Product from "componentes/Product"

export default function ProductList({ items }) {
    return <>
        <Stack direction="column" paddingTop="1.5em">
            {
                items &&
                items.map(product => {
                    return <Product key={product.id} item={product}></Product>
                })
            }
        </Stack>
    </>
}