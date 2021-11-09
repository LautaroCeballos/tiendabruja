import { Field, ErrorMessage } from "formik"
import { Flex, Text, FormControl, FormLabel, Input} from "@chakra-ui/react"

function ErrorFormMessage({ name }) {
    return <>
        <ErrorMessage name={name} component={() => (
            <Flex color="red.500" fontSize="small">
                <Text display={{base: "none", sm: "block"}}>Requerido</Text> 
                <Text>*</Text>
            </Flex>
        )} />
    </>
}

export default function InputField({name, label, type, placeholder, isRequired}){
    return <>
        <Field name={name}>
            {({ field }) => (
                <FormControl marginTop="1em">
                    <FormLabel htmlFor={name} display="flex" justifyContent="space-between">
                        {label}
                        {isRequired && <ErrorFormMessage name={name}></ErrorFormMessage>}
                    </FormLabel>
                    <Input
                        type={type}
                        placeholder={placeholder}
                        id={name}
                        {...field}
                    />
                </FormControl>
            )}
        </Field>
    </>
}