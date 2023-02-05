import { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [contents, setContents] = useState({});
const [userdetails,setUserdetails]=useState({})

  const handleSignIn = async (email, password) => {
    const payload = {
      email,
      password,
    };

    try {
      let res = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },

        body: JSON.stringify(payload),
      });
      let data = await res.json();

    //   alert("You are logged in");


    if( res.status==200)
    {
        localStorage.setItem("token", res.token);
        let userobject={
            name:data.username,
            email:data.userEmail
        }
        setUserdetails(userobject)
       return data;
    }
    else{
        alert("Login Failed")
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
      let res = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },

        body: JSON.stringify(payload),
      });

      let data=await res.json()
      alert("SignUp successfull!")
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

    let res = await fetch("http://localhost:8080/content/update", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(payload),
    });

    let res2 = await res.json();
    return res2;
  }



  async function weareContent(data) {
    const payload = {
      "weare_content": data,
    };

    let res = await fetch("http://localhost:8080/content/update", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(payload),
    });

    let res2 = await res.json();
    return res2;
  }

  async function getcontents() {
    // console.log("hi")
    try {
      let res = await fetch("http://localhost:8080/content");
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
      value={{ getcontents, userdetails, signup,contents, firstImage, weareContent, handleSignIn }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
