import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import { CameraIcon, PencilIcon } from '@heroicons/react/24/outline';
import { Button, IconButton } from "@material-tailwind/react";
import { useState } from 'react';
import UpdateProfileModal from './UpdateProfileModal';
import UpdateImageModal from './UpdateImageModal';
import { useParams } from 'react-router-dom';
import { getUser } from '../../services/api';

export default function Profile() {

  // Hooks di controllo del contesto dell'utente
  const { user, setUser } = useContext(UserContext);
  const { id } = useParams(); // se id è true ci troviamo nella pagina profilo di altri utenti e non renderizziamo i bottoni per la modifica

  const [ otherUser, setOtherUser ] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {

      try {

        if (id) {
          // prendo le mie esperienze
          const response = await getUser(id);

          setOtherUser(response);

          console.log('other user', otherUser);

        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchUserData();
  }, [id, otherUser]);


  // avatar fallback img
  const fallbackAvatar = "https://res.cloudinary.com/dicfymkdl/image/upload/v1721642624/avatar_rsyffw.png";

  // Hooks di controllo della modale di modifica del profilo
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const handleOpenProfileModal = () => setOpenProfileModal((cur) => !cur);

  // Hooks di controllo della modale di modifica dell'immagine profilo
  const [openImageModal, setOpenImageModal] = useState(false);
  const handleOpenImageModal = () => setOpenImageModal((cur) => !cur);

  return (
    <>
     {
      id ? (

        <div className='w-full h-[350px]'>
          <div className='relative h-[150px] bg-[#0d67bc] rounded-t-lg'>
            <div className='absolute border-4 top-[50px] left-[25px] border-white rounded-full'>
              <img src={otherUser.avatar || fallbackAvatar} alt="image-user" className="rounded-full w-[125px] h-[125px]" />
            </div>
          </div>
          <div className='bg-white px-4 h-[200px] rounded-b-lg'>
              <div className='flex'>
                  <div className='mt-[55px] ms-[15px] me-[10px]'>
                      <h1 className='text-2xl font-bold'>{otherUser.name} {otherUser.surname}</h1>
                      { otherUser.experiences &&  <h6 className='text-lg'>{otherUser.experiences[0].role} presso {otherUser.experiences[0].company}</h6>}
                  </div>
              </div>
          </div>
        </div>

      ) : (
        <div className='w-full h-[350px]'>
          <div className='relative h-[150px] bg-[#0d67bc] rounded-t-lg'>
            <div className='absolute border-4 top-[50px] left-[25px] border-white rounded-full'>
              <img src={user.avatar} alt="image-user" className="rounded-full w-[125px] h-[125px]" />
            </div>
            <div className="absolute right-[25px] top-[25px] w-[40px] h-[40px] rounded-full border border-white bg-[white] flex items-center justify-center gap-4 ">
                <IconButton className='rounded-full border-white' variant='outlined' onClick={handleOpenImageModal}>
                <CameraIcon className='w-[30px] h-[30px]' style={{ fill: '#6B9DFF' }}/>
                </IconButton>                
            </div>
            <div onClick={handleOpenProfileModal} className="absolute right-[25px] bottom-[-50px] w-[40px] h-[40px] bg-[white] flex items-center justify-center gap-4 ">
                <IconButton className='border-0' variant='outlined'>
                <PencilIcon className='w-[30px] h-[30px]' />
                </IconButton>                
            </div>
          </div>
          <div className='bg-white px-4 h-[200px] rounded-b-lg'>
              <div className='flex'>
                  <div className='mt-[55px] ms-[15px] me-[10px]'>
                      <h1 className='text-2xl font-bold'>{user.name} {user.surname}</h1>
                      <h6 className='text-lg'>{user.experiences[0].role} presso {user.experiences[0].company}</h6>
                      <div className='flex'>
                          <a className='text-[#0d67bc] hover:text-[#0b5aa3]' href='*'>Informazioni di contatto</a>
                      </div>
                      {
                          !id &&
                          <div className='flex mt-[10px]'>
                              <Button className='rounded-full me-[4px] p-[7px]' color="blue">Disponibile per</Button>
                              <Button className='rounded-full me-[4px] p-[7px]' variant='outlined' color="blue">Aggiungi esperienza</Button>
                              <Button className='hidden md:inline rounded-full me-[4px] p-[7px]' variant='outlined' color="blue">Aggiungi qualifica</Button>
                          </div>
                      }
                  </div>
              </div>
          </div>
          <UpdateProfileModal user={user} setUser={setUser} open={openProfileModal} handleOpen={handleOpenProfileModal} />
          <UpdateImageModal user={user} setUser={setUser} open={openImageModal} handleOpen={handleOpenImageModal} />
        </div>
      )
    } 
  </>
  );
}