import React, { useEffect, useState } from 'react'

export default function Formation() {
    const [formation, setFormation] = useState([])

    async function fetchFormation() {
        try {
            const response = await fetch('https://tp-cv-api.onrender.com/formation')
            if (!response.ok) {
                throw new Error('network response was not ok')
            }
            const data = await response.json()
            setFormation(data)
        } catch (error) {
            console.error('Error fetching formation', error);
        }
    }

    useEffect(() => {
        fetchFormation()
    }, [])

    return (
        <div className="flex flex-col items-center justify-center px-12 py-5 max-md:p-16 max-sm:p-12 bg-[#222]">
            <h2 className="w-full sm:w-3/4 md:w-1/2 text-start text-white mb-10 bg-purple-800 p-5 rounded-lg shadow-xl">
                Formation
            </h2>
            <div className="w-full sm:w-3/4 md:w-1/2 overflow-x-auto">
                <table className="min-w-full  shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr className="text-grey text-left">
                            <th className="py-3 px-4 text-2xl">Name</th>
                            <th className="py-3 px-4 text-2xl">Date</th>
                            <th className="py-3 px-4 text-2xl">Experience</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formation.map((item) => (
                            <tr key={item._id} className="text-white">
                                <td className="py-3 px-4">{item.Nom}</td>
                                <td className="py-3 px-4">{item.Date}</td>
                                <td className="py-3 px-4">{item.Formation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
