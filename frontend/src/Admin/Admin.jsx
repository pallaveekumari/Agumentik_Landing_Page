import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { AppContext } from "../Context/AppContext";
import styles from "../Styles/Admin.module.css";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Admin = () => {
  const {
    handleChange,
    getcontents,
    getUsers,
    leads,
    users,
    getLeads,
    contents,
    firstImage,
    userdetails,
    weareContent,
  } = useContext(AppContext);

  const [imageurl, setimageurl] = useState("");
  const [weare, setweare] = useState("");

  useEffect(() => {
    getcontents();
    getUsers();
    getLeads();
  }, []);

  const handleAdmin = async (email) => {
    try {
      let res = await fetch("http://localhost:8080/auth/makeadmin", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },

        body: JSON.stringify({ email }),
      });
      let data=await res.json()
      if(res.status==200)
      {
        alert(`${email} added as an admin!`)
        getUsers()
      }
      else
      {
        alert("Something Went wrong!")
      }
      
    } catch (err) {
      console.log(err);
    }
  };

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
        <Button
          className={styles.editbtn}
          onClick={() => {
            document.querySelector("#popup").style.display = "block";
          }}
        >
          Edit
        </Button>
        <Center>
          <Box id="popup" className={styles.popup}>
            <Input
              onChange={(e) => setimageurl(e.target.value)}
              placeholder="Enter Image URL"
              type="url"
            />
            <Button
              className={styles.closepopup}
              onClick={() => {
                firstImage(imageurl).then((res) => {
                  getcontents();
                });
                document.querySelector("#popup").style.display = "none";
              }}
            >
              Update
            </Button>
          </Box>
        </Center>
      </Box>

      <Box className={styles.heytextbox}>
        Hey Guys, Here is the " API Platform Landing page " the product help to
        arrange your APIS , I enjoy a lot to do this Work . Let me know your
        feedback & press the "L" button. If you have any UI/UX related project
        ping Us here:
      </Box>
      <Box className={styles.new}>
        <Text>
          {contents.weare_content}
          <Button
            className={styles.editbtn}
            onClick={() => {
              document.querySelector("#popupweare").style.display = "block";
            }}
          >
            Edit
          </Button>

          <Box id="popupweare" className={styles.popup}>
            <Input
              onChange={(e) => setweare(e.target.value)}
              placeholder="Enter title"
              type="text"
            />
            <Button
              className={styles.closepopup}
              onClick={() => {
                weareContent(weare).then((res) => {
                  getcontents();
                });
                document.querySelector("#popupweare").style.display = "none";
              }}
            >
              Update
            </Button>
          </Box>
        </Text>

        {/* <Text>Skype: live:.cid.c9595de1a5711a73</Text> */}
        <Text>Skype: live:.cid.c9595de1a5711a73</Text>

        <Text>eMail: {userdetails.email}</Text>

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
        </Box>
        <Box className={styles.platformdivtwo}></Box>
      </Box>

      <Box className={styles.leadbox}>
        <Heading>Leads</Heading>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Contact Number</Th>
              </Tr>
            </Thead>
            <Tbody>
              {leads?.map((el) => {
                return (
                  <Tr>
                    <Td>{el.name}</Td>
                    <Td> {el.contact}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Box>
        <Heading>Users</Heading>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {users?.map((el) => {
                return (
                  <Tr>
                    <Td>{el.name}</Td>
                    <Td> {el.email}</Td>
                    <Td>
                      <Button onClick={() => handleAdmin(el.email)}>
                        Add as Admin
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Admin;
