import { Box, Button, Heading, Image, Input, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { AppContext } from "../Context/AppContext";
import styles from "../Styles/HomePage.module.css";
const HomePage = () => {
  const { getcontents, contents, userdetails } = useContext(AppContext);


  const[name,setName]=useState("")
  const [contact,setcontact]=useState("")
  useEffect(() => {
    getcontents();
  }, []);



  async function handleAddLeads(name,contact)
  {
    
try{
let res=await fetch("http://localhost:8080/leads/addLeads",{
  method: "POST",
        headers: {
          "content-Type": "application/json",
        },

        body: JSON.stringify({name,contact}),
      
})

if(res.status==200)
{

  alert("Thanks For Contacting Us!")
  document.querySelector("#popup").style.display = "none";

}
else{
  alert("Something Went Wrong!")
}
}
catch(err)
{
  console.log(err)
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
            {userdetails.name}🎯 for Troikagency - UX/UI Design
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

        <Text>eMail: {userdetails.email}</Text>

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
            <Image
              className={styles.tooimg}
              src={contents.toomanyimage}
            />
            <Text className={styles.tootext}>{contents.toomanycontent}</Text>
            <Text className={styles.tootexts}>
              {contents.toomanysmallcontent}
            </Text>
          </Box>
        </Box>

        <Box className={styles.tooboxes}>
          <Box className={styles.tooboximg}>
            <Image
              className={styles.tooimg}
              src={contents.diminishingImage}
            />
            <Text className={styles.tootext}>{contents.diminishingContent}</Text>
            <Text className={styles.tootexts}>
              {contents.diminishingsmallcontent}
            </Text>
          </Box>
        </Box>
        <Box className={styles.tooboxes}>
          <Box className={styles.tooboximg}>
            <Image
              className={styles.tooimg}
              src={contents.changeImage}
            />
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
          <Box className={styles.platformtext}>
          {contents.sekret_content}
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

          <Box id="popup" className={styles.popup}>
            <Heading>You Can Contact With Us</Heading>
            <Input onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name" type="email" />
            <Input onChange={(e)=>{setcontact(e.target.value)}} placeholder="Enter ContactNumber" type="number" />
            <Button onClick={()=>handleAddLeads(name,contact)}>Submit</Button>
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
            <Image
              className={styles.contactlogoimg}
              src="https://guitarzone.in/wp-content/uploads/2015/11/contact_us.png"
            />
          </Box>
        </Box>
      </Box>

      <Box className={styles.socialbox}>
        <Image src="https://image.pitchbook.com/MHscGLdx0QAerX1Swj8EYpe9a5g1629461864512_200x200" />
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
