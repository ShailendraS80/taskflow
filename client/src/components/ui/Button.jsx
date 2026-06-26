function Button({
  children,
  type = "button",
  disabled = false,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 transition py-3 font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}

export default Button;