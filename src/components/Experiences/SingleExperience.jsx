
import { BuildingOffice2Icon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';

export default function SingleExperience({ experience }) {

  const { id } = useParams(); // se id è true ci troviamo nella pagina profilo di altri utenti e non renderizziamo i bottoni per la modifica

  // Funzione per formattare la data
  const formatDateTime = (dateTimeString) => {
    const formattedDate = format(new Date(dateTimeString), "yyyy/MM/dd");
    return formattedDate;
  };

  return (
    <>
      <div className='flex justify-between my-4 pt-2 pb-6 border-b-2 last:border-b-0 last:pb-0'>
        <div className='flex gap-4'>
          <div className='w-12 h-12 rounded-full'>
            {
              experience.image ? 
              (<img src={experience.image} alt={experience.company} />)
              :
              (
                <div className='flex justify-center items-center w-12 h-12 rounded-full bg-[#ddd]'>
                  <BuildingOffice2Icon className='h-6 w-6 mx-2 text-{rgb(102,102,102)}' />
                </div>
              )
            }
          </div>
          <div>
            <h4 className='font-bold'>{experience.role}</h4>
            <p className='text-[14px]'>{experience.company}</p>
            <p className='opacity-60 text-[14px]'> dal {formatDateTime(experience.startDate)} {experience.endDate ? `al ${formatDateTime(experience.endDate)}` : 'alla data attuale'}</p>
            <p className='opacity-60 text-[14px]'>{experience.area}</p>
            <p className=''>{experience.description}</p>
          </div>
        </div>
        { !id && 
          <>a b c</>
        }
      </div>
    </>
  )
}