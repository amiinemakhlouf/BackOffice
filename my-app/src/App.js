import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Login from './Login';

const App = () => {
  const [route, setRoute] = useState('login');
  const [userType, setUserType] = useState('');

  const handleRouteChange = (newRoute, newUserType) => {
    setRoute(newRoute);
    setUserType(newUserType);
  };

  return (
    <div>
      {route === 'login' ? (
        <Login onRouteChange={handleRouteChange} />
      ) : (
        <Sidebar onRouteChange={handleRouteChange} userType={userType} />
      )}
    </div>
  );
};

export default App;
