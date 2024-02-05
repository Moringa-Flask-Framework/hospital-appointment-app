# Hospital Appointment App

A full-stack web application for managing hospital appointments.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Hospital Appointment System is a web application designed to streamline the appointment management process within a hospital. It allows patients to schedule appointments, view upcoming appointments, and provides staff with tools to manage appointments efficiently.

## Features

- **Appointment Management:**
  - Schedule new appointments.
  - View and edit existing appointments.
  - Receive notifications for upcoming appointments.

- **User Authentication:**
  - Secure user authentication for both patients and staff.

- **Admin Dashboard:**
  - Admin panel for managing staff and overall system settings.

## Tech Stack

- **Frontend:**
  - React
  - React Router
  - Fetch for API communication
  - State management

- **Backend:**
  - Flask (Python)
  - SQLAlchemy for database interaction
  - Flask-Restful for creating RESTful APIs
  - Flask-Login for user authentication

- **Database:**
  - SQLite- Development
  - Postgresql -Production

- **Deployment:**
  - Render

## Getting Started

### Prerequisites

- Node.js and npm installed for the frontend.
- Python and pip installed for the backend.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/hospital-appointment-app.git
   ```
2. Navigate to the project directory:

    ```bash
    cd hospital-appointment-app
    ```
3. Install frontend dependencies

    ```bash
    cd frontend & npm install
    ```
4. Install backend dependencies

    ```bash
    cd ../backend
    pip install -r requirements.txt
    ```

### Usage

1. Start the backend server:

    ```bash
    cd backend
    python app.py
    ```

2.  Open another terminal window or tab, navigate back to the `frontend` folder (if you are not already there):
    ```bash
    cd frontend
    npm start
    ```

3. Open your browser and navigate to http://localhost:3000 to access the application.

### Contributing

Feel free to contribute by opening issues, proposing new features, or submitting pull requests.

### License
This software is licensed under the MIT license. See the [LICENSE](https://github.com/Moringa-Flask-Framework/hospital-appointment-app)

### Author

1. David Munuhe
2. Tumaini Muriithi
