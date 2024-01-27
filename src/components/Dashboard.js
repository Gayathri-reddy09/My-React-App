import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Chart from './Chart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import BarChart from './BarChart';

const Dashboard = () => {
  const [isUploadDialogOpen, setUploadDialogOpen] = useState(false);

  const handleUploadDialogOpen = () => {
    setUploadDialogOpen(true);
  };

  const handleUploadDialogClose = () => {
    setUploadDialogOpen(false);
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <div>
        <Button variant="contained" onClick={() => console.log('Randomize Data')}>
          Randomize Data
        </Button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ width: '48%', marginBottom: '20px' }}>
          <Chart />
        </div>
        <div style={{ width: '48%', marginBottom: '20px' }}>
          <LineChart />
        </div>
        <div style={{ width: '48%', marginBottom: '20px' }}>
          <BarChart />
        </div>
        <div style={{ width: '48%', marginBottom: '20px' }}>
          <PieChart />
        </div>
      </div>

      <div>
        <Button variant="contained" onClick={handleUploadDialogOpen}>
          New Sales Invoice
        </Button>
      </div>

      <Dialog open={isUploadDialogOpen} onClose={handleUploadDialogClose}>
        <DialogTitle>File Upload</DialogTitle>
        <DialogContent>
          <p>File upload form content goes here.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUploadDialogClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dashboard;
