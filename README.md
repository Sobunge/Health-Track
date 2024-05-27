# HealthTrack

**Tagline:** Empowering Users to Take Control of Their Health

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Introduction
HealthTrack is a web application designed to help users monitor and manage various aspects of their health. It provides a centralized platform for tracking exercise routines, calorie intake, sleep patterns, and medical appointments. HealthTrack aims to empower users to make informed decisions about their health by providing detailed data analysis and visualizations.

## Features
- User registration and authentication
- Track and analyze exercise routines
- Monitor calorie intake and dietary habits
- Log sleep patterns and medical appointments
- Data visualizations using Chart.js
- Secure and private data handling

## Technologies
### Languages
- **Python** (backend)
- **JavaScript** (frontend)

### Frameworks
- **Flask** (backend)
- **React** (frontend)

### Database
- **PostgreSQL**

### Libraries
- **Pandas** (data analysis)
- **Chart.js** (data visualization)

## Architecture
The project follows a client-server architecture with a Flask-based backend and a React-based frontend. Data flows from the user interface to the backend server, which processes and stores the data in a PostgreSQL database. Visualizations are created on the frontend using Chart.js.

![Architecture Diagram](architecture_diagram.png)

## Installation
### Backend
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/healthtrack.git
    cd healthtrack/backend
    ```
2. Create and activate a virtual environment:
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```
3. Install the required packages:
    ```bash
    pip install -r requirements.txt
    ```
4. Set up the database:
    ```bash
    export FLASK_APP=run.py
    flask db init
    flask db migrate -m "Initial migration."
    flask db upgrade
    ```
5. Run the server:
    ```bash
    flask run
    ```

### Frontend
1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```

## Usage
1. Open your browser and navigate to `http://localhost:3000` to access the HealthTrack application.
2. Register a new account and log in.
3. Start tracking your health data by adding exercises, dietary entries, sleep logs, and medical appointments.

## API Documentation
### `/api/user`
- **GET**: Returns a list of all users
- **POST**: Creates a new user

### `/api/health`
- **GET**: Returns a list of all health data entries
- **POST**: Adds a new health data entry

## Contributing
We welcome contributions to improve HealthTrack! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-branch
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Description of changes"
    ```
4. Push to your branch:
    ```bash
    git push origin feature-branch
    ```
5. Create a pull request and describe your changes.

## License
HealthTrack is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

