import Image from 'next/image';

export default function TarjetaAutor({ nombre, descripcion, imagen }) {
  return (
    <div className="border p-4 rounded shadow-lg max-w-sm">
      <Image
        src={imagen}
        alt={`Foto de ${nombre}`}
        width={300}
        height={200}
        className="rounded"
        priority
      />
      <h2 className="text-xl font-bold mt-2">{nombre}</h2>
      <p>{descripcion}</p>
    </div>
  );
}
