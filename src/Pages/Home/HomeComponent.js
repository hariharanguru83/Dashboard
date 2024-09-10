import React, { useEffect, useState } from "react";
import CardComponent from "../../Components/Card/CardComponent";
import TableComponent from "../../Components/Table/TableComponent";
import "./HomeComponent.css";

const HomeComponent = () => {
  const [cardData, setCardData] = useState([]);
  const [tableData, setTableData] = useState([]);

  // fetch card data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const result = await response.json();
        setCardData(result.slice(0, 10));
      } catch (error) {
        console.error("Error fetching Data", error);
      }
    };
    fetchData();
  }, []);

  // Fetch table data
  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const response = await fetch("https://dummyapi.online/api/users");
        const result = await response.json();
        setTableData(result.slice(0, 10));
        console.log(result.slice(0, 10));
      } catch (error) {
        console.error("Error fetching Data", error);
      }
    };
    fetchTableData();
  }, []);

  return (
    <>
      <div className="main-content">
        <div className="card-container">
          <CardComponent cardData={cardData} />
        </div>
        <div className="table-container">
          <TableComponent tableData={tableData} />
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
