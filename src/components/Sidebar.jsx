import { Button } from "@material-tailwind/react";

export default function Sidebar() {
  return (
    <div className="m-8 flex flex-col top-50 right-50 w-[300px] bg-white h-full rounded-lg">
        <h2 className="font-bold text-left p-5 h-8">Altri profili simili</h2>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
            <ul className="flex flex-col py-4 space-y-1">

                {/* TODO: MAP COMPONENTE USER PROFILE */}
                <li className="p-5">
                    <div className="flex items-start gap-4">
                        <img src='https://picsum.photos/id/237/200/200' alt="profile" className="rounded-full w-[50px]" />
                        <div className="flex flex-col">
                            <strong className="text-black">Nome Cognome</strong>
                            <p className="text-[#00000090]">Nome azienda | Ruolo ricoperto</p>
                            <Button>Button</Button>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    </div>
  )
}