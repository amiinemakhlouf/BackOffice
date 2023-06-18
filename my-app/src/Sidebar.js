import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashbord';
import Pharmacies from './Pharmacies';
import Admins from './admins';
import Med from './med';
import Events from './events';

const Sidebar = ({ onRouteChange }) => {
  const [activeComponent, setActiveComponent] = useState('dashboard');

  const handleNavigation = (component) => {
    setActiveComponent(component);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <Dashboard />;

      case 'pharmacies':
        return <Pharmacies />;

      case 'events':
        return <Events />;
        case 'admins':
          return <Admins />;

    
          case 'medicaments':
            return <Med />;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style={{ backgroundColor: '#3f7743' }}>
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <h2 style={{ fontSize: '24px', lineHeight: '1.2', marginTop: '60px' }}>MA PHARMACIE</h2>
            <ul className="nav flex-column mb-4" style={{ marginTop: '40px' }}>
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link text-white ${activeComponent === 'dashboard' ? 'active' : ''}`}
                  onClick={() => handleNavigation('dashboard')}
                  style={{ backgroundColor: activeComponent === 'dashboard' ? 'darkgreen' : '' }}
                >
                  <i className="bi bi-speedometer2"></i> Dashboard
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link text-white ${activeComponent === 'pharmacies' ? 'active' : ''}`}
                  onClick={() => handleNavigation('pharmacies')}
                  style={{ backgroundColor: activeComponent === 'pharmacies' ? 'darkgreen' : '' }}
                >
                  <i className="bi bi-speedometer2"></i> Pharmacies
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link text-white ${activeComponent === 'events' ? 'active' : ''}`}
                  onClick={() => handleNavigation('events')}
                  style={{ backgroundColor: activeComponent === 'events' ? 'darkgreen' : '' }}
                >
                  <i className="bi bi-bootstrap"></i> Evenements
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link text-white ${activeComponent === 'medicaments' ? 'active' : ''}`}
                  onClick={() => handleNavigation('medicaments')}
                  style={{ backgroundColor: activeComponent === 'medicaments' ? 'darkgreen' : '' }}
                >
                  <i className="bi bi-grid"></i> Médicaments
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link text-white ${activeComponent === 'admins' ? 'active' : ''}`}
                  onClick={() => handleNavigation('admins')}
                  style={{ backgroundColor: activeComponent === 'admins' ? 'darkgreen' : '' }}
                >
                  <i className="bi bi-grid"></i> admins
                </button>
              </li>
              <li>
  <button
    className="nav-link btn btn-link text-white dropdown-item"
    onClick={() => {
      setTimeout(() => {
        onRouteChange('login');
      }, );
    }}
  >
    Se déconnecter
  </button>
</li>

            </ul>


          </div>
        </div>
        <div className="col py-3">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default Sidebar;
