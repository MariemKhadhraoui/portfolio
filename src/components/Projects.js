// "use client";
// import { useState } from "react";
// import Image from "next/image";

// export default function Projects() {
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const projects = [
//     {
//       title: "Stage - IDEVY",
//       description:
//         "Développement d'une application de backoffice pour un agrégateur de données e-commerce, incluant la conception d'APIs REST sécurisées, l'intégration de graphiques, et un système de recommandation de produits.",
//       image: "/idevy.png",
//       link: "#",
//       skills: [
//         "Next.js",
//         "Node.js",
//         "TypeScript",
//         "Tailwind CSS",
//         "TensorFlow.js",
//         "MySQL",
//         "Sequelize",
//       ],
//     },
//     {
//       title: "Stage - SwiftCode",
//       description:
//         "Application web de gestion de cliniques et maisons à proximité, utilisant un algorithme de recommandation basé sur la géolocalisation et des techniques de traitement NLP pour une meilleure pertinence.",
//       image: "/swiftcode.png",
//       link: "#",
//       skills: [
//         "MongoDB",
//         "Express.js",
//         "React.js",
//         "Node.js",
//         "NLP",
//         "MERN Stack",
//       ],
//     },
//     {
//       title: "Projet académique - ESPRIT",
//       description:
//         "Création d'une plateforme pour la gestion des offres d'emploi, intégrant un système de recommandation avancé et des fonctionnalités de recherche filtrée (localisation, type de travail, qualifications).",
//       image: "/esprit.png",
//       link: "#",
//       skills: [
//         "MongoDB",
//         "Express.js",
//         "React.js",
//         "Node.js",
//         "Spring Boot",
//         "H2 Database",
//       ],
//     },
//   ];

//   const toggleDetails = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   return (
//     <section
//       id="projects"
//       className="py-20 px-8 bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900 relative overflow-hidden"
//     >
//       {/* Section Title */}
//       <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-10">
//         Projects
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-300 bg-white"
//           >
//             {/* Project Image */}
//             <div className="relative h-60">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 layout="fill"
//                 objectFit="cover"
//                 className="transition-transform duration-500 group-hover:scale-105"
//               />
//               {/* Icon to Expand Details */}
//               <button
//                 onClick={() => toggleDetails(index)}
//                 className={`absolute top-2 right-2 bg-black bg-opacity-60 p-2 rounded-full text-white hover:bg-opacity-80 transition-transform transform ${
//                   expandedIndex === index ? "rotate-45" : "rotate-0"
//                 }`}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10 5a1 1 0 011 1v8a1 1 0 11-2 0V6a1 1 0 011-1zM5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//             </div>

//             {/* Project Title */}
//             <div className="p-4">
//               <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
//             </div>

//             {/* Details Section */}
//             <div
//               className={`transform transition-all duration-500 ease-in-out ${
//                 expandedIndex === index ? "max-h-[600px] opacity-100 p-4" : "max-h-0 opacity-0"
//               } overflow-hidden`}
//             >
//               <div className="bg-gray-50 rounded-lg shadow-inner border border-purple-100">
//                 <p className="text-sm text-gray-600">{project.description}</p>
//                 <h4 className="text-sm font-bold text-gray-800 mt-4">Skills & Tools:</h4>
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   {project.skills.map((skill, idx) => (
//                     <span
//                       key={idx}
//                       className="px-3 py-1 bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xs font-medium rounded-full shadow-sm transform transition duration-300 hover:scale-110"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//                 <a
//                   href={project.link}
//                   className="inline-block mt-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg transform hover:scale-105"
//                 >
//                   Learn More →
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Decorative Background Elements */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20 -z-10"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-20 -z-10"></div>
//     </section>
//   );
// }

"use client";
import { useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const projects = [
    {
      title: "Internship - IDEVY",
      description:
        "Development of a back-office application for an e-commerce data aggregator, including the design of secure REST APIs, the integration of graphs, and a product recommendation system.",
      image: "/images/fleur.jpg",
      link: "#",
      skills: [
        "Next.js",
        "Node.js",
        "TypeScript",
        "Tailwind CSS",
        "TensorFlow.js",
        "MySQL",
        "Sequelize",
      ],
    },
    {
      title: "Internship - SwiftCode",
      description:
        "Web application for managing clinics and nearby houses, using a recommendation algorithm based on geolocation and NLP techniques for better relevance.",
      image: "/images/fleur.jpg",
      link: "#",
      skills: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "NLP",
        "MERN Stack",
      ],
    },
    {
      title: "Academic Project - ESPRIT",
      description:
        "Creation of a platform for managing job offers, integrating an advanced recommendation system and filtered search functionalities (location, job type, qualifications).",
      image: "/images/fleur.jpg",
      link: "#",
      skills: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Spring Boot",
        "H2 Database",
      ],
    },
  ];

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="projects"
      className="py-20 px-8 bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900 relative overflow-hidden"
    >
      {/* Section Title */}
      <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-10">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-300 bg-white"
          >
            {/* Project Image */}
            <div className="relative h-60">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
              />
              {/* Icon to Expand Details */}
              <button
                onClick={() => toggleDetails(index)}
                className={`absolute top-2 right-2 bg-black bg-opacity-60 p-2 rounded-full text-white hover:bg-opacity-80 transition-transform transform ${
                  expandedIndex === index ? "rotate-45" : "rotate-0"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v8a1 1 0 11-2 0V6a1 1 0 011-1zM5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* Project Title */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
            </div>

            {/* Details Section */}
            <div
              className={`transform transition-all duration-500 ease-in-out ${
                expandedIndex === index ? "max-h-[600px] opacity-100 p-4" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="bg-gray-50 rounded-lg shadow-inner border border-purple-100">
                <p className="text-sm text-gray-600">{project.description}</p>
                <h4 className="text-sm font-bold text-gray-800 mt-4">Skills & Tools:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xs font-medium rounded-full shadow-sm transform transition duration-300 hover:scale-110"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block mt-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-20 -z-10"></div>
    </section>
  );
}


// autre style

//"use client";
// import { useState } from "react";
// import Image from "next/image";

// export default function Projects() {
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const projects = [
//     {
//       title: "Internship - IDEVY",
//       description:
//         "Development of a back-office application for an e-commerce data aggregator, including the design of secure REST APIs, the integration of graphs, and a product recommendation system.",
//       image: "/images/fleur.jpg",
//       link: "#",
//       skills: [
//         "Next.js",
//         "Node.js",
//         "TypeScript",
//         "Tailwind CSS",
//         "TensorFlow.js",
//         "MySQL",
//         "Sequelize",
//       ],
//     },
//     {
//       title: "Internship - SwiftCode",
//       description:
//         "Web application for managing clinics and nearby houses, using a recommendation algorithm based on geolocation and NLP techniques for better relevance.",
//       image: "/images/fleur.jpg",
//       link: "#",
//       skills: [
//         "MongoDB",
//         "Express.js",
//         "React.js",
//         "Node.js",
//         "NLP",
//         "MERN Stack",
//       ],
//     },
//     {
//       title: "Academic Project - ESPRIT",
//       description:
//         "Creation of a platform for managing job offers, integrating an advanced recommendation system and filtered search functionalities (location, job type, qualifications).",
//       image: "/images/fleur.jpg",
//       link: "#",
//       skills: [
//         "MongoDB",
//         "Express.js",
//         "React.js",
//         "Node.js",
//         "Spring Boot",
//         "H2 Database",
//       ],
//     },
//   ];

//   const toggleDetails = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   return (
//     <section
//       id="projects"
//       className="py-20 px-8 bg-gray-50 text-gray-900 relative overflow-hidden"
//     >
//       {/* Section Title */}
//       <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-12">
//         Projects
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105"
//           >
//             {/* Project Image */}
//             <div className="relative w-full h-72">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 layout="fill"
//                 objectFit="cover"
//                 className="object-center transition-transform duration-500 group-hover:scale-110"
//               />
//             </div>

//             {/* Project Title & Description */}
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
//               <p className="text-sm text-gray-600 mt-2">{project.description}</p>
//             </div>

//             {/* Skills */}
//             <div className="px-6 py-3 bg-gray-50">
//               <h4 className="text-sm font-medium text-gray-800">Skills & Tools:</h4>
//               <div className="flex flex-wrap gap-2 mt-2">
//                 {project.skills.map((skill, idx) => (
//                   <span
//                     key={idx}
//                     className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium rounded-full shadow-md transform transition-all duration-300 hover:scale-110"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Expand/Collapse Button */}
//             <div className="flex justify-center py-4">
//               <button
//                 onClick={() => toggleDetails(index)}
//                 className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:scale-105 transition-transform duration-300"
//               >
//                 {expandedIndex === index ? "Less Details" : "More Details"}
//               </button>
//             </div>

//             {/* Expanded Details */}
//             <div
//               className={`px-6 py-4 text-sm text-gray-700 transform transition-all duration-500 ease-in-out ${
//                 expandedIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
//               } overflow-hidden`}
//             >
//               <p>{project.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Decorative Background Elements */}
//       <div className="absolute top-0 left-0 w-80 h-80 bg-purple-300 rounded-full blur-3xl opacity-10 -z-10"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-10 -z-10"></div>
//     </section>
//   );
// }
