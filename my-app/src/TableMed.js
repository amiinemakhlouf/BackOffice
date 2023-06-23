import React, { useState, useEffect } from 'react';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Table.css";
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export const TableMed = (refrechtable) => {
  const [meds, setMeds,] = useState([]);
  const [circleColor, setCircleColor] = useState('green');

const handleCircleClick = () => {
  setCircleColor(circleColor === 'green' ? 'red' : 'green');
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
      const response = await axios.get('http://192.168.1.191:3010/pharmacy/medications');
      setMeds(response.data);
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
          <th>email</th>
          <th>description</th>
          <th>code a bar</th>
          <th>actions</th>

        </tr>
      </thead>
      <tbody>
        {meds.map((meds, idx) => (
          <tr key={idx}>
            <td>{meds.name}</td>
            <td>
  <FiberManualRecordIcon className="circle-green" onClick={handleCircleClick} />
</td>
            <td>{meds.email}</td>
            <td>{meds.description}</td>
            <td>{meds.codabar}</td>
            <td>
              <button className="delete-button"
              onClick={() => deletePharmacy(meds.id)}>
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
