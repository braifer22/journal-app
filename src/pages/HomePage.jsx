import { Content } from '../components/Content';
import { Sidebar } from '../components/Sidebar';

export function HomePage() {
  return (
    <>
      <main className="grid grid-cols-[auto_1fr]">
        <Sidebar />
        <Content />
      </main>
    </>
  );
}
