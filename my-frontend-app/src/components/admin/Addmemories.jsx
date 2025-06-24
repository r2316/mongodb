
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
export default function Addmemories() {
    let islogin = useSelector((s)=>s.admin.islogin)
     let navigate = useNavigate()
    useEffect(()=>
    {
    console.log(islogin)
       
     if(!islogin)
        {
            navigate("/adminHome")
        }
    },[islogin])
  
  return (
    <div>Addmemories : we will add memories form here</div>
  )
}
