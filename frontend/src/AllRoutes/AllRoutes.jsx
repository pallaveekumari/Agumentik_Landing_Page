import React from 'react'
import Admin from '../Admin/Admin'
import User from '../User/User'

const AllRoutes = () => {
  return (
   <Routes>
    <Route  path="/admin" element={<Admin/>}/>
    <Route path="/user" element={<User/>}/>
   </Routes>
  )
}

export default AllRoutes