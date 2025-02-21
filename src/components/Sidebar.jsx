import { useSelector } from 'react-redux';

const MONTHS = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

export function Sidebar() {
  const { displayName } = useSelector((state) => state.auth);

  return (
    <aside className="w-80 border-r-2 h-screen grid grid-rows-[auto_1fr]">
      <header className="flex items-center justify-center px-4 h-16 font-semibold border-b text-lg shadow-lg">
        {displayName}
      </header>
      <div className="overflow-y-auto scroll-design">
        {MONTHS.map((mes) => {
          return (
            <button
              key={Math.random()}
              className={`border-b flex flex-col gap-1 cursor-pointer items-start p-5 text-left`}
            >
              <h3 className="text-xl font-medium">{mes}</h3>
              <p className="leading-none opacity-65">Lorem ipsum dolor sit amet consectetur.</p>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
