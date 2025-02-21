export function Button({ children, disabled = false, onClick = () => {} }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`disabled:opacity-80 cursor-pointer py-2 px-4 bg-gradient-to-tl from-primary/90 to-blue-900 rounded text-white font-medium`}
    >
      {children}
    </button>
  );
}
