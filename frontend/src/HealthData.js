import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HealthData = () => {
    const [healthData, setHealthData] = useState([]);

    useEffect(() => {
        axios.get('/api/health')
            .then(response => {
                setHealthData(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the health data!", error);
            });
    }, []);

    return (
        <div>
            <h1>Health Data</h1>
            <ul>
                {healthData.map((data, index) => (
                    <li key={index}>
                        {data.date}: {data.exercise_type} for {data.duration} minutes
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HealthData;

