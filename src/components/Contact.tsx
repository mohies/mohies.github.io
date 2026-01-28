import { useState } from 'react';

const Contact = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleMail = () => {
    const subject = `Mensaje de ${nombre}`;
    const body = `Nombre: ${nombre}%0ACorreo: ${email}%0AMensaje:%0A${mensaje}`;
    const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || ''
    if (contactEmail) {
      window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${body}`
    } else {
      alert('Dirección de contacto no configurada. Añade VITE_CONTACT_EMAIL en tu .env')
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-[#0f0f1f] to-[#1a1a2e] py-20 px-4 text-white"
    >
      <h2 className="text-[#ff003c] text-3xl font-extrabold font-mono mb-8 tracking-wider uppercase text-center">
        Contact
      </h2>

      <form
        className="grid gap-4 max-w-xl mx-auto font-mono"
        onSubmit={(e) => {
          e.preventDefault();
          handleMail();
        }}
      >
        <input
          type="text"
          placeholder="Name"
          className="p-3 border border-gray-400 rounded bg-white text-black"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 border border-gray-400 rounded bg-white text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="p-3 border border-gray-400 rounded bg-white text-black"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
