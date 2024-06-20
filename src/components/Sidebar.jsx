import axios from "../modules/ApiAxios";
import { useEffect, useState } from "react";
import ProfileInfo from "./ProfileInfo";
import ProfileInfoSkeleton from "./ProfileInfoSkeleton";
import { useParams } from "react-router-dom";

export default function Sidebar() {
    // Hooks
    const { id } = useParams(); // mi serve per aggiornare i componenti ProfileInfo in sidebar
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        setLoading(true);

        axios.get()
            .then(response => {
                const shuffledUsers = response.data.sort(() => Math.random() - 0.5); // randomize degli utenti
                setUsers(shuffledUsers);
                setLoading(false);
            })
            .catch(error => console.error("Error fetching users:", error));
    }, [id]);

    return (
        <div className="lg:w-1/3 flex flex-col w-full bg-white h-full rounded-lg">
            <h2 className="font-bold text-left p-5 h-8">Altri profili simili</h2>
            <div className="overflow-y-auto overflow-x-hidden flex-grow">
                <ul className="flex flex-col py-4">
                    {loading ? (
                        Array.from({ length: 10 }, (el, index) => (
                            <ProfileInfoSkeleton key={index} />
                        ))
                    ) : (
                        users.slice(0, 10).map(user => (
                            user.name && user.surname && user.title && user.area && <ProfileInfo key={user._id} user={user} />
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
}
