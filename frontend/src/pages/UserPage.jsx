import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Experiences from "../components/Experiences/Experiences";
import Profile from "../components/Profile/Profile";
import Sidebar from "../components/Sidebar/Sidebar";
import { getUser } from "../services/api";

export default function UserPage() {

  // Hooks di controllo del contesto dell'utente
  const { id } = useParams(); // se id è true ci troviamo nella pagina profilo di altri utenti e non renderizziamo i bottoni per la modifica

  const [ user, setUser ] = useState({});
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      // enable skeleton view
      setLoading(true);
      try {
        if (id) {
          // prendo le mie esperienze
          const response = await getUser(id);
          // user data
          setUser(response);
          // user expreriences data
          setExperiences(response.experiences);
          // disable skeleton view
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchUserData();
  }, [id]);

  return (
    <div className="flex flex-col w-full lg:flex-row lg:justify-center gap-6">
      <div className="flex flex-col gap-6 w-full lg:w-2/3">
        <Profile id={id} user={user} />
        <Experiences id={id} experiences={experiences} loading={loading} />
      </div>
      <Sidebar />
    </div>
  )
}
