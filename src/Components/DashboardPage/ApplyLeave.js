import React, { useState, useEffect } from 'react';
import DashboardTopHeader from '../Dashboard/DashboardTopHeader';
import DashboardLeftHeader from '../Dashboard/DashboardLeftHeader';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function ApplyLeave() {
    const [events, setEvents] = useState([]); // Set initial state as an empty array
    const holidayData = [
        {
            id: 1,
            title: 'Indian Holiday',
            start: moment('2024-03-10').toDate(),
            end: moment('2024-03-10').toDate(),
        },
        {
            id: 2,
            title: 'National Holiday',
            start: moment('2024-04-15').toDate(),
            end: moment('2024-04-15').toDate(),
        },
        {
            id: 3,
            title: 'International Holiday',
            start: moment('2024-06-20').toDate(),
            end: moment('2024-06-20').toDate(),
        },
        // Add more holidays as needed
    ];

    useEffect(() => {
        // Combine your leave events with holiday events
        setEvents([...events, ...holidayData]);
    }, [events]);  // Include 'events' as a dependency to prevent the exhaustive-deps warning

    return (
        <>
            <DashboardTopHeader />
            <DashboardLeftHeader />
            <div id="page-container">
                <h2>Apply for Leaves </h2>
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                />
            </div>
        </>
    )
}

export default ApplyLeave;
