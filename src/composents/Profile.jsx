import React from 'react'

export default function Profile({nom, prenom}) {
  return (
    <div className='flex flex-row items-center justify-center gap-5 mb-5 h-[500px]'>
        <img className='w-[300px] rounded-lg' src="./Imports/img1.jpg"></img>
        <h2 className='text-5xl font-semibold text-white text-start'> {nom} {prenom} </h2>
    </div>
  )
}
