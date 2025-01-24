import { FaReact, FaJava, FaPython, FaPhp, FaNodeJs, FaDatabase, FaDocker, FaLinux, FaLaravel, FaGithub, FaWindows } from "react-icons/fa";
import { SiSpring, SiAngular,SiNextdotjs, SiTailwindcss, SiSymfony, SiPostgresql, SiMysql, SiMongodb, SiFlask, SiDjango, SiGrafana, SiJenkins, SiVagrant, SiSonarqube, SiDotnet, SiJira, SiTrello, SiSlack, SiOdoo, SiIntellijidea, SiEclipsejetty, SiApachenetbeanside } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", icon: <FaJava className="text-orange-600 text-5xl" aria-label="Java" /> },
        { name: "Python", icon: <FaPython className="text-yellow-500 text-5xl" aria-label="Python" /> },
        { name: "PHP", icon: <FaPhp className="text-indigo-500 text-5xl" aria-label="PHP" /> },
        { name: "C++", icon: <FaGithub className="text-blue-500 text-5xl" aria-label="C++" /> },
        { name: "C#", icon: <FaGithub className="text-green-500 text-5xl" aria-label="C#" /> },
        { name: ".NET Core", icon: <SiDotnet className="text-purple-500 text-5xl" aria-label=".NET Core" /> },
      ],
    },
    {
      category: "Frontend Frameworks",
      items: [
        { name: "ReactJS", icon: <FaReact className="text-blue-500 text-5xl" aria-label="ReactJS" /> },
        { name: "ReactTS", icon: <FaReact className="text-blue-500 text-5xl" aria-label="ReactTS" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black text-5xl" aria-label="Next.js" /> },

        { name: "AngularJS", icon: <SiAngular className="text-red-500 text-5xl" aria-label="AngularJS" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-500 text-5xl" aria-label="TailwindCSS" /> },
      ],
    },
    {
      category: "Backend Frameworks",
      items: [
        { name: "Spring / Spring Boot", icon: <SiSpring className="text-green-500 text-5xl" aria-label="Spring Boot" /> },
        { name: "Symfony", icon: <SiSymfony className="text-purple-500 text-5xl" aria-label="Symfony" /> },
        { name: "Laravel", icon: <FaLaravel className="text-red-600 text-5xl" aria-label="Laravel" /> },
        { name: "Django", icon: <SiDjango className="text-green-700 text-5xl" aria-label="Django" /> },
        { name: "Flask", icon: <SiFlask className="text-gray-500 text-5xl" aria-label="Flask" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-5xl" aria-label="Node.js" /> },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-5xl" aria-label="MongoDB" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500 text-5xl" aria-label="MySQL" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-indigo-500 text-5xl" aria-label="PostgreSQL" /> },
      ],
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "Docker", icon: <FaDocker className="text-blue-500 text-5xl" aria-label="Docker" /> },
        { name: "Linux", icon: <FaLinux className="text-gray-500 text-5xl" aria-label="Linux" /> },
        { name: "Grafana", icon: <SiGrafana className="text-orange-500 text-5xl" aria-label="Grafana" /> },
        { name: "Jenkins", icon: <SiJenkins className="text-red-500 text-5xl" aria-label="Jenkins" /> },
        { name: "Vagrant", icon: <SiVagrant className="text-teal-500 text-5xl" aria-label="Vagrant" /> },
        { name: "SonarQube", icon: <SiSonarqube className="text-blue-500 text-5xl" aria-label="SonarQube" /> },
      ],
    },
    {
      category: "Collaboration Tools",
      items: [
        { name: "Jira", icon: <SiJira className="text-blue-600 text-5xl" aria-label="Jira" /> },
        { name: "Trello", icon: <SiTrello className="text-blue-400 text-5xl" aria-label="Trello" /> },
        { name: "Slack", icon: <SiSlack className="text-purple-500 text-5xl" aria-label="Slack" /> },
        { name: "Odoo", icon: <SiOdoo className="text-pink-500 text-5xl" aria-label="Odoo" /> },
      ],
    },
    {
      category: "Development Tools",
      items: [
        { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-blue-400 text-5xl" aria-label="IntelliJ IDEA" /> },
        { name: "Eclipse IDE", icon: <SiEclipsejetty className="text-gray-600 text-5xl" aria-label="Eclipse IDE" /> },
        { name: "NetBeans", icon: <SiApachenetbeanside className="text-teal-400 text-5xl" aria-label="NetBeans" /> },
        { name: "VSCode", icon: <FaWindows className="text-blue-500 text-5xl" aria-label="VSCode" /> },
        { name: "Visual Studio", icon: <FaWindows className="text-blue-500 text-5xl" aria-label="Visual Studio" /> },
        { name: "WampServer", icon: <FaWindows className="text-red-500 text-5xl" aria-label="WampServer" /> },
        { name: "PgAdmin", icon: <SiPostgresql className="text-indigo-500 text-5xl" aria-label="PgAdmin" /> },
        { name: "TablePlus", icon: <SiPostgresql className="text-teal-500 text-5xl" aria-label="TablePlus" /> },
      ],
    },
  ];

  return (
    <div className="skills py-12 px-4 bg-gray-100">
      {skills.map((skillCategory, index) => (
        <section id= "skills" key={index} className="mb-16" >
          <h3 className="text-3xl font-bold text-center text-blue-600 mb-8">{skillCategory.category}</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skillCategory.items.map((item, idx) => (
              <div key={idx} className="card bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center">
                <div className="icon mb-4">{item.icon}</div>
                <p className="text-xl font-medium text-gray-800">{item.name}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
