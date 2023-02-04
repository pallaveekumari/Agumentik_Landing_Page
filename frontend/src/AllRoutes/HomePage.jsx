import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import styles from "../Styles/HomePage.module.css";
const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <Box className={styles.profilebox}>
        <Box className={styles.profile}>
          <Image
            className={styles.profileimg}
            src="https://pixlr.com/images/index/remove-bg.webp"
          />
        </Box>
        <Box className={styles.profiletext}>
          <Text>Seekret API Platform Landing page</Text>
          <Text>
            Sabbir Hossain🎯 for Troikagency - UX/UI Design Agency•Follow•Hire
            Us
          </Text>
        </Box>
        <Box className={styles.buttonbox}>
          <Button>Save</Button>
          <Button>
            <i class="fa-regular fa-heart"></i>Like
          </Button>
        </Box>
      </Box>

      <Box className={styles.sekret}>
        <Image
          className={styles.sekretimg}
          src="https://cdn.dribbble.com/userupload/3288518/file/original-e5dab85d72f26abb6625f13eab805d1e.png?compress=1&resize=1024x768"
        />
      </Box>

      <Box className={styles.heytextbox}>
        Hey Guys, Here is the " API Platform Landing page " the product help to
        arrange your APIS , I enjoy a lot to do this Work . Let me know your
        feedback & press the "L" button. If you have any UI/UX related project
        ping Us here:
      </Box>
      <Box className={styles.new}>
        <Text>We are available for crafting new projects-</Text>

        <Text>Skype: live:.cid.c9595de1a5711a73</Text>

        <Text>eMail: troikagency@gmail.com</Text>

        <Text>Thanks!</Text>
      </Box>

      <Box className={styles.mission}>
        <Image
          className={styles.missionimg}
          src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
        />
      </Box>

      <Box className={styles.solution}>
        <Box className={styles.solutionbox}>
          <Image
            className={styles.solutionboximg}
            src="https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg"
          />
        </Box>
        <Box className={styles.solutionbox}>
          <Box className={styles.solutionboxtext}>
            In this solution brief,we share how Seekret is trackling API
            management and how your R&D teams can:
          </Box>

          <Box className={styles.manage}>
            <Box className={styles.managebox}>
              <Text>Manage the constant flow of</Text>
              <Text>API changes that take place</Text>
              <Text>in your CI/CD pipeline</Text>
            </Box>
            <Box className={styles.managebox}>
              <Text>Gain observability into your</Text>
              <Text>application's behaviour</Text>
            </Box>
            <Box className={styles.managebox}>
              <Text>Streaming testing and</Text>
              <Text>documentation efforts</Text>
            </Box>
            <Box className={styles.managebox}>
              <Text>Ensure your application's</Text>
              <Text>quality is at pace with</Text>
              <Text>development</Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={styles.api}>
        <Text className={styles.apitext}>
          API development today takes place in the dark
        </Text>
        <Box className={styles.apitexts}>
          As the API first approach to modern software continues to again
          popularity and momantum developers worldwide struggle to understand
          the impact of an API change on application behaviour
        </Box>
      </Box>

      <Box className={styles.toobox}>
        <Box className={styles.tooboxes}>
          <Box className={styles.tooboximg}>
            <Image
              className={styles.tooimg}
              src="https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=365&q=80"
            />
            <Text className={styles.tootext}>Too many moving parts</Text>
            <Text className={styles.tootexts}>
              Understanding complex API interaction is difficult
            </Text>
          </Box>
        </Box>

        <Box className={styles.tooboxes}>
          <Box className={styles.tooboximg}>
            <Image
              className={styles.tooimg}
              src="https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=365&q=80"
            />
            <Text className={styles.tootext}>Too many moving parts</Text>
            <Text className={styles.tootexts}>
              Understanding complex API interaction is difficult
            </Text>
          </Box>
        </Box>
        <Box className={styles.tooboxes}>
          <Box className={styles.tooboximg}>
            <Image
              className={styles.tooimg}
              src="https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=365&q=80"
            />
            <Text className={styles.tootext}>Too many moving parts</Text>
            <Text className={styles.tootexts}>
              Understanding complex API interaction is difficult
            </Text>
          </Box>
        </Box>
      </Box>

      <Box>
        <Text className={styles.apitext}>A Glimpse Into the Future</Text>
        <Box className={styles.apitextcutting}>
          Seekret's cutting-edge API abservability platform leverages you
          application traffic to simplify API management automatically detects
          breaking changes and improves enginerring velocity with context and
          automation to the Api development lifecycle
        </Box>
       
      </Box>

      <Box className={styles.readabilitybox}>
        <Box className={styles.subreadabilitybox}>
        <Box className={styles.bulbicon} ><i class="fa-regular fa-lightbulb"></i></Box>
       <Text className={styles.readtext}>Readability</Text> 
        </Box>
    
       <Box className={styles.subreadabilitybox}>
        <Box className={styles.bulbicon} ><i class="fa-regular fa-lightbulb"></i></Box>
       <Text className={styles.readtext}>Consistency</Text> 
        </Box>
     
      <Box className={styles.subreadabilitybox}>
        <Box className={styles.bulbicon} ><i class="fa-solid fa-tv"></i></Box>
       <Text className={styles.readtext}>Velocity</Text> 
        </Box>

      </Box>
    </Box>
  );
};

export default HomePage;
