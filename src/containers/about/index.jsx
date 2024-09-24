import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name -",
    value: "Chandu Rathnayake",
  },
  {
    label: "Age -",
    value: "24",
  },
  {
    label: "Address -",
    value: "Gampaha - Sri Lanka",
  },
  {
    label: "Email -",
    value: "chandu.rathnayake01@gmail.com",
  },
  {
    label: "Contact No -",
    value: "+94 711122833",
  },
];

const jobSummary =
  "Results-driven Software Engineer with experience in full-stack web development and a passion for creating efficient and innovative software solutions. Seeking a challenging position in a dynamic organization where I can leverage my technical expertise in software development, problem-solving skills, and strong analytical mindset to contribute to the success of cutting-edge projects. Committed to continuous learning and staying updated with the latest technologies in the industry, I aim to collaborate with a talented team to deliver high-quality software solutions that exceed client expectations and drive business growth. ";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about_content">
        <div className="about_content_personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Software Engineer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about_content_servicesWrapper">
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
          <div className="about_content_servicesWrapper_innerContent">
            <div>
              <FaDev size={60} color="var(--yellow-theme-main-color)" />
            </div>

            <div>
              <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
            </div>

            <div>
              <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
            </div>

            <div>
              <DiApple size={60} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
