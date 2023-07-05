import React from "react";
import "./new.css";
import Actionbar from "../../components/action_bar/Actionbar";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const New = () => {
  return (
    <main className="new">
      <Actionbar />
      <div className="new-wrap">
        <div className="new-newest">
          <div className="new-item">
            <div className="new-overlay">
              <div className="new-overlay__btn">
                <button className="new-tag tag-botnet">IP Botnet</button>
                <button className="new-tag tag-vul">Vulnerabilities</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default New;
