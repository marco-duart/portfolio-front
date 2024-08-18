import { useUserBio } from "../../hooks";
import { AboutMe } from "./about-me";
import { Contact } from "./contact";
import { Skills } from "./skills";

export const Home: React.FC = () => {
  const { user, skills } = useUserBio()

  return (
    <div>
      <section id="about">
      <AboutMe user={user} />
      </section>
      <hr />
      <section id="skills">
      <Skills skills={skills} />
      </section>
      <hr />
      <section id="contact">
      <Contact user={user} />
      </section>
    </div>
  );
};
