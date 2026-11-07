export default function Card({ title, description, children, className = "" }) {
  return (
    <div className={`bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl transition hover:border-slate-700 ${className}`}>
      {title && <h3 className="text-lg font-semibold text-slate-100 mb-1">{title}</h3>}
      {description && <p className="text-sm text-slate-400 mb-4">{description}</p>}
      <div>{children}</div>
    </div>
  );
}