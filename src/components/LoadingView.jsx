import { Loader } from './Loader';

export function LoadingView() {
  return (
    <div className="h-screen flex justify-center items-center bg-primary">
      <Loader />
    </div>
  );
}
