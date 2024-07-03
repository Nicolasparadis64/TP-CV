// import './App.css';
import * as React from "react";
import ExperienceItem from './ExperienceItem';
import SkillItem from './SkillItem';
import FormationItem from './FormationItem';


export default function Body() {
  return (


    <div>

      <main className="flex flex-col justify-center bg-gray-300 min-h-screen">

        <section className="flex flex-col p-10 w-full h-full bg-white shadow-lg rounded-lg">
            
          {/* Header Section */}
        <div className="flex flew-row justify-around mb-10">
          <img src={'./Imports/img1.jpg'} alt="Fashionable clothes" className="w-[300px] h-[300px] rounded-lg shadow-xl " />
          <div className="w-1/2 flex items-center text-start">
            <div className="flex flex-col text-start">
              <h1 className="text-5xl font-semibold text-white text-start">
                PARADIS NICOLAS
              </h1>
              <p className="mt-4 text-sm font-light text-start">
                Ancien étudiant rigoureux et réfléchi en recherche d'une ré-insertion scolaire en alternance. Prêt à utiliser mes compétences et mon enthousiasme pour faire avancer les missions.
              </p>
            </div>
          </div>
          </div>

          {/* Contact and Address Section */}
          <div className="w-full flex justify-center items-center mb-10 bg-orange-200 p-5 rounded-lg shadow-xl">
            <div className="w-full flex flex-row items-center justify-evenly text-gray-800">
              <div className="flex flex-col items-center ">
                <h2 className="text-lg font-semibold">Contact</h2>
                <div className="text-sm mt-3">nicolasparadis64@gmail.com</div>
                <div className="mt-2 text-sm">07.87.85.51.08</div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col items-center">
                <h2 className="text-lg font-semibold">Adresse</h2>
                  <div className="text-sm mt-3">1 rue du pic du midi LUCGARIER</div>
                  <div className="text-sm mt-2">64220</div>
                </div>
              </div>
            </div>
          </div>


          {/* Main Content Section */}
          <div className="flex flex-wrap gap-10 justify-center items-start">
                      <div className="flex flex-row">
            {/* Experiences Column */}
            <div className="flex flex-col w-full md:w-1/2">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                EXPÉRIENCES PROFESSIONNELLES
              </h2>
              <div className="flex flex-col text-gray-800">
                <ExperienceItem
                  year="2024"
                  title="BOOTCAMP REACT"
                  description={[
                    "Avec pour objectif de rejoindre une formation qualifiante, j'ai participé à un Boot-camp intensif en développement web, avec réalisation de projets pratiques, maitrise des outils et technologies modernes.",
                  ]}
                />
                <ExperienceItem
                  year="2022-2024"
                  title="CDD ENTREPRISE BCDL"
                  description={[
                    "De juin 2022 à janvier 2024, manutentionnaire dans l'entreprise BCDL localisée à Nousty",
                  ]}
                />
                <ExperienceItem
                  year=""
                  title="ETUDIANT 1ERE ANNÉE"
                  description={[
                    "J'ai effectué au sein de l'IUT de TARBES une année dans la filière «Technique de commercialisation» où je me suis formé dans les approches de la vente et de la négociation",
                  ]}
                />
                <ExperienceItem
                  year="2019-2020"
                  title="ANIMATEUR EN CENTRE AÉRÉ"
                  description={[
                      "Lors de mes vacances je travaille dans des centres aérés, cela m'a appris et développé : l'anticipation, la planification des activités, la responsabilité ainsi que de la maturité auprès des enfants.",
                  ]}
                  />
                <ExperienceItem
                  year="2018-2019"
                  title="BAC PRO ALTERNANCE RPIP"
                  description={[
                      "Je me suis réorienté pour partir dans le monde professionnel et j'ai travaillé dans une entreprise de communication en alternance en RPIP durant 9 mois",
                  ]}
                  />
              </div>
            </div>

            {/* Skills and Formations Column */}
            <div className="flex flex-col w-full md:w-1/2">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                COMPÉTENCES
              </h2>
              <div className="flex flex-col text-gray-800">
                <SkillItem skill="Motivation" />
                <SkillItem skill="Rigueur" />
                <SkillItem skill="Organisation" />
                <div className="mt-4 text-sm font-light text-orange-500">
                  Développement
                </div>
                <h2 className="mt-4 text-lg font-semibold">FORMATIONS</h2>
                <FormationItem
                  year="2021"
                  title="BAC Technologique STMG"
                  description={[
                    "Obtention de mon BAC sciences et technologies du management et de la gestion au sein du lycée Pradeau la Sède à TARBES",
                  ]}
                />
                <FormationItem
                  year="2020-2021"
                  title="Permis B"
                  description={[
                    "Étang détenteur du permis B, je suis dans la capacité de me déplacer",
                  ]}
                />
                <FormationItem
                  year="2019"
                  title="BAFA"
                  description={[
                    "Titulaire du BAFA depuis l'âge de mes 17 ans.",
                  ]}
                />
                <FormationItem
                  year="2016-2017"
                  title="Brevet des collèges"
                  description={[
                    "J'ai validé mon brevet des collèges au collège de Pontacq - Jean Bouzet",
                  ]}
                />
                <h2 className="mt-4 text-lg font-semibold">CENTRES D'INTÉRÊT</h2>
                <ul className="mt-4 ml-4 text-sm font-light list-disc list-inside">
                  <li>Bureautique</li>
                  <li>Informatique</li>
                  <li>Automobile</li>
                  <li>Voyages</li>
                </ul>
              </div>
            </div>
          </div>
          </div>
        </section>
      </main>
    </div>
  )
}
