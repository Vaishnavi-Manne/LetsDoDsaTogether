// Navbar.jsx
const Navbar = ({ setView }) => {
  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-white shadow-md flex justify-between items-center px-6 py-4">
      <div>
        <h1 className="text-xl font-bold">HOME</h1>
      </div>
      <div className="flex gap-6">
        <button onClick={() => setView('home')} className="text-gray-700 hover:text-blue-600 font-medium">Home</button>
        <button onClick={() => setView('beginner')} className="text-gray-700 hover:text-blue-600 font-medium">Beginner</button>
        <button onClick={() => setView('advanced')} className="text-gray-700 hover:text-blue-600 font-medium">Advance</button>
      </div>
    </div>
  );
};

export default Navbar;
