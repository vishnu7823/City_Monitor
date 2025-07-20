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
import ForgotPassword from "./Forgetpass/Forgetpass";
import ResetPassword from "./Resetpass/Resetpass";
import VerifyEmail from "./Verifyemail/Verifyemail";
import LoginRequired from "./LoginRequired/LoginRequired";
import AdminDashboard from "./admin/adminDashboard.jsx";
import AdminLogin from "./admin/AdminLogin.jsx";
import { Navigate } from 'react-router-dom';

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
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/verify-email/:token" element={<VerifyEmail />} />
        <Route path="/login-required" element={<LoginRequired />} />
        <Route
  path="/admin"
  element={
    localStorage.getItem('isAdmin') ? (
      <AdminDashboard />
    ) : (
      <Navigate to="/admin-login" replace />
    )
  }
/>
        <Route path="/admin-login" element={<AdminLogin />} />

      </Routes>
    </Router>
  );
}

export default App;
