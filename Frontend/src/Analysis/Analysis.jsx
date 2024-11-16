import React, { useState } from 'react';
import './Analysis.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Sidebar = ({ onContentClick, activeContent }) => {
  const contentList = [
    { id: 1, name: 'Carbon Emission', graphUrl: 'https://public.tableau.com/views/CarbonEmissions_17311487248640/CarbonEmissions?:showVizHome=no&:embed=true' },
    { id: 2, name: 'CO (ppm)', graphUrl: 'https://public.tableau.com/views/COppm/COppm?:showVizHome=no&:embed=true' },
    { id: 3, name: 'NO2 & SO2', graphUrl: 'https://public.tableau.com/views/NO2SO2/NO2SO2?:showVizHome=no&:embed=true' },
    { id: 4, name: 'O3', graphUrl: 'https://public.tableau.com/views/O3_17311497188000/O3?:showVizHome=no&:embed=true' },
    { id: 5, name: 'Types of Air', graphUrl: 'https://public.tableau.com/views/TypesofAir/TypesofAirs?:showVizHome=no&:embed=true' },
    { id: 6, name: 'Air Pollutant PM2.5', graphUrl: 'https://public.tableau.com/views/AirPollutantPM2_5/AirPollutantPM2_5?:showVizHome=no&:embed=true' },
    { id: 7, name: 'Air Pollutant PM10', graphUrl: 'https://public.tableau.com/views/AirPollutantPM10/AirPollutantPM10?:showVizHome=no&:embed=true' },
    { id: 8, name: 'Energy Consumption', graphUrl: 'https://public.tableau.com/views/EnergyConsumption_17311498085990/EnergyConsumption?:showVizHome=no&:embed=true' },
    { id: 9, name: 'Energy Cost & Loss', graphUrl: 'https://public.tableau.com/views/EnergyCostLoss/EnergyCostLoss?:showVizHome=no&:embed=true' },
    { id: 10, name: 'Renewable Energy', graphUrl: 'https://public.tableau.com/views/RenewableEnergy_17311500334950/RenewableEnergy?:showVizHome=no&:embed=true' },
    { id: 11, name: 'Air Quality Index (AQI)', graphUrl: 'https://public.tableau.com/views/AirqualityIndexAQI/AirqualityIndexAQI?:showVizHome=no&:embed=true' },
    { id: 12, name: 'Accident Events', graphUrl: 'https://public.tableau.com/views/AccidentEvents/AccidentEvents?:showVizHome=no&:embed=true' },
    { id: 13, name: 'Incident Reported.', graphUrl: 'https://public.tableau.com/views/IncidentReport_17311502104220/IncidentReport?:showVizHome=no&:embed=true' },
    { id: 14, name: 'Vehicle Count', graphUrl: 'https://public.tableau.com/views/VehicleCount/VehicleCount?:showVizHome=no&:embed=true' },
    { id: 15, name: 'Area(sq km)', graphUrl: 'https://public.tableau.com/views/Areasqkm/Areasqkm?:showVizHome=no&:embed=true' },
    { id: 16, name: 'Population', graphUrl: 'https://public.tableau.com/views/Population_17311504066570/Population?:showVizHome=no&:embed=true' },
    { id: 17, name: 'SCI', graphUrl: 'https://public.tableau.com/views/SCI_17311504907840/SCI?:showVizHome=no&:embed=true' },
    { id: 18, name: 'Data Packets Transmitted', graphUrl: 'https://public.tableau.com/views/DataPacketsTransmitted/DataPacketsTransmitted?:showVizHome=no&:embed=true' },
    { id: 19, name: 'Infrastructure Index', graphUrl: 'https://public.tableau.com/views/InfrastructureIndex/InfrastructureIndex?:showVizHome=no&:embed=true' },
    { id: 20, name: 'Intrution Attempts', graphUrl: 'https://public.tableau.com/views/IntrutionAttempts/IntrutionAttempts?:showVizHome=no&:embed=true' },
    { id: 21, name: 'Security Alerts', graphUrl: 'https://public.tableau.com/views/SecurityAlerts/SecurityAlerts?:showVizHome=no&:embed=true' },
    { id: 22, name: 'All Data', graphUrl: 'https://public.tableau.com/views/AllData_17311505752650/AllData?:showVizHome=no&:embed=true' }
  ];

  return (
    <div className="sidebar">
      <h3>Properties</h3>
      {contentList.map((content) => (
        <div
          key={content.id}
          className={`content-item ${activeContent === content.id ? 'active' : ''}`}
          onClick={() => onContentClick(content.id, content.graphUrl)}
        >
          {content.name}
        </div>
      ))}
    </div>
  );
};

const Dashboard = () => {
  const [selectedGraphUrl, setSelectedGraphUrl] = useState(null);
  const [activeContent, setActiveContent] = useState(null);

  const handleContentClick = (contentId, graphUrl) => {
    setSelectedGraphUrl(graphUrl);
    setActiveContent(contentId);
  };

  const handleCloseGraph = () => {
    setSelectedGraphUrl(null);
    setActiveContent(null);
  };

  // Handle CSV download
  const handleDownload = () => {
    // Replace this URL with the path to your CSV file
    const csvUrl = '/smart_city_infrastructure_dataset_20_cities.csv';

    // Create a link element and trigger the download
    const link = document.createElement('a');
    link.href = csvUrl;
    link.download = 'sample-data.csv';
    link.click();
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-analysis">
        <Sidebar onContentClick={handleContentClick} activeContent={activeContent} />
        <div className="main-content">
          {selectedGraphUrl ? (
            <div className="graph-container">
              <button className="close-button-analysis" onClick={handleCloseGraph}>
                &times;
              </button>
              <iframe
                src={selectedGraphUrl}
                title="Selected Graph"
                className="graph-iframe"
              />
            </div>
          ) : (
            <p>Please select content from the Properties to view the graph.</p>
          )}
        </div>
      </div>

      <div className="extra-content">
        <h2>To view Dashboard</h2>
        <div className="card-container">
          <div className="card">
            <h3>Pollution Dashboard</h3>
            <a target="_blank"  href="https://public.tableau.com/views/PollutionDashboard_17311532311290/Pollution?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" rel="noreferrer" className="analysis-link">Click here to analyze</a>
          </div>
          <div className="card">
            <h3>Energy Dashboard</h3>
            <a target="_blank" href="https://public.tableau.com/views/EnergyDashboard_17311559492640/Energy?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" rel="noreferrer" className="analysis-link">Click here to analyze</a>
          </div>
          <div className="card">
            <h3>Traffic Dashboard</h3>
            <a target='_blank' href="https://public.tableau.com/views/TrafficDashboard_17311560362060/Traffic?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" rel="noreferrer" className="analysis-link">Click here to analyze</a>
          </div>
          <div className="card">
            <h3>Smart City Dashboard</h3>
            <a target='_blank' href="https://public.tableau.com/views/smartcityDashboard/smartcity?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" rel="noreferrer" className="analysis-link">Click here to analyze</a>
          </div>
          <div className="card">
            <h3>IT Dashboard</h3>
            <a target='_blank' href="https://public.tableau.com/views/ITDashboard_17311561420590/IT?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" rel="noreferrer" className="analysis-link">Click here to analyze</a>
          </div>
        </div>
        <p>Click the button below to download the CSV sample data:</p>
        <button className="download-button" onClick={handleDownload}>Download CSV</button>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
