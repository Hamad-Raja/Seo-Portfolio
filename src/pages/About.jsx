import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'

export default function About(){
  return (
    <>
      <Navbar />
      <main className="container-px mx-auto">
        <SectionHeading eyebrow="About" title="Hi, I’m Hanan – your SEO partner" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="prose max-w-none">
            <p>I blend technical SEO, content systems, and analytics to create compounding growth. My workflows emphasise predictable sprints, crisp reporting, and collaboration with dev/content teams.</p>
            <ul className="list-disc list-inside">
              <li>Technical: CWV, indexing, scalable IA, migrations</li>
              <li>Content: Clusters, briefs, entity SEO, internal links</li>
              <li>Links: Digital PR, safe outreach, asset-led earning</li>
            </ul>
          </div>
          <div className="card p-6"> 
            <h3 className="font-semibold">Tooling I use</h3>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-700">
              {['GSC','GA4','Ahrefs','Semrush','Screaming Frog','Sitebulb','Looker Studio','Sheets + Apps Script'].map(x=> (
                <li key={x} className="badge">{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
