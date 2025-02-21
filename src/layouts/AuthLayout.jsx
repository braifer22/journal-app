export function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen justify-center items-center p-6 bg-gradient-to-tr from-primary to-blue-950">
      {children}
    </div>
  );
}
