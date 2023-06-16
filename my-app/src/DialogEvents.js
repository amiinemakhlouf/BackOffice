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
  const [organisateur, setorganisateur] = useState('');
  const [titre, settitre] = useState('');
  const[lieux,setlieux]=useState('');
  const [description, setdescription] = useState('');

 

  const classes = useStyles();

  const handleOrganisateurchange= (event) => {
    setorganisateur(event.target.value);
  };
  const handleTitrechange = (event) => {
    settitre(event.target.value);
  };
  const handleLieuxChange = (event) => {
    setlieux(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setdescription(event.target.value);
  };
 


  

  
  

  const handleSubmit = () => {
    const formData = {
      organisateur,
      titre,
      lieux,
      description,
    };
    onSubmit(formData);
    handleClose();
  };

  const handleClose = () => {
    onClose();
    setorganisateur('');
    settitre('');
    setlieux('');
    setdescription('');
    
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Ajouter un évenements</DialogTitle>
      <DialogContent >

      <TextField
          autoFocus
          margin="dense"
          label="Organisateur "
          type="text"
          fullWidth
          value={organisateur}
          onChange={handleOrganisateurchange}
        />
        <TextField
          autoFocus
          margin="dense"
          label="Titre "
          type="text"
          fullWidth
          value={titre}
          onChange={handleTitrechange}
        />
         
         <TextField
          autoFocus
          margin="dense"
          label="lieux"
          type="text"
          fullWidth
          value={lieux}
          onChange={handleLieuxChange}
          required
        />
        
        <TextField
          autoFocus
          margin="dense"
          label="description"
          type="text"
          fullWidth
          value={description}
          onChange={handleDescriptionChange}
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


export default DialogAdmin;
