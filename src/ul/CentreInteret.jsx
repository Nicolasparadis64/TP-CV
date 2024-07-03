import React, { useEffect, useState } from 'react'

export default function CentreInteret() {
    const [centreInteret, setCentreInteret] = useState([])

    async function fetchCentreInteret() {
        try {
            const response = await fetch (`http://localhost:3001/centreInteret`);
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
    <div>
      <h2 className="w-full flex text-white justify-center items-center mb-10 bg-purple-800 p-5 rounded-lg shadow-xl">
        Centres Interets
      </h2>
      <table>
        <thead>
          <tr>
            <th className="text-2xl">Description</th>
          </tr>
        </thead>
        <tbody>
          {centreInteret.map((item) => (
            <tr key={item._id}>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
