import CompartmentButton from './CompartmentButton';
import './Home.css';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='containerBgImg'>
      <div className=" h-screen w-screen  rounded-xl bg-white shadow-md p-10 text-center space-y-6" id="home-container"> 
        <div className="navbar fixed top-0 left-0 w-full z-50 bg-white shadow-md">
          <div><h1>HOME</h1></div>
          <div><button onClick={() => navigate('/practice')}> Beginner</button></div>
          <div><button onClick={() => navigate('/practice/advanced')}> Advance</button></div>
        </div>
        <div className="herosection">
          <div className='headText'> <h1 className="text-2xl font-bold tracking-tight">LET'S DO DSA TOGETHER</h1></div>
          <div><img src='public\\images\\heroSecImg.jpg' alt="" srcSet="" /></div>
        </div>
        <div className="description">
          <span>DSA🧠🐦‍🔥</span>
          <p className="text-sm text-slate-600"> Mastering DSA is like unlocking cheat codes for problem-solving. It's the core of writing clean, efficient, and optimized code—stuff that actually performs under pressure. Whether you're trying to ace coding interviews or build scalable systems, DSA is the ultimate skill flex.</p>
        </div>

        <div className="sections">
          <div className="grid grid-rows-3 gap-4 mt-4" id="buttons">
            <CompartmentButton label="Beginner's" onClick={() => navigate('/practice')} />
            <CompartmentButton label="Advance" onClick={() => navigate('/practice/advanced')} />
            <CompartmentButton label="Both" onClick={() => navigate('/practice')} />
          </div>
        </div>
        
        <footer className="bg-gray-900 text-white text-center p-6 mt-10">
          <h2 className="text-lg font-semibold mb-2">Let's Do DSA 🚀</h2>
          <p className="text-sm mb-2">Your one-stop guide to mastering Data Structures and Algorithms.</p>

          <div className="flex justify-center gap-6 mb-2">
            <Link to="/" className="hover:underline">Home</Link>
            <a href="#about" className="hover:underline">About</a>
            <Link to="/contact" className="hover:underline bg-transparent border-none text-white cursor-pointer">Contact</Link>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
          </div>

          <p className="text-xs text-gray-400">© 2025 Let's Do DSA. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
