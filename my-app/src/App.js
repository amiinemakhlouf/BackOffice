import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashbord';
import Sidebar from './Sidebar';

const App = () => {
  const [route, setRoute] = useState('login');
  const handleRouteChange = (newRoute) => {
    setRoute(newRoute);
  };


  return (
  
    <div>
    {route === 'login' && <Login onRouteChange={handleRouteChange} />}
    {route === 'sidebar' && <Sidebar onRouteChange={handleRouteChange} />}
  </div>
  
  );
};

export default App;