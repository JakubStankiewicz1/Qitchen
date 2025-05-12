import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import './deleteReservation.css';

const DeleteReservation = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [reservation, setReservation] = useState(null);

    useEffect(() => {
        const fetchReservation = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/api/reservations/${id}`);
                setReservation(response.data);
            } catch (error) {
                toast.error('Failed to fetch reservation details');
                navigate('/');
            }
        };
        fetchReservation();
    }, [id, navigate]);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8081/api/reservations/${id}`);
            toast.success('Reservation deleted successfully');
            navigate('/');
        } catch (error) {
            toast.error('Failed to delete reservation');
        }
    };

    if (!reservation) {
        return (
            <div className="delete-reservation-container">
                <div className="text-white">Loading...</div>
            </div>
        );
    }

    return (
        <div className="delete-reservation-container">
            <div className="delete-reservation-content">
                <h2 className="delete-reservation-title">Delete Reservation</h2>
                <div className="reservation-details">
                    <h3 className="details-title">Reservation Details</h3>
                    <div className="details-list">
                        <div className="detail-item">
                            <span className="detail-label">Name:</span>
                            <span>{reservation.name}</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Date & Time:</span>
                            <span>{new Date(reservation.reservationTime).toLocaleString()}</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Number of Guests:</span>
                            <span>{reservation.numberOfGuests}</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Table Type:</span>
                            <span>{reservation.tableType}</span>
                        </div>
                    </div>
                </div>
                <div className="confirmation-message">
                    <p>Are you sure you want to delete this reservation?</p>
                    <p className="warning-text">This action cannot be undone.</p>
                </div>
                <div className="button-container">
                    <button
                        onClick={() => navigate('/')}
                        className="cancel-button"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleDelete}
                        className="delete-button"
                    >
                        Delete Reservation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteReservation; 