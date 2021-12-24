import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Image } from '@chakra-ui/react'

export default function ModalImage({ src, alt, event }) {

    return (
        <Modal isOpen={event.isOpen} onClose={event.onClose} size="xl">
            <ModalOverlay />
            <ModalContent bg="transparent">
                <ModalCloseButton bg="white" />
                <ModalBody padding="0">
                    <Image
                        src={src}
                        alt={alt}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        borderRadius="md"
                    />
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}