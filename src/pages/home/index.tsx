import { useProfile } from "../../hooks";
import { AboutMe } from "./about-me";
import { Contact } from "./contact";
import { Skills } from "./skills";
import * as S from "./styles";

export const Home: React.FC = () => {
  const { profile } = useProfile()

  console.log(profile)
  return (
    <div>
      <AboutMe />
      <Skills />
      <Contact />
    </div>
  );
};
