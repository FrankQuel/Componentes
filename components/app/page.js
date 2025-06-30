import TituloConFuente from '../componentes next/TituloConFuente';
import TarjetaAutor from '../componentes next/TarjetaAutor';

export default function Page() {
  return (
    <main className="p-8 space-y-6">
      <TituloConFuente texto="Conoce a nuestro equipo" />

      <TarjetaAutor
        nombre="Ana Torres"
        descripcion="Desarrolladora Front-End con experiencia en React y diseño UI."
        imagen="/ana.jpg" 
      />
    </main>
  );
}
