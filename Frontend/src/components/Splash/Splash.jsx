import React, { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import './Style.css';


const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <h1 className="splash-logo">Your Logo</h1>
    </div>
  );
};

export default Splash;
