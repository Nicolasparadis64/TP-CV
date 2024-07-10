import React, { useEffect, useState } from 'react'

export default function Experience() {
const [experience, setExperience] = useState ([])

async function fetchExperience () {
    try {
        const response = await fetch ('https://tp-cv-api.onrender.com/experience')
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
    <div className="flex flex-col items-center justify-center px-12 py-5 max-md:p-16 max-sm:p-12 bg-[#222]">
      <h2 className="w-full sm:w-3/4 md:w-1/2 text-start text-white mb-10 bg-purple-800 p-5 rounded-lg shadow-xl">
        Experiences
      </h2>
      <div className="w-full sm:w-3/4 md:w-1/2 overflow-x-auto">
      <table className="min-w-full  shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="text-grey text-left">
            <th className="py-3 px-4 text-2xl">Name</th>
            <th className="py-3 px-4 text-2xl">Date</th>
            <th className="py-3 px-4 text-2xl">experience</th>
          </tr>
        </thead>
        <tbody>
          {experience.map((item) => (
            <tr key={item._id} className='text-white'>
              <td className="py-3 px-4">{item.Nom}</td>
              <td className="py-3 px-4">{item.Date}</td>
              <td className="py-3 px-4"> {item.experience} </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}
