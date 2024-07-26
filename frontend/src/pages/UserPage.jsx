import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Experiences from "../components/Experiences/Experiences";
import Profile from "../components/Profile/Profile";
import Sidebar from "../components/Sidebar/Sidebar";
import { getUser } from "../services/api";

export default function UserPage() {
  const { id } = useParams(); // se id è true ci troviamo nella pagina profilo di altri utenti e non renderizziamo i bottoni per la modifica

  const [user, setUser] = useState(null);
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        if (id) {
          const response = await getUser(id);
          setUser(response);
          setExperiences(response.experiences);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col w-full lg:flex-row lg:justify-center gap-6">
      <div className="flex flex-col gap-6 w-full lg:w-2/3">
        {user && <Profile id={id} user={user} />}
        <Experiences id={id} experiences={experiences} loading={loading} />
      </div>
      <Sidebar />
    </div>
  );
}