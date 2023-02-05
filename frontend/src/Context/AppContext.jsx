import { createContext, useEffect, useState } from "react";

export const AppContext=createContext()


function AppContextProvider({ children }) {

const [contents,setContents]=useState({})
// useEffect(()=>{
//     getcontents()
//         },[])

async function getcontents()
{

    // console.log("hi")
try{
let res=await fetch("http://localhost:2000/content")
let data=await res.json()
// console.log(data)
// console.log("hi")
setContents(data[0]);

}
catch(err)
{
    console.log(err)
}
}
    return(
        <AppContext.Provider value={{getcontents,contents}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider