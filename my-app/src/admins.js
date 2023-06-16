import React, { useState } from 'react';
import DialogForm from './Dialog';
import "./button.css";
import { TableAdmins } from './tableadmins';
import DialogAdmin from './DialogAdmin';

const Admins = () => {
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
        <button className="add-pharmacy-btn" onClick={handleOpenDialog}>Ajouter un Pharmacien</button>
      </div>
      <div style={{ marginTop: "80px", width: "1250px" }}>
        <TableAdmins />
      </div>
      <DialogAdmin open={dialogOpen} onClose={handleCloseDialog} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default Admins;
