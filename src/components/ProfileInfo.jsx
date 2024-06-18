/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";

export default function ProfileInfo({ user }) {
  return (
    <li className="p-5">
        <div className="flex items-start gap-4">
            <img src={user.image} alt="profile" className="rounded-full w-[50px] min-w-[50px] h-[50px]" />
            <div className="flex flex-col">
                <strong className="text-black">{user.name} {user.surname}</strong>
                <p className="text-[#00000090]">{user.title} | {user.area}</p>
                <Button>Button</Button>
            </div>
        </div>
    </li>
  )
}