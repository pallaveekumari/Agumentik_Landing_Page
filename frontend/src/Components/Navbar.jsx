import React from 'react'
import {Box,Button,Spacer,Text} from "@chakra-ui/react"
import styles from "../Styles/Navbar.module.css"
const Navbar = () => {
  return (
    <Box>
  <Box className={styles.smallNav}>
<Text>📣 Learn Design Systems Online in 8 Weeks with Dan Mall. Last call to sign up! →</Text>
<Box><i class="fa-solid fa-xmark"></i></Box>
  </Box>

  <Box className={styles.navBox}>
   <Box className={styles.dribble}>
    <Text>dribble</Text>
   </Box>
   <Box className={styles.Inspiration}>
    <Box>Inspiration</Box>
    <Box>Find Work</Box>
    <Box>Learn Design</Box>
    <Box>Go Pro</Box>
    <Box>Hire Designers</Box>
   </Box>
   <Spacer></Spacer>

   <Box className={styles.search}>
    <Box><i class="fa-solid fa-magnifying-glass"></i></Box>
    <Button>Sign in</Button>
    <Button>Sign up</Button>
   </Box>

  </Box>
  </Box>
  )
}

export default Navbar