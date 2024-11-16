// TimelinePage.js
import React from 'react';
import './Urban.css';
import { FaCity, FaProjectDiagram, FaRoad, FaHandHoldingHeart, FaHeartbeat, FaSeedling } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Urban = () => {
  const timelineData = [
    {
      year: "2008-2015",
      title: "Initial Ideas and Policy Formulation",
      description: "The concept of smart cities gained popularity, and the Smart Cities Mission was included in India’s agenda to address urban challenges.",
      icon: <FaCity />
     
    },
    {
      year: "2015-2016",
      title: "City Selection and Planning",
      description: "The first list of 20 cities was announced under the Smart Cities Mission, with guidelines focusing on sustainability, tech-driven solutions, and urban improvement.",
      icon: <FaProjectDiagram />
      
    },
    {
      year: "2017-2019",
      title: "Implementation and Scaling Up",
      description: "Early projects launched, including command centers and smart street lighting. Another 9 cities were added, totaling 99 cities in the mission.",
      icon: <FaRoad />
      
    },
    {
      year: "2020-2021",
      title: "Adapting to New Challenges",
      description: "During the COVID-19 pandemic, smart infrastructure like ICCCs proved valuable for health and crisis management.",
      icon: <FaHandHoldingHeart />
      
    },
    {
      year: "2022-2023",
      title: "Enhanced Infrastructure and Citizen Engagement",
      description: "Cities focused on waste management, green initiatives, and mobile apps to engage citizens in city services.",
      icon: <FaHeartbeat />
      
    },
    {
      year: "2024 and Beyond",
      title: "Toward a Fully Connected and Sustainable Future",
      description: "Future plans include inter-city integration, 5G for IoT, and climate-resilient infrastructure.",
      icon: <FaSeedling />
      
    }
  ];

  return (
    <>
      <Navbar />
      <div className="timeline-container">
      <h1>Know our Timeline history</h1>
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

export default Urban;
