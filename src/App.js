import React from 'react';
import './styles/main.scss';
import 'rsuite/dist/styles/rsuite-default.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProtectedRoute from './Components/ProtectedRoute';
import Signin from './Components/Signin';
import { ProfileProvider } from './context/ProfileContext';

function App() {
  return (
    <ProfileProvider>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/*" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </ProfileProvider>
  );
}

export default App;
