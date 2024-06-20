import Profile from "../components/Profile";
import Sidebar from "../components/Sidebar";
import Experiences from "../components/Experiences";

export default function Home({ user }) {

  return (
    <div className="flex flex-col w-full lg:flex-row lg:justify-center gap-6">
      <div className="flex flex-col gap-6 w-full lg:w-2/3">
        <Profile user={user} />
        <Experiences user={user} />
      </div>
      <Sidebar />
    </div>
  )
}
