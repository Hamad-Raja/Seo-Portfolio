export default function ServiceCard({ title, desc, points=[] }){
  return (
    <div className="card p-6 hover:shadow-lg transition">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
      <ul className="mt-4 space-y-1 text-sm text-gray-700 list-disc list-inside">
        {points.map((p,i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  )
}
