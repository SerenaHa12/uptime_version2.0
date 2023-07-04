import React from 'react';
import { NavLink } from "react-router-dom";
import './carddashboard.css';
import { FiArrowUpCircle,FiArrowDownCircle, FiPlayCircle, FiHelpCircle } from "react-icons/fi";

const CardDashboard = () => {
    const cardItem = [
        {
            path: "/",
            name: "Up",
            number: "0",
            numberColor: "#196FE0",
            icon: <FiArrowUpCircle style={{ fontSize: "40px", backgroundColor: "#196FE0", padding: "6px", borderRadius: "50%" }}/>
        },
        {
            path: "/",
            name: "Down",
            number: "0",
            numberColor: "#F65757",
            icon: <FiArrowDownCircle style={{ fontSize: "40px", backgroundColor: "#F65757", padding: "6px", borderRadius: "50%" }}/>
        },
        {
            path: "/",
            name: "Pending",
            number: "0",
            numberColor: "#FF9443",
            icon: <FiHelpCircle style={{ fontSize: "40px", backgroundColor: "#FF9443", padding: "6px", borderRadius: "50%" }}/>
        },
        {
            path: "/",
            name: "Pause",
            number: "0",
            numberColor: "#6B7280",
            icon: <FiPlayCircle style={{ fontSize: "40px", backgroundColor: "#6B7280",padding: "6px", borderRadius: "50%" }}/>
        },
    ]
  return (
    <div className='card-dashboard'>
        {cardItem.map((item, index) => (
            <NavLink
            to={item.path}
            key={index}
            className="card-dashboard__link"
            >
                <div className="card-dashboard__icon">{item.icon}</div>
                <div className="card-dashboard__item">
                    <h1 style={{ color: item.numberColor }}>{item.number}</h1>
                    <p>{item.name}</p>
                </div>
            </NavLink>
        ))}
    </div>
  );
};

export default CardDashboard;