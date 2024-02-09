import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Menu from './Menu';

function AppointmentEditForm() {
    const [appointment, setAppointment] = useState({});
    const [dbDate, setDbDate] = useState("");
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`/appointments/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAppointment(data);
                setDbDate(data.appointment_date);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/appointments/${appointment.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                dbDate,
            }),
        }).then((r) => {
            if (r.ok) {
                history.push(`/appointments`);
                // alert("Successfully updated appointment!");
                return r.json()
            } else {
                r.json().then((err) =>
                    console.error(err)
                );
            }
        });
    };

    return (
        <div>
            <Menu/>
            <form onSubmit={handleSubmit}>
                <h3 className='mt-4'>Reschedule appointment</h3>
                <h4 >Name: {appointment.patient && appointment.patient.name}</h4><br/>
                <label className='mr-4'>Appointment Date:</label>
                <input
                    className='border'
                    id="date"
                    name="dbDate"
                    rows=""
                    value={dbDate}
                    onChange={(e) => setDbDate(e.target.value)}
                /><br/><br/>
                <Button type="submit">Reschedule</Button>
            </form>
        </div>
    );
}

export default AppointmentEditForm;
