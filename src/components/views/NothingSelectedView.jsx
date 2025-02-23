import { PlusIcon } from '@heroicons/react/16/solid';
import { useDispatch, useSelector } from 'react-redux';
import { startNewEmptyNote } from '../../store/slices/journal/thunks';

export function NothingSelectedView() {
  const { isSaving } = useSelector((state) => state.journal);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(startNewEmptyNote());
  };

  return (
    <section className="p-4">
      <div className="bg-blue-950 size-full rounded flex justify-center items-center text-4xl text-white relative p-6">
        Seleccione o cree una entrada.
        <button
          disabled={isSaving}
          onClick={handleClick}
          className="absolute bottom-8 right-8 size-12 bg-rose-500 rounded-full grid place-content-center shadow-lg shadow-neutral-900 cursor-pointer disabled:opacity-70 disabled:cursor-progress"
        >
          <PlusIcon height={32} />
        </button>
      </div>
    </section>
  );
}
