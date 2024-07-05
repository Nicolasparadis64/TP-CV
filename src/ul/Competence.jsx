import React, { useEffect, useState } from 'react'

export default function Competence() {
    const [competences, setCompetences] = useState([])
    async function fetchCompetence() {
        const response = await fetch('https://tp-cv-api.onrender.com/competence')
        const data = await response.json()
        // console.log(data);
        setCompetences(data)
    }
    useEffect(() => {
        fetchCompetence()
    })

    return (
      <div className="flex items-center justify-center flex-col">
          <h2 className='w-1/2 flex text-white justify-center items-center mb-10 bg-purple-800 p-5 rounded-lg shadow-xl'>
              Compétences
          </h2>
          <ul className='flex text-white justify-center items-center flex-col'>
              {competences.map(item => (
                  <li key={item._id}>{item.skill}</li>
              ))}
          </ul>
      </div>
  );
}