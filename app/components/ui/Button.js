export default function Button({ children, onClick, variant = "primary", className = "" }) {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition cursor-pointer text-sm inline-flex items-center justify-center";
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20",
    secondary: "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}