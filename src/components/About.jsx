import { FaCode, FaAward, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="about"
      className="h-screen flex flex-col justify-between items-center px-6 py-10 bg-[#1a1a2e] text-white text-center"
    >
      {/* Top Heading and Content */}
      <div className="w-full max-w-5xl">
        <h2 className="text-4xl font-bold mb-10">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <FaCode className="text-5xl text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Skills</h3>
            <p>React.js, Node.js, PHP, MySQL, Express.js, Bootstrap, OOP, Git</p>
          </div>

          <div>
            <FaLightbulb className="text-5xl text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Projects</h3>
            <p>HR & Payroll System, Railway Ticket Reservation System</p>
          </div>

          <div>
            <FaAward className="text-5xl text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Achievements</h3>
            <p>Winner - Web 3.0 Seminar 2023, Recognized for Blockchain Innovation</p>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Arrow */}
      <a href="#skills" className="mt-10 mb-4 animate-bounce text-2xl">
        ↓
      </a>
    </section>
  );
};

export default About;
