import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

export default function Services(){
  return (
    <>
      <Navbar />
      <main className="container-px mx-auto">
        <SectionHeading eyebrow="Services" title="Engagements that fit your stage" subtitle="From audits to ongoing SEO management" />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.concat([
            
          ]).map(s => <ServiceCard key={s.title} {...s} />)}
        </div>
      </main>
      <Footer />
    </>
  )
}
