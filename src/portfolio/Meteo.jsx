import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";

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
