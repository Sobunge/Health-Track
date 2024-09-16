import React, { useState } from 'react';
import {
    Container, Typography, Grid, Card, CardContent, Box, Select, MenuItem, FormControl, InputLabel,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@mui/material';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function ReportPage() {
    const [selectedPeriod, setSelectedPeriod] = useState('monthly');

    const handlePeriodChange = (event) => {
        setSelectedPeriod(event.target.value);
    };

    // Sample data for charts
    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Steps',
                data: [5000, 6000, 7000, 8000, 9000],
                borderColor: '#3f51b5',
                backgroundColor: 'rgba(63, 81, 181, 0.2)',
                fill: true,
            },
            {
                label: 'Calories Burned',
                data: [2000, 2200, 2100, 2500, 2300],
                borderColor: '#f50057',
                backgroundColor: 'rgba(245, 0, 87, 0.2)',
                fill: true,
            }
        ],
    };

    const tableData = [
        { date: '2024-09-01', steps: 6000, calories: 2200, sleep: 7 },
        { date: '2024-09-02', steps: 7000, calories: 2000, sleep: 6.5 },
        // More rows as needed
    ];

    return (
        <Container maxWidth="lg" sx={{ mt: 5 }}>
            <Typography variant="h4" gutterBottom align="center">
                Health Report
            </Typography>

            {/* Period Selector */}
            <Box mb={3} display="flex" justifyContent="center">
                <FormControl variant="outlined" fullWidth>
                    <InputLabel>Period</InputLabel>
                    <Select
                        value={selectedPeriod}
                        onChange={handlePeriodChange}
                        label="Period"
                    >
                        <MenuItem value="daily">Daily</MenuItem>
                        <MenuItem value="weekly">Weekly</MenuItem>
                        <MenuItem value="monthly">Monthly</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {/* Summary Cards */}
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Total Steps
                            </Typography>
                            <Typography variant="h4">
                                35,000
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Average Calories Burned
                            </Typography>
                            <Typography variant="h4">
                                2,200
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Average Sleep Duration
                            </Typography>
                            <Typography variant="h4">
                                7h 15m
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Charts */}
            <Box my={4}>
                <Typography variant="h6" gutterBottom>
                    Activity Trends
                </Typography>
                <Line data={chartData} options={{ responsive: true }} />
            </Box>

            {/* Data Table */}
            <Typography variant="h6" gutterBottom>
                Daily Logs
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Steps</TableCell>
                            <TableCell>Calories Burned</TableCell>
                            <TableCell>Sleep (hours)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.steps}</TableCell>
                                <TableCell>{row.calories}</TableCell>
                                <TableCell>{row.sleep}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Container>
    );
}

export default ReportPage;
