import { Typography } from "@material-tailwind/react";
 
export default function ProfileInfoSkeleton() {
  return (
    <li className="mx-6 py-4 border-b-2 last:border-b-0 max-w-full animate-pulse">
      <div className="flex items-start gap-3">
        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="profile" className="grayscale rounded-full w-[50px] min-w-[50px] h-[50px]" />
        <div className="flex flex-col gap-3">
          <Typography
            as="strong"
            className="h-[24px] rounded-full bg-gray-300 w-56"
          >
            &nbsp;
          </Typography>
          <Typography
            as="p"
            className="h-[24px] rounded-full bg-gray-300 w-56"
          >
            &nbsp;
          </Typography>
          <div className='h-[42px] min-w-[120px] max-w-[120px] border-transparent pt-2 px-4 bg-gray-300 rounded-full'>
          </div> 
        </div>
      </div>
    </li>
  );
}