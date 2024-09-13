import React from 'react';
import { CssBaseline, Divider } from '@mui/material';
import Footer from '../components/Footer';
import DashboardLayout from '../components/DashboardLayout';
import UserOverview from '../components/UserOverview';
import HealthMetrics from '../components/HealthMetrics';
import GoalTracking from '../components/GoalTracking';
import ActivityLog from '../components/ActivityLog';
import NotificationList from '../components/NotificationList';
import HealthTipsList from '../components/HealthTipsList';

function Dashboard() {

  const userData = {
    userName: "John Doe",
    avatar: "/images/avatar.png",
    steps: 12345,
    calories: 678,
    goalProgress: 75,
    recentActivities: [
      { name: "Running", date: "2024-09-10" },
      { name: "Yoga", date: "2024-09-11" }
    ],
    notifications: [
      { message: "Time to exercise!", date: "2024-09-12" },
      { message: "Drink water", date: "2024-09-13" }
    ],
    healthTips: [
      { title: "Stay Hydrated", description: "Drink 8 glasses of water daily" },
      { title: "Exercise Regularly", description: "At least 30 minutes a day" }
    ]
  };

  return (
    <div>
      <CssBaseline />
      <DashboardLayout>

        <Divider />
        <UserOverview userName={userData.userName} avatar={userData.avatar} />
        <Divider />
        <HealthMetrics steps={userData.steps} calories={userData.calories} />
        <Divider />
        <GoalTracking goalName="Daily Steps Goal" progress={userData.goalProgress} />
        <Divider />
        <ActivityLog activities={userData.recentActivities} />
        <Divider />
        <NotificationList notifications={userData.notifications} />
        <Divider />
        <HealthTipsList tips={userData.healthTips} />
        <Divider />

        <Footer footerColor='black' />

      </DashboardLayout>

    </div>
  );
}

export default Dashboard;
