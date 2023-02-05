import { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [contents, setContents] = useState({});


  const handleSignIn = async (email,password) => {
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

      alert("You are logged in");

      localStorage.setItem("token", res.token);

      return data;
     
    } catch (err) {
      console.log(err);
      alert("Login Failed");
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
      weareContent: data,
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
      value={{ getcontents, contents, firstImage, weareContent ,handleSignIn}}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
