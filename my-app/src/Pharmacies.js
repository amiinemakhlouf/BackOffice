import React, { useState } from 'react';
import { Table } from './Table';
import DialogForm from './Dialog';
import "./button.css";

const Pharmacies = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
    const [tableVisible, setTableVisible] = useState(false);

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
        <button className="add-pharmacy-btn" onClick={handleOpenDialog}>Ajouter une pharmacie</button>
      </div>
      <div style={{ marginTop: "100px", width: "110%",marginLeft:"-140px"}}>
      <Table />
      </div>
      <DialogForm open={dialogOpen} onClose={handleCloseDialog} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default Pharmacies;
