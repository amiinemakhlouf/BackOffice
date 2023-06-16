import React, { useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Table.css";

export const TableAdmins = () => {
  const [filter, setFilter] = useState(""); // State to store the filter value

  const rows = [
   
  ];

  const handleFilterChange = (event) => {
    setFilter(event.target.value); // Update the filter state when the input value changes
  };

  const filteredRows = rows.filter((row) =>
    row.page.toLowerCase().includes(filter.toLowerCase())
  ); // Filter the rows based on the page name

  return (
    <div className="table-wrapper">
      <div className="filter" >
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Filter  par ville"
          style={{marginLeft:"40px"}}
        />
      </div>
      <table className="table" style={{marginLeft:"100px" ,marginTop:"30px"}}>
        <thead>
          <tr>
          <th>nom</th>
          <th>nom de pharmacie</th>
            <th>email</th>
            <th>numéro de téléphone</th>
           <th>date de création</th>
          
          </tr>
        </thead>
        <tbody>
          {filteredRows.map((row, idx) => {
            const statusText =
              row.status.charAt(0).toUpperCase() + row.status.slice(1);

            return (
              <tr key={idx}>
                <td>{row.page}</td>
                <td className="expand">{row.description}</td>
                <td>
                  <span className={`label label-${row.status}`}>
                    {statusText}
                  </span>
                </td>
                <td className="fit">
                  <span className="actions">
                    <BsFillTrashFill className="delete-btn" />
                    <BsFillPencilFill className="edit-btn" />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
