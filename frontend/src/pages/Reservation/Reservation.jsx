import React, { useState, useRef, useEffect } from 'react';
import "./reservation.css";
import assets from '../../assets/assets';
import { IoClose, IoArrowBack } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading/Loading';
import { API_ENDPOINTS } from '../../config/api';

const Reservation = () => {
    const [openGuests, setOpenGuests] = useState(false);
    const [openDatePicker, setOpenDatePicker] = useState(false);
    const [openHourPicker, setOpenHourPicker] = useState(false);
    const [openMinutePicker, setOpenMinutePicker] = useState(false);
    const [guests, setGuests] = useState(null);
    const [selectedGuest, setSelectedGuest] = useState(null);
    const [customGuests, setCustomGuests] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [tempDate, setTempDate] = useState(null);
    const [selectedHour, setSelectedHour] = useState(null);
    const [tempHour, setTempHour] = useState(null);
    const [selectedMinute, setSelectedMinute] = useState(null);
    const [tempMinute, setTempMinute] = useState(null);
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 576);
    const modalRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 992);
            setIsSmallScreen(window.innerWidth <= 768);
            setIsMobileView(window.innerWidth <= 576);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleGuestSelection = (value) => {
        setSelectedGuest(value);
        if (value !== "custom") {
            setCustomGuests("");
        }
    };

    const handleCustomGuestSubmit = () => {
        if (selectedGuest === "custom" && customGuests) {
            setGuests(customGuests);
        } else if (selectedGuest !== "custom") {
            setGuests(selectedGuest);
        }
        setOpenGuests(false);
    };

    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setOpenGuests(false);
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

    const handleReservationSubmit = async () => {
        if (!name || !phoneNumber || !email || !guests || !selectedDate || !selectedHour || !selectedMinute) {
            toast.error("Please fill in all fields.");
            return;
        }

        const reservationTime = `${selectedDate.toISOString().split('T')[0]}T${selectedHour}:${selectedMinute}:00`;
        setIsLoading(true);
        try {
            // Check availability first
            const check = await axios.post(API_ENDPOINTS.checkAvailability, {
                reservationTime,
                numberOfGuests: Number(guests)
            });
            if (!check.data.available) {
                toast.error(check.data.message || "No available tables for this time.");
                setIsLoading(false);
                return;
            }
            // If available, proceed to create reservation
            const reservationData = {
                name,
                email,
                phoneNumber,
                numberOfGuests: guests,
                reservationTime,
                tableType: calculateOptimalTableType(guests)
            };
            const response = await axios.post(API_ENDPOINTS.reservations, reservationData);
            toast.success("Reservation created successfully!");
            // Reset all form fields after successful reservation
            setName("");
            setPhoneNumber("");
            setEmail("");
            setGuests(null);
            setSelectedGuest(null);
            setCustomGuests("");
            setSelectedDate(null);
            setTempDate(null);
            setSelectedHour(null);
            setTempHour(null);
            setSelectedMinute(null);
            setTempMinute(null);
        } catch (error) {
            console.error("Error creating reservation:", error);
            toast.error("Failed to create reservation. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    // Calculate optimal table type based on the number of guests
    const calculateOptimalTableType = (numberOfGuests) => {
        // Available table sizes
        const tableSizes = [2, 4, 6, 10];
        
        // Check if any single table can accommodate the guests
        for (const size of tableSizes) {
            if (numberOfGuests <= size) {
                return `${size}-person`;
            }
        }
        
        // For larger groups, find optimal combination
        let combination = "";
        let remainingGuests = numberOfGuests;
        
        // Start with largest tables for efficiency
        for (let i = tableSizes.length - 1; i >= 0 && remainingGuests > 0; i--) {
            const currentSize = tableSizes[i];
            while (remainingGuests >= currentSize) {
                if (combination.length > 0) {
                    combination += " + ";
                }
                combination += `${currentSize}-person`;
                remainingGuests -= currentSize;
            }
        }
        
        // If we still have guests that don't fit perfectly, add one more small table
        if (remainingGuests > 0) {
            for (const size of tableSizes) {
                if (remainingGuests <= size) {
                    if (combination.length > 0) {
                        combination += " + ";
                    }
                    combination += `${size}-person`;
                    break;
                }
            }
        }
        
        return `custom:${combination}`;
    };

    return (
        <div className="reservation">
            {isLoading && <Loading />}
            <div className="reservationContainer">
                <div className="reservationContainerDiv">
                    {/* Left Part */}
                    <div className="reservationContainerDivLeft">
                        <div className="reservationContainerDivLeftContainer">
                            {/* Image Container */}
                            <div className="reservationContainerDivLeftContainerImage">
                                <div className="reservationContainerDivLeftContainerImageContainer">
                                    <img src={assets.reservationImageOne} alt="" className='reservationContainerDivLeftContainerImageContainerImage' />
                                </div>
                            </div>

                            {/* Title Container */}
                            <div className="reservationContainerDivLeftContainerTitle">
                                <div className="reservationContainerDivLeftContainerTitleContainer">
                                    <p className="reservationContainerDivLeftContainerTitleContainerTextOne">
                                        Book
                                    </p>
                                    <p className="reservationContainerDivLeftContainerTitleContainerTextTwo">
                                        A Table
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Part */}
                    <div className="reservationContainerDivRight">
                        <div className="reservationContainerDivRightContainer">
                            {/* Top Part */}
                            <div className="reservationContainerDivRightContainerTop">
                                <div className="reservationContainerDivRightContainerTopContainer">
                                    {/* First Part */}
                                    <div className="reservationContainerDivRightContainerTopContainerFirst">
                                        <div className="reservationContainerDivRightContainerTopContainerFirstContainer">
                                            {!isMobileView && (
                                                <div className="reservationContainerDivRightContainerTopContainerFirstContainerLeft">
                                                    <img src={assets.leftArrow} alt="" className='reservationContainerDivRightContainerTopContainerFirstContainerLeftImage' />
                                                </div>
                                            )}
                                            <div className="reservationContainerDivRightContainerTopContainerFirstContainerMiddle">
                                                <p className="reservationContainerDivRightContainerTopContainerFirstContainerMiddleText">
                                                    Reservation
                                                </p>
                                            </div>
                                            {!isMobileView && (
                                                <div className="reservationContainerDivRightContainerTopContainerFirstContainerRight">
                                                    <img src={assets.rightArrow} alt="" className='reservationContainerDivRightContainerTopContainerFirstContainerRightImage' />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Second Part */}
                                    <div className="reservationContainerDivRightContainerTopContainerSecond">
                                        <div className="reservationContainerDivRightContainerTopContainerSecondContainer">
                                            <p className="reservationContainerDivRightContainerTopContainerSecondContainerText inter">
                                                Secure your spot at Qitchen, where exceptional sushi and a remarkable dining experience await.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Third Part */}
                                    <div className="reservationContainerDivRightContainerTopContainerThird">
                                        <div className="reservationContainerDivRightContainerTopContainerThirdContainer">
                                            {/* First Part */}
                                            <div className="reservationContainerDivRightContainerTopContainerThirdContainerFirst">
                                                <div className="reservationContainerDivRightContainerTopContainerThirdContainerFirstContainer">
                                                    <input
                                                        type="text"
                                                        className='reservationContainerDivRightContainerTopContainerThirdContainerFirstContainerInput'
                                                        placeholder='Name'
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            {/* Second Part */}
                                            <div className="reservationContainerDivRightContainerTopContainerThirdContainerSecond">
                                                <div className="reservationContainerDivRightContainerTopContainerThirdContainerSecondContainer">
                                                    <input
                                                        type="text"
                                                        className='reservationContainerDivRightContainerTopContainerThirdContainerSecondContainerInput'
                                                        placeholder='Phone Number'
                                                        value={phoneNumber}
                                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            {/* Third Part */}
                                            <div className="reservationContainerDivRightContainerTopContainerThirdContainerThird">
                                                <div className="reservationContainerDivRightContainerTopContainerThirdContainerThirdContainer">
                                                    <input
                                                        type="text"
                                                        className='reservationContainerDivRightContainerTopContainerThirdContainerThirdContainerInput'
                                                        placeholder='Email'
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            {/* Fourth Part */}
                                            <div className={`reservationContainerDivRightContainerTopContainerThirdContainerFourth ${isSmallScreen ? 'mobile' : ''}`}>
                                                <div className="reservationContainerDivRightContainerTopContainerThirdContainerFourthContainer">
                                                    {/* Left Part */}
                                                    <div className="reservationContainerDivRightContainerTopContainerThirdContainerFourthContainerLeft" onClick={() => setOpenGuests(true)}>
                                                        <div className="reservationContainerDivRightContainerTopContainerThirdContainerFourthContainerLeftContainer">
                                                            <p className="reservationContainerDivRightContainerTopContainerThirdContainerFourthContainerLeftContainerText inter">
                                                                Guests: {guests || "Select"}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Middle Part */}
                                                    <div className="reservationContainerDivRightContainerTopContainerThirdContainerFourthContainerMiddle" onClick={() => setOpenDatePicker(true)}>
                                                        <div className="reservationContainerDivRightContainerTopContainerThirdContainerFourthContainerMiddleContainer">
                                                            <p className="reservationContainerDivRightContainerTopContainerThirdContainerFourthContainerMiddleContainerText inter">
                                                                Date: {selectedDate ? selectedDate.toLocaleDateString() : "Select"}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Right Part */}
                                                    <div className="reservationContainerDivRightContainerTopContainerThirdContainerFourthContainerRight" onClick={() => setOpenHourPicker(true)}>
                                                        <div className="reservationContainerDivRightContainerTopContainerThirdContainerFourthContainerRightContainer">
                                                            <p className="reservationContainerDivRightContainerTopContainerThirdContainerFourthContainerRightContainerText inter">
                                                                Time: {selectedHour && selectedMinute ? `${selectedHour}:${selectedMinute}` : "Select"}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Fifth Part */}
                                            <div className="reservationContainerDivRightContainerTopContainerThirdContainerFifth">
                                                <div
                                                    className="reservationContainerDivRightContainerTopContainerThirdContainerFifthContainer"
                                                    onClick={handleReservationSubmit}
                                                >
                                                    <p className="reservationContainerDivRightContainerTopContainerThirdContainerFifthContainerText inter">
                                                        Reserve
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Part */}
                            <div className="reservationContainerDivRightContainerBottom">
                                <div className="reservationContainerDivRightContainerBottomContainer">
                                    <div className="reservationContainerDivRightContainerBottomContainerOne">
                                        <p className="reservationContainerDivRightContainerBottomContainerOneText inter">
                                            By Kuba Stankiewicz
                                        </p>
                                    </div>
                                    <div className="reservationContainerDivRightContainerBottomContainerTwo">
                                        <img src={assets.diamondIcon} alt="" className='reservationContainerDivRightContainerBottomContainerTwoIcon' />
                                    </div>
                                    <div className="reservationContainerDivRightContainerBottomContainerThree">
                                        <p className="reservationContainerDivRightContainerBottomContainerThreeText inter">
                                            Licensing
                                        </p>
                                    </div>
                                    <div className="reservationContainerDivRightContainerBottomContainerFour">
                                        <img src={assets.diamondIcon} alt="" className='reservationContainerDivRightContainerBottomContainerFourIcon' />
                                    </div>
                                    <div className="reservationContainerDivRightContainerBottomContainerFive">
                                        <p className="reservationContainerDivRightContainerBottomContainerFiveText inter">
                                            Styleguide
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                            openGuests
                            ? <div className="openGuests" onClick={handleOutsideClick}>
                                <div className={`openGuestsModal ${isMobileView ? 'mobile' : ''}`} ref={modalRef}>
                                    <div className="openGuestsCloseIcon" onClick={() => setOpenGuests(false)}>
                                        <IoClose className='openGuestsCloseIconImage' />
                                    </div>
                                    <div className="openGuestsContainer">
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                            <div
                                                key={num}
                                                className={`openGuestsOption inter ${selectedGuest === num ? 'active' : ''}`}
                                                onClick={() => handleGuestSelection(num)}
                                            >
                                                {num}
                                            </div>
                                        ))}
                                        <div
                                            className={`openGuestsOption ${selectedGuest === "custom" ? 'active' : ''}`}
                                            onClick={() => handleGuestSelection("custom")}
                                        >
                                            9+
                                        </div>
                                    </div>
                                    {selectedGuest === "custom" && (
                                        <input
                                            type="number"
                                            className="openGuestsInput"
                                            placeholder="Enter number of guests"
                                            value={customGuests}
                                            onChange={(e) => setCustomGuests(e.target.value)}
                                            min="9"
                                            max="20"
                                        />
                                    )}
                                    <div className="openGuestsModalBtn">
                                        <button className="openGuestsClose" onClick={handleCustomGuestSubmit}>
                                            <p className="openGuestsCloseText">
                                                Confirm
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            : null
                        }

                        {/* Date Picker Modal */}
                        {openDatePicker && (
                            <div className="openGuests" onClick={handleOutsideClick}>
                                <div className={`openGuestsModal ${isMobileView ? 'mobile' : ''}`} ref={modalRef}>
                                    <div className="openGuestsCloseIcon openGuestsCloseIconTwo" onClick={() => setOpenDatePicker(false)}>
                                        <IoClose className='openGuestsCloseIconImage' />
                                    </div>
                                    <DatePicker
                                        selected={tempDate || new Date()}
                                        onChange={handleDateSelection}
                                        minDate={new Date()}
                                        inline
                                        className="openGuestsModalDatePicker"
                                    />
                                    <div className="openGuestsModalBtn">
                                        <button className="openGuestsClose" onClick={handleDateConfirm}>
                                            <p className="openGuestsCloseText">
                                                Confirm
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Hour Picker Modal */}
                        {openHourPicker && (
                            <div className="openGuestsTime" onClick={handleOutsideClick}>
                                <div className={`openGuestsModalTime ${isMobileView ? 'mobile' : ''}`} ref={modalRef}>
                                    <div className="openGuestsCloseIcon openGuestsCloseIconTwo" onClick={() => setOpenHourPicker(false)}>
                                        <IoClose className='openGuestsCloseIconImage' />
                                    </div>
                                    <div className="openGuestsContainerHour">
                                        {generateHourSlots().map((hour) => (
                                            <div
                                                key={hour}
                                                className={`openGuestsOption inter ${tempHour === hour ? 'active' : ''}`}
                                                onClick={() => setTempHour(hour)}
                                            >
                                                {hour}:00
                                            </div>
                                        ))}
                                    </div>

                                    <div className="openGuestsModalBtn">
                                        <button
                                            className={`openGuestsClose ${tempHour ? '' : 'disabled'}`}
                                            onClick={() => {
                                                if (tempHour) {
                                                    setOpenHourPicker(false);
                                                    setOpenMinutePicker(true);
                                                }
                                            }}
                                        >
                                            <p className="openGuestsCloseText">
                                                Continue
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Minute Picker Modal */}
                        {openMinutePicker && (
                            <div className="openGuestsTime" onClick={handleOutsideClick}>
                                <div className={`openGuestsModalTime ${isMobileView ? 'mobile' : ''}`} ref={modalRef}>
                                    <div className="openGuestsModalTimeDiv">
                                        <div className="openGuestsBackIcon" onClick={() => { setOpenMinutePicker(false); setOpenHourPicker(true); }}>
                                            <IoArrowBack className="openGuestsBackIconImage" />
                                        </div>
                                        <div className="openGuestsCloseIcon openGuestsCloseIconTwo" onClick={() => setOpenMinutePicker(false)}>
                                            <IoClose className='openGuestsCloseIconImage' />
                                        </div>
                                    </div>
                                    <div className="openGuestsContainerTime">
                                        {generateMinuteSlots().map((minute) => (
                                            <div
                                                key={minute}
                                                className={`openGuestsOption inter ${tempMinute === minute ? 'active' : ''}`}
                                                onClick={() => handleMinuteSelection(minute)}
                                            >
                                                {tempHour}:{minute}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="openGuestsModalBtn">
                                        <button className="openGuestsClose" onClick={handleTimeConfirm}>
                                            <p className="openGuestsCloseText">
                                                Confirm
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reservation