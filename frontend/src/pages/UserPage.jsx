import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../modules/ApiAxios";
// import Experiences from "../components/Experiences/Experiences";
import Profile from "../components/Profile/Profile";
import Sidebar from "../components/Sidebar/Sidebar";

export default function UserPage() {
  // Hooks
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`${id}`)
        .then(response => setUser(response.data))
        .catch(error => console.error("Error fetching users:", error));
  }, [id]);

  return (
    <div className="flex flex-col w-full lg:flex-row lg:justify-center gap-6">
      <div className="flex flex-col gap-6 w-full lg:w-2/3">
        <Profile user={user} />
        {/* <Experiences user={user} /> */}
      </div>
      <Sidebar />
    </div>
  )
}
