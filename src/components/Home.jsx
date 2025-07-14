import { motion } from 'framer-motion';
import profilePic from '../assets/Nikita.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-between items-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-4 text-center overflow-hidden"
    >
      {/* Top Content Block */}
      <div className="flex flex-col items-center flex-grow justify-center pt-10">
        {/* Profile Image */}
        <motion.img
          src={profilePic}
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-white mb-6 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Heading and Role */}
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2">
          Hi, I'm Nikita Bhagwat
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-blue-300 mb-4">
          <Typewriter
            words={['Software Developer', 'Full Stack Engineer', 'React | Node | PHP']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        {/* Career Objective */}
        <p className="max-w-2xl text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
          Passionate and detail-oriented software developer with a strong foundation in React.js, Node.js, and PHP.
          I aim to contribute to innovative projects where I can apply my technical skills to solve real-world problems
          and continue growing as a full stack developer.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mb-6">
          <a
            href="https://www.linkedin.com/in/nikita-bhagwat-15901a26b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/BhagwatNikita30"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-300 transition-colors"
          >
            <FaGithub />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="/Nikita_Bhagwat_CV.pdf"
            download
            className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition-colors"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="bg-transparent border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition-colors"
          >
            Connect Me
          </a>
        </div>
      </div>

      {/* Bottom Scroll Arrow */}
      <a href="#about" className="mb-4 animate-bounce text-2xl">
        ↓
      </a>
    </section>
  );
};

export default Home;
