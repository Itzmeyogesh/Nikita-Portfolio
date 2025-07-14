import project1 from '../assets/Hr Payroll.jpg';
import project2 from '../assets/Railway.png';

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-between items-center px-6 py-10 bg-[#16213e] text-white"
    >
      {/* Top Content */}
      <div className="w-full max-w-6xl flex-grow flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform">
            <img
              src={project1}
              alt="HR Payroll"
              className="rounded mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-2xl font-semibold mb-2">PeopleSoft HR & Payroll</h3>
            <p className="text-sm leading-relaxed">
              React, Node.js, MySQL, JWT. Designed a role-based HR and payroll platform for Admin, HR, and Employees
              with secure authentication and dynamic report generation.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform">
            <img
              src={project2}
              alt="Railway Ticket Reservation"
              className="rounded mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-2xl font-semibold mb-2">Online Railway Ticket Reservation</h3>
            <p className="text-sm leading-relaxed">
              Java, Spring Boot. Built a full-featured online ticket booking system with payment gateway, scheduling, 
              user authentication, and live train availability.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Arrow */}
      <a href="#contact" className="mb-2 md:mb-4 animate-bounce text-2xl">
        ↓
      </a>
    </section>
  );
};

export default Projects;
