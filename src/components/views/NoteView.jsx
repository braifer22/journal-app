import { Button } from '../Button';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

export function NoteView() {
  return (
    <section className="p-4 flex flex-col gap-4">
      <header className="flex justify-between items-center">
        <h2 className="text-3xl font-medium">28 de enero de 2025</h2>
        <Button>Guardar</Button>
      </header>
      <form className="flex flex-col gap-4 *:p-2 *:border *:rounded">
        <input type="text" placeholder="Ingrese el título." />
        <textarea placeholder="¿Qué pasó hoy?" className="field-sizing-content min-h-56 resize-none"></textarea>
      </form>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 *:aspect-[4/3] *:object-cover">
        {itemData.map(({ img, title }) => (
          <img key={img} src={img} alt={title} />
        ))}
      </div>
    </section>
  );
}
