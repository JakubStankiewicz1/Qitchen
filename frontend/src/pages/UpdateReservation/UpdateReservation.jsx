import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { IoClose, IoArrowBack } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './updateReservation.css';
import assets from '../../assets/assets';

const UpdateReservation = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [openDatePicker, setOpenDatePicker] = useState(false);
    const [openHourPicker, setOpenHourPicker] = useState(false);
    const [openMinutePicker, setOpenMinutePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [tempDate, setTempDate] = useState(null);
    const [selectedHour, setSelectedHour] = useState(null);
    const [tempHour, setTempHour] = useState(null);
    const [selectedMinute, setSelectedMinute] = useState(null);
    const [tempMinute, setTempMinute] = useState(null);
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const modalRef = useRef(null);

    useEffect(() => {
        const fetchReservation = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/api/reservations/${id}`);
                const data = response.data;
                setName(data.name);
                setEmail(data.email);
                setPhoneNumber(data.phoneNumber);
                const date = new Date(data.reservationTime);
                setSelectedDate(date);
                setSelectedHour(date.getHours());
                setSelectedMinute(date.getMinutes().toString().padStart(2, '0'));
            } catch (error) {
                toast.error('Failed to fetch reservation details');
                navigate('/');
            }
        };
        fetchReservation();
    }, [id, navigate]);

    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setOpenDatePicker(false);
            setOpenHourPicker(false);
            setOpenMinutePicker(false);
        }
    };

    const handleDateSelection = (date) => {
        setTempDate(date);
    };

    const handleDateConfirm = () => {
        setSelectedDate(tempDate);
        setOpenDatePicker(false);
    };

    const handleHourSelection = (hour) => {
        setTempHour(hour);
        setOpenHourPicker(false);
        setOpenMinutePicker(true);
    };

    const handleMinuteSelection = (minute) => {
        setTempMinute(minute);
    };

    const handleTimeConfirm = () => {
        setSelectedHour(tempHour);
        setSelectedMinute(tempMinute);
        setOpenMinutePicker(false);
    };

    const generateHourSlots = () => {
        return Array.from({ length: 12 }, (_, i) => 10 + i);
    };

    const generateMinuteSlots = () => {
        return ["00", "15", "30", "45"];
    };

    const handleSubmit = async () => {
        if (!name || !phoneNumber || !email || !selectedDate || !selectedHour || !selectedMinute) {
            toast.error("Please fill in all fields.");
            return;
        }

        const reservationData = {
            name,
            email,
            phoneNumber,
            reservationTime: `${selectedDate.toISOString().split('T')[0]}T${selectedHour}:${selectedMinute}:00`
        };

        try {
            await axios.put(`http://localhost:8081/api/reservations/${id}`, reservationData);
            toast.success('Reservation updated successfully');
            navigate('/confirmation');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to update reservation');
        }
    };

    return (
        <div className="update-reservation">
            <div className="update-reservation-container">
                <div className="update-reservation-div">
                    <div className="update-reservation-div-left">
                        <div className="update-reservation-div-left-container">
                            <img src={assets.updateReservationImg} alt="" className="update-reservation-div-left-containerImg" />
                            <div className="update-reservation-div-left-container-title">
                                <div className="update-reservation-div-left-container-title-container">
                                    <p className="update-reservation-div-left-container-title-container-text">
                                        Update Reservation
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="update-reservation-right">
                        <div className="update-reservation-right-container">
                            <div className="update-reservation-right-container-top">
                                <div className="update-reservation-right-container-top-container">
                                    <div className="update-reservation-right-container-top-container-second">
                                        <div className="update-reservation-right-container-top-container-second-container">
                                            <p className="update-reservation-right-container-top-container-second-container-text">
                                                Update your reservation details at Qitchen
                                            </p>
                                        </div>
                                    </div>

                                    <div className="update-reservation-right-container-top-container-third">
                                        <div className="update-reservation-right-container-top-container-third-container">
                                            <div className="update-reservation-right-container-top-container-third-container-first">
                                                <div className="update-reservation-right-container-top-container-third-container-first-container">
                                                    <input
                                                        type="text"
                                                        className='update-reservation-right-container-top-container-third-container-first-container-input'
                                                        placeholder='Name'
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            <div className="update-reservation-right-container-top-container-third-container-second">
                                                <div className="update-reservation-right-container-top-container-third-container-second-container">
                                                    <input
                                                        type="text"
                                                        className='update-reservation-right-container-top-container-third-container-second-container-input'
                                                        placeholder='Phone Number'
                                                        value={phoneNumber}
                                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            <div className="update-reservation-right-container-top-container-third-container-third">
                                                <div className="update-reservation-right-container-top-container-third-container-third-container">
                                                    <input
                                                        type="text"
                                                        className='update-reservation-right-container-top-container-third-container-third-container-input'
                                                        placeholder='Email'
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            <div className="update-reservation-right-container-top-container-third-container-fourth">
                                                <div className="update-reservation-right-container-top-container-third-container-fourth-container">
                                                    <div className="update-reservation-right-container-top-container-third-container-fourth-container-middle" onClick={() => setOpenDatePicker(true)}>
                                                        <div className="update-reservation-right-container-top-container-third-container-fourth-container-middle-container">
                                                            <p className="update-reservation-right-container-top-container-third-container-fourth-container-middle-container-text inter">
                                                                Date: {selectedDate ? selectedDate.toLocaleDateString() : "Select"}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="update-reservation-right-container-top-container-third-container-fourth-container-right" onClick={() => setOpenHourPicker(true)}>
                                                        <div className="update-reservation-right-container-top-container-third-container-fourth-container-right-container">
                                                            <p className="update-reservation-right-container-top-container-third-container-fourth-container-right-container-text inter">
                                                                Time: {selectedHour && selectedMinute ? `${selectedHour}:${selectedMinute}` : "Select"}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="update-reservation-right-container-top-container-third-container-fifth">
                                                <div
                                                    className="update-reservation-right-container-top-container-third-container-fifth-container"
                                                    onClick={handleSubmit}
                                                >
                                                    <p className="update-reservation-right-container-top-container-third-container-fifth-container-text inter">
                                                        Update
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Container */}
                <div className="menuContainerRightContainerBottom">
                  <div className="menuContainerRightContainerBottomContainer">
                    {/* First Part */}
                    <div className="menuContainerRightContainerBottomContainerFirst">
                      <div className="menuContainerRightContainerBottomContainerFirstContainer">
                        <p className="menuContainerRightContainerBottomContainerFirstContainerText inter">
                          By Kuba Stankiewicz
                        </p>
                      </div>
                    </div>

                    {/* Diamond Icon */}
                    <div className="menuContainerRightContainerBottomContainerDiamond">
                      <img src={assets.diamondIcon} alt="" className="menuContainerRightContainerBottomContainerDiamondIcon" />
                    </div>

                    {/* Second Part */}
                    <div className="menuContainerRightContainerBottomContainerSecond">
                      <div className="menuContainerRightContainerBottomContainerSecondContainer">
                        <p className="menuContainerRightContainerBottomContainerSecondContainerText inter">
                          Licensing
                        </p>
                      </div>
                    </div>

                    {/* Diamond Icon */}
                    <div className="menuContainerRightContainerBottomContainerDiamond">
                      <img src={assets.diamondIcon} alt="" className="menuContainerRightContainerBottomContainerDiamondIcon" />
                    </div>

                    {/* Third Part */}
                    <div className="menuContainerRightContainerBottomContainerThird">
                      <div className="menuContainerRightContainerBottomContainerThirdContainer">
                        <p className="menuContainerRightContainerBottomContainerThirdContainerText inter">
                          Styleguide
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                    </div>
                </div>
            </div>

            {openDatePicker && (
                <div className="update-reservation-modal" onClick={handleOutsideClick}>
                    <div className="update-reservation-modal-content" ref={modalRef}>
                        <div className="update-reservation-modal-close-icon" onClick={() => setOpenDatePicker(false)}>
                            <IoClose className='update-reservation-modal-close-icon-image' />
                        </div>
                        <DatePicker
                            selected={tempDate || new Date()}
                            onChange={handleDateSelection}
                            minDate={new Date()}
                            inline
                            className="update-reservation-modal-datepicker"
                        />
                        <div className="update-reservation-modal-button">
                            <button className="update-reservation-modal-button-confirm" onClick={handleDateConfirm}>
                                <p className="update-reservation-modal-button-text">
                                    Confirm
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {openHourPicker && (
                <div className="update-reservation-modal-time" onClick={handleOutsideClick}>
                    <div className="update-reservation-modal-time-content" ref={modalRef}>
                        <div className="update-reservation-modal-close-icon" onClick={() => setOpenHourPicker(false)}>
                            <IoClose className='update-reservation-modal-close-icon-image' />
                        </div>
                        <div className="update-reservation-modal-hours">
                            {generateHourSlots().map((hour) => (
                                <div
                                    key={hour}
                                    className={`update-reservation-modal-hour-option inter ${tempHour === hour ? 'active' : ''}`}
                                    onClick={() => setTempHour(hour)}
                                >
                                    {hour}:00
                                </div>
                            ))}
                        </div>

                        <div className="update-reservation-modal-button">
                            <button
                                className={`update-reservation-modal-button-confirm ${tempHour ? '' : 'disabled'}`}
                                onClick={() => {
                                    if (tempHour) {
                                        setOpenHourPicker(false);
                                        setOpenMinutePicker(true);
                                    }
                                }}
                            >
                                <p className="update-reservation-modal-button-text">
                                    Continue
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {openMinutePicker && (
                <div className="update-reservation-modal-time" onClick={handleOutsideClick}>
                    <div className="update-reservation-modal-time-content" ref={modalRef}>
                        <div className="update-reservation-modal-time-header">
                            <div className="update-reservation-modal-back-icon" onClick={() => { setOpenMinutePicker(false); setOpenHourPicker(true); }}>
                                <IoArrowBack className="update-reservation-modal-back-icon-image" />
                            </div>
                            <div className="update-reservation-modal-close-icon" onClick={() => setOpenMinutePicker(false)}>
                                <IoClose className='update-reservation-modal-close-icon-image' />
                            </div>
                        </div>
                        <div className="update-reservation-modal-minutes">
                            {generateMinuteSlots().map((minute) => (
                                <div
                                    key={minute}
                                    className={`update-reservation-modal-minute-option inter ${tempMinute === minute ? 'active' : ''}`}
                                    onClick={() => handleMinuteSelection(minute)}
                                >
                                    {tempHour}:{minute}
                                </div>
                            ))}
                        </div>
                        <div className="update-reservation-modal-button">
                            <button className="update-reservation-modal-button-confirm" onClick={handleTimeConfirm}>
                                <p className="update-reservation-modal-button-text">
                                    Confirm
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UpdateReservation; 