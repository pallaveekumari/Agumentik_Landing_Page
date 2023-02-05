import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Image,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import styles from "../Styles/EntryPage.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { AppContext } from "../Context/AppContext";

const EntryPage = () => {
  const { handleSignIn } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <Box>
      <Box className={styles.container}>
        <Button
          ml="4"
          onClick={() => {
            setOverlay(<OverlayTwo />);
            onOpen();
          }}
        >
          <Box className={styles.admin}>
            <Button className={styles.editbtn}>USER</Button>
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
              <Input placeholder="Enter Name" type="text" />
              <Input placeholder="Enter Email" type="text" />
              <Input placeholder="Enter Password" type="email" />
            </ModalBody>
            <ModalFooter>
              <Box id="popup" className={styles.popup}>
                <Input placeholder="Enter Email" type="text" />
                <Input placeholder="Enter Password" type="email" />
                <Button
                  className={styles.closepopup}
                  id="close-popup"
                  onClick={() => {
                    handleSignIn();
                    document.querySelector("#popup").style.display = "none";
                  }}
                >
                  Close
                </Button>
              </Box>

              <Text>AlreadyRegistered:</Text>
              <Button
                className={styles.editbtn}
                onClick={() => {
                  document.querySelector("#popup").style.display = "block";
                }}
              >
                SignIn
              </Button>
              <Button
                className={styles.editbtn}
                onClick={() => {
                  document.querySelector("#popup").style.display = "block";
                }}
              >
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Box id="popups" className={styles.popup}>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            type="text"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            type="email"
          />
          <Button
            className={styles.closepopup}
            id="close-popup"
            onClick={() => {
              document.querySelector("#popups").style.display = "none";
            }}
          >
            Close
          </Button>
          <Button>Submit</Button>
        </Box>

        <Box className={styles.user}>
          <Text>
            <Button
              className={styles.editbtn}
              onClick={() => {
                document.querySelector("#popups").style.display = "block";
              }}
            >
              ADMIN
            </Button>
          </Text>

          <Box className={styles.userimgbox}>
            <Image
              className={styles.userimg}
              src="https://us.123rf.com/450wm/osherro/osherro2010/osherro201000011/osherro201000011.jpg?ver=6"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EntryPage;
