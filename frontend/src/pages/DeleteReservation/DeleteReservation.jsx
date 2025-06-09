import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./deleteReservation.css";
import assets from "../../assets/assets";
import { API_ENDPOINTS } from '../../config/api';

const DeleteReservation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reservation, setReservation] = useState(null);
  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINTS.reservations}/${id}`);
        setReservation(response.data);
      } catch (error) {
        toast.error("Failed to fetch reservation details");
        navigate("/");
      }
    };
    fetchReservation();
  }, [id, navigate]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${API_ENDPOINTS.reservations}/${id}`);
      toast.success("Reservation deleted successfully");
      navigate("/");
    } catch (error) {
      toast.error("Failed to delete reservation");
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
    <div className="deleteReservation">
      <div className="deleteReservationContainer">
        <div className="deleteReservationContainerDiv">
          {/* Left Part */}
          <div className="deleteReservationContainerDivLeft">
            <div className="deleteReservationContainerDivLeftContainer">
              {/* Image Container */}
              <div className="deleteReservationContainerDivLeftContainerImage">
                <div className="deleteReservationContainerDivLeftContainerImageContainer">
                  <img src={assets.deleteReservationImg} alt="" className="deleteReservationContainerDivLeftContainerImageContainerImg" />
                </div>
              </div>

              {/* Title Container */}
              <div className="deleteReservationContainerDivLeftContainerTitle">
                <div className="deleteReservationContainerDivLeftContainerTitleContainer">
                  <p className="deleteReservationContainerDivLeftContainerTitleContainerText">Delete Reservation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Part */}
          <div className="deleteReservationContainerDivRight">
            <div className="deleteReservationContainerDivRightContainer">
              <div className="deleteReservationContainerDivRightContainerDiv">
                <div className="deleteReservationContainerDivRightContainerDivFirst">
                  <div className="deleteReservationContainerDivRightContainerDivFirstContainer">
                    <p className="deleteReservationContainerDivRightContainerDivFirstContainerText">Delete Reservation</p>
                  </div>
                </div>

                <div className="deleteReservationContainerDivRightContainerDivSecond">
                  <div className="deleteReservationContainerDivRightContainerDivSecondContainer">
                    <p className="deleteReservationContainerDivRightContainerDivSecondContainerText">Reservation Details</p>
                  </div>
                </div>

                <div className="deleteReservationContainerDivRightContainerDivThird">
                  <div className="deleteReservationContainerDivRightContainerDivThirdContainer">
                    <div className="deleteReservationContainerDivRightContainerDivThirdContainerInfoOne">
                      <div className="deleteReservationContainerDivRightContainerDivThirdContainerInfoOneContainer">
                        <p className="deleteReservationContainerDivRightContainerDivThirdContainerInfoOneContainerTextOne inter">Name:</p>
                        <p className="deleteReservationContainerDivRightContainerDivThirdContainerInfoOneContainerTextTwo">{reservation.name}</p>
                      </div>
                    </div>

                    <div className="deleteReservationContainerDivRightContainerDivThirdContainerInfoOne">
                      <p className="deleteReservationContainerDivRightContainerDivThirdContainerInfoOneContainer">
                        <p className="deleteReservationContainerDivRightContainerDivThirdContainerInfoOneContainerTextOne inter">Date & Time:</p>
                        <p className="deleteReservationContainerDivRightContainerDivThirdContainerInfoOneContainerTextTwo">
                          {new Date(reservation.reservationTime).toLocaleString()}
                        </p>
                      </p>
                    </div>

                    <div className="deleteReservationContainerDivRightContainerDivThirdContainerInfoOne">
                      <div className="deleteReservationContainerDivRightContainerDivThirdContainerInfoOneContainer">
                        <p className="deleteReservationContainerDivRightContainerDivThirdContainerInfoOneContainerTextOne inter">Number of Guests:</p>
                        <p className="deleteReservationContainerDivRightContainerDivThirdContainerInfoOneContainerTextTwo">
                          {reservation.numberOfGuests}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="deleteReservationContainerDivRightContainerDivFourth">
                  <div className="deleteReservationContainerDivRightContainerDivFourthContainer">
                    <p className="deleteReservationContainerDivRightContainerDivFourthContainerText">
                      Are you sure you want to delete this reservation?
                    </p>
                    <p className="deleteReservationContainerDivRightContainerDivFourthContainerTextTwo">This action cannot be undone.</p>
                  </div>
                </div>

                <div className="deleteReservationContainerDivRightContainerDivFifth">
                  <div className="deleteReservationContainerDivRightContainerDivFifthContainer">
                    {/* Left Button */}
                    <div className="deleteReservationContainerDivRightContainerDivFifthContainerLeft">
                      <button
                        onClick={() => navigate("/")}
                        className="deleteReservationContainerDivRightContainerDivFifthContainerLeftContainerButton"
                      >
                        <p className="deleteReservationContainerDivRightContainerDivFifthContainerLeftContainerText inter">Cancel</p>
                      </button>
                    </div>

                    {/* Right Button */}
                    <div className="deleteReservationContainerDivRightContainerDivFifthContainerRight">
                      <div onClick={handleDelete} className="deleteReservationContainerDivRightContainerDivFifthContainerRightContainerButton">
                        <p className="deleteReservationContainerDivRightContainerDivFifthContainerRightContainerText inter">Delete Reservation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteReservation;
