import React, { useEffect, useState } from 'react'

export default function Formation() {
    const [formation, setFormation] = useState([])

    async function fetchFormation() {
        try {
            const response = await fetch ('http://localhost:3001/formation')
            if (!response.ok) {
                throw new Error ('network response was not ok')
            }
            const data = await response.json()
            setFormation(data)
        } catch (error) {
            console.error('Error fetching formation', error);
        }
    }

    useEffect(() => {
        fetchFormation()
    }, [])

  return (
    <div>
      <h2 className="w-full flex text-white justify-center items-center mb-10 bg-purple-800 p-5 rounded-lg shadow-xl">
        Formation
      </h2>
      <table>
        <thead>
          <tr>
            <th className="text-2xl">Name</th>
            <th className="text-2xl">Date</th>
            <th className='text-2xl'>experience</th>
          </tr>
        </thead>
        <tbody>
          {formation.map((item) => (
            <tr key={item._id}>
              <td>{item.Nom}</td>
              <td>{item.Date}</td>
              <td>{item.Formation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
