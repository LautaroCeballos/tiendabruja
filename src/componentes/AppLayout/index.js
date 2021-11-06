import { Box, Flex } from "@chakra-ui/layout"

export default function AppLayout({children}) {
    return <>
        <Flex bg="brand.accent" flexDirection="row" marginTop="4em" height="100%">
            <Box w={{base: "100%", md: "48em"}} minHeight="100vh" height="100%" bg="white" margin="auto" padding="0 2em">
                {children}
            </Box>
        </Flex>
    </>
}