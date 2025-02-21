import { Link } from 'react-router';
import { Button } from '../components/Button';
import { AuthLayout } from '../layouts/AuthLayout';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logInAccount } from '../store/slices/auth/thunks';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const { errorMessage } = useSelector((state) => state.auth);

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(logInAccount(email, password));
  }

  return (
    <AuthLayout>
      <div className="p-6 bg-white flex rounded flex-col w-96 ">
        <h1 className="text-2xl font-medium mb-4">Login | Aloxer</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col
					*:[label]:my-1
					*:[input]:border *:[input]:p-2 *:[input]:rounded *:[input]:mb-3
				"
        >
          <label htmlFor="user">Correo electrónico:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="user"
            placeholder="Ingrese su correo electrónico:"
          />
          <label htmlFor="pass">Contraseña:</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="pass"
            placeholder="Ingrese su contraseña:"
          />

          {errorMessage && (
            <div className="p-2 mb-3 rounded bg-red-100 text-rose-600">Email o contraseña incorrectos.</div>
          )}
          <Button>Iniciar sesión</Button>
        </form>
        <Link className="underline mt-4 text-center" to={'/register'}>
          Registrarme
        </Link>
      </div>
    </AuthLayout>
  );
}
