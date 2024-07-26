import { useState } from 'react';
import SingleExperience from './SingleExperience';
import SingleExperienceSkeleton from './SingleExperienceSkeleton';

export default function Experiences({ user, experiences, setExperiences, loading }) {
  const [add, setAdd] = useState(false);

  return (
    <div className='w-full px-6 py-4 bg-white rounded-lg'>
      <div className='mx-auto pt-4'>
        <div className='flex flex-wrap justify-between'>
          <h3 className='font-bold text-lg pb-2'>Esperienze</h3>
        </div>
        {loading ? (
          Array(3).fill().map((_, index) => (
            <SingleExperienceSkeleton key={index} />
          ))
        ) : (
          experiences.map((experience, index) => (
            <SingleExperience
              key={index}
              user={user}
              experience={experience}
              add={add}
              setAdd={setAdd}
              setExperiences={setExperiences}
            />
          ))
        )}
      </div>
    </div>
  );
}