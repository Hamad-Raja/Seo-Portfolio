import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { nav } from '../data/nav';
import seo from '../assets/SEO.jpeg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="container-px mx-auto flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="h-10 w-10 rounded-xl inline-block">
            <img className="rounded-xl" src={seo} alt="logo" />
          </span>
          <span className="font-extrabold tracking-tight">HANAN</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium hover:text-brand ${isActive ? 'text-brand' : 'text-gray-700'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-brand">
            Get Proposal
          </Link>
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden p-2 rounded text-gray-700 hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // X icon when menu is open
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon when menu is closed
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          {nav.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)} // close menu on click
              className={({ isActive }) =>
                `block px-4 py-2 text-sm font-medium hover:text-brand ${isActive ? 'text-brand' : 'text-gray-700'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-sm font-medium text-white bg-brand rounded-md m-2 text-center"
          >
            Get Proposal
          </Link>
        </div>
      )}
    </header>
  );
}
