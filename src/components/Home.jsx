import './Home.css';
import CompartmentButton from './CompartmentButton';

const Home = ({ setView }) => (
  <div className='containerBgImg'>
    <div className="h-screen w-screen rounded-xl bg-white shadow-md p-10 text-center space-y-6" id="home-container"> 

      {/* ✅ Common Navbar */}
      <div className="navbar fixed top-0 left-0 w-full z-50 bg-white shadow-md flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-gray-800">LET'S DO DSA</h1>
        <div className="flex gap-6">
          <button onClick={() => setView('home')} className="text-gray-700 hover:text-blue-600 font-medium">Home</button>
          <button onClick={() => setView('beginner')} className="text-gray-700 hover:text-blue-600 font-medium">Beginner</button>
          <button onClick={() => setView('advanced')} className="text-gray-700 hover:text-blue-600 font-medium">Advance</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="herosection mt-24"> {/* mt-24 to prevent overlap with navbar */}
        <div className='headText'>
          <h1 className="text-2xl font-bold tracking-tight">LET'S DO DSA TOGETHER</h1>
        </div>
        <div>
          <img src='/images/heroSecImg.jpg' alt="Hero" />
        </div>
      </div>

      {/* Description */}
      <div className="description">
        <span className="block text-lg font-semibold text-green-600">DSA🧠🐦‍🔥</span>
        <p className="text-sm text-slate-600">
          Mastering DSA is like unlocking cheat codes for problem-solving. It's the core of writing clean, efficient, and optimized code—stuff that actually performs under pressure. Whether you're trying to ace coding interviews or build scalable systems, DSA is the ultimate skill flex.
        </p>
      </div>

      {/* Sections */}
      <div className="sections">
        <div className="grid grid-rows-3 gap-4 mt-4" id="buttons">
          <CompartmentButton label="Beginner's" onClick={() => setView('beginner')} />
          <CompartmentButton label="Advance" onClick={() => setView('advanced')} />
          <CompartmentButton label="Both" onClick={() => setView('beginner')} />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-6 mt-10">
        <h2 className="text-lg font-semibold mb-2">Let's Do DSA 🚀</h2>
        <p className="text-sm mb-2">Your one-stop guide to mastering Data Structures and Algorithms.</p>
        <div className="flex justify-center gap-6 mb-2">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
        </div>
        <p className="text-xs text-gray-400">© 2025 Let's Do DSA. All rights reserved.</p>
      </footer>

    </div>
  </div>
);

export default Home;
