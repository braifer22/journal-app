import { useDispatch } from 'react-redux';
import { Button } from './Button';
import { NothingSelectedView } from './views/NothingSelectedView';
import { logOutAccount } from '../store/slices/auth/thunks';

export function Content() {
  const dispatch = useDispatch();

  function handleLogout(event) {
    event.preventDefault();

    dispatch(logOutAccount());
  }

  return (
    <main className="grid grid-rows-[auto_1fr]">
      <header className="flex items-center justify-between overflow-clip h-16 px-4 border-b">
        <h1 className="text-lg">Journal App</h1>
        <Button onClick={handleLogout}>Cerrar sesión</Button>
      </header>
      <NothingSelectedView />
    </main>
  );
}
