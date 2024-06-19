import Profile from "../components/Profile";
import Sidebar from "../components/Sidebar";
import Experiences from "../components/Experiences";

export default function Home({ user }) {

  return (
    <div className="m-auto flex w-full justify-center gap-4 py-4">
      <div className="flex flex-col gap-4">
        <Profile user={user} />
        <Experiences user={user} />
      </div>
      <Sidebar />
    </div>
  )
}
