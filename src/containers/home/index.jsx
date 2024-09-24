import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMepage = () => {
    navigate("/contact");
  };
  return (
    <section id="home" className="home">
      <div className="home_text-wrapper">
        <h1>
          Hello, I'm Chandu Rathnayake
          <br />
          <h2>Software Engineer</h2>
        </h1>
      </div>
      <Animate
      play
      duration={1.5}
      delay={1}
      start={{
        transform : 'translateY(550px)'
      }}

      end={{
        transform : 'translateX(0px)'
      }}
      >
        <div className="home_contact-me">
          <button onClick={handleNavigateToContactMepage}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
