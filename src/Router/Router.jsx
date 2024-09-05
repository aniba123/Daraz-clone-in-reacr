
// import React from 'react'
import {Route, Routes} from 'react-router-dom';
import pages from '../pages/export';
const Router = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<pages.Home/> }  />
        <Route path='/login' element={<pages.Login/> }  />
        <Route path='/signup' element={<pages.Signup/> }  />
        <Route path='/load' element={<pages.Load/> }  />
    </Routes>
    </>
  )
}

export default Router;
