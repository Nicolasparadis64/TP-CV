import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { HiSave } from "react-icons/hi";



export default function AdminCentreInteret() {
  const [centreInteret, setCentreInteret] = useState([])
  const [description, setDescription] = useState('')
  const [isCentreInteret, setIsCentreInteret] = useState(false)


async function fetchCentreInteret() {
  try {
    const response = await fetch ('http://localhost:3001/centreInteret')
    if (!response.ok) {
      throw new Error ('Network response was not ok')
    } 
    const data = await response.json()
console.log(data);
setCentreInteret(data)
  } catch (error) {
    console.error('Error fetching languages:', error);
  }
}

useEffect(() => {
  fetchCentreInteret()
},[])

async function handleSubmit(event) {
  event.preventDefault();
  if (description !== "") {
    try {
      const response = await fetch ('http://localhost:3001/centreInteret', {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({description}),
      });
      if (!response.ok) {
        throw new Error ('Network response was not ok')
      }
      await response.json();
      fetchCentreInteret();
      setDescription('');
    } catch (error) {
      console.error('error addind language', error);
    }
  }
}

function addCentreInteret() {
  setIsCentreInteret(true)
}

function handleCancel() {
  setIsCentreInteret(false);
  setDescription('')
}

function handleSave() {
  console.log(description);
}

async function handleDelete(id) {
  try {
    const response = await fetch (`http://localhost:3001/centreInteret/${id}`, {
      method : 'DELETE'
    })
    if (!response.ok) {
      throw new Error ('network was not ok')
    }
    fetchCentreInteret()
  } catch (error) {
    console.error('Error deleting language', error);
  }
}

  return (
    <div>
      <button onClick={addCentreInteret} type="button" className="btn btn-primary btn-sm"><IoAddCircleSharp size={24}/></button>
      {isCentreInteret && (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Ajouter un nouveau centre d'interet"
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name="description"
            value={description}
          />
          <button onClick={handleSave} type="submit" className="btn btn-primary btn-sm my-1"><HiSave size={24}/></button>
          <button onClick={handleCancel} className="btn btn-primary btn-sm my-1"><MdCancel size={24}/></button>
        </form>
      )}
      <div>
        {centreInteret.map((item) => (
          <div key={item._id} className="flex justify-between items-center">
            <p>{item.description}</p>
            {/* <p>{item._id}</p> */}
            <button
              onClick={() => handleDelete(item._id)}
              className="btn btn-primary btn-sm my-1"
            >
              <MdDelete size={24} color="red"/>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
