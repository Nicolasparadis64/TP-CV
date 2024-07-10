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
    <div className="flex flex-col items-center justify-center px-12 py-5 max-md:p-16 max-sm:p-12 bg-[#222]">
      <h2 className="w-full sm:w-3/4 md:w-1/2 text-start text-white mb-10 bg-purple-800 p-5 rounded-lg shadow-xl">
        Centres Interets
      </h2>
      <div className="w-full sm:w-3/4 md:w-1/2 overflow-x-auto">
      <table className="min-w-full  shadow-md rounded-lg overflow-hidden">
        <thead >
          <tr className="text-grey text-left">
            <th className="py-3 px-4 text-2xl">Description</th>
          </tr>
        </thead>
        <tbody>
          {centreInteret.map((item) => (
            <tr className='text-white' key={item._id}>
              <td className="py-3 px-4">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}
