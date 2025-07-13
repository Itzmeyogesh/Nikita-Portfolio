import project1 from '../assets/Hr Payroll.jpg';
import project2 from '../assets/Railway.png';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-6 py-16 bg-[#16213e] text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="bg-white/5 p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform">
          <img src={project1} alt="HR Payroll" className="rounded mb-4" />
          <h3 className="text-2xl font-semibold mb-2">PeopleSoft HR & Payroll</h3>
          <p className="text-sm">React, Node.js, MySQL, JWT. Designed role-based system for Admin, HR, Employee. Secure auth & report generation.</p>
        </div>
        <div className="bg-white/5 p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform">
          <img src={project2} alt="Railway Ticket Reservation" className="rounded mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Online Railway Ticket Reservation</h3>
          <p className="text-sm">Java, Spring Boot. Features secure payment, schedule management, user auth, booking with live availability.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
