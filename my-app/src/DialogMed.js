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


const DialogMed = ({ open, onClose, onSubmitSuccess }) => {
  const [name, setName] = useState('');
  const [inStock, setInStock] = useState('');
  const [description, setDescription] = useState('');
  const [codabar, setCodAbar] = useState('');
  const[email,setEmail]=useState('amine@gmail.com');
  
 

  const classes = useStyles();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleInStockChange = (event) => {
    setInStock(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleCodeAbarChange = (event) => {
    setCodAbar(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };


  

  
  

  const handleSubmit = async() => {
    const formData = {
      name,
      inStock,
    description,
    codabar,
    email
    };
    try {
      await axios.post('http://192.168.1.191:3010/pharmacy/medication', formData);
      onSubmitSuccess(); 
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    onClose();
    setName('');
   setInStock('');
   setDescription('');
   setCodAbar('');
   setEmail('');
    
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Ajouter un médicament</DialogTitle>
      <DialogContent >

      <TextField
          autoFocus
          margin="dense"
          label="Nom"
          type="text"
          fullWidth
          value={name}
          onChange={handleNameChange}
        />
        
        <TextField
          autoFocus
          margin="dense"
          label="En Stock"
          type="boolean"
          fullWidth
          value={inStock}
          onChange={handleInStockChange}
          required
        />
      <TextField
          autoFocus
          margin="dense"
          label="Description"
          type="text"
          fullWidth
          value={description}
          onChange={handleDescriptionChange}
          required
        />
         <TextField
          autoFocus
          margin="dense"
          label="Code"
          type="text"
          fullWidth
          value={codabar}
          onChange={handleCodeAbarChange}
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
