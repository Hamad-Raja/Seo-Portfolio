export default function Testimonial({ name, role, quote }){
  return (
    <div className="card p-6">
      <p className="text-gray-800 italic leading-relaxed">“{quote}”</p>
      <div className="mt-4 text-sm font-medium">{name}</div>
      <div className="text-xs text-gray-500">{role}</div>
    </div>
  )
}
