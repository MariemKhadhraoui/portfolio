"use client";

import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-900 text-center relative overflow-hidden mx-0 p-0"
      style={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
        <div className="w-72 h-72 bg-blue-800 rounded-full blur-3xl absolute top-10 left-20"></div>
        <div className="w-96 h-96 bg-teal-800 rounded-full blur-2xl absolute top-20 right-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-3xl px-4">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-teal-500 to-green-500 text-transparent bg-clip-text mb-4">
  Hello <span className="text-yellow-400">👋</span>, I&apos;m Mariem Khadhraoui
</h1>


        <p className="text-2xl text-gray-300 mb-2">
          Software Engineer | Web Development Enthusiast | Full Stack Developer | {" "}
          <span className="text-blue-500 font-semibold">
            Always Learning
          </span>
        </p>
        <p className="text-lg text-gray-400 mb-6">
          Passionate about traveling, reading, camping, and exploring new horizons.
        </p>

        {/* Profile Image */}
        <div className="relative mb-6 rounded-full p-1 bg-gradient-to-r from-blue-400 via-teal-500 to-green-500">
          <div className="w-36 h-36 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
            <Image
              src="/images/Maphoto.jpg" 
              alt="Portrait of Mariem"
              width={130}
              height={130}
              className="rounded-full object-cover"
            />
          </div>
        </div>

        {/* Motivational Quote */}
        <blockquote className="text-lg italic text-gray-300 max-w-xl mx-auto mb-6 px-6 relative">
          <p className="before:content-['“'] after:content-['”'] text-2xl font-serif text-gray-300">
            Each line of code is a stepping stone toward my dreams.
          </p>
        </blockquote>

        {/* Social Media Links */}
        <div className="flex space-x-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/mariem-khadhraoui-5a655627a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/mariemkhadhraoui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-500 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:mariem.khadhraoui@esprit.tn"
            className="text-gray-300 hover:text-red-500 transition transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}
