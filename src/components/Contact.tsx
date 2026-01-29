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
      className="min-h-screen py-20 px-4 text-white"
    >
      <h2 className="text-3xl font-extrabold mb-8 tracking-wider uppercase text-center bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-mono)' }}>
        Contact
      </h2>

      <form
        className="grid gap-4 max-w-xl mx-auto card p-8"
        style={{ fontFamily: 'var(--font-mono)' }}
        onSubmit={(e) => {
          e.preventDefault();
          handleMail();
        }}
      >
        <input
          type="text"
          placeholder="Name"
          className="p-3 rounded bg-white/10 text-white placeholder-white/50 border border-white/10 focus:border-purple-400 focus:outline-none transition"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded bg-white/10 text-white placeholder-white/50 border border-white/10 focus:border-purple-400 focus:outline-none transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="p-3 rounded bg-white/10 text-white placeholder-white/50 border border-white/10 focus:border-purple-400 focus:outline-none transition resize-none"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-6 py-3 rounded font-semibold hover:from-purple-400 hover:to-fuchsia-400 transition shadow-lg"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
