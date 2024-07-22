import { Typography } from '@material-tailwind/react';

export default function SingleExperienceSkeleton() {

  return (
    <div className='flex justify-between my-4 pt-2 pb-6 border-b-2 last:border-b-0 last:pb-0 animate-pulse'>
      <div className='flex gap-4'>
        <div className='w-12 h-12 rounded-full'>
          <div className='flex justify-center items-center w-12 h-12 rounded-full bg-[#dddddd90]'>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <Typography
            as="h4"
            className="h-[24px] rounded-full bg-gray-300 w-56"
          >
            &nbsp;
          </Typography>
          <Typography
            as="p"
            className="h-[48px] rounded-full bg-gray-300 w-56"
          >
            &nbsp;
          </Typography>   
          <Typography
            as="p"
            className="h-[24px] rounded-full bg-gray-300 w-56"
          >
            &nbsp;
          </Typography>          
        </div>
      </div>
    </div>
  );
}