import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { data } from "./utils";
import 'react-vertical-timeline-component/style.min.css'
import './styles.scss';
import { MdWork } from "react-icons/md";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <PageHeaderContent
        headerText="My projects"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="timeline">
        <div className="timeline_projects">
          <h3 className="timeline_projects_header-text">Projects</h3>
          <VerticalTimeline
          layout={'1-column'}
          lineColor="var(--yellow-theme-main-color)"
          >
            {
              data.projects.map((item,i)=>(
                <VerticalTimelineElement
                  key={i}
                  className="timeline_projects_vertical-timeline-element"
                  contentStyle={{
                    background: 'none',
                    color: 'var(--yellow-theme-sub-text-color)',
                    border : '1.5px solid var(--yellow-theme-main-color)'

                  }}
                  // date="2020 - Present"
                  icon={<MdWork/>}
                  iconStyle={{
                    background: '#181818',
                    color: 'var(--yellow-theme-main-color)',
                  }}
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3>
                      {item.title}
                    </h3>

                    <h4>
                      {item.subTitle}
                    </h4>
                    
                  </div>
                  <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>
                  <p className="vertical-timeline-element-title-wrapper-date">{item.technology}</p>

                </VerticalTimelineElement>
              ))
            }

          </VerticalTimeline>
        </div>

      </div>
    </section>
  );
};
export default Projects;
