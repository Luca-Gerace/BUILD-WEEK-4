import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { useParams } from 'react-router-dom';
import axios from '../../modules/ApiAxios';
import AddExperience from './AddExperience';
import SingleExperience from './SingleExperience';
import SingleExperienceSkeleton from './SingleExperienceSkeleton';

export default function Experiences() {
  const { user } = useContext(UserContext);
  const { id } = useParams(); // se id è true ci troviamo nella pagina profilo di altri utenti e non renderizziamo i bottoni per la modifica

  // Hooks
  const [experiences, setExperiences] = useState([]);
  const [add, setAdd] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (!user._id) return;
      try {
        const response = await axios.get(`${user._id}/experiences`);
        setExperiences(response.data.reverse());
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchData();
  }, [add, user._id]);

  return (
    <div className='w-full px-6 py-4 bg-white rounded-lg'>
      <div className='mx-auto pt-4'>
        <div className='flex flex-wrap justify-between'>
          <h3 className='font-bold text-lg pb-2'>Esperienze</h3>
          {!id && (
            <div className='flex flex-wrap'>
              <AddExperience setExperiences={setExperiences} experiences={experiences} add={add} setAdd={setAdd} />
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
                setExperiences={setExperiences}
                add={add}
                setAdd={setAdd}
              />
            ))
        )}
      </div>
    </div>
  );
}