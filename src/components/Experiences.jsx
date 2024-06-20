import { PencilIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import axios from '../modules/ApiAxios';
import AddExperience from './AddExperience';
import SingleExperience from './SingleExperience';

export default function Experiences({ user }) {

  // Hooks
  const [experiences, setExperiences] = useState([]);
  const [add, setAdd] = useState(false);

  useEffect(() => {

    const fetchData = async () => {
      if (!user._id) return;
      try {
        const response = await axios.get(`${user._id}/experiences`);
        setExperiences(response.data);

      } catch (error) {
        console.error("Error fetching users:", error)
      }
    }
    fetchData()

  }, [add, user._id]);




  return (
    <div className='w-full px-6 py-4 bg-white rounded-lg'>
        <div className='mx-auto pt-4 border-b-2 border-grey-500'>
            <div className='flex flex-wrap justify-between'>
                <h3 className='font-bold text-lg'>Esperienza</h3>
                <div className='flex flex-wrap'>
                    <AddExperience setExperiences={setExperiences} experiences={experiences} add={add} setAdd={setAdd} user={user} />
                    <PencilIcon className='h-6 w-6 mx-2 text-{rgb(102,102,102)} cursor-pointer' />
                </div>
            </div>
            {experiences.map((experience, index) => 
            (<SingleExperience key={index} experience={experience} />))}
        </div>
    </div>
  )
}