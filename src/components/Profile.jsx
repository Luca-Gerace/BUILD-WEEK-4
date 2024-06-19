import CameraIcon from '@heroicons/react/24/outline/CameraIcon';
import ImgUser from '../assets/Profile/IMG_4893ee.jpg';
import { IconButton } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

export default function Profile({ user }) {
  return (
    <div className=' mt-[20px] w-[600px] h-[350px] border border-black'>
        <div className='relative w-[600px] h-[150px] border bg-[#0d67bc] border-black'>
            <div className='absolute border-4 top-[50px] left-[10px] border-white rounded-full w-[151px] h-[151px]'>
                <img src={user.image} alt="image-user" className="rounded-full w-[150px]" />
            </div>
            <div className="absolute right-[15px] top-[15px] w-[40px] h-[40px] rounded-full border border-white bg-[white] flex items-center justify-center gap-4 ">
                <IconButton className='rounded-full border-white' variant='outlined'>
                    <CameraIcon className='w-[30px] h-[30px]' style={{ fill: '#6B9DFF' }}/>
                </IconButton>                
            </div>
        </div>
        <div className='relative w-[600px] h-[200px] border border-black'>
            <div className='flex'>
                <div className='mt-[60px] ms-[15px] float-start'>
                    <h1 className='text-2xl'>{user.name} {user.surname}</h1>
                    <h6 className='text-lg'>{user.title}</h6>
                    <div className='flex'>
                        <p className='opacity-45'>{user.area}<span className='mx-[5px]'>&bull;</span></p>
                        <a className='text-[#0d67bc] hover:text-[#0b5aa3]' href='*'>Informazioni di contatto</a>
                    </div>
                    <div className='flex mt-[10px]'>
                        <Button className='rounded-full p-[7px]' color="blue">Disponibile per</Button>
                        <Button className='rounded-full p-[7px]' variant='outlined' color="blue">Aggiungi sezione del profilo</Button>
                        <Button className='rounded-full p-[7px]' variant='outlined' color="blue">Migliora profilo</Button>
                        <Button className='rounded-full p-[7px]' variant='outlined'>Altro</Button>
                    </div>
                </div>
                <div className='float-end'>

                </div>
            </div>
        </div>
    </div>
  )
}
