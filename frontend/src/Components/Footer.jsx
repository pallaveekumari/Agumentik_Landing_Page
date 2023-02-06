import { Box, Button, Center, Image, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "../Styles/Footer.module.css"
const Footer = () => {
  return (
    <Box>
    <Box className={styles.agency}>
   <Center>
  <Image className={styles.agencyimg} src="https://cdn.dribbble.com/users/11213509/avatars/small/1a8f50c006845ab8e3fe302291b62a30.png?1648650419"/>
  </Center>
<Text className={styles.agencytext} >Troikagency - UX/UI Design Agency</Text>
<Text className={styles.website} >We Design Websites for People 🎯 Not Browsers ✌️✌️✌️</Text>
<Button className={styles.hire}
colorScheme={"pink"}
color="white"><i class="fa-solid fa-envelope"></i> Hire Us</Button>
    </Box>
    </Box>
  )
}

export default Footer