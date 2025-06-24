import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Link, Links } from 'react-router-dom';
import './App.css'
import Allusers from './components/Allusers';
import Adduser from './components/Adduser';
import Allcity from './components/Allcitys';
import AddCity from './components/Addcity';
import AdminLogin from './components/admin/AdminLogin';
import Adminhome from './components/admin/Adminhome';
import { useSelector } from 'react-redux';
import AdminNavbar from './components/admin/AdminNavbar';

import Addphotos from './components/admin/Addphotos';
import Addvideos from './components/admin/Addvideos';
import Addmemories from './components/admin/Addmemories';
import UserRegistration from './components/users/UserRegistration';
import UserLogin from './components/users/Userlogin';
import UserHome from './components/users/UserHome';
import AddBlog from './components/users/AddBlog';
import AllBlogs from './components/users/AllBlogs';


function App() {
  //let islogin = useSelector((s)=>(s.admin.islogin))
let islogin = useSelector((s)=>(s.admin.islogin))
let userislogin = useSelector((S)=>S.user.islogin)
  
  return (
    <div>
      
       
      <div className="min-h-screen bg-gray-100">
      <nav className="bg-orange-500 p-4 shadow-md">
        <div className="flex gap-6 text-white font-semibold text-lg">
          <Link className="hover:underline" to="/showusers">All Users</Link> <br></br>
          <Link className="hover:underline" to="/adduser">Add User</Link><br></br>
          <Link className="hover:underline" to="/showcities">All Cities</Link><br></br>
          <Link className="hover:underline" to="/addcity">Add City</Link><br></br>
          <Link to="/adminHome">Admin</Link>
         {/* <Link to="/registration">UserRegistration</Link>
         <Link to ="/Userlogin">Login</Link> */}
          <Link to="/registration">User Registration </Link>
          <Link to ="/blogs">All blogs</Link>
        
        
        {userislogin?<Link to="/userHome"> Home </Link>:<Link to="/userlogin">User login</Link>}


                   
          
        </div>
        {islogin? <AdminNavbar></AdminNavbar>:" "}

       
      </nav>

      <main className="p-6">
        <Routes>
          <Route path="/adminHome" element={<Adminhome></Adminhome>}/>
        
          <Route path='/addphotos' element={<Addphotos></Addphotos>}/>
          <Route path='/addvideos' element={<Addvideos></Addvideos>}/>
          <Route path='/addmemories' element={<Addmemories></Addmemories>}/>
          <Route path ="/adminlogin" element={<AdminLogin></AdminLogin>}/>
         <Route path="/userHome" element={<UserHome></UserHome>}></Route>
         <Route path="/blogs" element={<AllBlogs></AllBlogs>}/>

         <Route path="/addblog" element={<AddBlog></AddBlog>}></Route>
          <Route path="/adduser" element={<Adduser />} />
          <Route path="/showusers" element={<Allusers />} />
          <Route path="/addcity" element={<AddCity />} />
          <Route path="/showcities" element={<Allcity />} />
          <Route path="/registration" element={<UserRegistration></UserRegistration>}/>
           <Route path="/userlogin" element={<UserLogin></UserLogin>}/>
           {/*<Route path="/home" element={<Home></Home>}/>*/}

          
         
        </Routes>
      </main>
    </div>
    </div>
  );
}

export default App;


