import React, { useEffect, useState } from 'react'

export default function CentreInteret() {
    const [centreInteret, setCentreInteret] = useState([])

    async function fetchCentreInteret() {
        try {
            const response = await fetch (`https://tp-cv-api.onrender.com//centreInteret`);
            if (!response.ok) {
                throw new Error ('Network response was not ok')
            }
            const data = await response.json()
            setCentreInteret(data)
        } catch (error) {
            console.error('Error fetching languages:', error);
        }
    }

useEffect(() => {
    fetchCentreInteret()
},[])

  return (
    <div className="flex items-center justify-center flex-col">
      <h2 className="w-1/2 flex text-white justify-center items-center mb-10 bg-purple-800 p-5 rounded-lg shadow-xxl">
        Centres Interets
      </h2>
      <table  className='flex justify-center items-center flex-col'>
        <thead >
          <tr>
            <th className="text-2xl">Description</th>
          </tr>
        </thead>
        <tbody>
          {centreInteret.map((item) => (
            <tr key={item._id}>
              <td >{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
