import { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [contents, setContents] = useState({});
  const [userdetails, setUserdetails] = useState({});
  const [leads, setLeads] = useState([]);
  const [users, setUsers] = useState([]);

  const getLeads = async () => {
    try {
      let res = await fetch(
        "https://sgumentikbackendassignment.onrender.com/leads"
      );
      let data = await res.json();
      setLeads(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getUsers = async () => {
    try {
      let res = await fetch(
        "https://sgumentikbackendassignment.onrender.com/auth/users"
      );
      let data = await res.json();
      if (res.status == 200) {
        let updated = data.data.filter((el) => {
          return el.admin == false;
        });
        setUsers(updated);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleSignIn = async (email, password) => {
    const payload = {
      email,
      password,
    };

    try {
      let res = await fetch(
        "https://sgumentikbackendassignment.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },

          body: JSON.stringify(payload),
        }
      );
      let data = await res.json();

      //   alert("You are logged in");

      if (res.status == 200) {
        localStorage.setItem("token", res.token);
        let userobject = {
          name: data.username,
          email: data.userEmail,
        };
        setUserdetails(userobject);
        return data;
      } else {
        alert("Login Failed");
      }
    } catch (err) {
      console.log(err);
      alert("Login Failed");
    }
  };

  const signup = async (name, email, password) => {
    const payload = {
      name,
      email,
      password,
    };

    try {
      let res = await fetch(
        "https://sgumentikbackendassignment.onrender.com/auth/signup",
        {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },

          body: JSON.stringify(payload),
        }
      );

      let data = await res.json();
      alert("SignUp successfull!");
      return data;
    } catch (err) {
      console.log(err);
      alert("Signup Filed Please try again....");
    }
  };
  async function firstImage(data) {
    const payload = {
      firstImage: data,
    };

    let res = await fetch(
      "https://sgumentikbackendassignment.onrender.com/content/update",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(payload),
      }
    );

    let res2 = await res.json();
    return res2;
  }

  async function weareContent(data) {
    const payload = {
      weare_content: data,
    };

    let res = await fetch(
      "https://sgumentikbackendassignment.onrender.com/content/update",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(payload),
      }
    );

    let res2 = await res.json();
    return res2;
  }

  async function heyguys(data) {
    const payload = {
      heyguys_content: data,
    };

    let res = await fetch(
      "https://sgumentikbackendassignment.onrender.com/content/update",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(payload),
      }
    );

    let res2 = await res.json();
    return res2;
  }

  async function secondImage(data) {
    const payload = {
      secondImage: data,
    };

    let res = await fetch(
      "https://sgumentikbackendassignment.onrender.com/content/update",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(payload),
      }
    );

    let res2 = await res.json();
    return res2;
  }

  async function solutionContent(data) {
    const payload = {
      solution_content: data,
    };

    let res = await fetch(
      "https://sgumentikbackendassignment.onrender.com/content/update",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(payload),
      }
    );

    let res2 = await res.json();
    return res2;
  }

  async function apiapproach(data) {
    const payload = {
      apiApproach_content: data,
    };

    let res = await fetch(
      "https://sgumentikbackendassignment.onrender.com/content/update",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(payload),
      }
    );

    let res2 = await res.json();
    return res2;
  }

  async function solutionImage(data) {
    const payload = {
      solutionImage: data,
    };

    let res = await fetch(
      "https://sgumentikbackendassignment.onrender.com/content/update",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(payload),
      }
    );

    let res2 = await res.json();
    return res2;
  }
  async function toomanyimage(data) {
    const payload = {
      toomanyimage: data,
    };

    let res = await fetch(
      "https://sgumentikbackendassignment.onrender.com/content/update",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(payload),
      }
    );

    let res2 = await res.json();
    return res2;
  }

  async function apidevelopment(data) {
    const payload = {
      apiDevelopment_content: data,
    };

    let res = await fetch(
      "https://sgumentikbackendassignment.onrender.com/content/update",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(payload),
      }
    );

    let res2 = await res.json();
    return res2;
  }

  async function toomanycontent(data) {
    const payload = {
      toomanycontent: data,
    };

    let res = await fetch(
      "https://sgumentikbackendassignment.onrender.com/content/update",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(payload),
      }
    );

    let res2 = await res.json();
    return res2;
  }

  async function toomanysmallcontent(data) {
    const payload = {
      toomanysmallcontent: data,
    };

    let res = await fetch(
      "https://sgumentikbackendassignment.onrender.com/content/update",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(payload),
      }
    );

    let res2 = await res.json();
    return res2;
  }

  async function diminishingImage(data) {
    const payload = {
      diminishingImage: data,
    };

    let res = await fetch(
      "https://sgumentikbackendassignment.onrender.com/content/update",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(payload),
      }
    );

    let res2 = await res.json();
    return res2;
  }

  async function diminishingcontent(data) {
    const payload = {
      diminishingContent: data,
    };

    let res = await fetch(
      "https://sgumentikbackendassignment.onrender.com/content/update",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(payload),
      }
    );

    let res2 = await res.json();
    return res2;
  }

  async function diminishingsmallcontent(data) {
    const payload = {
      diminishingsmallcontent: data,
    };

    let res = await fetch(
      "https://sgumentikbackendassignment.onrender.com/content/update",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(payload),
      }
    );

    let res2 = await res.json();
    return res2;
  }

  async function changeImage(data) {
    const payload = {
      changeImage: data,
    };

    let res = await fetch(
      "https://sgumentikbackendassignment.onrender.com/content/update",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(payload),
      }
    );

    let res2 = await res.json();
    return res2;
  }

  async function changeContent(data) {
    const payload = {
      changeContent: data,
    };

    let res = await fetch(
      "https://sgumentikbackendassignment.onrender.com/content/update",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(payload),
      }
    );

    let res2 = await res.json();
    return res2;
  }

  async function changesmallcontent(data) {
    const payload = {
      changesmallcontent: data,
    };

    let res = await fetch(
      "https://sgumentikbackendassignment.onrender.com/content/update",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(payload),
      }
    );

    let res2 = await res.json();
    return res2;
  }



  async function facebook(data) {
    const payload = {
      fb_link: data,
    };

    let res = await fetch(
      "https://sgumentikbackendassignment.onrender.com/content/update",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(payload),
      }
    );

    let res2 = await res.json();
    return res2;
  }


  
  async function tweeter(data) {
    const payload = {
      tweeter_link: data,
    };

    let res = await fetch(
      "https://sgumentikbackendassignment.onrender.com/content/update",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(payload),
      }
    );

    let res2 = await res.json();
    return res2;
  }



  async function insta(data) {
    const payload = {
      insta_link: data,
    };

    let res = await fetch(
      "https://sgumentikbackendassignment.onrender.com/content/update",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(payload),
      }
    );

    let res2 = await res.json();
    return res2;
  }



  async function pinterest(data) {
    const payload = {
      pinterest_link: data,
    };

    let res = await fetch(
      "https://sgumentikbackendassignment.onrender.com/content/update",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(payload),
      }
    );

    let res2 = await res.json();
    return res2;
  }
  async function getcontents() {
    // console.log("hi")
    try {
      let res = await fetch(
        "https://sgumentikbackendassignment.onrender.com/content"
      );
      let data = await res.json();
      // console.log(data)
      // console.log("hi")
      setContents(data[0]);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <AppContext.Provider
      value={{
        getcontents,
        toomanyimage,
        changeImage,
        changeContent,
        changesmallcontent,
        diminishingcontent,
        diminishingsmallcontent,
        toomanysmallcontent,
        diminishingImage,
        toomanycontent,
        secondImage,
        apiapproach,
        apidevelopment,
        solutionImage,
        getLeads,
        heyguys,
        solutionContent,
        userdetails,
        getUsers,
        leads,
        users,
        signup,
        contents,
        firstImage,
        weareContent,
        handleSignIn,
        facebook,
        pinterest,
        insta,
        tweeter
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
