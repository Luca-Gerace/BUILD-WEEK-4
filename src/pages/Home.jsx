import Profile from "../components/Profile";
import Sidebar from "../components/Sidebar";
import Experiences from "../components/Experiences";

export default function Home({ user }) {

  return (
    <>
      <Profile user={user} />
      <Sidebar />
      <Experiences user={user} />
    </>
  )
}
