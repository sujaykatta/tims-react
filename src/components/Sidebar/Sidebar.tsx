import React, { useState, useEffect, useRef, useCallback } from "react";
import "./sidebar.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface ISidebarProp {
  index?: any;
  onSelection: (challenge: any) => void;
  // onShare?: (challenge: IChallengeResponse) => void;
}
const Sidebar: React.FC<ISidebarProp> = ({ onSelection }) => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  return (
    <div className="sidebar-containers">
      <div className="side-header-text">Dashboard</div>
      <div
        className={!open ? "side-header-text" : "side-header-text-open"}
        onClick={() => {
          setOpen(!open);
          setOpen1(false);
          setOpen2(false);
          setOpen3(false);
          setOpen4(false);
          setOpen5(false);
          setOpen6(false);
          onSelection("none");
        }}
      >
        Emergency Response
        {open ? (
          <KeyboardArrowUpIcon />
        ) : (
          <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        )}
      </div>
      {open && (
        <>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
        </>
      )}

      {/* //2 */}
      <div
        className={!open1 ? "side-header-text" : "side-header-text-open"}
        onClick={() => {
          setOpen1(!open1);
          setOpen(false);
          setOpen2(false);
          setOpen3(false);
          setOpen4(false);
          setOpen5(false);
          setOpen6(false);
          onSelection("none");
        }}
      >
        Inquiry
        {open1 ? (
          <KeyboardArrowUpIcon />
        ) : (
          <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        )}
      </div>
      {open1 && (
        <>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
        </>
      )}
      {/* //3 */}
      <div
        className={!open2 ? "side-header-text" : "side-header-text-open"}
        onClick={() => {
          setOpen2(!open2);
          setOpen1(false);
          setOpen(false);
          setOpen3(false);
          setOpen4(false);
          setOpen5(false);
          setOpen6(false);
          onSelection("none");
        }}
      >
        Inventory Receiving
        {open2 ? (
          <KeyboardArrowUpIcon />
        ) : (
          <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        )}
      </div>
      {open2 && (
        <>
          <div className="dropdown-text" onClick={() => onSelection("po")}>
            PO Entry
          </div>
          <div className="dropdown-text">PO Status</div>
        </>
      )}
      {/* //4 */}
      <div
        className={!open3 ? "side-header-text" : "side-header-text-open"}
        onClick={() => {
          setOpen3(!open3);
          setOpen1(false);
          setOpen2(false);
          setOpen(false);
          setOpen4(false);
          setOpen5(false);
          setOpen6(false);
          onSelection("none");
        }}
      >
        Maintenance
        {open3 ? (
          <KeyboardArrowUpIcon />
        ) : (
          <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        )}
      </div>
      {open3 && (
        <>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
        </>
      )}
      {/* //5 */}
      <div
        className={!open4 ? "side-header-text" : "side-header-text-open"}
        onClick={() => {
          setOpen4(!open4);
          setOpen1(false);
          setOpen2(false);
          setOpen3(false);
          setOpen(false);
          setOpen5(false);
          setOpen6(false);
          onSelection("none");
        }}
      >
        Master File
        {open4 ? (
          <KeyboardArrowUpIcon />
        ) : (
          <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        )}
      </div>
      {open4 && (
        <>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
        </>
      )}
      {/* //6 */}
      <div
        className={!open5 ? "side-header-text" : "side-header-text-open"}
        onClick={() => {
          setOpen5(!open5);
          setOpen1(false);
          setOpen2(false);
          setOpen3(false);
          setOpen4(false);
          setOpen(false);
          setOpen6(false);
          onSelection("none");
        }}
      >
        Orders
        {open5 ? (
          <KeyboardArrowUpIcon />
        ) : (
          <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        )}
      </div>
      {open5 && (
        <>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
        </>
      )}
      {/* //7 */}
      <div
        className={!open6 ? "side-header-text" : "side-header-text-open"}
        onClick={() => {
          setOpen6(!open6);
          setOpen1(false);
          setOpen2(false);
          setOpen3(false);
          setOpen4(false);
          setOpen5(false);
          setOpen(false);
          onSelection("none");
        }}
      >
        Resource Management
        {open6 ? (
          <KeyboardArrowUpIcon />
        ) : (
          <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        )}
      </div>
      {open6 && (
        <>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
          <div className="dropdown-text">Tree Item</div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
