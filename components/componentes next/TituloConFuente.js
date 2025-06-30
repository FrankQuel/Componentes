import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: ['700'] });

export default function TituloConFuente({ texto }) {
  return (
    <h1 className={`${roboto.className} text-3xl text-blue-600`}>
      {texto}
    </h1>
  );
}
