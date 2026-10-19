function Header() {
  return (
    <header className="bg-black text-white">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-6">
        <a
          href="/"
          className="font-bold cursor-default transition-colors text-green-700 hover:text-green-400 text-shadow-white"
        >
          MrZonyn
        </a>

        <div className="flex gap-8">
          <a
            href="#work"
            className="text-gray-400 transition-colors hover:text-green-700"
          >
            Work
          </a>
          <a
            href="#about"
            className="text-gray-400 transition-colors hover:text-green-700"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-400 transition-colors hover:text-green-700"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
