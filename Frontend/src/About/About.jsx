// About.js
import React from "react";
import "./About.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className='about-container'>
        <div className='about-header'>
          <h1>Transforming Cities Through Innovation</h1>
          <div className='header-divider'>
            <span></span>
            <p>Our Story</p>
            <span></span>
          </div>
        </div>

        <div className='about-sections'>
          <div className='about-section'>
            <h2>Our Mission</h2>
            <p>
              At City Monitor, we aim to empower cities to grow smarter, more
              efficient, and sustainable by providing a comprehensive data
              analysis platform that highlights critical metrics, identifies
              areas for improvement, and fosters community development. Through
              the use of data science and advanced analytical tools, we deliver
              insights that help municipalities, urban planners, and citizens
              understand the steps needed to become future-ready smart cities.
            </p>
          </div>

          <div className='about-section'>
            <h2>Our Vision</h2>
            <p>
              To be the leading force in transforming urban spaces into smart,
              sustainable cities of tomorrow. We envision a future where
              data-driven decisions shape better communities and enhance the
              quality of life for all citizens.
            </p>
          </div>

          <div className='about-section'>
            <h2>What We Do</h2>
            <p>
              City Monitor analyzes diverse datasets that encompass vital city
              aspects such as infrastructure, sustainability, public health, and
              digital connectivity. By generating detailed, summarized, and
              organized reports, we provide a clear picture of where a city
              stands and how it can improve to meet the needs of its growing
              population.
            </p>
          </div>
          <div className='about-section'>
            <h2>Why Smart Cities Matter</h2>
            <p>
              With the global urban population expected to rise, cities must
              adopt smart, sustainable strategies to meet the challenges of
              urbanization. Smart cities improve the quality of life for
              citizens by offering better transportation, efficient energy
              usage, access to healthcare, and more. At City Monitor, we're
              proud to support this transformation by offering data-driven
              insights that guide cities toward smarter solutions.
            </p>
          </div>
          <div className='about-section'>
            <h2>Our Vision for the Future</h2>
            <p>
              We envision a future where every city has the tools to thrive in
              an increasingly complex and interconnected world. By making data
              accessible, actionable, and impactful, we hope to pave the way for
              a smarter, more sustainable future.
            </p>
          </div>
        </div>

        <div className='learn-more'>
          <button>
            <a  target='_blank' href='https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=smart+city+management&btnG=&oq=smart+city+manag' rel="noreferrer">
              Learn More About Our Impact
            </a>
          </button>
        </div>

        <div className='stats-container'>
          <div className='stat-box'>
            <h3>30+</h3>
            <p>Cities Analyzed</p>
          </div>
          <div className='stat-box'>
            <h3>10000+</h3>
            <p>Data Points Processed</p>
          </div>
          <div className='stat-box'>
            <h3>30+</h3>
            <p>Urban Solutions Delivered</p>
          </div>
        </div>
        <div className='about-section'>
          <h2>Join Us on This Journey</h2>
          <p>
            Whether you're a city official, a business leader, or a citizen who
            cares about the future of your community, City Monitor is here to
            support you. Let's work together to create cities that are prepared
            for the challenges of tomorrow.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
