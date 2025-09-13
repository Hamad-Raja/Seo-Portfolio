import { Link } from 'react-router-dom'

export default function CTA(){
  return (
    <section className="container-px mx-auto mt-16">
      <div className="card p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="badge mb-3 text-brand border-brand/30">Let’s grow</div>
          <h3 className="text-2xl font-extrabold">Ready to turn search into revenue?</h3>
          <p className="text-gray-600 mt-1">Get a free audit with prioritised roadmap.</p>
        </div>
        <Link to="/contact" className="btn-ghost">Get Free Audit</Link>
      </div>
    </section>
  )
}
