import React, { useState } from 'react';
import axios from 'axios';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const styles = theme => ({
  radio: {
    '&$checked': {
      color: '#4B8DF8'
    }
  },
  checked: {
    color: 'darkgreen', // Change the color to your desired dark green color
  }
});


const useStyles = makeStyles({
  checked: {
    color: 'green', // Change the color to your desired green color
  },
});


const DialogForm = ({ open, onClose,onSubmitSuccess  }) => {
  const [name, setName] = useState('');
  const [streetName, setStreetName] = useState('');
  const [workingHourStart, setWorkingHourStart] = useState('');
  const [workingHourEnd, setworkingHourEnd] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLongitudeChange = (event) => {
    setLongitude(event.target.value);
  };

  const handleLatitudeChange = (event) => {
    setLatitude(event.target.value);
  };

  const handleStreetName = (event) => {
    setStreetName(event.target.value);
  };

  const handleWOrkingHourStartChange = (event) => {
    setWorkingHourStart(event.target.value);
  };

  const handleWOrkingHourEndChange = (event) => {
    setworkingHourEnd(event.target.value);
  };

  const handlephoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = async () => {
    const formData = {
      name,
      streetName,
      workingHourStart,
      workingHourEnd,
      longitude,
      latitude,
      phoneNumber,
    };

    try {
      await axios.post('http://192.168.1.11:3010/api/pharmacy/save', formData);
      onSubmitSuccess(); 
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    onClose();
    setName('');
    setLongitude('');
    setLatitude('');
    setStreetName('');
    setWorkingHourStart('');
    setworkingHourEnd('');
    setPhoneNumber('');
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Ajouter une pharmacie</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Nom de la pharmacie"
          type="text"
          fullWidth
          value={name}
          onChange={handleNameChange}
          required
        />

        <TextField
          autoFocus
          margin="dense"
          label="Nom de la rue"
          type="text"
          fullWidth
          value={streetName}
          onChange={handleStreetName}
          required
        />
        <div style={{ display: 'flex', marginTop: '5px' }}>
          <TextField
            style={{ marginRight: '10px' }}
            margin="dense"
            label="Longitude"
            type="text"
            fullWidth
            value={longitude}
            onChange={handleLongitudeChange}
            required
          />
          <TextField
            margin="dense"
            label="Altitude"
            type="text"
            fullWidth
            value={latitude}
            onChange={handleLatitudeChange}
            required
          />
        </div>
        <div>
          <span style={{ fontWeight: 'bold'}}>Heure d'ouverture:</span>
<TextField
         type="time"
         fullWidth
         value={workingHourStart}
         onChange={handleWOrkingHourStartChange}
         required
       />
</div>
<div>
<span style={{ fontWeight: 'bold' }}>Heure de fermeture:</span>
<TextField
         type="time"
         fullWidth
         value={workingHourEnd}
         onChange={handleWOrkingHourEndChange}
         required
       />
</div>
<TextField
       autoFocus
       margin="dense"
       label="Numéro du téléphone"
       type="text"
       fullWidth
       value={phoneNumber}
       onChange={handlephoneNumberChange}
       required
     />
</DialogContent>
<DialogActions>
<Button onClick={handleClose} color="secondary">
Annuler
</Button>
<Button onClick={handleSubmit} color="primary">
Ajouter
</Button>
</DialogActions>
</Dialog>
);
};


export default DialogForm;
