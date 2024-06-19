import axios from "../modules/ApiAxios";
import { useEffect, useState } from "react";
import ProfileInfo from "./ProfileInfo";

export default function Sidebar() {
    // Hooks
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get()
            .then(response => setUsers(response.data))
            .catch(error => console.error("Error fetching users:", error));
    }, []);

    return (
        <div className="m-8 flex flex-col top-50 right-50 w-[300px] bg-white h-full rounded-lg">
            <h2 className="font-bold text-left p-5 h-8">Altri profili simili</h2>
            <div className="overflow-y-auto overflow-x-hidden flex-grow">
                <ul className="flex flex-col py-4 space-y-1">
                    {users.map(user => (
                        user.name && user.surname && user.title && user.area && <ProfileInfo key={user._id} user={user} />
                    ))}
                </ul>
            </div>
        </div>
    );
}
