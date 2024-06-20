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
        <div className="lg:w-1/3 flex flex-col w-full bg-white h-full rounded-lg">
            <h2 className="font-bold text-left p-5 h-8">Altri profili simili</h2>
            <div className="overflow-y-auto overflow-x-hidden flex-grow">
                <ul className="flex flex-col py-4">
                    {users.slice(2, 12).map(user => (
                        user.name && user.surname && user.title && user.area && <ProfileInfo key={user._id} user={user} />
                    ))}
                </ul>
            </div>
        </div>
    );
}
