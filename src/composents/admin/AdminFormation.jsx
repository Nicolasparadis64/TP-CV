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
      const response = await fetch('http://localhost:3001/formation');
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
        const response = await fetch('http://localhost:3001/formation', {
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
      const response = await fetch(`http://localhost:3001/formation/${id}`, {
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
    <div>
      <button onClick={addFormation} type="button" className="btn btn-primary btn-sm">
        <IoAddCircleSharp size={24} />
      </button>
      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Ajouter un nom"
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            value={name}
          />
          <input
            placeholder="Ajouter une date"
            onChange={(e) => setDate(e.target.value)}
            type="text"
            name="date"
            value={date}
          />
          <input
            placeholder="Ajouter une description"
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name="description"
            value={description}
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
        {formations.map((item) => (
          <div key={item._id} className="flex justify-between items-center">
            <p>{item.Nom}</p>
            <p>{item.Date}</p>
            <p>{item.Formation}</p>
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
