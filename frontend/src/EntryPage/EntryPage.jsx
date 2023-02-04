import React from "react";
import { Box, Button, Image, Input, Text, useDisclosure } from "@chakra-ui/react";
import styles from "../Styles/EntryPage.module.css";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

const EntryPage = () => {

    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
    
      const OverlayTwo = () => (
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='80%'
          backdropBlur='2px'
        />
      )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

  return (
    <Box>

    <Box className={styles.container}>
      
      
    <Button
        onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}
      >
        <Box className={styles.admin}>
        <Text>ADMIN</Text>
        <Box className={styles.userimgbox}>
          <Image
            className={styles.userimg}
            src="https://us.123rf.com/450wm/osherro/osherro2010/osherro201000011/osherro201000011.jpg?ver=6"
          />
        </Box>
      </Box>
      </Button>
      <Button
        ml='4'
        onClick={() => {
          setOverlay(<OverlayTwo />)
          onOpen()
        }}
      >
        <Box className={styles.user}>
        <Text>USER</Text>
        <Box className={styles.userimgbox}>
          <Image
            className={styles.userimg}
            src="https://blog.walls.io/wp-content/uploads/2020/04/Social-Feed-Website-embed.jpg"
          />
        </Box>
      </Box>
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Signup</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Enter Name" type="text"/>
           <Input placeholder="Enter Email" type="text"/>
           <Input placeholder="Enter Password" type="email"/>
          </ModalBody>
          <ModalFooter>
            <Text>AlreadyRegistered:</Text><Button>SignIn</Button>
           <Button>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* <Button
            ml='4'
            onClick={() => {
              setOverlay(<OverlayTwo />)
              onOpen()
            }}
            >Submit</Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Input placeholder="Enter Email" type="text"/>
           <Input placeholder="Enter Password" type="email"/>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
   */}

    </Box>
    </Box>
  )
};

export default EntryPage;
