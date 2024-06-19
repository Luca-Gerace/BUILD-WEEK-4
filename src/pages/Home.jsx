import Profile from "../components/Profile";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from 'react'
import axios from '../modules/ApiAxios'

export default function Home() {

  // eslint-disable-next-line no-undef
  const userId = process.env.USER_ID;

  // Hooks
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`${userId}`)
        .then(response => setUser(response.data))
        .catch(error => console.error("Error fetching users:", error));
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">HOME LINKEDIN</h1>
      <Profile user={user} />
      <Sidebar />
    </>
  )
}
