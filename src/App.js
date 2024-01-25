import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Accounts from './components/Accounts';
import Payroll from './components/Payroll';
import Reports from './components/Reports';

function App() {
  return (
    <Router>
   
     
        <Navbar />

        
        <div style={{ display: 'flex', flex: 1, marginLeft:'200px'}}>
        
          <Sidebar />

       
          <div style={{ padding: '20px', width: '100%' }}>
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/payroll" element={<Payroll />} />
              <Route path="/reports" element={<Reports />} />
            
            </Routes>
          </div>
        </div>
     
    </Router>
  );
}

export default App;
