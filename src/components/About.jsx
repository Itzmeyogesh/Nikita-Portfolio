import { FaCode, FaAward, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="min-h-screen px-6 py-16 text-white bg-[#1a1a2e]">
      <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <FaCode className="text-5xl text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Skills</h3>
          <p>React.js, Node.js, PHP, MySQL, Express.js, Bootstrap, OOP, Git</p>
        </div>
        <div>
          <FaLightbulb className="text-5xl text-yellow-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Projects</h3>
          <p>HR & Payroll System, Railway Ticket Reservation System</p>
        </div>
        <div>
          <FaAward className="text-5xl text-green-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Achievements</h3>
          <p>Winner - Web 3.0 Seminar 2023, Recognized for Blockchain Innovation</p>
        </div>
      </div>
    </section>
  );
};

export default About;
