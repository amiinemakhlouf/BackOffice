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


const DialogAdmin = ({ open, onClose, onSubmit }) => {
  const [nom, setNom] = useState('');
  const [nompharmacie, setNomPharmacie] = useState('');
  const[telephone,settelephone]=useState('');
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
  const handletelephonechange = (event) => {
    settelephone(event.target.value);
  };
  const handlenompharmaice = (event) => {
    setNomPharmacie(event.target.value);
  };


  

  
  

  const handleSubmit = () => {
    const formData = {
      nom,
      nompharmacie,
      telephone,
      email,
    password,
    };
    onSubmit(formData);
    handleClose();
  };

  const handleClose = () => {
    onClose();
    setNom('');
    setNomPharmacie('');
    settelephone('');
   setEmail('');
   setPassword('');
    
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Ajouter un Pharmacien</DialogTitle>
      <DialogContent >

      <TextField
          autoFocus
          margin="dense"
          label="Nom "
          type="text"
          fullWidth
          value={nom}
          onChange={handleNomChange}
        />
        <TextField
          autoFocus
          margin="dense"
          label="Nom de la pharmacie "
          type="text"
          fullWidth
          value={nompharmacie}
          onChange={handlenompharmaice}
        />
         
         <TextField
          autoFocus
          margin="dense"
          label="numéro de telephone"
          type="text"
          fullWidth
          value={telephone}
          onChange={handletelephonechange}
          required
        />
        
        <TextField
          autoFocus
          margin="dense"
          label="email"
          type="email"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          required
        />
        <div style={{ display: 'flex', marginTop: '5px' }}>
          <TextField
            style={{ marginRight: '10px' }}
            margin="dense"
            label="password"
            type="text"
            fullWidth
            value={password}
            onChange={handlePasswordChange}
            required
          />
         
           
          
        </div>  
       


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


export default DialogAdmin;
