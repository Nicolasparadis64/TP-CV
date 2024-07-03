import React, { useEffect, useState } from "react";

export default function Langue() {
  const [langues, setLangues] = useState([]);

  async function fetchLangue() {
    try {
      const response = await fetch(`http://localhost:3001/langue`);
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
    <div>
      <h2 className="w-full flex text-white justify-center items-center mb-10 bg-purple-800 p-5 rounded-lg shadow-xl">
        Langues
      </h2>
      <table>
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
