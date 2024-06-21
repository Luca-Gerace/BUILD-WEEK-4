import { CameraIcon, PencilIcon } from '@heroicons/react/24/outline';
import { IconButton } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useState } from 'react';
import ModalProfile from './ModalProfile';
import UpdateImageModal from './UpdateImageModal';
import { useParams } from 'react-router-dom';

export default function Profile({ setUser, user }) {

    const { id } = useParams(); // se id è true ci troviamo nella pagina profilo di altri utenti e non renderizziamo i bottoni per la modifica

    const [openProfileModal, setOpenProfileModal] = useState(false);
    const handleOpenProfileModal = () => setOpenProfileModal((cur) => !cur);

    const [openImageModal, setOpenImageModal] = useState(false);
    const handleOpenImageModal = () => setOpenImageModal((cur) => !cur);

    return (
        <div className='w-full h-[350px]'>
            <div className='relative h-[150px] bg-[#0d67bc] rounded-t-lg'>
                <div className='absolute border-4 top-[50px] left-[25px] border-white rounded-full'>
                    <img src={user.image} alt="image-user" className="rounded-full w-[125px] h-[125px]" />
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
            <div className='bg-white px-4 h-[200px] rounded-b-lg'>
                <div className='flex'>
                    <div className='mt-[55px] ms-[15px] me-[10px]'>
                        <h1 className='text-2xl font-bold'>{user.name} {user.surname}</h1>
                        <h6 className='text-lg'>{user.title}</h6>
                        <div className='flex'>
                            <p className='opacity-45'>{user.area}<span className='mx-[5px]'>&bull;</span></p>
                            <a className='text-[#0d67bc] hover:text-[#0b5aa3]' href='*'>Informazioni di contatto</a>
                        </div>
                        {
                            !id &&
                            <div className='flex mt-[10px]'>
                                <Button className='rounded-full me-[4px] p-[7px]' color="blue">Disponibile per</Button>
                                <Button className='rounded-full me-[4px] p-[7px]' variant='outlined' color="blue">Aggiungi sezione del profilo</Button>
                                <Button className='rounded-full me-[4px] p-[7px]' variant='outlined' color="blue">Migliora profilo</Button>
                                <Button className='rounded-full p-[7px]' variant='outlined'>Altro</Button>
                            </div>
                        }
                    </div>
                </div>
            </div>
            {!id && openProfileModal && <ModalProfile user={user} setUser={setUser} open={openProfileModal} handleOpen={handleOpenProfileModal} />}
            {!id && openImageModal && <UpdateImageModal user={user} setUser={setUser} open={openImageModal} handleOpen={handleOpenImageModal} />}
        </div>
    )
}