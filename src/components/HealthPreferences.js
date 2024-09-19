import React, { useState, useEffect } from 'react';
import {
    Container, Typography, Grid, TextField, Button,
    FormControl, InputLabel, Select, MenuItem, Card, CardContent
} from '@mui/material';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext'; // Adjust the path as needed
import { db } from '../firebase'; // Firebase config
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS

function HealthPreferences() {
    const { currentUser } = useAuth();
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
    const [isEditing, setIsEditing] = useState(false); // State to toggle between read-only and edit mode

    useEffect(() => {
        if (currentUser) {
            const fetchPreferences = async () => {
                try {
                    const userDocRef = doc(db, 'users', currentUser.uid);
                    const userDoc = await getDoc(userDocRef);

                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        const preferences = userData.preferences || {};

                        setHeight(preferences.height || '');
                        setWeight(preferences.weight || '');
                        setStepsGoal(preferences.stepsGoal || '');
                        setExerciseGoal(preferences.exerciseGoal || '');
                        setWaterIntakeGoal(preferences.waterIntakeGoal || '');
                        setCaloricIntakeGoal(preferences.caloricIntakeGoal || '');
                        setActivityLevel(preferences.activityLevel || '');
                        setDietPreference(preferences.dietPreference || '');
                        setSleepDuration(preferences.sleepDuration || '');
                        setBedtime(preferences.bedtime || '');
                        setWakeUpTime(preferences.wakeUpTime || '');
                    }
                } catch (error) {
                    console.error('Error fetching preferences:', error);
                }
            };

            fetchPreferences();
        }
    }, [currentUser]);

    const handleSavePreferences = async () => {
        if (!currentUser) {
            toast.error('User is not authenticated');
            return;
        }

        try {
            const userDocRef = doc(db, 'users', currentUser.uid);

            await setDoc(userDocRef, {
                preferences: {
                    height,
                    weight,
                    stepsGoal,
                    exerciseGoal,
                    waterIntakeGoal,
                    caloricIntakeGoal,
                    activityLevel,
                    dietPreference,
                    sleepDuration,
                    bedtime,
                    wakeUpTime,
                },
            }, { merge: true });

            toast.success('Preferences saved successfully!');
            setIsEditing(false); // Exit edit mode after saving
        } catch (error) {
            console.error('Error saving preferences:', error);
            toast.error('Error saving preferences. Please try again.');
        }
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
                                        InputProps={{
                                            readOnly: !isEditing,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Weight (kg)"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                        variant="outlined"
                                        InputProps={{
                                            readOnly: !isEditing,
                                        }}
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
                                        InputProps={{
                                            readOnly: !isEditing,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Exercise (minutes per week)"
                                        value={exerciseGoal}
                                        onChange={(e) => setExerciseGoal(e.target.value)}
                                        variant="outlined"
                                        InputProps={{
                                            readOnly: !isEditing,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Water Intake (liters per day)"
                                        value={waterIntakeGoal}
                                        onChange={(e) => setWaterIntakeGoal(e.target.value)}
                                        variant="outlined"
                                        InputProps={{
                                            readOnly: !isEditing,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Caloric Intake (calories per day)"
                                        value={caloricIntakeGoal}
                                        onChange={(e) => setCaloricIntakeGoal(e.target.value)}
                                        variant="outlined"
                                        InputProps={{
                                            readOnly: !isEditing,
                                        }}
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
                                    disabled={!isEditing} // Disable the Select component when not editing
                                    inputProps={{
                                        'aria-label': 'Activity Level', // Ensure accessibility
                                    }}
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
                                    disabled={!isEditing} // Disable the Select component when not editing
                                    inputProps={{
                                        'aria-label': 'Diet Preference', // Ensure accessibility
                                    }}
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
                                        label="Sleep Duration (hours)"
                                        value={sleepDuration}
                                        onChange={(e) => setSleepDuration(e.target.value)}
                                        variant="outlined"
                                        InputProps={{
                                            readOnly: !isEditing,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField
                                        fullWidth
                                        label="Bedtime"
                                        value={bedtime}
                                        onChange={(e) => setBedtime(e.target.value)}
                                        variant="outlined"
                                        InputProps={{
                                            readOnly: !isEditing,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField
                                        fullWidth
                                        label="Wake Up Time"
                                        value={wakeUpTime}
                                        onChange={(e) => setWakeUpTime(e.target.value)}
                                        variant="outlined"
                                        InputProps={{
                                            readOnly: !isEditing,
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Save Button */}
                <Grid item xs={12} textAlign="center">
                    {isEditing ? (
                        <Button
                            variant="contained"
                            color="success"
                            onClick={handleSavePreferences}
                        >
                            Save Preferences
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => setIsEditing(true)}
                        >
                            Edit Preferences
                        </Button>
                    )}
                </Grid>
            </Grid>
            <ToastContainer /> {/* Include ToastContainer for displaying toasts */}
        </Container>
    );
}

export default HealthPreferences;
