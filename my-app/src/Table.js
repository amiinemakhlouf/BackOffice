
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Table.css";
import EditIcon from '@mui/icons-material/Edit';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';

export const Table = (  refrechtable ) => {
  const [pharmacies, setPharmacies] = useState([]);
  

  useEffect(() => {
    fetchPharmacies();
  }, [refrechtable]);
 
  const deletePharmacy = async (pharmacyId) => {
    try {
      const confirmed = window.confirm("Êtes-vous sûr de vouloir supprimer cette pharmacie ?");
  
      if (confirmed) {
        await axios.delete(`http://192.168.100.175:3010/api/pharmacy/${pharmacyId}`);
        // Mettez à jour la liste des pharmacies après la suppression
        fetchPharmacies();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchPharmacies = async () => {
    try {
      const response = await axios.get('http://192.168.1.191:3010/api/pharmacy');
      setPharmacies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Nom de la pharmacie</th>
            <th>Rue</th>
            <th>Heure d'ouverture</th>
            <th>Heure de fermeture</th>
            <th>Numéro de téléphone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pharmacies.map((pharmacy, idx) => (
            <tr key={idx}>
              <td>{pharmacy.name}</td>
              <td>{pharmacy.streetName}</td>
              <td>{pharmacy.workingHourStart}</td>
              <td>{pharmacy.workingHourEnd}</td>
              <td>{pharmacy.phoneNumber}</td>
              <td>
                <button className="delete-button"
                onClick={() => deletePharmacy(pharmacy.id)}>
                  <DeleteIcon className="delete-icon" />
                </button>
                <button className="edit-button">
          <EditIcon className="edit-icon" />
        </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

