import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [contents, setContents] = useState({});
  // useEffect(()=>{
  //     getcontents()
  //         },[])

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
    <AppContext.Provider value={{ getcontents, contents, firstImage ,weareContent}}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
