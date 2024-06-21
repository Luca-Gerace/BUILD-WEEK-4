import { Button } from '@material-tailwind/react';
import img404 from '../assets/img404.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex w-full justify-center flex-col items-center gap-6 mt-16 mb-32">
      <img src={img404} alt="error 404" />
      <h1 className='text-bold text-[32px]'>Questa pagina non esiste</h1>
      <p>Per favore premi sul bottone per tornare in Home</p>
      <Link to='/'>
        <Button className='rounded-full py-[12px] px-[16px]' variant='outlined' color="blue">Torna alla home</Button>
      </Link>
    </div>
  )
}
