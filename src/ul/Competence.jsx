import React, { useEffect, useState } from "react";

export default function Competence() {
  const [competences, setCompetences] = useState([]);
  async function fetchCompetence() {
    const response = await fetch("https://tp-cv-api.onrender.com/competence");
    const data = await response.json();
    // console.log(data);
    setCompetences(data);
  }
  useEffect(() => {
    fetchCompetence();
  });

  return (
    <div className="flex flex-col items-center justify-center px-12 py-5 max-md:p-16 max-sm:p-12">
      <h2 className="w-full sm:w-3/4 md:w-1/2 text-start text-white mb-10 bg-purple-800 p-5 rounded-lg shadow-xl">
        Compétences
      </h2>
      <div className="w-full sm:w-3/4 md:w-1/2 overflow-x-auto">
        <table className="min-w-full  shadow-md rounded-lg overflow-hidden">
            <thead>
            {competences.map((item) => (
          <tr className="flex text-white">
              <th className="py-3 px-4" key={item._id}>
                {item.skill}
              </th>
          </tr>
            ))}
          </thead>
        </table>
      </div>
    </div>
  );
}
