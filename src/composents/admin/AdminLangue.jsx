import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { HiSave } from "react-icons/hi";

export default function AdminLangue() {
  const [langues, setLangues] = useState([]);
  const [language, setLanguage] = useState('');
  const [level, setLevel] = useState('');
  const [isLanguage, setIsLanguage] = useState(false);

  async function fetchLangue() {
    try {
      const response = await fetch('https://tp-cv-api.onrender.com/langue');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      setLangues(data);
    } catch (error) {
      console.error('Error fetching languages:', error);
    }
  }

  useEffect(() => {
    fetchLangue();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (language !== "" && level !== "") {
      // console.log({language, level});
      try {
        const response = await fetch('https://tp-cv-api.onrender.com/langue', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name:language, level }),
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        await response.json();
        fetchLangue();
        setLanguage('');
        setLevel('');
        // setIsLanguage(false);
      } catch (error) {
        console.error('Error adding language:', error);
      }
    }
  }

  function addLanguage() {
    setIsLanguage(true);
  }

  function handleCancel() {
    setIsLanguage(false);
    setLanguage('');
    setLevel('');
  }

  function handleSave() {
    console.log(language);
  }

  async function handleDelete(id) {
    try {
      const response = await fetch(`https://tp-cv-api.onrender.com/langue/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      fetchLangue();
    } catch (error) {
      console.error('Error deleting language:', error);
    }
  }


  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-[#222] rounded-lg shadow-lg space-y-4 max-w-full mx-auto">
            <div className="flex justify-between mb-4">
            <h2 className="text-white flex text-center">Langue</h2>
    <button onClick={addLanguage} type="button" className="btn btn-primary btn-sm flex items-center space-x-2">
      <IoAddCircleSharp size={24} />
      <span>Ajouter une langue</span>
    </button>
    </div>
    {isLanguage && (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <input
            placeholder="Ajouter une nouvelle langue"
            onChange={(e) => setLanguage(e.target.value)}
            type="text"
            name="language"
            value={language}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <select
            onChange={(e) => setLevel(e.target.value)}
            value={level}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option hidden value="">Choisir le niveau</option>
            <option value="Débutant">Débutant</option>
            <option value="Intermédiaire">Intermédiaire</option>
            <option value="Avancé">Avancé</option>
          </select>
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
      {langues.map((item) => (
        <div key={item._id} className="flex justify-between items-center p-2 border border-gray-300 rounded-md bg-white">
          <div>
            <p className="text-gray-700">{item.name}</p>
            <p className="text-gray-700">{item.level}</p>
          </div>
          <button
            onClick={() => handleDelete(item._id)}
            className="p-2 bg-red-600 text-white rounded-md hover:bg-red-500 flex items-center space-x-2"
          >
            <MdDelete size={24} />
          </button>
        </div>
      ))}
    </div>
  </div>
  );
}
