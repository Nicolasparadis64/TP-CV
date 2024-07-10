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
          const response = await fetch("https://tp-cv-api.onrender.com/experience");
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
        const response = await fetch("https://tp-cv-api.onrender.com/experience", {
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
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-[#222] rounded-lg shadow-lg space-y-4 max-w-full mx-auto">
      <div className="flex justify-between mb-4">
      <h2 className="text-white flex text-center">expérience</h2>
      <button onClick={addExperience} type="button" className="btn btn-primary btn-sm flex items-center space-x-2">
        <IoAddCircleSharp size={24} />
        <span>Ajouter une expérience</span>
      </button>
      </div>
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <input
              placeholder="Ajouter une Date"
              onChange={(e) => setDate(e.target.value)}
              type="text"
              name="date"
              value={date}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <input
              placeholder="Ajouter un Nom"
              onChange={(e) => setNom(e.target.value)}
              type="text"
              name="nom"
              value={Nom}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <input
              placeholder="Ajouter une Description"
              onChange={(e) => setExperiences(e.target.value)}
              type="text"
              name="experiences"
              value={experiences}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex space-x-2">
            <button type="submit" className="p-2 bg-purple-800 text-white rounded-md hover:bg-purple-700 flex items-center space-x-2">
              <HiSave size={24} />
              <span>Enregistrer</span>
            </button>
            <button onClick={handleCancel} type="button" className="p-2 bg-red-600 text-white rounded-md hover:bg-red-500 flex items-center space-x-2">
              <MdCancel size={24} />
              <span>Annuler</span>
            </button>
          </div>
        </form>
      )}
      <div className="space-y-4">
        {experience.map((item) => (
          <div key={item._id} className="flex justify-between items-center p-2 border border-gray-300 rounded-md bg-white">
            <div>
              <p className="text-gray-700">{item.Date}</p>
              <p className="text-gray-700">{item.Nom}</p>
              <p className="text-gray-700">{item.experience}</p>
            </div>
            <button
              onClick={() => handleDelete(item._id)}
              className="p-2 bg-red-600 text-white rounded-md hover:bg-red-500 flex items-center space-x-2"
            >
              <MdDelete size={24} color="white" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
