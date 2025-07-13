import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaTools } from 'react-icons/fa';

const Sidebar = () => {
  const menuItems = [
    { icon: <FaHome />, link: '#home' },
    { icon: <FaUser />, link: '#about' },
    { icon: <FaTools />, link: '#skills' },          // ✅ Added Skills Section
    { icon: <FaProjectDiagram />, link: '#projects' },
    { icon: <FaEnvelope />, link: '#contact' },
  ];

  return (
    <aside className="fixed top-10 left-5 h-[300px] w-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex flex-col items-center justify-around shadow-xl z-50">
      {menuItems.map((item, index) => (
        <a href={item.link} key={index} className="text-white text-xl hover:text-blue-400">
          {item.icon}
        </a>
      ))}
    </aside>
  );
};

export default Sidebar;
