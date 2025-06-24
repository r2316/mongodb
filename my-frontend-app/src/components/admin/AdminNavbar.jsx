/*import React from 'react'
import { Link, useNavigate } from 'react-router'
import { logoutAdmin } from '../../slices/Adminslice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
export default function AdminNavbar() {
    let dispatch = useDispatch()
  return (
    <div>
        <nav className='bg-rose-600 flex list-none gap-10 text-white underline'>
            <li>
                <Link to="/addblog">Add Blog</Link> <br></br>
                 <Link to="/addphotos">Add photos</Link> <br></br>
                  <Link to="/addvideos">Add videos</Link> <br></br>
                   <Link to="/addmemories">Add memories</Link> <br></br>
               
            </li>
        </nav>
         <input type='button' value="Logout"
                 onClick={()=>dispatch(logoutAdmin())}/>
    </div>
  )
}
  */
 import React from 'react';
import { Link } from 'react-router-dom'; // Updated import for React Router v6+
import { useDispatch } from 'react-redux';
import { logoutAdmin } from '../../slices/Adminslice';

export default function AdminNavbar() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAdmin());
    // Add navigation logic here if needed
  };

  return (
    <div>
      <nav className=" p-4">
        <ul className="flex gap-6 text-white font-bold">
          <li>
            <Link to="/addblog" className="hover:underline">Add Blog</Link>
          </li>
          <li>
            <Link to="/Addphotos" className="hover:underline">Add Photos</Link>
          </li>
          <li>
            <Link to="/Addvideos" className="hover:underline">Add Videos</Link>
          </li>
          <li>
            <Link to="/Addmemories" className="hover:underline">Add Memories</Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleLogout}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
