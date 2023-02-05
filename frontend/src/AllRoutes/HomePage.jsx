import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { AppContext } from "../Context/AppContext";
import styles from "../Styles/HomePage.module.css";
const HomePage = () => {
  const { getcontents, contents } = useContext(AppContext);

  useEffect(() => {
    getcontents();
  }, []);
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
          // src="https://cdn.dribbble.com/userupload/3288518/file/original-e5dab85d72f26abb6625f13eab805d1e.png?compress=1&resize=1024x768"
          src={contents.firstImage}
        />
      </Box>

      <Box className={styles.heytextbox}>{contents.heyguys_content}</Box>
      <Box className={styles.new}>
        <Text>{contents.weare_content}</Text>

        {/* <Text>Skype: live:.cid.c9595de1a5711a73</Text> */}
        <Text>Skype: live:.cid.c9595de1a5711a73</Text>

        <Text>eMail: troikagency@gmail.com</Text>

        <Text>Thanks!</Text>
      </Box>

      <Box className={styles.mission}>
        <Image className={styles.missionimg} src={contents.secondImage} />
      </Box>

      <Box className={styles.solution}>
        <Box className={styles.solutionbox}>
          <Image
            className={styles.solutionboximg}
            src={contents.solutionImage}
          />
        </Box>
        <Box className={styles.solutionbox}>
          <Box className={styles.solutionboxtext}>
            {contents.solution_content}
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
          {contents.apiDevelopment_content}
        </Text>
        <Box className={styles.apitexts}>
          {contents.apiApproach_content}
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
          <Box className={styles.bulbicon}>
            <i class="fa-regular fa-lightbulb"></i>
          </Box>
          <Text className={styles.readtext}>Readability</Text>
        </Box>

        <Box className={styles.subreadabilitybox}>
          <Box className={styles.bulbicon}>
            <i class="fa-regular fa-lightbulb"></i>
          </Box>
          <Text className={styles.readtext}>Consistency</Text>
        </Box>

        <Box className={styles.subreadabilitybox}>
          <Box className={styles.bulbicon}>
            <i class="fa-solid fa-tv"></i>
          </Box>
          <Text className={styles.readtext}>Velocity</Text>
        </Box>
      </Box>

      <Box className={styles.platformdiv}>
        <Box className={styles.platformdivone}>
          <Box className={styles.platformtext}>
            The Seekret API Observability Platform
          </Box>
          <Box className={styles.platformtexts}>
            The ultimate foundation for managibg and maintaining APIs as they
            advance through the SDLC and beyond.
          </Box>
          <Box className={styles.float}>
            <Box className={styles.floatdiv}>Iterate 5xFaster</Box>
            <Box className={styles.floatdiv}>3x Better Coverage</Box>
            <Box className={styles.floatdiv}>100% Capability</Box>
          </Box>
        </Box>
        <Box className={styles.platformdivtwo}>
          <Image
            className={styles.platformdivimg}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ321t1wnnGxFRAndUoNV5JwpPqyyg3s9p60w&usqp=CAU"
          />
        </Box>
      </Box>

      <Box className={styles.contactcontainer}>
        <Text className={styles.contacttext}>Contact With Us</Text>
        <Box className={styles.contactmaindiv}>
          <Box className={styles.contactimg}>
            <Image
              className={styles.contactimges}
              src="https://assets-global.website-files.com/60e615980cab093e6f2db3c3/60f1c779e1930d77c301c343_Screen_Shot_2019-09-29_at_10.35.46_AM.png"
            />
          </Box>
          <Box className={styles.contactlogo}>
            <Image
              className={styles.contactlogoimg}
              src="https://guitarzone.in/wp-content/uploads/2015/11/contact_us.png"
            />
          </Box>
        </Box>
      </Box>



      <Box className={styles.socialbox}>
           <Image src="https://image.pitchbook.com/MHscGLdx0QAerX1Swj8EYpe9a5g1629461864512_200x200"/>
      <Box className={styles.iconbox}>
      <i class="fa-brands fa-facebook-f"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-linkedin"></i>
      </Box>
      
      </Box>
    </Box>
  );
};

export default HomePage;
