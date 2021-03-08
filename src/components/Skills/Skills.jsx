import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);
  const { frontendDesc, frontendLang, backendDesc, backendLang, } = skills;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="skills">
      <Container>
        <Title title="Skills" />
        <Row className="skills-wrapper">
          <Col>
            <i className="fa fa-connectdevelop" />
            <h1>Front-end Developer</h1>
            <p>{frontendDesc || ""}</p>

            <p className="list-title">Languages and frameworks I speak:</p>
            <p>{frontendLang || ""}</p>
          </Col>
          <Col>
            <i className="fa fa-database" />
            <h1>Back-end Developer</h1>
            <p>{backendDesc || ""}</p>

            <p className="list-title">Languages and frameworks I speak:</p>
            <p>{backendLang || ""}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
