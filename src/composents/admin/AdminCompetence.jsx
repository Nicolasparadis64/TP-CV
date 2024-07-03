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
      const response = await fetch("http://localhost:3001/competence"); // corrected URL
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
      const response = await fetch(`http://localhost:3001/competence/${id}`, {
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
      const response = await fetch("http://localhost:3001//competence", {
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
    <div>
      <button onClick={addSkill} type="button" className="btn btn-primary btn-sm"><IoAddCircleSharp size={24}/>
</button>
      {isAdd && (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Ajouter une nouvelle compétence"
            onChange={(e) => setSkill(e.target.value)}
            type="text"
            name="skill"
            value={skill}
          />
          <button type="submit" className="btn btn-primary btn-sm my-1">
          <HiSave size={24}/>
          </button>
          <button onClick={handleCancel} className="btn btn-primary btn-sm my-1"><MdCancel size={24}/>
</button>
        </form>
      )}
      <div>
        {competences.map((item) => (
          <div key={item._id} className="flex justify-between items-center">
            <p>{item.skill}</p>
            <p> {item._id} </p>
            <button
              onClick={() => handleDelete(item._id)}
              className="btn btn-primary btn-sm my-1"
            >
              <MdDelete size={24} color="red"/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
