// src/components/Reports.js
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { CssBaseline} from '@mui/material';
import ReportPage from '../components/ReportPage';


function Reports() {
  return (
    <div>
      <CssBaseline />
      <DashboardLayout>
        <ReportPage />

      </DashboardLayout>

    </div>
  );
}

export default Reports;