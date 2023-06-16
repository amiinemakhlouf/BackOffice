import React, { useState } from 'react';
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


const DialogMed = ({ open, onClose, onSubmit }) => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const classes = useStyles();

  const handleNomChange = (event) => {
    setNom(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  

  
  

  const handleSubmit = () => {
    const formData = {
      nom,
      email,
    password,
    };
    onSubmit(formData);
    handleClose();
  };

  const handleClose = () => {
    onClose();
    setNom('');
   setEmail('');
   setPassword('');
    
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Ajouter un médicament</DialogTitle>
      <DialogContent >

      <TextField
          autoFocus
          margin="dense"
          label="Nom de la pharmacie"
          type="text"
          fullWidth
          value={nom}
          onChange={handleNomChange}
        />
        
        <TextField
          autoFocus
          margin="dense"
          label="nom"
          type="text"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          required
        />
      <TextField
          autoFocus
          margin="dense"
          label="quantité"
          type="number"
          fullWidth
          value={email}
          onChange={handleEmailChange}
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


export default DialogMed;
