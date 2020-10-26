import React from 'react';

import {
  FaGithub,
  FaLinkedinIn,
  FaReact,
  FaNodeJs,
  FaCss3,
  FaHtml5,
  FaKeyboard,
} from 'react-icons/fa';

import {
  SiStyledComponents,
  SiMysql,
  SiMongodb,
  SiGraphql,
} from 'react-icons/si';

import { GoTools, } from "react-icons/go";

import { FiMail } from 'react-icons/fi';

import { IoLogoJavascript } from 'react-icons/io';


import {
  Header,
  LogoWrapper,
  Contact,
  ContactIcon,
  Main,
  AboutText,
  TechStack,
  Technologies,
  Technology,
  TechIcon,
  Projects,
  SingleProject,
  ProjectWrapper,
  ProjectImage,
  ProjectDetails,
  ProjectTitle,
  ProjectStack,
  ProjectDescription,
  ProjectLinks,
  FrontendWrapper,
  FrontendHeader,
  FrontendTech,
  BackendWrapper,
  BackendHeader,
  BackendTech,
} from 'App.style';

import { ReactComponent as ExpressSVG } from 'assets/expressjs.svg';
import { ReactComponent as Logo } from 'assets/Logo_Michael.svg';
import CVIcon from 'assets/CV.png';
import projects from 'projects/projects';

function App() {
  return (
    <div>
      <Header>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Contact>
          <a href="mailto:mrknabe2@gmail.com">
            <div>
              <ContactIcon>
                <FiMail alt="mail" />
              </ContactIcon>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/michael-knabe/">
            <div>
              <ContactIcon>
                <FaLinkedinIn alt="LinkedIn" />
              </ContactIcon>
            </div>
          </a>
          <a href="https://github.com/MrKnb">
            <div>
              <ContactIcon>
                <FaGithub alt="GitHub" />
              </ContactIcon>
            </div>
          </a>
          <a href="CV_Michael_Knabe.pdf">
            <div>
              <ContactIcon>
                <img src={CVIcon} alt="CV" />
              </ContactIcon>
            </div>
          </a>
        </Contact>
      </Header>
      <Main>
      <AboutText>
        Welcome to my Portfolio! I love to create user friendly Websites and
        Apps that have a great UI. I have a business background and I am
        passionate about innovation and new technologies. Enjoy checking out my
        work 🙂
      </AboutText>
        <TechStack>
          <h3>
            <>
              <FaKeyboard />
            </>{' '}
            Tech Stack
          </h3>
          <Technologies>
            <FrontendWrapper>
              <FrontendHeader>Frontend</FrontendHeader>
              <FrontendTech>
                <Technology>
                  <TechIcon>
                    <IoLogoJavascript />
                  </TechIcon>
                  <p>JavaScript</p>
                </Technology>
                <Technology>
                  <TechIcon>
                    <FaReact />
                  </TechIcon>
                  <p>React</p>
                </Technology>
                <Technology>
                  <TechIcon>
                    <SiStyledComponents />
                  </TechIcon>
                  <p>Styled Components</p>
                </Technology>
                <Technology>
                  <TechIcon>
                    <FaCss3 />
                  </TechIcon>
                  <p>CSS3</p>
                </Technology>
                <Technology>
                  <TechIcon>
                    <FaHtml5 />
                  </TechIcon>
                  <p>HTML5</p>
                </Technology>
              </FrontendTech>
            </FrontendWrapper>
            <BackendWrapper>
              <BackendHeader>Backend</BackendHeader>
              <BackendTech>
                <Technology>
                  <TechIcon>
                    <FaNodeJs />
                  </TechIcon>
                  <p>NodeJS</p>
                </Technology>
                <Technology>
                  <TechIcon>
                    <ExpressSVG />
                  </TechIcon>
                  <p>Express</p>
                </Technology>
                <Technology>
                  <TechIcon>
                    <SiMysql />
                  </TechIcon>
                  <p>MySQL</p>
                </Technology>
                <Technology>
                  <TechIcon>
                    <SiMongodb />
                  </TechIcon>
                  <p>MongoDB</p>
                </Technology>
                <Technology>
                  <TechIcon>
                    <SiGraphql />
                  </TechIcon>
                  <p>GraphQL</p>
                </Technology>
              </BackendTech>
            </BackendWrapper>
          </Technologies>
        </TechStack>
        <Projects>
          <h3><GoTools /> Projects</h3>
          {projects.map((project, id) => (
            <SingleProject key={id}>
              <ProjectWrapper>
                <ProjectImage>
                  <a href={project.image}>
                    <img
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                    />
                  </a>
                </ProjectImage>
                <ProjectDetails>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectStack>
                    {project.stack.map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ProjectStack>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectLinks>
                    <a href={project.demo}>Demo</a>
                    <a href={project.code}>Code</a>
                  </ProjectLinks>
                </ProjectDetails>
              </ProjectWrapper>
            </SingleProject>
          ))}
        </Projects>
      </Main>
    </div>
  );
}

export default App;
