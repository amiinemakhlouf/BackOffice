import React, { useState, useEffect } from 'react';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Table.css";
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export const TableMed = (refrechtable) => {
  const [meds, setMeds] = useState([]);

  const handleCircleClick = (idx) => {
    const updatedMeds = [...meds];
    updatedMeds[idx].circleColor = updatedMeds[idx].circleColor === 'green' ? 'red' : 'green';
    setMeds(updatedMeds);
  };

  useEffect(() => {
    fetchMeds();
  }, [refrechtable]);

  const deletePharmacy = async (pharmacyId) => {
    try {
      const confirmed = window.confirm("Êtes-vous sûr de vouloir supprimer cette pharmacie ?");
  
      if (confirmed) {
        await axios.delete(`http://192.168.1.191:3010/api/pharmacy/${pharmacyId}`);
        // Mettez à jour la liste des pharmacies après la suppression
        fetchMeds();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMeds = async () => {
    try {
      const response = await axios.get('http://192.168.118.34:3010/pharmacy/medications');
      const initialMeds = response.data.map(med => ({
        ...med,
        circleColor: 'green'
      }));
      setMeds(initialMeds);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>nom </th>
            <th>en stock</th>
            <th>description</th>
            <th>code a bar</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {meds.map((med, idx) => (
            <tr key={idx}>
              <td>{med.name}</td>
              <td>
                <FiberManualRecordIcon
                  className={med.circleColor === 'green' ? "circle-green" : "circle-red"}
                  onClick={() => handleCircleClick(idx)}
                />
              </td>
              <td>{med.description}</td>
              <td>{med.codabar}</td>
              <td>
                <button className="delete-button" onClick={() => deletePharmacy(med.id)}>
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
}
