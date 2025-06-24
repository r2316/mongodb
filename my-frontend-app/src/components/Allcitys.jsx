/*import React, { useEffect, useState } from 'react'

import { API_URL } from '../config/apidetails'

export default function Allcity() {
    const [cityUI,setcityUI] = useState()
    useEffect(()=>
    {
        fetch(API_URL+"city")
        .then((d)=>d.json())
         .then((d)=>{
            console.log(d.citys)
            let city = d.citys
            let ui = city.map((u)=>{
                return <tr key={u._id}>
                <td className='border-1'>{u.name}</td>
                <td className='border-1'>{u.state}</td>
                 <td className='border-1'>{u.country}</td>
                <td className='border-1'>{u.population}</td>
                 <td className='border-1'>{u. area}</td>
                <td className='border-1'>{u.officiallanguage}</td>
                 <td className='border-1'>{u.metro}</td>
                </tr>
            })
            setcityUI(ui)
            })
        .catch((err)=>console.log(err))
    },[])
  return (
    <div>Allcitys:<br></br>
    <table className='border-2'>
        <thead>
        <tr>
        <th className='border-1'>name</th>
        <th className='border-1'>state</th>
        <th className='border-1'>country</th>
        <th className='border-1'> population</th>
        <th className='border-1'> area</th>
        <th className='border-1'>official language</th>
        <th className='border-1'>metro</th>
        </tr>
</thead>
<tbody>{cityUI}</tbody>
    </table>
    </div>
  )
}
  */
 

/*import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../config/apidetails'

export default function Allcity() {
  const [cityUI, setcityUI] = useState()

  useEffect(() => {
    axios.get(API_URL + "city")
      .then((res) => {
        let ui = res.data.citys.map((u) => (
          <tr key={u._id}>
            <td className='border-1'>{u.name}</td>
            <td className='border-1'>{u.state}</td>
            <td className='border-1'>{u.country}</td>
            <td className='border-1'>{u.population}</td>
            <td className='border-1'>{u.area}</td>
            <td className='border-1'>{u.officiallanguage}</td>
            <td className='border-1'>{u.metro}</td>
          </tr>
        ))
        setcityUI(ui)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>Allcitys:<br />
      <table className='border-2'>
        <thead>
          <tr>
            <th className='border-1'>name</th>
            <th className='border-1'>state</th>
            <th className='border-1'>country</th>
            <th className='border-1'>population</th>
            <th className='border-1'>area</th>
            <th className='border-1'>official language</th>
            <th className='border-1'>metro</th>
          </tr>
        </thead>
        <tbody>
          {cityUI}
        </tbody>
      </table>
    </div>
  )
}*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config/apidetails';

export default function Allcity() {
  const [cityUI, setcityUI] = useState([]);

  useEffect(() => {
    axios.get(API_URL + "city")
      .then((res) => {
        let ui = res.data.citys.map((u) => (
          <tr key={u._id}>
            <td>{u.name}</td>
            <td>{u.state}</td>
            <td>{u.country}</td>
            <td>{u.population}</td>
            <td>{u.area}</td>
            <td>{u.officiallanguage}</td>
            <td>{u.metro ? "Yes" : "No"}</td>
          </tr>
        ));
        setcityUI(ui);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>All Cities:<br />
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>State</th>
            <th>Country</th>
            <th>Population</th>
            <th>Area</th>
            <th>Language</th>
            <th>Metro</th>
          </tr>
        </thead>
        <tbody>
          {cityUI}
        </tbody>
      </table>
    </div>
  );
}
