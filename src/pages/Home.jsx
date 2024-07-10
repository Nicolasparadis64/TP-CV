import * as React from "react";
import ExperienceItem from "../composents/ExperienceItem";
import SkillItem from "../composents/SkillItem";
import FormationItem from "../composents/FormationItem";
import Contact from "../ul/Contact";
import Admin from "./Admin";
import AdminContact from "../composents/admin/AdminContact";
import Competence from "../ul/Competence";
import AdminCompetence from "../composents/admin/AdminCompetence";
import { Link } from "react-router-dom";
import Langue from "../ul/Langue";
import CentreInteret from "../ul/CentreInteret";
import Experience from "../ul/Experience";
import Formation from "../ul/Formation";
import { RiAdminLine } from "react-icons/ri";
import { IoBagHandleOutline } from "react-icons/io5";


export default function Home() {
  return (
    <div>
      <main className="flex flex-col justify-center bg-[#222] w-full h-full">
        <nav className="fixed flex items-center gap-8 justify-center top-0 left-0 w-full h-full sm:w-20 bg-[#222] border-r-2 border-purple-800 sm:h-full sm:justify-center sm:items-center sm:flex-col">
          <button>
            <Link to="/Portfolio">
            <IoBagHandleOutline  className="p-2 h-12 w-12"/>

            </Link>
          </button>
          <button>
            <Link to="/Admin">
              <RiAdminLine size={50} className="p-2 h-12 w-12" />
            </Link>
          </button>
        </nav>

        <section className="flex flex-col w-full h-full bg-[#222] shadow-lg rounded-lg pt-24 sm:pt-0 sm:ml-20">
          <div className="p-4 sm:p-6 md:p-12 lg:p-16">
            <Contact />
            <Competence />
            <Langue />
            <CentreInteret />
            <Experience />
            <Formation />
          </div>
        </section>
      </main>
    </div>
  );
}
