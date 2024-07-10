import React from 'react'

export default function Profile({nom, prenom}) {
  return (
    <div className='flex flex-col min-w-full' >
      <div className='flex flex-row items-center text-center gap-5 my-10 '>
        <img className='w-36 rounded-lg' src="./Imports/profil.png"></img>
        <h2 className='text-5xl font-semibold text-white text-center '> {nom} {prenom} </h2>
        </div>
      <div className='pb-20'>
        <p>Ancien étudiant rigoureux et réfléchi en recherche d’une ré-insertion scolaire en alternance.
Prêt à utiliser mes compétences et mon enthousiasme pour faire avancer les missions.</p>
</div>
    </div>
  )
}
