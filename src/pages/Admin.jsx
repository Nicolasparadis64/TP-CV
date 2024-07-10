import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminContact from "../composents/admin/AdminContact";
import AdminCompetence from "../composents/admin/AdminCompetence";
import AdminLangue from "../composents/admin/AdminLangue";
import Login from "./Login";
import AdminCentreInteret from "../composents/admin/AdminCentreInteret";
import AdminExperience from "../composents/admin/AdminExperience";
import AdminFormation from "../composents/admin/AdminFormation";

export default function Admin() {
  const [username, setUsername] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (username === localStorage.getItem('username') && password === localStorage.getItem('password')) {
      setIsLogged(true);
    } else {
      alert("Les identifiants ne sont pas corrects");
    }
  }

  if (!isLogged) {
    return (
      <Login
        username={username}
        setUsername={(e) => setUsername(e.target.value)}
        password={password}
        setPassword={(e) => setPassword(e.target.value)}
        handleSubmit={handleSubmit}
      />
    );
  }

  return (
    <div>
      <button>
        <Link to="/">Vers Home</Link>
      </button>
      <AdminContact />
      <AdminCompetence />
      <AdminLangue />
      <AdminCentreInteret/>
      <AdminExperience/>
      <AdminFormation/>
    </div>
  );
}
