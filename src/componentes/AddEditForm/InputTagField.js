import {
    Flex,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Tag,
    TagLabel,
    TagRightIcon,
    IconButton
} from "@chakra-ui/react"
import {CloseIcon, AddIcon} from '@chakra-ui/icons'
import { Field, FieldArray } from "formik"
import { useState } from "react/cjs/react.development"
import { useEffect } from "react"

export default function InputTagField({data}) {
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState('')

    useEffect(() => {
        setTags(data)
    }, [data])

    const onChangeTag = (e) => {
        const tag = e.target.value
        setNewTag(tag)
    }

    const onSubmitTag = (push) => {
            if(newTag.length > 0){
                push(newTag)
                setNewTag('')
            }
        }
    

    return <>
        <FieldArray name="tags">
            {({ remove, push }) => (<>
                <Field name="tags">
                    {() => (
                        <FormControl marginTop="1em">
                            <FormLabel htmlFor="tags" display="flex" justifyContent="space-between">
                                Etiquetas
                            </FormLabel>
                            <InputGroup>
                                <Input
                                    type="text"
                                    name="addTag"
                                    placeholder="Etiquetas"
                                    id="tags"
                                    onChange={onChangeTag}
                                    value={newTag}
                                />
                                <InputRightElement width="3rem">
                                    <IconButton 
                                        bg="transparent"
                                        icon={<AddIcon />} 
                                        onClick={() => onSubmitTag(push)} />
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                    )}
                </Field>
                <Flex marginTop="1em" flexWrap="wrap">
                    {
                        tags && tags.length > 0 &&
                        tags.map((tag, index) => {
                            return (
                                <Tag
                                    key={index}
                                    variant="outline"
                                    colorScheme="purple"
                                    margin="0 .5em .5em"
                                >
                                    <TagLabel>{tag}</TagLabel>
                                    <TagRightIcon boxSize="0.7em" as={CloseIcon} onClick={() => remove(index)} />
                                </Tag>
                        )})
                    }
                </Flex>
            </>)}
        </FieldArray>
    </>
}

