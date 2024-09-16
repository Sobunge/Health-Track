// src/components/Settings.js
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { CssBaseline} from '@mui/material';
import HealthPreferences from '../components/HealthPreferences';

function Settings() {
  return (
    <div>
      <CssBaseline />
      <DashboardLayout>
        <HealthPreferences />

      </DashboardLayout>

    </div>
  );
}

export default Settings;