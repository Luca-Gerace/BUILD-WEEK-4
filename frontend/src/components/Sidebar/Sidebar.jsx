import { useContext, useEffect, useState } from "react";
import ProfileInfo from "./ProfileInfo";
import ProfileInfoSkeleton from "./ProfileInfoSkeleton";
import { useParams } from "react-router-dom";
import { getUsers } from "../../services/api";
import { UserContext } from "../../context/UserContext";

export default function Sidebar() {
    // Hooks
    const { id } = useParams(); // mi serve per aggiornare i componenti ProfileInfo in sidebar
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const { user } = useContext(UserContext);
    const loggedUserEmail = user.email;

    useEffect(() => {
        const getUsersData = async () => {
            
            // carico lo skeleton
            setLoading(true);

            try {
                const usersData = await getUsers();
                setUsers(usersData);
                setLoading(false);
            } catch (err) {
                console.error('Utenti non trovati, riprova più tardi', err)
            }
        }

        // richiamo la funzione al montaggio del componente
        getUsersData()
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
                        users
                        .filter(user => user.email !== loggedUserEmail) // con filter rimuovo dalla stampa il profile info dell'utente loggato
                        .slice(0, 10)
                        .map(user => (
                            user.email === <ProfileInfo key={user._id} user={user} />
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
}
