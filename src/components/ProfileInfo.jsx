/* eslint-disable react/prop-types */
import PaperAirplaneIcon from "@heroicons/react/24/solid/PaperAirplaneIcon";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function ProfileInfo({ user }) {

  const profileUrl = `/user/${user._id}`

  return (
    <li className="mx-6 py-4 border-b last:border-b-0">
        <Link to={profileUrl} className="flex items-start gap-3">
            <img src={user.image} alt="profile" className="rounded-full w-[50px] min-w-[50px] h-[50px]" />
            <div className="flex flex-col">
                <strong className="text-black">{user.name} {user.surname}</strong>
                <p className="text-[#00000090] pt-2 pb-3">{user.title} | {user.area}</p>
                <Button className='min-w-[120px] max-w-[120px] pt-2 px-4 text-[#333] flex items-center gap-2 rounded-full border-black capitalize hover:bg-black hover:text-white' variant='outlined'>
                    <PaperAirplaneIcon className='-rotate-45 w-[15px] h-[15px]'/>
                    <span className='pt-1'>Messaggio</span>
                </Button>    
            </div>
        </Link>
    </li>
  )
}