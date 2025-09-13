import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="mt-20 border-t border-gray-100 bg-white">
      <div className="container-px mx-auto py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="h-8 w-8 rounded-xl inline-block">
               <img className='rounded-xl' src="/src/assets/SEO.jpeg" alt="logo" />
            </span>
            <span className="font-bold">SEO by HANAN</span>
          </div>
          <p className="text-sm text-gray-600">Technical + content systems that turn search into revenue.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><Link to="/services" className="hover:text-brand">Services</Link></li>
            <li><Link to="/case-studies" className="hover:text-brand">Case Studies</Link></li>
            <li><Link to="/blog" className="hover:text-brand">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm text-gray-600">Islamabad, PK · Mon–Fri</p>
          <Link to="/contact" className="btn-brand mt-3 inline-flex">Start a Project</Link>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-6">© {new Date().getFullYear()} SEO by Raja. All rights reserved.</div>
    </footer>
  )
}
