export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">MySite</div>
        <ul className="flex space-x-6">
          <li><a href="#home" className="text-gray-700 hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="text-gray-700 hover:text-blue-500">About</a></li>
          <li><a href="#services" className="text-gray-700 hover:text-blue-500">Services</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}