import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Profile from "../components/Profile/Profile";
import Sidebar from "../components/Sidebar/Sidebar";
import Experiences from "../components/Experiences/Experiences";

export default function Home() {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <div className="flex flex-col w-full lg:flex-row lg:justify-center gap-6">
      {isLoggedIn ? (
        <>
          <div className="flex flex-col gap-6 w-full lg:w-2/3">
            <Profile />
            <Experiences />
          </div>
          <Sidebar />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1>Benvenuto su LinkedIn Fake</h1>
          <p>Per favore, accedi per vedere i contenuti.</p>
        </div>
      )}
    </div>
  );
}