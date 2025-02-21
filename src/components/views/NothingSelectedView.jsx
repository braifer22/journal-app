import { PlusIcon } from '@heroicons/react/16/solid';

export function NothingSelectedView() {
  return (
    <section className="p-4">
      <div className="bg-blue-950 size-full rounded flex justify-center items-center text-4xl text-white relative p-6">
        Seleccione o cree una entrada.
        <div className="absolute bottom-8 right-8 size-12 bg-rose-500 rounded-full grid place-content-center shadow-lg shadow-neutral-900 cursor-pointer animate-bounce">
          <PlusIcon height={32} />
        </div>
      </div>
    </section>
  );
}
