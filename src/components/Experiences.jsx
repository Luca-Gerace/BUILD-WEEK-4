import { AcademicCapIcon, PencilIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import axios from '../modules/ApiAxios';
import AddExperience from './AddExperience';

export default function Experiences({ user }) {

  // Hooks
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    axios.get(`${user._id}/experiences`)
        .then(response => setExperiences(response.data))
        .catch(error => console.error("Error fetching users:", error));
  }, [experiences]);


  return (
    <div className='w-full mx-auto bg-white rounded-md px-6'>
        <div className='flex flex-col gap-6 pt-6 pb-4 border-b-2 border-grey-500'>
            <div className='flex flex-wrap justify-between'>
                <h3 className='font-bold text-lg'>Esperienza</h3>
                <div className='flex flex-wrap'>
                    <AddExperience />
                    <PencilIcon className='h-6 w-6 mx-2 text-{rgb(102,102,102)} cursor-pointer' />
                </div>
            </div>

            <div className='border-b-2 border-grey-500 last:border-b-0'>
                <div className='flex flex-wrap'>
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
            <div className='border-b-2 border-grey-500 last:border-b-0'>
                <div className='flex flex-wrap'>
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
    </div>
  )
}