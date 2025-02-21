import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { Button } from '../components/Button';
import { AuthLayout } from '../layouts/AuthLayout';
import { createAccount } from '../store/slices/auth/thunks';

export function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const { errorMessage } = useSelector((state) => state.auth);

  const { status } = useSelector((state) => state.auth);

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(createAccount(username, email, password));
  }

  return (
    <AuthLayout>
      <div className="p-6 bg-white flex rounded flex-col w-96 ">
        <h1 className="text-2xl self-start font-medium mb-4">Register | Aloxer</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col
					*:[label]:my-1
					*:[input]:border *:[input]:p-2 *:[input]:rounded *:[input]:mb-3
				"
        >
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            placeholder="Ingrese su nombre de usuario:"
          />
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Ingrese su correo electrónico:"
          />
          <label htmlFor="pass">Contraseña:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="pass"
            placeholder="Ingrese su contraseña:"
          />
          {errorMessage && (
            <div className="p-2 mb-3 rounded bg-red-100 text-rose-600">Hubo un error al crear el usuario.</div>
          )}
          <Button disabled={status !== 'not-authenticated'}>Registrarme</Button>
        </form>
        <Link className="underline mt-4 text-center" to={'/login'}>
          Ya tengo cuenta
        </Link>
      </div>
    </AuthLayout>
  );
}
