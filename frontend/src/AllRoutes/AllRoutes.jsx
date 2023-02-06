import React from 'react'
import Admin from '../Admin/Admin'

import EntryPage from './EntryPage'
import {Routes,Route} from "react-router-dom"
import HomePage from './HomePage'
const AllRoutes = () => {
  return (
   <Routes>
    <Route  path="/admin" element={<Admin/>}/>
   
    <Route path="/" element={<EntryPage/>}/>
    <Route path="/home" element={<HomePage/>}/>
   </Routes>
  )
}

export default AllRoutes