import React, { useState, useEffect, useRef, useCallback } from "react";
import { DataGrid } from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";
import "./table.scss";
import { positions } from "@mui/system";

const Table = () => {
  const columns = [
    { field: "id", headerName: "Line", width: 120 },
    { field: "ItemNumber", headerName: "Item Number", width: 120 },
    { field: "NDC", headerName: "NDC", width: 120 },
    {
      field: "Item Description",
      headerName: "Item Description",
      type: "number",
      width: 120,
    },
    {
      field: "pack",
      headerName: "pack",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 120,
      valueGetter: (params: any) =>
        `${params.getValue(params.id, "firstName") || ""} ${
          params.getValue(params.id, "lastName") || ""
        }`,
    },
    {
      field: "Unit Price",
      headerName: "Unit Price",
      type: "number",
      width: 120,
    },
    {
      field: "Quantity Ordered",
      headerName: "Quantity Ordered",
      type: "number",
      width: 120,
    },
    {
      field: "Manufacturer",
      headerName: "Manufacturer",
      type: "number",
      width: 120,
    },
  ];

  const rows = [
    { id: "01", ItemNumber: "61958-2501-01-HIV", firstName: "Jon", age: 35 },
    { id: "02", ItemNumber: "61958-2501-01-HIV", firstName: "Cersei", age: 42 },
    { id: "03", ItemNumber: "61958-2501-01-HIV", firstName: "Jaime", age: 45 },
    { id: "04", ItemNumber: "61958-2501-01-HIV", firstName: "Arya", age: 16 },
    {
      id: "05",
      ItemNumber: "61958-2501-01-HIV",
      firstName: "Daenerys",
      age: null,
    },
    { id: "06", ItemNumber: "61958-2501-01-HIV", firstName: null, age: 155 },
    {
      id: "07",
      ItemNumber: "61958-2501-01-HIV",
      firstName: "Ferrara",
      age: 44,
    },
    {
      id: "08",
      ItemNumber: "61958-2501-01-HIV",
      firstName: "Rossini",
      age: 36,
    },
    { id: "09", ItemNumber: "61958-2501-01-HIV", firstName: "Harvey", age: 65 },
  ];
  return (
    <div className="tableContainer">
      <div>
        <div className="textboxHeader-search">
          <div style={{ position: "relative" }}>
            <input type="text" name="name" />
            <SearchIcon
              style={{
                position: "absolute",
                right: "5px",
                top: "5px",
                bottom: "5px",
                color: "#22599C",
                opacity: "80%",
              }}
            />
          </div>
        </div>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Table;
