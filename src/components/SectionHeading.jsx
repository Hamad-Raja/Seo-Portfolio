export default function SectionHeading({ eyebrow, title, subtitle, center=false }){
  return (
    <div className={`mb-8 ${center ? 'text-center mx-auto max-w-2xl' : ''}`}>
      {eyebrow && <div className="badge mb-3 text-brand border-brand/30">{eyebrow}</div>}
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
    </div>
  )
}
