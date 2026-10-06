function Header() {
  return (
    <header className="bg-black text-white">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-6">
        <a href="/" className="font-bold">
          MrZonyn
        </a>

        <div className="flex gap-8">
          <a
            href="#work"
            className="text-gray-400 transition-colors hover:text-green-800"
          >
            Work
          </a>
          <a
            href="#about"
            className="text-gray-400 transition-colors hover:text-green-800"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-400 transition-colors hover:text-green-800"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
