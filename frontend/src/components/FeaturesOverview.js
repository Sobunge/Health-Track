import React from 'react';
import Grid2 from '@mui/material/Grid2';
import '../styles/FeaturesOverview.css'; // Import custom CSS for styling (optional)
// Import your icons (use appropriate icon libraries like FontAwesome or Material Icons)
import { FaHeartbeat, FaUtensils, FaBed, FaCalendarCheck } from 'react-icons/fa';
import { keyframes } from '@emotion/react';

// Define the shaking animation
const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  50% { transform: translateX(0); }
  75% { transform: translateX(4px); }
  100% { transform: translateX(0); }
`;

const FeaturesOverview = () => {
  const features = [
    {
      title: 'Fitness Tracking',
      description: 'Monitor your workouts and track progress.',
      icon: <FaHeartbeat size={40} />,
      link: '/features/fitness-tracking',
    },
    {
      title: 'Diet & Nutrition',
      description: 'Log meals and analyze calorie intake.',
      icon: <FaUtensils size={40} />,
      link: '/features/diet-nutrition',
    },
    {
      title: 'Sleep Monitoring',
      description: 'Track sleep patterns and improve rest quality.',
      icon: <FaBed size={40} />,
      link: '/features/sleep-monitoring',
    },
    {
      title: 'Medical Appointments',
      description: 'Stay on top of medical appointments and reminders.',
      icon: <FaCalendarCheck size={40} />,
      link: '/features/medical-appointments',
    },
  ];

  return (
    <section className="features-overview">
      <div className="container">
        <h2 className="section-title">Why Choose HealthTrack?</h2>
        <Grid2 container spacing={2}>
          {features.map((feature, index) => (
            <Grid2 item size={{ xs:12, sm:12, md:6}} key={index}>
              <div className="feature-card">
                <div className="icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href={feature.link} className="learn-more-btn" sx={{
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    animation: `${shake} 0.5s ease`,
                  },
                }}>
                  Learn More
                </a>
              </div>
            </Grid2>
          ))}
        </Grid2>
      </div>
    </section>
  );
};

export default FeaturesOverview;
