export default function SEOStat({ label, value }){
  return (
    <div className="card p-6 text-center">
      <div className="text-3xl font-extrabold text-brand">{value}</div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </div>
  )
}
