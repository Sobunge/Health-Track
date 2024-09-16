import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { CssBaseline} from '@mui/material';
import ProfileForm from '../components/ProfileForm';

function Profile() {

  return (
    <div>
      <CssBaseline />
      <DashboardLayout>
        <ProfileForm/>

      </DashboardLayout>

    </div>
  );
}

export default Profile;
