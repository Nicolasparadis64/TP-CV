import React from 'react'

export default function Meteo() {
  return (
    <div>
        <div >
        <button className='flex flex-row'>
            <h2>Météo</h2>
            <Link to="https://appli-meteo.onrender.com">
            <FaGithub className='p-2 h-8 w-8'/>
            </Link>
        </button>
        </div>
    </div>
  )
}
