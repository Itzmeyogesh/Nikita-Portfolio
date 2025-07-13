import { FaReact, FaNodeJs, FaPhp, FaDatabase, FaGitAlt, FaTools } from 'react-icons/fa';
import { SiMysql, SiTailwindcss, SiBootstrap } from 'react-icons/si';

const Skills = () => {
  const categories = [
    {
      title: 'Frontend',
      color: 'text-blue-400',
      items: [
        { name: 'React.js', icon: <FaReact /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> },
        { name: 'HTML/CSS', icon: <FaTools /> },
      ],
    },
    {
      title: 'Backend',
      color: 'text-green-400',
      items: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'PHP', icon: <FaPhp /> },
        { name: 'Express.js', icon: <FaTools /> },
      ],
    },
    {
      title: 'Database & Tools',
      color: 'text-yellow-400',
      items: [
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'API Development', icon: <FaTools /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="h-screen flex flex-col justify-between items-center px-6 py-10 bg-[#0a2647] text-white"
    >
      {/* Top Content */}
      <div className="w-full max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className={`text-xl font-semibold mb-4 ${cat.color}`}>{cat.title}</h3>
              <ul className="space-y-3">
                {cat.items.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Arrow to Projects Section */}
      <a href="#projects" className="mt-10 mb-4 animate-bounce text-2xl">
        ↓
      </a>
    </section>
  );
};

export default Skills;
