"use client";
import { FaCampground, FaBookOpen, FaGlobe } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-8 bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-80 h-80 bg-purple-200 rounded-full blur-3xl absolute top-10 left-20"></div>
        <div className="w-96 h-96 bg-pink-200 rounded-full blur-3xl absolute bottom-10 right-20"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-12">
          About Me
        </h2>

        {/* Introduction Paragraph */}
        <p className="text-xl text-center text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
          Hi, I&apos;m Mariem Khadhraoui, a passionate software developer with a
          love for exploration, discovery, and continuous learning. I thrive on
          new challenges and enjoy diving into{" "}
          <span className="font-semibold text-purple-500">
            innovative technologies
          </span>
          . My goal is to transform ideas into impactful solutions.
        </p>

        {/* Skills and Attributes Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center mt-10">
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <FaGlobe className="text-4xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Adventurous Explorer</h3>
            <p className="text-gray-600">
              Traveling to new places and discovering the beauty of the world
              fuels my creativity.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <FaCampground className="text-4xl text-pink-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Camping Enthusiast</h3>
            <p className="text-gray-600">
              Enjoying the serenity of nature and the thrill of outdoor
              adventures.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <FaBookOpen className="text-4xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Avid Reader</h3>
            <p className="text-gray-600">
              Diving into books to expand my horizons and spark new ideas.
            </p>
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">A Few Fun Facts</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            When I&apos;m not working, you can find me camping under the stars,
            planning my next travel destination, or immersing myself in
            captivating stories. I&apos;m also eager to learn new technologies
            and constantly improve my skills to stay ahead in the tech world.
          </p>
        </div>
      </div>
    </section>
  );
}
