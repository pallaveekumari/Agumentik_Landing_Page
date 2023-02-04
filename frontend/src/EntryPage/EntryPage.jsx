import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import styles from "../Styles/EntryPage.module.css";

const EntryPage = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.admin}>
        <Text>ADMIN</Text>
        <Box className={styles.userimgbox}>
          <Image
            className={styles.userimg}
            src="https://us.123rf.com/450wm/osherro/osherro2010/osherro201000011/osherro201000011.jpg?ver=6"
          />
        </Box>
      </Box>
      <Box className={styles.user}>
        <Text>USER</Text>
        <Box className={styles.userimgbox}>
          <Image
            className={styles.userimg}
            src="https://blog.walls.io/wp-content/uploads/2020/04/Social-Feed-Website-embed.jpg"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default EntryPage;
