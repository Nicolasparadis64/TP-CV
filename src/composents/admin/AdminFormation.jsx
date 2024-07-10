import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { HiSave } from "react-icons/hi";

export default function AdminFormation() {
  const [formations, setFormations] = useState([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  async function fetchFormations() {
    try {
      const response = await fetch('https://tp-cv-api.onrender.com/formation');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setFormations(data);
    } catch (error) {
      console.error('Error fetching formations', error);
    }
  }

  useEffect(() => {
    fetchFormations();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (name !== "" && date !== "" && description !== "") {
      try {
        const response = await fetch('https://tp-cv-api.onrender.com/formation', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ Nom : name, Date : date, Formation : description })
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        await response.json();
        fetchFormations();
        setName('');
        setDate('');
        setDescription('');
        setIsFormVisible(false);
      } catch (error) {
        console.error('Error adding formation', error);
      }
    }
  }

  function addFormation() {
    setIsFormVisible(true);
  }

  function handleCancel() {
    setIsFormVisible(false);
    setName('');
    setDate('');
    setDescription('');
  }

  async function handleDelete(id) {
    try {
      const response = await fetch(`https://tp-cv-api.onrender.com/formation/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      fetchFormations();
    } catch (error) {
      console.error('Error deleting formation', error);
    }
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-[#222] rounded-lg shadow-lg space-y-4 max-w-full mx-auto">
      <div className="flex justify-between mb-4">
            <h2 className="text-white flex text-center">Formation</h2>
      <button onClick={addFormation} type="button" className="btn btn-primary btn-sm flex items-center space-x-2">
        <IoAddCircleSharp size={24} />
        <span>Ajouter une formation</span>
      </button>
      </div>
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <input
              placeholder="Ajouter un nom"
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              value={name}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <input
              placeholder="Ajouter une date"
              onChange={(e) => setDate(e.target.value)}
              type="text"
              name="date"
              value={date}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <input
              placeholder="Ajouter une description"
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              name="description"
              value={description}
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
        {formations.map((item) => (
          <div key={item._id} className="flex justify-between items-center p-2 border border-gray-300 rounded-md bg-white">
            <div>
              <p className="text-gray-700">{item.Nom}</p>
              <p className="text-gray-700">{item.Date}</p>
              <p className="text-gray-700">{item.Formation}</p>
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
