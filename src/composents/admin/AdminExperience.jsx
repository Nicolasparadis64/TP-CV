import React, { useEffect, useState } from "react";
import { MdDelete, MdCancel } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import { HiSave } from "react-icons/hi";

export default function AdminExperience() {
  const [experience, setExperience] = useState([]);
  const [Nom, setNom] = useState("");
  const [date, setDate] = useState("");
  const [experiences, setExperiences] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  async function fetchExperience() {
      try {
          const response = await fetch("http://localhost:3001/experience");
          if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setExperience(data);
        } catch (error) {
            console.error("Error fetching experiences", error);
        }
    }
    
    useEffect(() => {
        fetchExperience();
    }, []);
    // console.log({fetchExperience});

  async function handleSubmit(event) {
    event.preventDefault();
    if (Nom !== "" && date !== "" && experiences !== "") {
        try {
          console.log({Nom, Date, experiences});
        const response = await fetch("http://localhost:3001/experience", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Nom, Date : date, experience: experiences }),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        await response.json();
        fetchExperience();
        setNom("");
        setDate("");
        setExperiences("");
        setIsFormVisible(false);
      } catch (error) {
        console.error("Error adding experience", error);
      }
    }
  }

  function addExperience() {
    setIsFormVisible(true);
  }

  function handleCancel() {
    setIsFormVisible(false);
    setNom("");
    setDate("");
    setExperiences("");
  }

  async function handleDelete(id) {
    try {
      const response = await fetch(`https://tp-cv-api.onrender.com/experience/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      fetchExperience();
    } catch (error) {
      console.error("Error deleting experience", error);
    }
  }

  return (
    <div>
      <button onClick={addExperience} type="button" className="btn btn-primary btn-sm">
        <IoAddCircleSharp size={24} />
      </button>
      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Ajouter une Date"
            onChange={(e) => setDate(e.target.value)}
            type="text"
            name="date"
            value={date}
          />
          <input
            placeholder="Ajouter un Nom"
            onChange={(e) => setNom(e.target.value)}
            type="text"
            name="nom"
            value={Nom}
          />
          <input
            placeholder="Ajouter une Description"
            onChange={(e) => setExperiences(e.target.value)}
            type="text"
            name="experiences"
            value={experiences}
          />
          <button type="submit" className="btn btn-primary btn-sm my-1">
            <HiSave size={24} />
          </button>
          <button onClick={handleCancel} className="btn btn-primary btn-sm my-1">
            <MdCancel size={24} />
          </button>
        </form>
      )}
      <div>
        {experience.map((item) => (
          <div key={item._id} className="flex justify-between items-center">
            <p>{item.Date}</p>
            <p>{item.Nom}</p>
            <p>{item.experience}</p>
            <button
              onClick={() => handleDelete(item._id)}
              className="btn btn-primary btn-sm my-1"
            >
              <MdDelete size={24} color="red" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
