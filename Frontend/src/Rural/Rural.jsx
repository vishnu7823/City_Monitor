// Rural.js
import React from 'react';
import './Rural.css';
import { FaSeedling, FaPeopleArrows, FaHome, FaIndustry, FaHandshake, FaTractor } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';



const Rural = () => {
  const timelineData = [
    {
      year: "2005-2010",
      title: "Initial Steps and Policy Formation",
      description: "The Indian government started focusing on rural development through policy initiatives aimed at improving infrastructure, education, and healthcare in rural areas.",
      icon: <FaSeedling />
      
    },
    {
      year: "2010-2015",
      title: "Building Rural Infrastructure",
      description: "Focus shifted towards improving rural infrastructure like roads, housing, and sanitation with programs like Pradhan Mantri Gram Sadak Yojana (PMGSY).",
      icon: <FaPeopleArrows />
      
    },
    {
      year: "2015-2020",
      title: "Economic Growth and Skill Development",
      description: "The government launched skill development programs and financial inclusion schemes to boost employment opportunities and rural entrepreneurship.",
      icon: <FaHome />
      
    },
    {
      year: "2020-2022",
      title: "Sustainable Development and Green Energy",
      description: "Rural development began to focus on renewable energy, water conservation, and sustainable farming practices, helping rural areas adapt to climate change.",
      icon: <FaIndustry />
      
    },
    {
      year: "2022 and Beyond",
      title: "Digitalization and Rural Connectivity",
      description: "The focus is shifting towards creating digital infrastructure, improving internet connectivity, and promoting e-governance and rural fintech solutions.",
      icon: <FaHandshake />
      
    },
    {
      year: "Future Prospects",
      title: "Enhancing Rural Livelihoods and Green Economy",
      description: "Future plans include scaling up rural livelihood programs, focusing on organic farming, and fostering local economies through sustainable models.",
      icon: <FaTractor />
      
    },
  ];

  return (
    <>
      <Navbar />
      <div className="timeline-container">
        <h1>Know our Timeline History</h1>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">{item.icon}</div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <div className="timeline-image">
                
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Rural;
