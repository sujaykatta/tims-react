import { TextField } from "@mui/material";
import React, { useState, useEffect, useRef, useCallback } from "react";
import "./form.scss";

const Form = () => {
  const [poid, setPoid] = useState<any>();
  const [poNo, setPoNo] = useState<any>();

  const [date, setDate] = useState(0);
  const [show, setShow] = useState(false);

  const [program, setProgram] = useState<any>("");

  const [vendor, setVendor] = useState<any>("");

  const rows = [
    {
      id: "a",
      name: "Load balancer 1",
      status: "Disabled",
    },
    {
      id: "b",
      name: "Load balancer 2",
      status: "Starting",
    },
    {
      id: "c",
      name: "Load balancer 3",
      status: "Active",
    },
  ];

  const headers = [
    {
      key: "name",
      header: "Line",
    },
    {
      key: "name",
      header: "item Number",
    },
    {
      key: "name",
      header: "NDC",
    },
    {
      key: "name",
      header: "item Description",
    },
    {
      key: "name",
      header: "Pack",
    },
    {
      key: "name",
      header: "Unit Price",
    },
    {
      key: "name",
      header: "Quantity Ordered",
    },
  ];
  //   useEffect(() => {
  //     const scrollHostElement: any = scrollHostRef.current;
  //     const { clientWidth, scrollWidth } = scrollHostElement;
  //     const scrollBoxPercentage = clientWidth / scrollWidth;
  //     const scrollbarHeight = Math.max(
  //       scrollBoxPercentage * clientWidth,
  //       SCROLL_BOX_MIN_WIDTH
  //     );
  //     setScrollBoxWidth(scrollbarHeight);
  //     scrollHostElement.addEventListener("scroll", handleScroll, true);
  //     return function cleanup() {
  //       scrollHostElement.removeEventListener("scroll", handleScroll, true);
  //     };
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [window.innerHeight, window.innerWidth]);
  useEffect(() => {
    console.log("vendor", vendor);
  }, []);
  const handlePoid = (event: any) => {
    setPoid(event.target.value);
  };
  const handlePono = (event: any) => {
    setPoNo(event.target.value);
  };
  return (
    <div className="outerFormContainer">
      <div className="outerForm">
        <div>
          <div className="titleHeader">Inventory Receiving</div>
          <div className="titleSubHeader">PO Entry</div>
        </div>
        <form className="innerForm">
          <div className="form-container-text">
            <div>
              <div className="textFieldContainer">PO ID</div>
              <div className="textboxHeader">
                <input
                  onChange={(e) => handlePoid(e)}
                  type="text"
                  name="name"
                />
              </div>
            </div>
            <div>
              <div className="textFieldContainer">PO Number</div>
              <div className="textboxHeader">
                <input type="text" name="name" />
              </div>
            </div>
            <div>
              <div className="textFieldContainer">Receiving Date</div>
              <TextField
                id="date"
                type="date"
                defaultValue="2017-05-24"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="dropdown">
              <div className="textFieldContainer">Program</div>
              <select>
                <option value="TB">TB</option>
                <option value="ZO">ZO</option>
                <option selected value="Program4">
                  Program 4
                </option>
                <option value="Program5">Program 5</option>
                <option selected value="Program6">
                  Program 6
                </option>
                <option value="Program7">Program 7</option>
                <option value="Program8">Program 8</option>
              </select>
            </div>
            <div className="dropdown">
              <div className="textFieldContainer">Vendor</div>
              <select>
                <option value="Vendor1">Vendor 1</option>
                <option value="Vendor2">Vendor 2</option>
                <option selected value="Vendor3">
                  Vendor 3
                </option>
                <option value="Vendor4">Vendor 4</option>
                <option value="Vendor5">Vendor 5</option>
                <option value="Vendor6">Vendor 6</option>
                <option selected value="Vendor7">
                  Vendor 7
                </option>
                <option value="Vendor8">Vendor 8</option>
                <option value="Vendor9">Vendor 9</option>
                <option value="Vendor10">Vendor 10</option>
                <option selected value="Vendor11">
                  Vendor 11
                </option>
                <option value="Vendor12">Vendor 12</option>
              </select>
            </div>
          </div>
          <div className="btn-container">
            <div className="btn-submit-reset">
              <input type="Reset" value="Reset" />
            </div>
            <div className="btn-submit">
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
