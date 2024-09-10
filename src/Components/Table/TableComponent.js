import React, { useState } from "react";
import "./TableComponent.css";

const TableComponent = ({ tableData }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };
  // Sorting logic
  const sortedData = React.useMemo(() => {
    let sortableData = [...tableData];
    if (sortConfig.key !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [tableData, sortConfig]);
  return (
    <>
      <table className="table">
        <tr>
          <th onClick={() => handleSort("id")}>Id</th>
          <th onClick={() => handleSort("name")}>Name</th>
          <th onClick={() => handleSort("username")}>UserName</th>
          <th onClick={() => handleSort("email")}>email</th>
          <th onClick={() => handleSort("city")}>city</th>
        </tr>
        {tableData && tableData.length > 0 ? (
          sortedData.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.address.city}</td>
            </tr>
          ))
        ) : (
          <p>No data available</p>
        )}
      </table>
    </>
  );
};

export default TableComponent;
