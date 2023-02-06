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
import { jsPDF } from "jspdf";
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
    apidevelopment,
    solutionContent,
    solutionImage,
    getcontents,
    getUsers,
    leads,
    users,
    getLeads,
    contents,
    firstImage,
    userdetails,
    weareContent,
    heyguys,
    secondImage,
    apiapproach,
    toomanyimage,
    toomanycontent,
    toomanysmallcontent,
    diminishingImage,
    diminishingcontent,
    diminishingsmallcontent,
    changeImage,
    changesmallcontent,
    changeContent,
    facebook,
    pinterest,
    insta,
    tweeter,
  } = useContext(AppContext);

  const [imageurl, setimageurl] = useState("");
  const [weare, setweare] = useState("");
  const [heyguyscontent, setheyguy] = useState("");
  const [seconimages, setsecondimages] = useState("");
  const [solution, setsolution] = useState("");
  const [solutionurl, setsolutionurl] = useState("");
  const [apidev, setapidev] = useState("");
  const [apiapp, setapiapp] = useState("");
  const [toomany, settoomany] = useState("");
  const [tommanycontent, settoomanycontent] = useState("");
  const [toomanysmall, settoomanysmall] = useState("");
  const [diminishingimage, setdimish] = useState("");
  const [diminishcontent, setdimisnshingcontent] = useState("");
  const [diminishsmallcontent, setdimishsmallcontent] = useState("");
  const [changeimage, setchangeimage] = useState("");
  const [changesmall, setchangesmall] = useState("");
  const [changeontent, setchangecontent] = useState("");

  const [facebooklink, setfacebooklink] = useState("");
  const [instabooklink, setinstabooklink] = useState("");
  const [pinterestlink, setpinterestlink] = useState("");
  const [tweeterlink, settweeterlink] = useState("");
  useEffect(() => {
    getcontents();
    getUsers();
    getLeads();
  }, []);

  const handleAdmin = async (email) => {
    try {
      let res = await fetch(
        "https://sgumentikbackendassignment.onrender.com/auth/makeadmin",
        {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },

          body: JSON.stringify({ email }),
        }
      );
      let data = await res.json();
      if (res.status == 200) {
        alert(`${email} added as an admin!`);
        getUsers();
      } else {
        alert("Something Went wrong!");
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
           <span className={styles.userdetail}>{userdetails.name}</span> 🎯 for Troikagency - UX/UI Design
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
            <Button
                onClick={() => {
                  document.querySelector("#popup").style.display =
                    "none";
                }}
              >
                Close
              </Button>
          </Box>
        </Center>
      </Box>

      <Box className={styles.heytextbox}>
        <Text>
          {contents.heyguys_content}
          <Button
            className={styles.editbtn}
            onClick={() => {
              document.querySelector("#popupheyguys").style.display = "block";
            }}
          >
            Edit
          </Button>

          <Box id="popupheyguys" className={styles.popup}>
            <Input
              onChange={(e) => setheyguy(e.target.value)}
              placeholder="Enter title"
              type="text"
            />
            <Button
              className={styles.closepopup}
              onClick={() => {
                heyguys(heyguyscontent).then((res) => {
                  getcontents();
                });
                document.querySelector("#popupheyguys").style.display = "none";
              }}
            >
              Update
            </Button>
            <Button
                onClick={() => {
                  document.querySelector("#popupheyguys").style.display =
                    "none";
                }}
              >
                Close
              </Button>
          </Box>
        </Text>
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
            <Button
                onClick={() => {
                  document.querySelector("#popupweare").style.display =
                    "none";
                }}
              >
                Close
              </Button>
          </Box>
        </Text>

        {/* <Text>Skype: live:.cid.c9595de1a5711a73</Text> */}
        <Text>Skype: live:.cid.c9595de1a5711a73</Text>

        <Text>eMail: <span className={styles.useremail}>{userdetails.email}</span></Text>

        <Text>Thanks!</Text>
      </Box>

      <Box className={styles.mission}>
        <Image className={styles.missionimg} src={contents.secondImage} />

        <Button
          className={styles.editbtn}
          onClick={() => {
            document.querySelector("#popupsecondimage").style.display = "block";
          }}
        >
          Edit
        </Button>
        <Center>
          <Box id="popupsecondimage" className={styles.popup}>
            <Input
              onChange={(e) => setsecondimages(e.target.value)}
              placeholder="Enter Image URL"
              type="url"
            />
            <Button
              className={styles.closepopup}
              onClick={() => {
                secondImage(seconimages).then((res) => {
                  getcontents();
                });
                document.querySelector("#popupsecondimage").style.display =
                  "none";
              }}
            >
              Update
            </Button>
            <Button
                onClick={() => {
                  document.querySelector("#popupsecondimage").style.display =
                    "none";
                }}
              >
                Close
              </Button>
          </Box>
        </Center>
      </Box>

      <Box className={styles.solution}>
        <Box className={styles.solutionbox}>
          <Image
            className={styles.solutionboximg}
            src={contents.solutionImage}
          />

          <Button
            className={styles.editbtn}
            onClick={() => {
              document.querySelector("#popupsolutionimage").style.display =
                "block";
            }}
          >
            Edit
          </Button>
          <Center>
            <Box id="popupsolutionimage" className={styles.popup}>
              <Input
                onChange={(e) => setsolutionurl(e.target.value)}
                placeholder="Enter Image URL"
                type="url"
              />
              <Button
                className={styles.closepopup}
                onClick={() => {
                  solutionImage(solutionurl).then((res) => {
                    getcontents();
                  });
                  document.querySelector("#popupsolutionimage").style.display =
                    "none";
                }}
              >
                Update
              </Button>
              <Button
                onClick={() => {
                  document.querySelector("#popupsolutionimage").style.display =
                    "none";
                }}
              >
                Close
              </Button>
            </Box>
          </Center>
        </Box>
        <Box className={styles.solutionbox}>
          <Box className={styles.solutionboxtext}>
            <Text>
              {contents.solution_content}
              <Button
                className={styles.editbtn}
                onClick={() => {
                  document.querySelector("#popupsolution").style.display =
                    "block";
                }}
              >
                Edit
              </Button>

              <Box id="popupsolution" className={styles.popup}>
                <Input
                  onChange={(e) => setsolution(e.target.value)}
                  placeholder="Enter title"
                  type="text"
                />
                <Button
                  className={styles.closepopup}
                  onClick={() => {
                    solutionContent(solution).then((res) => {
                      getcontents();
                    });
                    document.querySelector("#popupsolution").style.display =
                      "none";
                  }}
                >
                  Update
                </Button>
                <Button
                onClick={() => {
                  document.querySelector("#popupsolution").style.display =
                    "none";
                }}
              >
                Close
              </Button>
              </Box>
            </Text>
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
          <Button
            className={styles.editbtn}
            onClick={() => {
              document.querySelector("#popapidev").style.display = "block";
            }}
          >
            Edit
          </Button>
          <Center>
            <Box id="popapidev" className={styles.popup}>
              <Input
                onChange={(e) => setapidev(e.target.value)}
                placeholder="Enter title"
                type="text"
              />
              <Button
                className={styles.closepopup}
                onClick={() => {
                  apidevelopment(apidev).then((res) => {
                    getcontents();
                  });
                  document.querySelector("#popapidev").style.display = "none";
                }}
              >
                Update
              </Button>
              <Button
                onClick={() => {
                  document.querySelector("#popapidev").style.display =
                    "none";
                }}
              >
                Close
              </Button>
            </Box>
          </Center>
        </Text>
        <Box className={styles.apitexts}>
          {contents.apiApproach_content}
          <Button
            className={styles.editbtn}
            onClick={() => {
              document.querySelector("#popapiappr").style.display = "block";
            }}
          >
            Edit
          </Button>
          <Center>
            <Box id="popapiappr" className={styles.popup}>
              <Input
                onChange={(e) => setapiapp(e.target.value)}
                placeholder="Enter title"
                type="text"
              />
              <Button
                className={styles.closepopup}
                onClick={() => {
                  apiapproach(apiapp).then((res) => {
                    getcontents();
                  });
                  document.querySelector("#popapiappr").style.display = "none";
                }}
              >
                Update
              </Button>

              <Button
                onClick={() => {
                  document.querySelector("#popapiappr").style.display =
                    "none";
                }}
              >
                Close
              </Button>
            </Box>
          </Center>
        </Box>
      </Box>

      <Box className={styles.toobox}>
        <Box className={styles.tooboxes}>
          <Box className={styles.tooboximg}>
            <Image className={styles.tooimg} src={contents.toomanyimage} />
            <Button
              className={styles.editbtn}
              onClick={() => {
                document.querySelector("#popuptoomanyimage").style.display =
                  "block";
              }}
            >
              Edit
            </Button>
            <Center>
              <Box id="popuptoomanyimage" className={styles.popup}>
                <Input
                  onChange={(e) => settoomany(e.target.value)}
                  placeholder="Enter Image URL"
                  type="url"
                />
                <Button
                  className={styles.closepopup}
                  onClick={() => {
                    toomanyimage(toomany).then((res) => {
                      getcontents();
                    });
                    document.querySelector("#popuptoomanyimage").style.display =
                      "none";
                  }}
                >
                  Update
                </Button>
                <Button
                onClick={() => {
                  document.querySelector("#popuptoomanyimage").style.display =
                    "none";
                }}
              >
                Close
              </Button>
              </Box>
            </Center>
            <Text className={styles.tootext}>
              {contents.toomanycontent}

              <Button
                className={styles.editbtn}
                onClick={() => {
                  document.querySelector("#popmanycontent").style.display =
                    "block";
                }}
              >
                Edit
              </Button>

              <Box id="popmanycontent" className={styles.popup}>
                <Input
                  onChange={(e) => settoomanycontent(e.target.value)}
                  placeholder="Enter title"
                  type="text"
                />
                <Button
                  className={styles.closepopup}
                  onClick={() => {
                    toomanycontent(tommanycontent).then((res) => {
                      getcontents();
                    });
                    document.querySelector("#popmanycontent").style.display =
                      "none";
                  }}
                >
                  Update
                </Button>
                <Button
                onClick={() => {
                  document.querySelector("#popmanycontent").style.display =
                    "none";
                }}
              >
                Close
              </Button>
              </Box>
            </Text>
            <Text className={styles.tootexts}>
              {contents.toomanysmallcontent}
              <Button
                className={styles.editbtn}
                onClick={() => {
                  document.querySelector("#popmanysmallcontent").style.display =
                    "block";
                }}
              >
                Edit
              </Button>

              <Box id="popmanysmallcontent" className={styles.popup}>
                <Input
                  onChange={(e) => settoomanysmall(e.target.value)}
                  placeholder="Enter title"
                  type="text"
                />
                <Button
                  className={styles.closepopup}
                  onClick={() => {
                    toomanysmallcontent(toomanysmall).then((res) => {
                      getcontents();
                    });
                    document.querySelector(
                      "#popmanysmallcontent"
                    ).style.display = "none";
                  }}
                >
                  Update
                </Button>
                <Button
                onClick={() => {
                  document.querySelector("#popmanysmallcontent").style.display =
                    "none";
                }}
              >
                Close
              </Button>
              </Box>
            </Text>
          </Box>
        </Box>

        <Box className={styles.tooboxes}>
          <Box className={styles.tooboximg}>
            <Image className={styles.tooimg} src={contents.diminishingImage} />

            <Button
              className={styles.editbtn}
              onClick={() => {
                document.querySelector("#popupdimishimage").style.display =
                  "block";
              }}
            >
              Edit
            </Button>
            <Center>
              <Box id="popupdimishimage" className={styles.popup}>
                <Input
                  onChange={(e) => setdimish(e.target.value)}
                  placeholder="Enter Image URL"
                  type="url"
                />
                <Button
                  className={styles.closepopup}
                  onClick={() => {
                    diminishingImage(diminishingimage).then((res) => {
                      getcontents();
                    });
                    document.querySelector("#popupdimishimage").style.display =
                      "none";
                  }}
                >
                  Update
                </Button>
                <Button
                onClick={() => {
                  document.querySelector("#popupdimishimage").style.display =
                    "none";
                }}
              >
                Close
              </Button>
              </Box>
            </Center>
            <Text className={styles.tootext}>
              {contents.diminishingContent}

              <Button
                className={styles.editbtn}
                onClick={() => {
                  document.querySelector("#popdimishcontent").style.display =
                    "block";
                }}
              >
                Edit
              </Button>

              <Box id="popdimishcontent" className={styles.popup}>
                <Input
                  onChange={(e) => setdimisnshingcontent(e.target.value)}
                  placeholder="Enter title"
                  type="text"
                />
                <Button
                  className={styles.closepopup}
                  onClick={() => {
                    diminishingcontent(diminishcontent).then((res) => {
                      getcontents();
                    });
                    document.querySelector("#popdimishcontent").style.display =
                      "none";
                  }}
                >
                  Update
                </Button>
                <Button
                onClick={() => {
                  document.querySelector("#popdimishcontent").style.display =
                    "none";
                }}
              >
                Close
              </Button>
              </Box>
            </Text>
            <Text className={styles.tootexts}>
              {contents.diminishingsmallcontent}

              <Button
                className={styles.editbtn}
                onClick={() => {
                  document.querySelector(
                    "#popdimishsmallcontent"
                  ).style.display = "block";
                }}
              >
                Edit
              </Button>

              <Box id="popdimishsmallcontent" className={styles.popup}>
                <Input
                  onChange={(e) => setdimishsmallcontent(e.target.value)}
                  placeholder="Enter title"
                  type="text"
                />
                <Button
                  className={styles.closepopup}
                  onClick={() => {
                    diminishingsmallcontent(diminishsmallcontent).then(
                      (res) => {
                        getcontents();
                      }
                    );
                    document.querySelector(
                      "#popdimishsmallcontent"
                    ).style.display = "none";
                  }}
                >
                  Update
                </Button>
                <Button
                onClick={() => {
                  document.querySelector("#popdimishsmallcontent").style.display =
                    "none";
                }}
              >
                Close
              </Button>
              </Box>
            </Text>
          </Box>
        </Box>
        <Box className={styles.tooboxes}>
          <Box className={styles.tooboximg}>
            <Image className={styles.tooimg} src={contents.changeImage} />

            <Button
              className={styles.editbtn}
              onClick={() => {
                document.querySelector("#popchangeimage").style.display =
                  "block";
              }}
            >
              Edit
            </Button>
            <Center>
              <Box id="popchangeimage" className={styles.popup}>
                <Input
                  onChange={(e) => setchangeimage(e.target.value)}
                  placeholder="Enter Image URL"
                  type="url"
                />
                <Button
                  className={styles.closepopup}
                  onClick={() => {
                    changeImage(changeimage).then((res) => {
                      getcontents();
                    });
                    document.querySelector("#popchangeimage").style.display =
                      "none";
                  }}
                >
                  Update
                </Button>
                <Button
                onClick={() => {
                  document.querySelector("#popchangeimage").style.display =
                    "none";
                }}
              >
                Close
              </Button>
              </Box>
            </Center>

            <Text className={styles.tootext}>
              {contents.changeContent}
              <Button
                className={styles.editbtn}
                onClick={() => {
                  document.querySelector("#popchangecontent").style.display =
                    "block";
                }}
              >
                Edit
              </Button>

              <Box id="popchangecontent" className={styles.popup}>
                <Input
                  onChange={(e) => setchangecontent(e.target.value)}
                  placeholder="Enter title"
                  type="text"
                />
                <Button
                  className={styles.closepopup}
                  onClick={() => {
                    changeContent(changeontent).then((res) => {
                      getcontents();
                    });
                    document.querySelector("#popchangecontent").style.display =
                      "none";
                  }}
                >
                  Update
                </Button>
               
                <Button
                onClick={() => {
                  document.querySelector("#popchangecontent").style.display =
                    "none";
                }}
              >
                Close
              </Button>
              </Box>
            </Text>
            <Text className={styles.tootexts}>
              {contents.changesmallcontent}
              <Button
                className={styles.editbtn}
                onClick={() => {
                  document.querySelector(
                    "#popdchangesmallcontent"
                  ).style.display = "block";
                }}
              >
                Edit
              </Button>

              <Box id="popdchangesmallcontent" className={styles.popup}>
                <Input
                  onChange={(e) => setchangesmall(e.target.value)}
                  placeholder="Enter title"
                  type="text"
                />
                <Button
                  className={styles.closepopup}
                  onClick={() => {
                    changesmallcontent(changesmall).then((res) => {
                      getcontents();
                    });
                    document.querySelector(
                      "#popdchangesmallcontent"
                    ).style.display = "none";
                  }}
                >
                  Update
                </Button>
                <Button
                onClick={() => {
                  document.querySelector("#popdchangesmallcontent").style.display =
                    "none";
                }}
              >
                Close
              </Button>
              </Box>
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

      <Box className={styles.iconbox}>
        <Box>
          <Image
            className={styles.facebookiconimage}
            src="https://play-lh.googleusercontent.com/5pZMqQYClc5McEjaISPkvhF8pDmlbLqraTMwk1eeqTlnUSjVxPCq-MItIrJPJGe7xW4"
          />
          <Button
            className={styles.editbtn}
            onClick={() => {
              document.querySelector("#popfacebookimage").style.display =
                "block";
            }}
          >
            Edit
          </Button>
          <Center>
            <Box id="popfacebookimage" className={styles.popup}>
              <Input
                onChange={(e) => setfacebooklink(e.target.value)}
                placeholder="Enter Image URL"
                type="url"
              />
              <Button
                className={styles.closepopup}
                onClick={() => {
                  facebook(facebooklink).then((res) => {
                    getcontents();
                  });
                  document.querySelector("#popfacebookimage").style.display =
                    "none";
                }}
              >
                Update
              </Button>
              <Button
                onClick={() => {
                  document.querySelector("#popfacebookimage").style.display =
                    "none";
                }}
              >
                Close
              </Button>
            </Box>
          </Center>
        </Box>
        <Box>
          <Image
            className={styles.facebookiconimage}
            src="data:image/jpeg;base64,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"
          />
          <Button
            className={styles.editbtn}
            onClick={() => {
              document.querySelector("#poptweeterimage").style.display =
                "block";
            }}
          >
            Edit
          </Button>
          <Center>
            <Box id="poptweeterimage" className={styles.popup}>
              <Input
                onChange={(e) => settweeterlink(e.target.value)}
                placeholder="Enter Image URL"
                type="url"
              />
              <Button
                className={styles.closepopup}
                onClick={() => {
                  tweeter(tweeterlink).then((res) => {
                    getcontents();
                  });
                  document.querySelector("#poptweeterimage").style.display =
                    "none";
                }}
              >
                Update
              </Button>
              <Button
                onClick={() => {
                  document.querySelector("#poptweeterimage").style.display =
                    "none";
                }}
              >
                Close
              </Button>
              
            </Box>
          </Center>
        </Box>
        <Box>
          {" "}
          <Image
            className={styles.facebookiconimage}
            src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266__340.jpg"
          />
          <Button
            className={styles.editbtn}
            onClick={() => {
              document.querySelector("#popinstaimage").style.display = "block";
            }}
          >
            Edit
          </Button>
          <Center>
            <Box id="popinstaimage" className={styles.popup}>
              <Input
                onChange={(e) => setinstabooklink(e.target.value)}
                placeholder="Enter Image URL"
                type="url"
              />
              <Button
                className={styles.closepopup}
                onClick={() => {
                  insta(instabooklink).then((res) => {
                    getcontents();
                  });
                  document.querySelector("#popinstaimage").style.display =
                    "none";
                }}
              >
                Update
              </Button>
              <Button
                onClick={() => {
                  document.querySelector("#popinstaimage").style.display =
                    "none";
                }}
              >
                Close
              </Button>
            </Box>
          </Center>
        </Box>
        <Box>
          <Image
            className={styles.facebookiconimage}
            src="https://play-lh.googleusercontent.com/dVsv8Hc4TOUeLFAahxR8KANg22W9dj2jBsTW1VHv3CV-5NCZjP9D9i2j5IpfVx2NTB8=w600-h300-pc0xffffff-pd"
          />

          <Button
            className={styles.editbtn}
            onClick={() => {
              document.querySelector("#poppinterestimage").style.display =
                "block";
            }}
          >
            Edit
          </Button>
          <Center>
            <Box id="poppinterestimage" className={styles.popup}>
              <Input
                onChange={(e) => setpinterestlink(e.target.value)}
                placeholder="Enter Image URL"
                type="url"
              />
              <Button
                className={styles.closepopup}
                onClick={() => {
                  pinterest(pinterestlink).then((res) => {
                    getcontents();
                  });
                  document.querySelector("#poppinterestimage").style.display =
                    "none";
                }}
              >
                Update
              </Button>
              <Button
                onClick={() => {
                  document.querySelector("#poppinterestimage").style.display =
                    "none";
                }}
              >
                Close
              </Button>
            </Box>
          </Center>
        </Box>
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

        <Button
          onClick={() => {
            let doc = new jsPDF();
            leads.forEach((el, i) => {
              doc.text(
                50,
                10 + i * 10,
                "Name : " + el.name + "   Contact Number : " + el.contact
              );
            });
            doc.save("Converted PDF");
          }}
        >
          Dowload As PDF
        </Button>
      </Box>

      <Box  className={styles.leadbox}>
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
