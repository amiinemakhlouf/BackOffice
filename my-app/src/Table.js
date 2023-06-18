
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Table.css";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';

export const Table = ( refrechtable) => {
  const [pharmacies, setPharmacies] = useState([]);

  useEffect(() => {
    fetchPharmacies();
  }, [refrechtable]);
 

  const fetchPharmacies = async () => {
    try {
      const response = await axios.get('http://192.168.203.34:3010/api/pharmacy');
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
                <button className="delete-button">
                  <DeleteIcon className="delete-icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

