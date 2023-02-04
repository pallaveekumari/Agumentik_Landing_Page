import { createContext, useState } from "react";

export const AppContext=createContext()


const AppContextProvider=({children})=>{

const [contents,setContents]=useState({})


async function getcontents()
{
try{
let res=await fetch("http://localhost:6000/content")
let data=await res.json()
console.log("hi")
console.log(data)
setContents(data[0])

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