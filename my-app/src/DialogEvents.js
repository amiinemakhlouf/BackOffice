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


const DialogAdmin = ({ open, onClose, onSubmitSuccess }) => {
  const [organisateur, setorganisateur] = useState('');
  const [titre, settitre] = useState('');
  const[lieux,setlieux]=useState('');
  const [description, setdescription] = useState('');
  const [telephone, settelephone] = useState('');
  const [date, setdate] = useState('');

 

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
  const handleTelepehoneChange = (event) => {
    settelephone(event.target.value);
  };
  const handleDateChange = (event) => {
    setdate(event.target.value);
  };
 
 


  

  
  

  const handleSubmit = async() => {
    const formData = {
      organisateur,
      titre,
      lieux,
      description,
      telephone,
      date
    };
    try {
      await axios.post('http://192.168.100.175:3010/api/events', formData);
      onSubmitSuccess(); 
      handleClose();
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };

  const handleClose = () => {
    onClose();
    setorganisateur('');
    settitre('');
    setlieux('');
    setdescription('');
    setdate('');
    settelephone('');
    
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
        <TextField
          autoFocus
          margin="dense"
          label="date"
          type="text"
          fullWidth
          value={date}
          onChange={handleDateChange}
          required
        />
        <TextField
          autoFocus
          margin="dense"
          label="telephone"
          type="text"
          fullWidth
          value={telephone}
          onChange={handleTelepehoneChange  }
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
