import { useState } from 'react';
import SingleExperience from './SingleExperience';
import SingleExperienceSkeleton from './SingleExperienceSkeleton';
import AddExperience from './AddExperience';

export default function Experiences({ id, experiences, loading }) {
  const [add, setAdd] = useState(false);
  const [updatedExperiences, setUpdatedExperiences] = useState(experiences);

  return (
    <div className='w-full px-6 py-4 bg-white rounded-lg'>
      <div className='mx-auto pt-4'>
        <div className='flex flex-wrap justify-between'>
          <h3 className='font-bold text-lg pb-2'>Esperienze</h3>
          {!id && (
            <AddExperience setExperiences={setUpdatedExperiences} experiences={updatedExperiences} add={add} setAdd={setAdd} />
          )}
        </div>
        {loading ? (
          Array(3).fill().map((_, index) => (
            <SingleExperienceSkeleton key={index} />
          ))
        ) : (
          updatedExperiences.map((experience, index) => (
            <SingleExperience
              key={index}
              experience={experience}
              add={add}
              setAdd={setAdd}
            />
          ))
        )}
      </div>
    </div>
  );
}