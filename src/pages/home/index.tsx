import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { useGetPortfolioItem, useUserBio } from "../../hooks";
import { AboutMe } from "./about-me";
import { Contact } from "./contact";
import { Portfolio } from "./portfolio";
import { Skills } from "./skills";

export const Home: React.FC = () => {
  const location = useLocation();
  const { user, skills } = useUserBio();
  const { portfolioItems } = useGetPortfolioItem();

  useEffect(() => {
    if (location.state?.target) {
      scroller.scrollTo(location.state.target, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }
  }, [location]);

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
      <section id="portfolio">
        <Portfolio portfolioItems={portfolioItems} />
      </section>
      <hr />
      <section id="contact">
        <Contact user={user} />
      </section>
    </div>
  );
};
