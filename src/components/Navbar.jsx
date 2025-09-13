import { NavLink, Link } from 'react-router-dom'
import { nav } from '../data/nav'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="container-px mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="h-10 w-10 rounded-xl inline-block">
            <img className='rounded-xl' src="/src/assets/SEO.jpeg" alt="logo" />
          </span>
          <span className="font-extrabold tracking-tight">HANAN</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({isActive}) => `text-sm font-medium hover:text-brand ${isActive ? 'text-brand' : 'text-gray-700'}`}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-brand">Get Proposal</Link>
        </nav>
      </div>
    </header>
  )
}
