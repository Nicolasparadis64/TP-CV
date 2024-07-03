import React, { useEffect, useState } from 'react'

export default function Experience() {
const [experience, setExperience] = useState ([])

async function fetchExperience () {
    try {
        const response = await fetch ('http://localhost:3001/experience')
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setExperience(data)
    } catch (error) {
        console.error(`error fetching experience :`, error);
    }
}

useEffect(() => {
    fetchExperience()
}, [])

  return (
    <div>
      <h2 className="w-full flex text-white justify-center items-center mb-10 bg-purple-800 p-5 rounded-lg shadow-xl">
        Experiences
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
          {experience.map((item) => (
            <tr key={item._id}>
              <td>{item.Nom}</td>
              <td>{item.Date}</td>
              <td> {item.experience} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
