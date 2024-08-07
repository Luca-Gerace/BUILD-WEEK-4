import { BuildingOffice2Icon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { format, isValid } from 'date-fns';
import { useParams } from 'react-router-dom';
import UpdateExperienceModal from './UpdateExperienceModal';
import { useState } from 'react';
import { deleteUserExperience } from '../../services/api';

export default function SingleExperience({ experience, user, setExperiences, add, setAdd }) {
  const { id } = useParams(); // se id è true ci troviamo nella pagina profilo di altri utenti e non renderizziamo i bottoni per la modifica

  // Trigger modale
  const [open, setOpen] = useState(false);
  const updateExperience = () => setOpen((cur) => !cur);

  // Funzione per formattare la data
  const formatDateTime = (dateTimeString) => {
    const parsedDate = new Date(dateTimeString);
    if (!isValid(parsedDate)) {
      return 'Invalid date';
    }
    const formattedDate = format(parsedDate, "dd/MM/yyyy");
    return formattedDate;
  };

  // funzione per cancellare esperienza
  const deleteExperience = async () => {
    try {
      await deleteUserExperience(user._id, experience._id);
      setAdd(!add);
      setExperiences(prevExperiences => prevExperiences.filter(exp => exp._id !== experience._id));
    } catch (error) {
      console.error('Errore durante la cancellazione dell\'esperienza:', error);
    }
  };

  return (
    <>
      <div className='flex justify-between my-4 pt-2 pb-6 border-b-2 last:border-b-0 last:pb-0'>
        <div className='flex gap-4'>
          <div className='rounded-full'>
            {
              experience.logo ? 
              (<img className='w-12 h-12 rounded-full bg-[#dddddd90]' src={experience.logo} alt={experience.company} />)
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
        {!id && (
          <>
            <div className='flex flex-col gap-6 pt-3'>
              <PencilIcon className='h-6 w-6 mx-2 text-{rgb(102,102,102)} cursor-pointer' onClick={updateExperience} />
              <TrashIcon className='h-6 w-6 mx-2 text-{rgb(102,102,102)} cursor-pointer' onClick={deleteExperience}/>
            </div>
            <UpdateExperienceModal
              experience={experience}
              user={user}
              setExperiences={setExperiences}  // Passa setExperiences a UpdateExperienceModal
              open={open}
              add={add}
              setAdd={setAdd}
              handleOpen={updateExperience}
            />
          </>
        )}
      </div>
    </>
  );
}