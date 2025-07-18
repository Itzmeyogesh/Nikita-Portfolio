const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full px-6 py-10 bg-[#0f3460] text-white"
    >
      <div className="w-full max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
        <form className="bg-white/5 p-8 rounded-xl shadow-md backdrop-blur-md">
          <div className="mb-6">
            <label className="block mb-2 text-left">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-left">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none"
              placeholder="your@email.com"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-left">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
