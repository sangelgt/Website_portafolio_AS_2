import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#2c2117] p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold font-['Inter']">
          <a href="/">Logo</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8" aria-label="Desktop navigation">
          <a href="/methodology" className="hover:text-[#f27f0d] font-['Noto_Sans']">Metodología</a>
          <a href="/case-study" className="hover:text-[#f27f0d] font-['Noto_Sans']">Caso de Estudio</a>
          <a href="/diagnostics" className="hover:text-[#f27f0d] font-['Noto_Sans']">Diagnóstico</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4" aria-label="Mobile navigation">
          <a href="/methodology" className="block py-2 px-4 text-sm hover:bg-[#221910] font-['Noto_Sans']">Metodología</a>
          <a href="/case-study" className="block py-2 px-4 text-sm hover:bg-[#221910] font-['Noto_Sans']">Caso de Estudio</a>
          <a href="/diagnostics" className="block py-2 px-4 text-sm hover:bg-[#221910] font-['Noto_Sans']">Diagnóstico</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
