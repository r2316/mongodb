/*import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config/apidetails';

export default function AddCity() {
  const [cities, setCities] = useState([]);
  const nameref = useRef();
  const stateref = useRef();
  const countryref = useRef();
  const popref = useRef();
  const arearef = useRef();
  const langref = useRef();
  const metroref = useRef();

  useEffect(() => {
    axios.get(API_URL + "city")
      .then(res => setCities(res.data.citys))
      .catch(err => console.error(err));
  }, []);

  const addCity = () => {
    const city = {
      name: nameref.current.value,
      state: stateref.current.value,
      country: countryref.current.value,
      population: parseInt(popref.current.value),
      area: parseFloat(arearef.current.value),
      officiallanguage: langref.current.value,
      metro: metroref.current.checked
    };
    axios.post(API_URL + "city", city)
      .then(res => {
        alert(res.data.msg);
        setCities(prev => [...prev, res.data.data]);
        clearInputs();
      })
      .catch(err => alert(err.message));
  };

  const clearInputs = () => {
    nameref.current.value = "";
    stateref.current.value = "";
    countryref.current.value = "";
    popref.current.value = "";
    arearef.current.value = "";
    langref.current.value = "";
    metroref.current.checked = false;
  };

  return (
    <div>
      <h3>Add City</h3>
     <p className='font-bold'>ENTER NAME:  <input type="text" placeholder="Name" ref={nameref} /><br /></p>
      <p className='font-bold'>ENTER STATE: <input type="text" placeholder="State" ref={stateref} /><br /></p>
     <p className='font-bold'>ENTER COUNTRY:  <input type="text" placeholder="Country" ref={countryref} /><br /></p>
     <p className='font-bold'>ENTER POPULATION:  <input type="number" placeholder="Population" ref={popref} /><br /></p>
     <p className='font-bold'>ENTER AREA:  <input type="number" placeholder="Area" ref={arearef} /><br /></p>
     <p className='font-bold'>ENTER OFFICIAL LANGUAGE:  <input type="text" placeholder="Official Language" ref={langref} /><br /></p>
     <p className='font-bold'>ENTER YES/NO:   <input type="text" placeholder="metro" ref={metroref} /><br /></p>
      <button onClick={addCity}>Add City</button>

      <hr />
      <h4>City List</h4>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th><th>State</th><th>Country</th><th>Population</th><th>Area</th><th>Language</th><th>Metro</th>
          </tr>
        </thead>
        <tbody>
          {cities.map(c => (
            <tr key={c._id}>
              <td>{c.name}</td>
              <td>{c.state}</td>
              <td>{c.country}</td>
              <td>{c.population}</td>
              <td>{c.area}</td>
              <td>{c.officiallanguage}</td>
              <td>{c.metro ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
  */

import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config/apidetails';

export default function AddCity() {
  const [cities, setCities] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const nameref = useRef();
  const stateref = useRef();
  const countryref = useRef();
  const popref = useRef();
  const arearef = useRef();
  const langref = useRef();
  const metroref = useRef();

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = () => {
    axios.get(API_URL + "city")
      .then(res => setCities(res.data.citys))
      .catch(err => console.error(err));
  };

  const clearInputs = () => {
    nameref.current.value = "";
    stateref.current.value = "";
    countryref.current.value = "";
    popref.current.value = "";
    arearef.current.value = "";
    langref.current.value = "";
    metroref.current.checked = false;
    setEditMode(false);
    setEditId(null);
  };

  const addCity = () => {
    const city = {
      name: nameref.current.value,
      state: stateref.current.value,
      country: countryref.current.value,
      population: parseInt(popref.current.value),
      area: parseFloat(arearef.current.value),
      officiallanguage: langref.current.value,
      metro: metroref.current.checked
    };

    if (editMode) {
      axios.put(API_URL + `city/${editId}`, city)
        .then(res => {
          alert(res.data.msg);
          fetchCities();
          clearInputs();
        })
        .catch(err => alert(err.message));
    } else {
      axios.post(API_URL + "city", city)
        .then(res => {
          alert(res.data.msg);
          setCities(prev => [...prev, res.data.data]);
          clearInputs();
        })
        .catch(err => alert(err.message));
    }
  };

  const deleteCity = (id) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      axios.delete(API_URL + `city/${id}`)
        .then(res => {
          alert(res.data.msg);
          setCities(prev => prev.filter(c => c._id !== id));
        })
        .catch(err => alert(err.message));
    }
  };

  const editCity = (city) => {
    nameref.current.value = city.name;
    stateref.current.value = city.state;
    countryref.current.value = city.country;
    popref.current.value = city.population;
    arearef.current.value = city.area;
    langref.current.value = city.officiallanguage;
    metroref.current.checked = city.metro;

    setEditMode(true);
    setEditId(city._id);
  };

  return (
    <div>
      <h3>{editMode ? "Edit City" : "Add City"}</h3>
      <p className='font-bold'>ENTER NAME: <input type="text" className="border-2"  ref={nameref} /><br /></p><br></br>
      <p className='font-bold'>ENTER STATE: <input type="text" className="border-2" ref={stateref} /><br /></p><br></br>
      <p className='font-bold'>ENTER COUNTRY: <input type="text" className="border-2"  ref={countryref} /><br /></p><br></br>
      <p className='font-bold'>ENTER POPULATION: <input type="number" className="border-2" ref={popref} /><br /></p><br></br>
      <p className='font-bold'>ENTER AREA: <input type="number" className="border-2" ref={arearef} /><br /></p><br></br>
      <p className='font-bold'>ENTER OFFICIAL LANGUAGE: <input  className="border-2"type="text"  ref={langref} /><br /></p><br></br>
     <p className='font-bold'>ENTER yes/no: <input type="text"  className="border-2" ref={metroref} /><br /></p><br></br>

      <button onClick={addCity}>{editMode ? "Update City" : "Add City"}</button>
      {editMode && <button onClick={clearInputs} style={{ marginLeft: "10px" }}>Cancel</button>}

      <hr />
      <h4>City List</h4>
      <table  className='border-1'>
        <thead  className='border-1'>
          <tr  className='border-1'>
            <th  className='border-1'>Name</th><th  className='border-1'>State</th>
            <th  className='border-1'>Country</th><th  className='border-1'>Population</th>
            <th  className='border-1'>Area</th><th  className='border-1'>Language</th><th  className='border-1'>Metro</th><th  className='border-1'></th>
          </tr>
        </thead>
        <tbody>
          {cities.map(c => (
            <tr key={c._id}>
              <td  className='border-1'>{c.name}</td>
              <td  className='border-1'>{c.state}</td>
              <td  className='border-1'>{c.country}</td>
              <td  className='border-1'>{c.population}</td>
              <td  className='border-1'>{c.area}</td>
              <td  className='border-1'>{c.officiallanguage}</td>
              <td  className='border-1'>{c.metro ? "Yes" : "No"}</td>
              <td>
                <button  className='border-1  bg-green-600 text-amber-50 p-2 hover:font-bold' onClick={() => editCity(c)}>Edit</button>{" "}
                <button  className='border-1  bg-red-600 text-amber-50 p-2 hover:font-bold' onClick={() => deleteCity(c._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

