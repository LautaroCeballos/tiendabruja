import { Flex } from "@chakra-ui/layout"

export default function AppLayout({children}) {
    return <>
        <Flex width="100%" height="100%" minHeight="100vh" bg="brand.secondary" alignItems="center">
            {children}
        </Flex>
    </>
}