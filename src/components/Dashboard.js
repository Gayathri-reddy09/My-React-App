
import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Chart from './Chart'; 


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

     
     
      <Chart />
      
    
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
