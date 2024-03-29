import React, { useState,useEffect } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Table.css";
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const TableEvents = (refrechtable) => {
  const [events, setEvents,] = useState([]);
  
  useEffect(() => {
    fetchEvents();
  }, [refrechtable]);
 
  const deletePharmacy = async (pharmacyId) => {
    try {
      const confirmed = window.confirm("Êtes-vous sûr de vouloir supprimer cette pharmacie ?");
  
      if (confirmed) {
        await axios.delete(`http://192.168.118.34:3010/api/pharmacy/${pharmacyId}`);
        // Mettez à jour la liste des pharmacies après la suppression
        fetchEvents();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://192.168.118.34:3010/api/events');
      setEvents(response.data);
    } catch (error) {
      console.log(error);
    }
  }; // Filter the rows based on the page name

  return (
    <div className="table-wrapper">
  <table className="table">
    <thead>
      <tr>
        <th>organisateur</th>
        <th>titre</th>
        <th>lieu</th>
        <th>description</th>
        <th>date</th>
        <th>telephone</th>
        <th>actions</th>
      </tr>
    </thead>
    <tbody>
      {events.map((event, idx) => (
        <tr key={idx}>
          <td>{event.organisateur}</td>
          <td>{event.titre}</td>
          <td>{event.lieux}</td>
          <td>
            <div className="description-cell">{event.description}</div>
          </td>
          <td>{event.date}</td>
          <td>{event.telephone}</td>
          <td>
            <button
              className="delete-button"
              onClick={() => deletePharmacy(event.id)}
            >
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
