import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import SEOStat from '../components/SEOStat'
import Testimonial from '../components/Testimonial'
import CTA from '../components/CTA'
import { services } from '../data/services'
import { testimonials } from '../data/testimonials'


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container-px mx-auto">
        {/* Hero */}
        <section className="mt-10 md:mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="badge mb-4 text-brand border-brand/30">SEO Expert Portfolio</div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">I build <span className="text-brand">search systems</span> that compound your growth.</h1>
            <p className="mt-3 text-gray-600">
              Boost Your Online Presence! <br />
              Hanan SEO Expert | Digital Marketer | Social Media Services & Content Writing
            </p>

            <div className="mt-6 flex gap-3">
              <a href="#services" className="btn-brand">View Services</a>
              <a href="#work" className="btn-ghost">See Results</a>
            </div>
          </div>
          {/* <div className="card p-6 max-w-xs mx-auto rounded-xl overflow-hidden shadow-lg"> */}
            <img
              src='/images/Profile.jpeg'
              alt="Hanan – SEO Expert"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-72 lg:h-72 object-cover mx-auto"
            />
          {/* </div> */}


        
      </section>

      {/* Stats */}
      <section className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        <SEOStat label="Avg. traffic lift" value="+168%" />
        <SEOStat label="Keywords in top 3" value="370+" />
        <SEOStat label="Domains served" value="25+" />
        <SEOStat label="Migrations" value="10+" />
      </section>

      {/* Services */}
      <section id="services" className="mt-16">
        <SectionHeading eyebrow="What I Do" title="Services that move the needle" subtitle="Audit → Strategy → Execution → Reporting" />
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map(s => <ServiceCard key={s.title} {...s} />)}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-16">
        <SectionHeading center eyebrow="Proof" title="Teams like working with me" subtitle="Outcomes, clarity, and speed." />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => <Testimonial key={i} {...t} />)}
        </div>
      </section>

      <CTA />
    </main >
      <Footer />
    </>
  )
}
