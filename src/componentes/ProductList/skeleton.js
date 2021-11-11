import { Skeleton } from "@chakra-ui/skeleton"
import { Divider, chakra, Flex, Box, Stack } from "@chakra-ui/react"

export default function SkeletonProductList() {
    const cantSkeletons = [1,2,3,4,5,6,7,8,9]

    return <>
        <Stack direction="column" paddingTop="1.5em">
            
            {   
                cantSkeletons.map((index) => {
                    return (
                        <chakra.article display="flex" flexWrap="wrap" key={index}>
                            <Flex width="100%">
                                <Box minWidth="5em" marginRight="1em" textAlign="center">
                                    <Skeleton boxSize="5em" margin="auto" borderRadius="md" />
                                    <Skeleton color="gray.500" height="1em" marginTop=".5em"/>
                                </Box>
                                <Box width="100%">
                                    <Skeleton color="gray.500" height="1em" width="15em" marginTop=".5em"/>
                                    <Divider />
                                    <Skeleton color="gray.500" height="1em" width="13em" marginTop=".5em"/>
                                    <Skeleton color="gray.500" height="1em" width="11em" marginTop=".5em"/>
                                </Box>
                            </Flex>
                            <Divider margin=".5em 0 1em"/>
                        </chakra.article>
                    )})
            }
        </Stack>
    </>
}