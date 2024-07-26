import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import Profile from "../components/Profile/Profile";
import Sidebar from "../components/Sidebar/Sidebar";
import Experiences from "../components/Experiences/Experiences";
import AddExperienceModal from "../components/Experiences/AddExperienceModal";

export default function Home() {
  const { isLoggedIn, user } = useContext(UserContext);
  const [experiences, setExperiences] = useState([]);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    if (user) {
      setExperiences(user.experiences || []);
    }
  }, [user]);

  return (
    <div className="flex flex-col w-full lg:flex-row lg:justify-center gap-6">
      {isLoggedIn ? (
        <>
          <div className="flex flex-col gap-6 w-full lg:w-2/3">
            <Profile user={user} />
            <Experiences user={user} experiences={experiences} setExperiences={setExperiences} />
            <AddExperienceModal setExperiences={setExperiences} add={add} setAdd={setAdd} open={add} handleOpen={() => setAdd(!add)} />
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