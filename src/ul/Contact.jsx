import React, { useEffect, useState } from "react";
import Profile from "../composents/Profile";

export default function Contact() {
  const [contact, setContact] = useState([]);

  async function fetchContact() {
    try {
      const response = await fetch("https://tp-cv-api.onrender.com/contact");
      if (!response.ok) {
        throw new Error('network response was not ok');
      }
      const data = await response.json();
      setContact(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching contact', error);
    }
  }

  useEffect(() => {
    fetchContact();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-12 py-5 max-md:p-16 max-sm:p-12">
      {contact.length > 0 && (
        <div className="text-white flex flex-col justify-center items-center w-full sm:w-3/4 md:w-1/2">
          <Profile
            className="text-white mb-6"
            nom={contact[0].nom}
            prenom={contact[0].prenom}
          />
          <h2 className="w-full text-start text-white mb-10 bg-purple-800 p-5 rounded-lg shadow-xl">
            Contact
          </h2>
          <div className="w-full overflow-x-auto">
            <table className="min-w-full shadow-md rounded-lg overflow-hidden">
              <tbody>
                <tr className="border-b border-gray-500">
                  <td className="py-3 px-4 text-white">Tel</td>
                  <td className="py-3 px-4 text-white">{contact[0].tel}</td>
                </tr>
                <tr className="border-b border-gray-500">
                  <td className="py-3 px-4 text-white">Email</td>
                  <td className="py-3 px-4 text-white">{contact[0].email}</td>
                </tr>
                <tr className="border-b border-gray-500">
                  <td className="py-3 px-4 text-white">Nom</td>
                  <td className="py-3 px-4 text-white">{contact[0].nom}</td>
                </tr>
                <tr className="border-b border-gray-500">
                  <td className="py-3 px-4 text-white">Prenom</td>
                  <td className="py-3 px-4 text-white">{contact[0].prenom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
