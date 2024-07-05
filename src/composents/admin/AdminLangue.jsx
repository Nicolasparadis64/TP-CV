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
        const response = await fetch('http://localhost:3001/langue', {
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
      const response = await fetch(`http://localhost:3001/langue/${id}`, {
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
    <div>
      <button onClick={addLanguage} type="button" className="btn btn-primary btn-sm"><IoAddCircleSharp size={24}/></button>
      {isLanguage && (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Ajouter une nouvelle langue"
            onChange={(e) => setLanguage(e.target.value)}
            type="text"
            name="language"
            value={language}
          />
          <select onChange={(e) => setLevel(e.target.value)} value={level}>
            <option selected hidden value="">Choisir le niveau</option>
            <option value="Débutant">Débutant</option>
            <option value="Intermédiare">Intermédiaire</option>
            <option value="Avancé">Avancé</option>
          </select>
          <input
            placeholder="Ajouter un niveau"
            onChange={(e) => setLevel(e.target.value)}
            type="text"
            name="level"
            value={level}
          />
          <button onClick={handleSave} type="submit" className="btn btn-primary btn-sm my-1"><HiSave size={24}/></button>
          <button onClick={handleCancel} className="btn btn-primary btn-sm my-1"><MdCancel size={24}/></button>
        </form>
      )}
      <div>
        {langues.map((item) => (
          <div key={item._id} className="flex justify-between items-center">
            <p>{item.name}</p>
            {/* <p>{item._id}</p> */}
            <p>{item.level}</p>
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
