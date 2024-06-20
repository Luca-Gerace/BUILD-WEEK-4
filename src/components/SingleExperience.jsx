import { AcademicCapIcon } from '@heroicons/react/24/outline';

export default function SingleExperience({ experience }) {
  return (
    <>
      <div className='flex flex-wrap my-4'>
        <div className='w-12 h-12 bg-orange-500'>
         {/* Qui dentro ci andrà l'immagine */}
        </div>
        <div className='ms-2'>
          <h4 className='font-bold text-base'>{experience.role}</h4>
          <p className='text-base'>{experience.company}</p>
          <p className='text-base opacity-60'>{experience.startDate} - {experience.endDate}</p>
          <p className='text-base opacity-60'>{experience.area}</p>
          <p className='text-base'>{experience.description}</p>
        </div>
      </div>

      <div className='flex flex-wrap ms-11 my-4'>
          <AcademicCapIcon className='h-5 w-5 mx-2 text-{rgb(102,102,102)}'/>
          <p className='font-bold text-sm'>Academic Cap</p>
      </div>
    </>
  )
}