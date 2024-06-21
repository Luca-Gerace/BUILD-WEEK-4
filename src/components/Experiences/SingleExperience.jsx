
import { BuildingOffice2Icon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';
import axios from "../../modules/ApiAxios";

export default function SingleExperience({ experience, user, add, setAdd }) {

  const { id } = useParams(); // se id è true ci troviamo nella pagina profilo di altri utenti e non renderizziamo i bottoni per la modifica

  // Funzione per formattare la data
  const formatDateTime = (dateTimeString) => {
    const formattedDate = format(new Date(dateTimeString), "yyyy/MM/dd");
    return formattedDate;
  };

  const deleteExperience = () => {
    axios.delete(`${user._id}/experiences/${experience._id}`)
      .then(response => {
        console.log('Esperienza cancellata con successo:', response.data);
        setAdd(!add)
      })
      .catch(error => {
        console.error('Errore durante la cancellazione dell esperienza:', error);
      });
  };

  return (
    <>
      <div className='flex justify-between my-4 pt-2 pb-6 border-b-2 last:border-b-0 last:pb-0'>
        <div className='flex gap-4'>
          <div className='w-12 h-12 rounded-full'>
            {
              experience.image ? 
              (<img className='w-12 h-12 rounded-full bg-[#dddddd90]' src={experience.image} alt={experience.company} />)
              :
              (
                <div className='flex justify-center items-center w-12 h-12 rounded-full bg-[#dddddd90]'>
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
          <div className='flex flex-col gap-6 pt-3'>
            <PencilIcon className='h-6 w-6 mx-2 text-{rgb(102,102,102)} cursor-pointer' />
            <TrashIcon className='h-6 w-6 mx-2 text-{rgb(102,102,102)} cursor-pointer' onClick={deleteExperience}/>
          </div>
        }
      </div>
    </>
  )
}