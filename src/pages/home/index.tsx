import { useUserBio } from "../../hooks";
import { AboutMe } from "./about-me";
import { Contact } from "./contact";
import { Skills } from "./skills";

export const Home: React.FC = () => {
  const { user } = useUserBio()

  return (
    <div>
      <AboutMe user={user} />
      <hr />
      <Skills />
      <hr />
      <Contact user={user} />
    </div>
  );
};
