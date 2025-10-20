import React from 'react';
import './EventsCard.css'; // This should be correct

const EventsCard = ({ isVisible }) => {
    return (
        isVisible && ( // Render only if isVisible is true
            <div className="fixed-toast notification-banner">
                <div className="notification-header">
                    <h5 className="mb-0">Ongoing Registration</h5>
                </div>
                <div className="notification-content">
                    <p>We are excited to announce that registration is ongoing!</p>
                    <p>
                        Click the link to register: 
                        <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAa__V71hO1UQVpMRlRFMU5LQk5TU0RYWDlVOUMxM1hLQS4u" target="_blank" rel="noopener noreferrer">
                            Register Here
                        </a>
                    </p>
                </div>
            </div>
        )
    );
};

export default EventsCard; 