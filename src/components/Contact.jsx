const Contact = () => {
  return (
    <section id="contact" className="min-h-screen px-6 py-16 bg-[#0f3460] text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
      <form className="max-w-2xl mx-auto bg-white/5 p-8 rounded-xl shadow-md backdrop-blur-md">
        <div className="mb-6">
          <label className="block mb-2">Name</label>
          <input type="text" className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none" />
        </div>
        <div className="mb-6">
          <label className="block mb-2">Email</label>
          <input type="email" className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none" />
        </div>
        <div className="mb-6">
          <label className="block mb-2">Message</label>
          <textarea rows="4" className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-600">Send Message</button>
      </form>
    </section>
  );
};

export default Contact; 