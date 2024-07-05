import React, { useEffect, useState } from "react";

export default function Langue() {
  const [langues, setLangues] = useState([]);

  async function fetchLangue() {
    try {
      const response = await fetch(`https://tp-cv-api.onrender.com/langue`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setLangues(data);
    } catch (error) {
      console.error('Error fetching languages:', error);
    }
  }

  useEffect(() => {
    fetchLangue();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col">
      <h2 className="w-1/2 flex text-white justify-center items-center mb-10 bg-purple-800 p-5 rounded-lg shadow-xl">
        Langues
      </h2>
      <table className='flex justify-center items-center flex-col'>
        <thead>
          <tr>
            <th className="text-2xl">Name</th>
            <th className="text-2xl">Level</th>
          </tr>
        </thead>
        <tbody>
          {langues.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
