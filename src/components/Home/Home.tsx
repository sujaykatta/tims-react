import React, { useState, useEffect, useRef, useCallback } from "react";
import Form from "../FormPage/Form";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Table from "../Table/Table";
import "./home.scss";

interface IHomeProp {
  index?: any;
  onShare?: (challenge: any) => void;
  // onShare?: (challenge: IChallengeResponse) => void;
}

const Home: React.FC<IHomeProp> = () => {
  const [poEntry, setPoEntry] = useState(false);
  useEffect(() => {
    console.log("poEntry", poEntry);
  }, [poEntry]);
  const handelSwitch = (navigatorSlide: any) => {
    console.log("navigatorSlide", navigatorSlide);
    if (navigatorSlide == "po") setPoEntry(true);
    else setPoEntry(false);
  };
  return (
    <>
      <Header></Header>
      <div className="main-container">
        <div className="sidebar-container">
          <Sidebar onSelection={handelSwitch} />
        </div>
        {poEntry && (
          <div className="form-container">
            <Form />
            <Table />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
