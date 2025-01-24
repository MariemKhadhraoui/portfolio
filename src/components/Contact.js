"use client";
import { useState } from "react";
import { FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Veuillez remplir tous les champs.");
      return;
    }

    try {
      const result = await emailjs.send(
        "service_lgj5jir", // Replace with your EmailJS Service ID
        "template_4w7tiek", // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          year: new Date().getFullYear(),
        },
        "O0ketBSBwFgXx7y68" // Replace this with your actual Public Key
      );

      if (result.text === "OK") {
        setStatus("Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      }
    } catch (error) {
      console.error("Erreur EmailJS:", error);
      setStatus("Échec de l'envoi du message. Veuillez réessayer plus tard.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-8 bg-gradient-to-b from-gray-100 to-white text-gray-900 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-72 h-72 bg-blue-200 rounded-full blur-3xl absolute top-10 left-20"></div>
        <div className="w-96 h-96 bg-green-200 rounded-full blur-3xl absolute bottom-10 right-20"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text mb-12">
          Me Contacter
        </h2>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
        >
          {/* Name Input */}
          <div className="relative">
            <FaUser className="absolute left-4 top-3 text-gray-400 text-xl" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Nom"
              className="w-full px-12 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-3 text-gray-400 text-xl" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full px-12 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Input */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Votre Message"
            rows="5"
            className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center w-full py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaPaperPlane className="mr-2" />
            Envoyer
          </button>
        </form>

        {/* Form Status */}
        {status && (
          <p
            className={`mt-4 text-center ${
              status.includes("succès")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <p className="text-lg">
            N&apos;hésitez pas à me contacter par email à {" "}
            <a
              href="mailto:mariem.khadhraoui.dev@gmail.com"
              className="text-blue-600 hover:text-green-500 transition"
            >
              mariem.khadhraoui.dev@gmail.com
            </a>
          </p>
          <p className="text-lg mt-2">
            Je suis toujours ravie d&apos;échanger sur de nouvelles opportunités ou projets !
          </p>
        </div>
      </div>
    </section>
  );
}
