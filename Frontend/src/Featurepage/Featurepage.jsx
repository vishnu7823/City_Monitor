// FeaturesPage.js
import React from 'react';
import './Featurepage.css';
import { FaChartLine, FaFileAlt, FaDesktop, FaSyncAlt, FaTachometerAlt, FaCar, FaShieldAlt, FaLeaf, FaBuilding} from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Featurepage = () => {

    
    
    const features = [
        { 
          title: "Data-Driven Insights", 
          description: "Through robust data science methods, City Monitor compiles data from various sources and synthesizes it into actionable insights, making it easy to understand even for those without a technical background.", 
          icon: <FaChartLine /> 
        },
        { 
          title: "Customizable Reporting", 
          description: "Our analysis can be tailored to focus on specific areas of concern or interest, ensuring that cities get the insights they need most.", 
          icon: <FaFileAlt /> 
        },
        { 
          title: "User-Friendly Interface", 
          description: "City Monitor is designed with simplicity in mind, offering an intuitive user interface that's accessible to everyone, from policy-makers to everyday citizens.", 
          icon: <FaDesktop /> 
        },
        { 
          title: "Continuous Improvement", 
          description: "As new data becomes available, our platform is updated to reflect the latest trends and metrics, ensuring cities always have up-to-date information.", 
          icon: <FaSyncAlt /> 
        },
        { 
          title: "Dashboard", 
          description: "City’s current status overview for various urban metrics.", 
          icon: <FaTachometerAlt /> 
        },
        { 
          title: "Traffic & Transport", 
          description: "Real-time traffic and transport data for informed city planning.", 
          icon: <FaCar /> 
        },
        { 
          title: "Public Safety", 
          description: "Track and monitor incidents, safety metrics, and emergency responses.", 
          icon: <FaShieldAlt /> 
        },
        { 
          title: "Environment", 
          description: "Monitor air, water, and noise quality for a sustainable city environment.", 
          icon: <FaLeaf /> 
        },
        { 
          title: "Infrastructure", 
          description: "Get insights on public buildings, utilities, and infrastructure status.", 
          icon: <FaBuilding /> 
        },
      ];
    
      return (

        <>
        <Navbar/>
        <div className="features-container">
          <h1>Key Features of City Monitor</h1>
          <div className="feature-cards">
            {features.map((feature, index) => (
              <div key={index} className={`feature-card ${index % 3 === 2 ? "feature-card-large" : ""}`}>
                <div className="feature-icon">{feature.icon}</div>
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <Footer/>
        </>
      );
};

export default Featurepage;
