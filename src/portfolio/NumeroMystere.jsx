import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";


export default function NumeroMystere() {
  return (
    <div>
        <div >
        <button className='flex flex-row'>
            <h2>Numéro mystère</h2>
            <Link to="https://nicolasparadis64.github.io/numero-mystere/">
            <FaGithub className='p-2 h-8 w-8'/>
            </Link>
            {/* <a href="https://nicolasparadis64.github.io/Outdoor-aventure-final/"></a> */}
        </button>
        </div>
    </div>
  )
}
