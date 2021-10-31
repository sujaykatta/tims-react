import React, { useState, useEffect, useRef, useCallback } from "react";
import Form from "../FormPage/Form";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Table from "../Table/Table";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="main-container">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="form-container">
          <Form />
          <Table />
        </div>
      </div>
    </>
  );
};

export default Home;
