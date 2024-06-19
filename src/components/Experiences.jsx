import { AcademicCapIcon, PencilIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import axios from '../modules/ApiAxios';

export default function Experiences({ user }) {

    // console.log('user', user);
    // console.log('user._id', user._id);

  // Hooks
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    axios.get(`${user._id}/experiences`)
        .then(response => setExperiences(response.data))
        .catch(error => console.error("Error fetching users:", error));
  }, []);

console.log('PIPPO', experiences);

  return (
    <div className='w-1/3 mx-auto bg-white rounded-md'>
        <div className='w-5/6 mx-auto pt-4 border-b-2 border-grey-500'>
            <div className='flex flex-wrap justify-between'>
                <h3 className='font-bold text-lg'>Esperienza</h3>
                <div className='flex flex-wrap'>
                    <PlusIcon className='h-6 w-6 mx-2 text-{rgb(102,102,102)} cursor-pointer' />
                    <PencilIcon className='h-6 w-6 mx-2 text-{rgb(102,102,102)} cursor-pointer' />
                </div>
            </div>

            <div className='flex flex-wrap my-4'>
                <div className='w-12 h-12 bg-orange-500'>
                {/* Qui dentro ci andrà l'immagine */}
                </div>
                <div className='ms-2'>
                <h4 className='font-bold text-base'>Web developer</h4>
                <p className='text-base'>Facile.it a tempo pieno</p>
                <p className='text-base opacity-60'>mar 2020 - Presente 4 anni 4 mesi</p>
                <p className='text-base opacity-60'>Milano, Lombardia, Italia</p>
                </div>
            </div>

            <div className='flex flex-wrap ms-11 my-4'>
                <AcademicCapIcon className='h-5 w-5 mx-2 text-{rgb(102,102,102)}'/>
                <p className='font-bold text-sm'>Academic Cap</p>
            </div>
        </div>

        {/* Secondo contenitore*/}
        <div className='w-5/6 pt-2 mx-auto border-b-2 border-grey-500'>
            <div className='flex flex-wrap my-4'>
                <div className='w-12 h-12 bg-orange-500'>
                {/* Qui dentro ci andrà l'immagine */}
                </div>
                <div className='ms-2'>
                <h4 className='font-bold text-base'>Web developer</h4>
                <p className='text-base'>Facile.it a tempo pieno</p>
                <p className='text-base opacity-60'>mar 2020 - Presente 4 anni 4 mesi</p>
                <p className='text-base opacity-60'>Milano, Lombardia, Italia</p>
                </div>
            </div>

            <div className='flex flex-wrap ms-11 my-4'>
                <AcademicCapIcon className='h-5 w-5 mx-2 text-{rgb(102,102,102)}'/>
                <p className='font-bold text-sm'>Academic Cap</p>
            </div>
        </div>
    </div>
  )
}