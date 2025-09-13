import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import { cases } from '../data/caseStudies'

function CaseCard({ brand, impact, summary, tags=[] }){
  return (
    <div className="card p-6">
      <div className="flex items-baseline justify-between">
        <h3 className="font-semibold text-lg">{brand}</h3>
        <span className="badge text-brand border-brand/30">{impact}</span>
      </div>
      <p className="mt-2 text-sm text-gray-700">{summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map(t=> <span key={t} className="badge">{t}</span>)}
      </div>
    </div>
  )
}

export default function CaseStudies(){
  return (
    <>
      <Navbar />
      <main className="container-px mx-auto">
        <SectionHeading eyebrow="Results" title="Case studies" subtitle="Selected wins from recent engagements" />
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map(c => <CaseCard key={c.brand} {...c} />)}
        </div>
      </main>
      <Footer />
    </>
  )
}
