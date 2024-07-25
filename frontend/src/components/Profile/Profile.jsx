import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { CameraIcon, PencilIcon } from '@heroicons/react/24/outline';
import { IconButton } from "@material-tailwind/react";
import { useState } from 'react';
import UpdateProfileModal from './UpdateProfileModal';
import UpdateImageModal from './UpdateImageModal';
import { useParams } from 'react-router-dom';

export default function Profile() {

  // Hooks di controllo del contesto dell'utente
  const { user, setUser } = useContext(UserContext);
  const { id } = useParams(); // se id è true ci troviamo nella pagina profilo di altri utenti e non renderizziamo i bottoni per la modifica

  // Hooks di controllo della modale di modifica del profilo
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const handleOpenProfileModal = () => setOpenProfileModal((cur) => !cur);

  // Hooks di controllo della modale di modifica dell'immagine profilo
  const [openImageModal, setOpenImageModal] = useState(false);
  const handleOpenImageModal = () => setOpenImageModal((cur) => !cur);

  return (
    <div className='w-full h-[350px]'>
      <div className='relative h-[150px] bg-[#0d67bc] rounded-t-lg'>
        <div className='absolute border-4 top-[50px] left-[25px] border-white rounded-full'>
          <img src={user.avatar} alt="image-user" className="rounded-full w-[125px] h-[125px]" />
        </div>
        {
          !id &&
          <>
            <div className="absolute right-[25px] top-[25px] w-[40px] h-[40px] rounded-full border border-white bg-[white] flex items-center justify-center gap-4 ">
              <IconButton className='rounded-full border-white' variant='outlined' onClick={handleOpenImageModal}>
                <CameraIcon className='w-[30px] h-[30px]' style={{ fill: '#6B9DFF' }}/>
              </IconButton>                
            </div>
            <div onClick={handleOpenProfileModal}
            className="absolute right-[25px] bottom-[-50px] w-[40px] h-[40px] bg-[white] flex items-center justify-center gap-4 ">
              <IconButton className='border-0' variant='outlined'>
                <PencilIcon className='w-[30px] h-[30px]' />
              </IconButton>                
            </div>
          </>
        }
      </div>
      <UpdateProfileModal user={user} setUser={setUser} open={openProfileModal} handleOpen={handleOpenProfileModal} />
      <UpdateImageModal user={user} setUser={setUser} open={openImageModal} handleOpen={handleOpenImageModal} />
    </div>
  );
}