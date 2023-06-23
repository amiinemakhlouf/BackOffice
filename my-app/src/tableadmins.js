
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Table.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
export const TableAdmins = (refrechtable) => {
  const [admins, setAdmins] = useState([]);
  
  useEffect(() => {
    fetchAdmins();
  }, [refrechtable]);
 
  const deletePharmacy = async (pharmacyId) => {
    try {
      const confirmed = window.confirm("Êtes-vous sûr de vouloir supprimer cette pharmacie ?");
  
      if (confirmed) {
        await axios.delete(`http://192.168.100.175:3010/api/pharmacy/${pharmacyId}`);
        // Mettez à jour la liste des pharmacies après la suppression
        fetchAdmins();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAdmins = async () => {
    try {
      const response = await axios.get('http://192.168.1.191:3010/pharmacists');
      setAdmins(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="table-wrapper">
    <table className="table">
      <thead>
        <tr>
          <th>Nom </th>
          <th>Nom de la Pharmacie</th>
          <th>email</th>
          <th>Numéro de téléphone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {admins.map((pharmacists, idx) => (
          <tr key={idx}>
            <td>{pharmacists.nom}</td>
            <td>{pharmacists.nomDePharmacie}</td>
            <td>{pharmacists.email}</td>
            <td>{pharmacists.telephone}</td>
            <td>
              <button className="delete-button"
              onClick={() => deletePharmacy(pharmacists.id)}>
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
