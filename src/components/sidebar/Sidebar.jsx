import React, { useState } from "react";
import logo_dark from "../../assets/logo-dark.svg";
import {
  FaTh,
  FaBars,
} from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { BiSolidDashboard, BiSolidData, BiLogoTelegram, BiSolidFile, BiNews } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <BiSolidDashboard />,
    },
    {
      path: "/asset",
      name: "Assets",
      icon: <BiSolidData />,
    },
    {
      path: "/ticket",
      name: "Tickets",
      icon: <BiLogoTelegram />,
    },
    {
      path: "/report",
      name: "Reports",
      icon: <BiSolidFile />,
    },
    {
      path: "/new",
      name: "News",
      icon: <BiNews />,
    },
    {
      path: "/setting",
      name: "Setting",
      icon: <MdSettings />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <img src={logo_dark} alt="" style={{ display: isOpen ? "block" : "none" }} className="logo"/>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
