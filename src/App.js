import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { AuthProvider, useAuth } from './Components/AuthContext';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

function PrivateRoute({ children }) {
  let { user } = useAuth();
  return user ? children : <Navigate to="/Login" />
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container className='mt-5'>
          <Routes>
            <Route path="/Registration" element={<Registration/>} />

            <Route path="/Login" element={<Login/>} />

            <Route path="/Dashboard" element={
              <PrivateRoute>
                <Dashboard/>
              </PrivateRoute>
            } />

            <Route path="/" element={<Navigate to="/Registration" replace/>} />

          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
