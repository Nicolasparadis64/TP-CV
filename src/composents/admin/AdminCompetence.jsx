import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { HiSave } from "react-icons/hi";




export default function AdminCompetence() {
  const [competences, setCompetences] = useState([]);
  const [skill, setSkill] = useState('');
  const [isAdd, setIsAdd] = useState(false);

  async function fetchCompetence() {
    try {
      const response = await fetch("https://tp-cv-api.onrender.com/competence"); // corrected URL
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCompetences(data);
    } catch (error) {
      console.error("There has been a problem with your fetch operation:", error);
    }
  }

  useEffect(() => {
    fetchCompetence();
  }, []);

  async function handleDelete(id) {
    try {
      const response = await fetch(`https://tp-cv-api.onrender.com/competence/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      fetchCompetence();
    } catch (error) {
      console.error("There has been a problem with your delete operation:", error);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    // const data = { skill };
    if (skill !== "") {
      const response = await fetch("https://tp-cv-api.onrender.com/competence", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({skill}),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log(result);
      fetchCompetence();
      setIsAdd(false); // Hide the input field after saving
      setSkill(''); // Clear the input field after saving
    } 
  }

  function addSkill() {
    setIsAdd(true);
  }

  function handleCancel(){
    setIsAdd(false)
    setSkill('')
  }

//   async function handleSave() {
//     const response = await fetch("http://localhost:3001//competence", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({data}),
//       });
//       if {response.ok}
//   }

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-[#222] rounded-lg shadow-lg">
      <div className="flex justify-between mb-4">
      <h2 className="text-white flex text-center">Compétences</h2>
        <button onClick={addSkill} type="button" className="btn btn-primary btn-sm flex items-center gap-2">
          <IoAddCircleSharp size={24} />
          <span>Ajouter</span>
        </button>
      </div>

      {isAdd && (
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              placeholder="Ajouter une nouvelle compétence"
              onChange={(e) => setSkill(e.target.value)}
              type="text"
              name="skill"
              value={skill}
              className="flex-grow p-2 border border-gray-300 rounded-md"
            />
            <button type="submit" className="btn btn-primary btn-sm flex items-center gap-2">
              <HiSave size={24} />
              <span>Enregistrer</span>
            </button>
            <button onClick={handleCancel} className="btn btn-secondary btn-sm flex items-center gap-2">
              <MdCancel size={24} />
              <span>Annuler</span>
            </button>
          </div>
        </form>
      )}

      <div className="space-y-4">
        {competences.map((item) => (
          <div key={item._id} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
            <p className="flex-grow">{item.skill}</p>
            <button
              onClick={() => handleDelete(item._id)}
              className="btn btn-danger btn-sm flex items-center gap-2"
            >
              <MdDelete size={24} color="red" />
              <span>Supprimer</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
