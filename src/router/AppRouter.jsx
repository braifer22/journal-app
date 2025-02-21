import { Navigate, Route, Routes } from 'react-router';
import { LoadingView } from '../components/LoadingView';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { PrivatePages } from '../pages/PrivatePages';
import { PublicPages } from '../pages/PublicPages';
import { RegisterPage } from '../pages/RegisterPage';
import { useCheckAuth } from '../hooks/useCheckAuth';

export function AppRouter() {
  const { status } = useCheckAuth();

  if (status === 'checking') {
    return <LoadingView />;
  }

  return (
    <>
      <Routes>
        <Route element={<PrivatePages />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>

        <Route element={<PublicPages />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to={'login'} />} />
        </Route>
      </Routes>
    </>
  );
}
