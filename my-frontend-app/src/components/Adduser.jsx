
/*import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { API_URL } from '../config/apidetails'

export default function Adduser() {
    // name:req.body.name,age:parseInt(req.body.age)
    let nameref = useRef()
    let ageref = useRef()
    let btnref = useRef()
    let idref = useRef()
    const [users,setusers]=useState([])
    useEffect(()=>
    {
      axios.get(API_URL+"user")
      .then((d)=>setusers(d.data.users))
    },[])

    const add=()=>
    {
        let data = {name:nameref.current.value,age:ageref.current.value}
        if(btnref.current.value=="Add")
        {
             axios.post(API_URL+"user",data)
        .then((d)=>{
          alert(d.data.msg)
          setusers(d.data.users)}
    )
        .catch((err)=>alert(err))
  }
  else
  {
    data.id =idref.current.value
    console.log(data)
     axios.put(API_URL+"user",data)
        .then((d)=>{
          alert(d.data.msg)
          setusers(d.data.users)}
    )
        .catch((err)=>alert(err))

  }
empty()
  }

    const empty = ()=>
    {
      nameref.current.value=""
      ageref.current.value=""
    }
    const deleteuser =async (id)=>
    {
      // alert(id)
      let i = confirm("are you sure want to delete ?")
      if(!i)
      {
        return
        
      }
      await axios.delete(API_URL+"user/"+id)
      .then((d)=>
      {
       alert(d.data.msg) 
       setusers(d.data.users)
      })
    }
    const setedit = (user)=>
    {
      nameref.current.value=user.name;
      ageref.current.value = user.age;
      btnref.current.value= "Update"
      idref.current,value = user._id
    }
  return (
    <div>
    <div>Adduser
<input type='text' ref ={idref} disabled className="hidden"></input>
        <p>Enter NAme : <input type="text" ref={nameref} className='border-1' /></p>
        <p>enter age : <input type="number" ref={ageref}  className='border-1'/></p>
        <input type="button" value="Add user" ref={btnref} onClick={()=>add()} className='h-8 w-24 bg-blue-400 text-white' />
    </div>
    <div>
<table>
  <thead>
    <tr>
      <th className='border-1' >name</th>
      <th className='border-1'>age</th>
      <th className='border-1  bg-emerald-600 text-amber-50' >edit</th>
      <th className='border-1 bg-red-600 text-amber-50'>delete</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user)=>{
   return   <tr>
    <td className='border-1 font-bold '>{user.name}</td>
    <td className='border-1 '>{user.age}</td>
    <td className='border-1  bg-emerald-600 text-amber-50 p-2 hover:font-bold'><input type="button" 
    value = "edit"/></td>
    <td className='border-1 bg-red-600 text-amber-50 p-2 hover:font-bold'><input type="button" 
    value="delete" onClick={()=>deleteuser((user)._id)}/></td>
    </tr>
    })}
  </tbody>
</table>
    </div>
    </div>
  )
}
  */




import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { API_URL } from '../config/apidetails'

export default function Adduser() {
    
    let nameref = useRef()
    let ageref = useRef()
    let btnref = useRef()
    let idref = useRef()
    const [users,setusers]=useState([])
    useEffect(()=>
    {
      axios.get(API_URL+"user")
      .then((d)=>setusers(d.data.users))
    },[])

    const add=()=>
    {
        let data = {name:nameref.current.value,age:ageref.current.value}
        if(btnref.current.value=="Add")
          {
                  axios.post(API_URL+"user",data)
              .then((d)=>{
              alert(d.data.msg)
                setusers(d.data.users)}
                )
              .catch((err)=>alert(err))
        }
        else
        {
          
          data.id = idref.current.value
console.log(data)
           axios.put(API_URL+"user",data)
              .then((d)=>{
              alert(d.data.msg)
                setusers(d.data.users)}
                )
              .catch((err)=>alert(err))
            }
        empty()
    }

    const empty = ()=>
    {
      nameref.current.value=""
      ageref.current.value=""
    }
    const deleteuser =async (id)=>
    {
      // alert(id)
      let i = confirm("are you sure want to delete ?")
      if(!i)
      {
        return
        
      }
      await axios.delete(API_URL+"user/"+id)
      .then((d)=>
      {
       alert(d.data.msg) 
       setusers(d.data.users)
      })
    }
    const setedit = (user)=>
    {
      nameref.current.value = user.name;
      ageref.current.value = user.age
      btnref.current.value = "Update"
      idref.current.value = user._id
    }
  return (
    <div>
    <div>
      <p className='font-bold'>AddUser</p><br></br>
        <input type="text" ref={idref}  disabled className='hidden'/>
        <p className='font-bold'>ENTER NAME: <input type="text" ref={nameref} className='border-1' /></p><br></br>
        <p className='font-bold'>ENTER AGE : <input type="number" ref={ageref}  className='border-1'/></p><br></br>
        <input type="button" value="Add" ref={btnref} onClick={()=>add()} className='h-8 w-24 bg-blue-400 text-white hover:bg-blue-800' />
    </div>
    <div>
<table>
  <thead>
    <tr>
      <th className='border-1'>name</th>
      <th className='border-1'>age</th>
      <th className='border-1'>edit</th>
      <th className='border-1'>delete</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user)=>{
   return   <tr>
    <td className='border-1'>{user.name}</td>
    <td className='border-1'>{user.age}</td>
    <td className='border-1  bg-green-600 text-amber-50 p-2 hover:font-bold'><input type="button" 
    value = "edit" onClick={()=>setedit(user)}/></td>
    <td className='border-1  bg-red-600 text-amber-50 p-2 hover:font-bold'><input type="button" 
    value="delete" onClick={()=>deleteuser((user)._id)}/></td>
    </tr>
    })}
  </tbody>
</table>
    </div>
    </div>
  )
}

