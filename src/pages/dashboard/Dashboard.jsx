import React from 'react';
import './dashboard.css';
import { FiAlertCircle } from "react-icons/fi";
import CardDashboard from '../../components/card_dashboard/CardDashboard';
import TableDashboard from '../../components/table_dashboard/TableDashboard';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h1 className='dashboard-heading'>UPTIME <span><FiAlertCircle /></span></h1>
      <CardDashboard />
      <TableDashboard />
    </div>
  );
};

export default Dashboard;