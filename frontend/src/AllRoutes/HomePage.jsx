import { Box, Button, Heading, Image, Input, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { AppContext } from "../Context/AppContext";
import styles from "../Styles/HomePage.module.css";
const HomePage = () => {
  const { getcontents, contents, userdetails } = useContext(AppContext);

  const [name, setName] = useState("");
  const [contact, setcontact] = useState("");
  useEffect(() => {
    getcontents();
  }, []);

  async function handleAddLeads(name, contact) {
    try {
      let res = await fetch(
        "https://sgumentikbackendassignment.onrender.com/leads/addLeads",
        {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },

          body: JSON.stringify({ name, contact }),
        }
      );

      if (res.status == 200) {
        alert("Thanks For Contacting Us!");
        document.querySelector("#popup").style.display = "none";
      } else {
        alert("Something Went Wrong!");
      }
    } catch (err) {
      console.log(err);
    }
  }
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
            <span className={styles.userdetail}>{userdetails.name}</span>🎯 for Troikagency - UX/UI Design
            Agency•Follow•Hire Us
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

        <Text>eMail: <span className={styles.useremail}>{userdetails.email}</span></Text>

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
        <Box className={styles.apitexts}>{contents.apiApproach_content}</Box>
      </Box>

      <Box className={styles.toobox}>
        <Box className={styles.tooboxes}>
          <Box className={styles.tooboximg}>
            <Image className={styles.tooimg} src={contents.toomanyimage} />
            <Text className={styles.tootext}>{contents.toomanycontent}</Text>
            <Text className={styles.tootexts}>
              {contents.toomanysmallcontent}
            </Text>
          </Box>
        </Box>

        <Box className={styles.tooboxes}>
          <Box className={styles.tooboximg}>
            <Image className={styles.tooimg} src={contents.diminishingImage} />
            <Text className={styles.tootext}>
              {contents.diminishingContent}
            </Text>
            <Text className={styles.tootexts}>
              {contents.diminishingsmallcontent}
            </Text>
          </Box>
        </Box>
        <Box className={styles.tooboxes}>
          <Box className={styles.tooboximg}>
            <Image className={styles.tooimg} src={contents.changeImage} />
            <Text className={styles.tootext}>{contents.changeContent}</Text>
            <Text className={styles.tootexts}>
              {contents.changesmallcontent}
            </Text>
          </Box>
        </Box>
      </Box>

      <Box>
        <Text className={styles.apitext}>{contents.glimpse_content}</Text>
        <Box className={styles.apitextcutting}>
          {contents.seekers_cutting_edge}
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
          <Box className={styles.platformtext}>{contents.sekret_content}</Box>
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

          <Box id="popup" className={styles.popup}>
            <Heading>You Can Contact With Us</Heading>
            <Input
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter Name"
              type="email"
            />
            <Input
              onChange={(e) => {
                setcontact(e.target.value);
              }}
              placeholder="Enter ContactNumber"
              type="number"
            />
            <Button onClick={() => handleAddLeads(name, contact)}>
              Submit
            </Button>
            <Button
              className={styles.closepopup}
              id="close-popup"
              onClick={() => {
                document.querySelector("#popup").style.display = "none";
              }}
            >
              Close
            </Button>
          </Box>

          <Box
           
            onClick={() => {
              document.querySelector("#popup").style.display = "block";
            }}
            className={styles.contactlogo}
          >
            <Text className={styles.contacttext}>Click Me</Text>
            <Image
              className={styles.contactlogoimg}
              src="https://guitarzone.in/wp-content/uploads/2015/11/contact_us.png"
            />
          </Box>
        </Box>
      </Box>

      <Box className={styles.socialbox}>
      
        <Image
          className={styles.socialboximg}
          src="https://image.pitchbook.com/MHscGLdx0QAerX1Swj8EYpe9a5g1629461864512_200x200"
        />
        <Box className={styles.iconbox}>
          <Box
            onClick={() => {
              window.location.href = contents.fb_link;
            }}
          >
            <Image
              className={styles.facebookiconimage}
              src="https://play-lh.googleusercontent.com/5pZMqQYClc5McEjaISPkvhF8pDmlbLqraTMwk1eeqTlnUSjVxPCq-MItIrJPJGe7xW4"
            />
          </Box>
          <Box
            onClick={() => {
              window.location.href = contents.tweeter_link;
            }}
          >
            <Image
              className={styles.facebookiconimage}
              src="data:image/jpeg;base64,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"
            />
          </Box>
          <Box
            onClick={() => {
              window.location.href = contents.insta_link;
            }}
          >
            {" "}
            <Image
              className={styles.facebookiconimage}
              src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266__340.jpg"
            />
          </Box>
          <Box
            onClick={() => {
              window.location.href = contents.pinterest_link;
            }}
          >
            <Image
              className={styles.facebookiconimage}
              src="https://play-lh.googleusercontent.com/dVsv8Hc4TOUeLFAahxR8KANg22W9dj2jBsTW1VHv3CV-5NCZjP9D9i2j5IpfVx2NTB8=w600-h300-pc0xffffff-pd"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
