import React, { useState } from 'react';
import DialogForm from './Dialog';
import "./button.css";
import DialogMed from './DialogMed';
import { TableMed } from './TableMed';

const Med = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleFormSubmit = (formData) => {
    // Handle the form submission
    console.log(formData);

    // Close the dialog
    handleCloseDialog();
  };

  return (
    <div style={{ flex: "2" }}>
      <div style={{ marginTop: "60px" }}>
        <button className="add-pharmacy-btn" onClick={handleOpenDialog}>Ajouter une medicaments</button>
      </div>
      <div style={{ marginTop: "100px", width: "70%",marginLeft:"40px" }}>
        <TableMed/>
      </div>
      <DialogMed open={dialogOpen} onClose={handleCloseDialog} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default Med;
