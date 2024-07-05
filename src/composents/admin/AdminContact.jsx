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
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setNom(e.target.value)}
        type='text'
        name='nom'
        value={nom}
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type='email'
        name='email'
      />
      <input
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
        type='text'
        name='prenom'
      />
      <input
        value={tel}
        onChange={(e) => setTel(e.target.value)}
        type='tel'
        name='tel'
      />
      <button type='submit'>Valider</button>
    </form>
  )
}
