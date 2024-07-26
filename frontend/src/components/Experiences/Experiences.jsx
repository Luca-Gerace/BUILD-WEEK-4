import { useState } from 'react';
import SingleExperience from './SingleExperience';
import SingleExperienceSkeleton from './SingleExperienceSkeleton';

export default function Experiences({ id, experiences, loading }) {

  // Hooks
  const [add, setAdd] = useState(false);

  return (
    <div className='w-full px-6 py-4 bg-white rounded-lg'>
      <div className='mx-auto pt-4'>
        <div className='flex flex-wrap justify-between'>
          <h3 className='font-bold text-lg pb-2'>Esperienze</h3>
          {!id && (
            <div className='flex flex-wrap'>
              {/* <AddExperience setExperiences={setExperiences} experiences={user.experiences} add={add} setAdd={setAdd} /> */}
            </div>
          )}
        </div>
        {loading ? (
            Array.from({ length: 2 }, (el, index) => (
                <SingleExperienceSkeleton key={index} />
            ))
        ) : (
          experiences.map((experience, index) => (
              <SingleExperience
                key={index}
                experience={experience}
                // setExperiences={setExperiences}
                add={add}
                setAdd={setAdd}
              />
            ))
        )}
      </div>
    </div>
  );
}