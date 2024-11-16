import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/Header/Header";
import About from "../src/About/About"; // Import the About component
import RegisterPage from "./Newregister/Newregister";
import LoginPage from "./LoginPage/LoginPage";
import FeaturePage from './Featurepage/Featurepage';
import Urban from './Urban/Urban.jsx';
import Analysis from "./Analysis/Analysis";
import FeedbackForm from "./Feedback/Feedback";
import Rural from "./Rural/Rural.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/features' element={<FeaturePage />} />
        <Route path='/analysis' element={<Analysis />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/urban' element={<Urban />} />
        <Route path='/feedback' element={<FeedbackForm />} />
        <Route path='/rural' element={<Rural />} />

      </Routes>
    </Router>
  );
}

export default App;
