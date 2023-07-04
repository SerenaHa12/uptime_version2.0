import React from "react";
import "./actionbar.css";
import Button from "@mui/material/Button";
import { BiFilter } from "react-icons/bi";
import Stack from "@mui/material/Stack";

const Actionbar = () => {
  return (
    <div className="actionbar">
      <div className="action-search">
        <input type="search" placeholder="Search asset or message" />
      </div>
      <div className="action filter">
        <Button variant="contained" endIcon={<BiFilter />}>
          Filter
        </Button>
      </div>
    </div>
  );
};

export default Actionbar;
