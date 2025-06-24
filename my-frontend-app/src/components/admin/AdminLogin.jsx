import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { logoutAdmin,loginAdmin } from '../../slices/Adminslice'
export default function AdminLogin() {
  let usernameref = useRef()
  let pwdref = useRef()
  let dispatch = useDispatch()
  const [msg,setmsg ] = useState("")
  let chklogin=()=>
  {
    if(usernameref.current.value=="admin" && pwdref.current.value=="123456")
    {
        dispatch(loginAdmin())
    }
    else
    {
      setmsg("Invalid credentials")
    }
  }
  return (
    <div>AdminLogin
      <div><label htmlFor="">Username</label> <input className="border-2" type="text" ref={usernameref} /></div><br></br>
      <div><label htmlFor="">password</label> <input  className="border-2" type="password" ref={pwdref} /></div><br></br>
      <div><input  className="bg-blue-500 border-2 h-8 w-20 text-white rounded-[5px] hover:bg-blue-700"
       type="button" value="Login" onClick={()=>chklogin()} /><br />
      {msg}</div>
    </div>
  )
}
