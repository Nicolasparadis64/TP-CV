import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";

export default function ShopCo() {
  return (
<div>
        <div >
        <button className='flex flex-row'>
            <h2>Shop-Co</h2>
            <Link to="https://github.com/Nicolasparadis64/projet-shop-co">
            <FaGithub className='p-2 h-8 w-8'/>
            </Link>
        </button>
        </div>
    </div>  )
}
