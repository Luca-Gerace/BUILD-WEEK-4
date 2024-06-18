import ImgUser from '../assets/Profile/IMG_4893ee.jpg';

export default function Profile() {
  return (
    <div className=' mt-[20px] w-[600px] h-[300px] border border-black'>
        <div className='relative w-[600px] h-[150px] border bg-[blue] border-black'>
            <div className='absolute border-4 top-[50px] left-[10px] border-white rounded-full w-[151px] h-[151px]'>
                <img src={ImgUser} alt="img-user" className="rounded-full w-[150px]" />
            </div>
            <div>
                
            </div>
        </div>
        <div className='relative w-[600px] h-[150px] border border-black'>
            <div>
                
            </div>
        </div>
    </div>
  )
}
