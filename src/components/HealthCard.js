// src/components/HealthCard.js
import { Card, CardContent, Typography } from '@mui/material';

function HealthCard({ title, value }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h2">{value}</Typography>
      </CardContent>
    </Card>
  );
}

export default HealthCard;