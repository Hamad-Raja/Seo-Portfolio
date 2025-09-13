import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'

const posts = [
  { title: 'Building topical authority in 2025', date: '2025-08-20', tag: 'Strategy' },
  { title: 'Internal links that actually rank', date: '2025-07-02', tag: 'On‑Page' },
  { title: 'Programmatic SEO without cannibalization', date: '2025-06-11', tag: 'Technical' },
]

export default function Blog(){
  return (
    <>
      <Navbar />
      <main className="container-px mx-auto">
        <SectionHeading eyebrow="Insights" title="Thoughts & guides" subtitle="Short, tactical posts on what works now" />
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map(p => (
            <article key={p.title} className="card p-6">
              <div className="badge">{p.tag}</div>
              <h3 className="font-semibold text-lg mt-2">{p.title}</h3>
              <div className="text-xs text-gray-500 mt-1">{new Date(p.date).toLocaleDateString()}</div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
