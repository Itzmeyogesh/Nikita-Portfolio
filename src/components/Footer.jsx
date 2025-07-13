import { FaArrowUp } from 'react-icons/fa';
import logo from '../assets/Technical-one.jpg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-6 px-4 bg-[#0a1f44] text-white text-center flex flex-col items-center justify-center relative">
      <img src={logo} alt="Technical One Logo" className="w-10 h-10 mb-2" />
      <p className="text-sm mb-4">
        Made by <span className="font-semibold">Technical One</span>
      </p>
      <button
        onClick={scrollToTop}
        className="absolute top-4 right-6 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full border border-white/20 transition duration-300"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
