import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { HiSave } from "react-icons/hi";

export default function AdminCentreInteret() {
  const [centreInteret, setCentreInteret] = useState([]);
  const [description, setDescription] = useState("");
  const [isCentreInteret, setIsCentreInteret] = useState(false);

  async function fetchCentreInteret() {
    try {
      const response = await fetch(
        "https://tp-cv-api.onrender.com/centreInteret"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setCentreInteret(data);
    } catch (error) {
      console.error("Error fetching languages:", error);
    }
  }

  useEffect(() => {
    fetchCentreInteret();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (description !== "") {
      try {
        const response = await fetch(
          "https://tp-cv-api.onrender.com/centreInteret",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ description }),
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        await response.json();
        fetchCentreInteret();
        setDescription("");
      } catch (error) {
        console.error("error addind language", error);
      }
    }
  }

  function addCentreInteret() {
    setIsCentreInteret(true);
  }

  function handleCancel() {
    setIsCentreInteret(false);
    setDescription("");
  }

  function handleSave() {
    console.log(description);
  }

  async function handleDelete(id) {
    try {
      const response = await fetch(
        `https://tp-cv-api.onrender.com/centreInteret/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("network was not ok");
      }
      fetchCentreInteret();
    } catch (error) {
      console.error("Error deleting language", error);
    }
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-[#222] rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white flex text-center">Centre Interet</h2>
        <button
          onClick={addCentreInteret}
          type="button"
          className="btn btn-primary btn-sm flex items-center gap-2"
        >
          <IoAddCircleSharp size={24} />
          <span>Ajouter</span>
        </button>
      </div>

      {isCentreInteret && (
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              placeholder="Ajouter un nouveau centre d'intérêt"
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              name="description"
              value={description}
              className="flex-grow p-2 border border-gray-300 rounded-md"
            />
            <button
              onClick={handleSave}
              type="submit"
              className="btn btn-primary btn-sm flex items-center gap-2"
            >
              <HiSave size={24} />
              <span>Enregistrer</span>
            </button>
            <button
              onClick={handleCancel}
              className="btn btn-secondary btn-sm flex items-center gap-2"
            >
              <MdCancel size={24} />
              <span>Annuler</span>
            </button>
          </div>
        </form>
      )}

      <div className="space-y-4">
        {centreInteret.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm"
          >
            <p className="flex-grow">{item.description}</p>
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
