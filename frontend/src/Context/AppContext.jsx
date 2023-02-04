import { createContext, useState } from "react";

export const AppContext=createContext()


const AppContext=({children})=>{

const [contents,setContents]=useState({})


async function getcontents()
{
try{
let res=await fetch("http://localhost:6000/content")
let data=await res.json()
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

export default AppContext