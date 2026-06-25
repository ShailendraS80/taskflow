function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            TaskFlow
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-white">
            {title}
          </h2>

          <p className="text-slate-400 mt-2">
            {subtitle}
          </p>
        </div>

        {children}
      </div>
    </div>
  );
}

export default AuthLayout;