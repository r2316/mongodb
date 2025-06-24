/*import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserLogin from './Userlogin';
import { Link } from 'react-router'
import { logoutUser } from '../../slices/UserSlice';

export default function UserHome() {
  const isLogin = useSelector((state) => state.user.islogin);
  
  let ui = <Link to ="/addblog">Add blog</Link>
  const dispatch = useDispatch();

  return (
    <div className="text-center mt-10">
      {isLogin ? (
        <>
          <h2 className="text-2xl font-bold mb-4">Welcome to the Home Page!</h2>
          <h2 className="text-2xl font-bold mb-4 text-red-600">Add blogs here!!</h2>
          <div>
{ui}
          </div>
       <br></br>
   <button className="bg-red-500 text-white px-4 py-2 rounded"onClick={() => dispatch(logoutUser())}>
            Logout
          </button>

        </>
      ) : (
        <UserLogin />
      )}
    </div>
  );
}
  */
 import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserLogin from './Userlogin';
import { Link } from 'react-router-dom'; 
import { logoutUser } from '../../slices/UserSlice';

export default function UserHome() {
  const isLogin = useSelector((state) => state.user.islogin);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {isLogin ? (
        <div className="w-full max-w-2xl p-8 bg-white rounded shadow text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Welcome to the Home Page!</h2>
          <h2 className="text-xl font-semibold mb-6 text-red-500">Add blogs here!!</h2>

          <Link
            to="/addblog"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition mb-6"
          >
            Add Blog
          </Link>

          <div>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded transition"
              onClick={() => dispatch(logoutUser())}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <UserLogin />
      )}
    </div>
  );
}


 
 