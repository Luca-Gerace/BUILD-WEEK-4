import CameraIcon from '@heroicons/react/24/outline/CameraIcon';
import ImgUser from '../assets/Profile/IMG_4893ee.jpg';
import { IconButton } from "@material-tailwind/react";

export default function Profile() {
  return (
    <div className=' mt-[20px] w-[600px] h-[300px] border border-black'>
        <div className='relative w-[600px] h-[150px] border bg-[blue] border-black'>
            <div className='absolute border-4 top-[50px] left-[10px] border-white rounded-full w-[151px] h-[151px]'>
                <img src={ImgUser} alt="img-user" className="rounded-full w-[150px]" />
            </div>
            <div className="absolute right-[15px] top-[15px] w-[40px] h-[40px] rounded-full border border-white bg-[white] flex items-center justify-center gap-4 ">
                <CameraIcon className='w-[30px] h-[30px]' style={{ fill: '#6B9DFF' }}/>                
            </div>
        </div>
        <div className='relative w-[600px] h-[150px] border border-black'>
            <div>
                
            </div>
        </div>
    </div>
  )
}
