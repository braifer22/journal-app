import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

export function PublicPages() {
  const { status } = useSelector((state) => state.auth);

  return status !== 'authenticated' ? <Outlet /> : <Navigate to={'/'} />;
}
