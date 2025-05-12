import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/login.css';
import './assets/css/style.css';

import React from 'react';
import { useLocation } from 'react-router-dom'; 
import Nav from './components/common/Nav';
import Layout from './layouts';
import AppRouters from './routes/AppRoutes'; 

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <div className="App">
      <div className="d-flex">
        {!isLoginPage && <Nav />}
        {isLoginPage ? (
          <AppRouters />
        ) : (
          <div className="flex-grow-1">
            <AppRouters />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;