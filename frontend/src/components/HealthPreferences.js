import React, { useState } from 'react';
import {
    Container, Typography, Grid, TextField, Button,
    FormControl, InputLabel, Select, MenuItem, Card, CardContent
} from '@mui/material';

function HealthPreferences() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [stepsGoal, setStepsGoal] = useState('');
    const [exerciseGoal, setExerciseGoal] = useState('');
    const [waterIntakeGoal, setWaterIntakeGoal] = useState('');
    const [caloricIntakeGoal, setCaloricIntakeGoal] = useState('');
    const [activityLevel, setActivityLevel] = useState('');
    const [dietPreference, setDietPreference] = useState('');
    const [sleepDuration, setSleepDuration] = useState('');
    const [bedtime, setBedtime] = useState('');
    const [wakeUpTime, setWakeUpTime] = useState('');

    const handleSavePreferences = () => {
        // Handle save logic
        alert('Preferences saved!');
    };

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Typography variant="h4" gutterBottom align="center">
                Health Preferences
            </Typography>

            <Grid container spacing={3}>
                {/* Height and Weight */}
                <Grid item xs={12}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Height & Weight
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Height (cm)"
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Weight (kg)"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Target Goals */}
                <Grid item xs={12}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Target Goals
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Steps Goal"
                                        value={stepsGoal}
                                        onChange={(e) => setStepsGoal(e.target.value)}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Exercise (minutes per week)"
                                        value={exerciseGoal}
                                        onChange={(e) => setExerciseGoal(e.target.value)}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Water Intake (liters per day)"
                                        value={waterIntakeGoal}
                                        onChange={(e) => setWaterIntakeGoal(e.target.value)}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Caloric Intake (calories per day)"
                                        value={caloricIntakeGoal}
                                        onChange={(e) => setCaloricIntakeGoal(e.target.value)}
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Activity Level */}
                <Grid item xs={12}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Activity Level
                            </Typography>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel>Activity Level</InputLabel>
                                <Select
                                    value={activityLevel}
                                    onChange={(e) => setActivityLevel(e.target.value)}
                                >
                                    <MenuItem value="Sedentary">Sedentary</MenuItem>
                                    <MenuItem value="Lightly Active">Lightly Active</MenuItem>
                                    <MenuItem value="Moderately Active">Moderately Active</MenuItem>
                                    <MenuItem value="Very Active">Very Active</MenuItem>
                                    <MenuItem value="Extra Active">Extra Active</MenuItem>
                                </Select>
                            </FormControl>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Diet Preferences */}
                <Grid item xs={12}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Diet Preferences
                            </Typography>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel>Diet Preference</InputLabel>
                                <Select
                                    value={dietPreference}
                                    onChange={(e) => setDietPreference(e.target.value)}
                                >
                                    <MenuItem value="Vegan">Vegan</MenuItem>
                                    <MenuItem value="Vegetarian">Vegetarian</MenuItem>
                                    <MenuItem value="Keto">Keto</MenuItem>
                                    <MenuItem value="Paleo">Paleo</MenuItem>
                                    <MenuItem value="Mediterranean">Mediterranean</MenuItem>
                                    <MenuItem value="Gluten-Free">Gluten-Free</MenuItem>
                                    <MenuItem value="Custom">Custom</MenuItem>
                                </Select>
                            </FormControl>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Sleep Targets */}
                <Grid item xs={12}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Sleep Targets
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <TextField
                                        fullWidth
                                        label="Desired Sleep Duration (hours per night)"
                                        value={sleepDuration}
                                        onChange={(e) => setSleepDuration(e.target.value)}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField
                                        fullWidth
                                        label="Target Bedtime"
                                        value={bedtime}
                                        onChange={(e) => setBedtime(e.target.value)}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField
                                        fullWidth
                                        label="Target Wake-Up Time"
                                        value={wakeUpTime}
                                        onChange={(e) => setWakeUpTime(e.target.value)}
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Save Button */}
                <Grid item xs={12} display="flex" justifyContent="center" mt={2}>
                    <Button variant="contained" color="primary" onClick={handleSavePreferences}>
                        Save Preferences
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default HealthPreferences;
