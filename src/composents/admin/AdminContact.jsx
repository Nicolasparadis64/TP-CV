import React, { useEffect, useState } from 'react'

export default function AdminContact() {
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [prenom, setPrenom] = useState('')
  const [tel, setTel] = useState('')

  async function fetchContact() {
    const response = await fetch('https://tp-cv-api.onrender.com/contact')
    const data = await response.json()
    setNom(data[0].nom)
    setEmail(data[0].email)
    setPrenom(data[0].prenom)
    setTel(data[0].tel)
  }

  useEffect(() => {
    fetchContact()
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    const data = { tel, nom, email, prenom }
    fetch('https://tp-cv-api.onrender.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error))
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8 lg:p-10 bg-[#222] rounded-lg shadow-lg space-y-4 min-w-full mx-auto">
      <div className="flex flex-col">
        <label htmlFor="nom" className="mb-1 text-gray-700">Nom</label>
        <input
          id="nom"
          onChange={(e) => setNom(e.target.value)}
          type='text'
          name='nom'
          value={nom}
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 text-gray-700">Email</label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          name='email'
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="prenom" className="mb-1 text-gray-700">Prénom</label>
        <input
          id="prenom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          type='text'
          name='prenom'
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="tel" className="mb-1 text-gray-700">Téléphone</label>
        <input
          id="tel"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          type='tel'
          name='tel'
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button type='submit' className="p-2 bg-purple-800 text-white rounded-md hover:bg-purple-700">
        Valider
      </button>
    </form>
  )
}
