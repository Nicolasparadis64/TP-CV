import React, { useEffect, useState } from "react";
import Profile from "../composents/Profile";

export default function Contact() {
  const [contact, setContact] = useState([]);
  async function fetchContact() {
    const response = await fetch("http://localhost:3001/contact");
    const data = await response.json();
    setContact(data);
    console.log(data);
  }

  useEffect(() => {
    fetchContact();
  }, []);
  return (
    <div>
      {contact.length > 0 && (
        <div className="text-white">
          <Profile className="text-white" nom={contact[0].nom} prenom={contact[0].prenom} />
          <h2 className="w-full flex justify-center items-center mb-10 bg-purple-800 p-5 rounded-lg shadow-xl">
            Contact
          </h2>
          <table>
            <tr>
              <td>Tel</td>
                <td> {contact[0].tel} </td>
            </tr>
            <tr>
              <td>mail</td>
              <td> {contact[0].email} </td>
            </tr>
            <tr>
              <td>nom</td>
              <td> {contact[0].nom} </td>
            </tr>
            <tr>
              <td>prenom</td>
              <td> {contact[0].prenom} </td>
            </tr>
          </table>
        </div>
      )}
    </div>
  );
}
