import React, { useState } from 'react';
import DialogForm from './Dialog';
import "./button.css";
import DialaogEvents from './DialogEvents';
import { TableEvents } from './Tableevents';

const Events = () => {
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
        <button className="add-pharmacy-btn" onClick={handleOpenDialog}>Ajouter un évenement</button>
      </div>
      <div style={{ marginTop: "80px", width: "1250px" }}>
        <TableEvents />
      </div>
      <DialaogEvents open={dialogOpen} onClose={handleCloseDialog} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default Events;
