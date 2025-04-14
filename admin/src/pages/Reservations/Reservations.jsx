import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./reservations.css";

const Reservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const response = await axios.get("http://localhost:8081/api/reservations");
      const confirmedReservations = response.data.filter(reservation => reservation.confirmed);
      setReservations(confirmedReservations);
    } catch (error) {
      console.error("Error fetching reservations:", error);
    }
  };

  const deleteReservation = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/api/reservations/${id}`);
      fetchReservations();
    } catch (error) {
      console.error("Error deleting reservation:", error);
    }
  };

  const editReservation = (id) => {
    
    console.log("Edit reservation with ID:", id);
  };

  return (
    <div className="reservations">
      <div className="reservationsContainer">
        <div className="reservationsContainerTitle">
            <p className="reservationsContainerText">Reservations</p>
        </div>

        <div className="reservationsContainerBottom">
            <table className="reservationsContainerBottomTable">
                <thead className='reservationsContainerBottomTableThread'>
                    <tr className='reservationsContainerBottomTableThreadTr'>
                    <th className='reservationsContainerBottomTableThreadName'>Name</th>
                    <th className='reservationsContainerBottomTableThreadEmail'>Email</th>
                    <th className='reservationsContainerBottomTableThreadPhone'>Phone</th>
                    <th className='reservationsContainerBottomTableThreadGuests'>Guests</th>
                    <th className='reservationsContainerBottomTableThreadTime'>Time</th>
                    <th className='reservationsContainerBottomTableThreadTableType'>Table Type</th>
                    <th className='reservationsContainerBottomTableThreadActions'>Actions</th>
                    </tr>
                </thead>
                <tbody className='reservationsContainerBottomTableBody'>
                    {reservations.map((reservation) => (
                    <tr key={reservation.id} className='reservationsContainerBottomTableBodyTr'>
                        <td className='reservationsContainerBottomTableBodyTrName inter'>{reservation.name}</td>
                        <td className='reservationsContainerBottomTableBodyTrEmail inter'>{reservation.email}</td>
                        <td className='reservationsContainerBottomTableBodyTrPhoneNumber inter'>{reservation.phoneNumber}</td>
                        <td className='reservationsContainerBottomTableBodyTrNumberOfGuests inter'>{reservation.numberOfGuests}</td>
                        <td className='reservationsContainerBottomTableBodyTrDate inter'>{new Date(reservation.reservationTime).toLocaleString()}</td>
                        <td className='reservationsContainerBottomTableBodyTrTableType inter'>{reservation.tableType}</td>

                        <td>
                            <div className="reservationsContainerBottomTableBodyTrBtnContainer">
                                <button className='reservationsContainerBottomTableBodyTrEdit' onClick={() => editReservation(reservation.id)}>
                                    <p className="reservationsContainerBottomTableBodyTrEditText inter">
                                        Edit
                                    </p>
                                </button>
                                <button className='reservationsContainerBottomTableBodyTrDelete' onClick={() => deleteReservation(reservation.id)}>
                                    <p className="reservationsContainerBottomTableBodyTrDeleteText inter">
                                        Delete
                                    </p>
                                </button>
                            </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default Reservations;