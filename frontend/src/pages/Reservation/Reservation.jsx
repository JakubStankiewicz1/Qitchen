import React, { useState, useRef } from 'react';
import "./reservation.css";
import assets from '../../assets/assets';
import { IoClose } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Reservation = () => {
    const [openGuests, setOpenGuests] = useState(false);
    const [openDatePicker, setOpenDatePicker] = useState(false);
    const [guests, setGuests] = useState(null);
    const [selectedGuest, setSelectedGuest] = useState(null);
    const [customGuests, setCustomGuests] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [tempDate, setTempDate] = useState(null); // Temporary date for confirmation
    const modalRef = useRef(null);

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
        }
    };

    const handleDateSelection = (date) => {
        setTempDate(date); // Save the selected date temporarily
    };

    const handleDateConfirm = () => {
        setSelectedDate(tempDate); // Save the confirmed date
        setOpenDatePicker(false);
    };

    return (
        <div className="reservation">
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
                                            <div className="reservationContainerDivRightContainerTopContainerFirstContainerLeft">
                                                <img src={assets.leftArrow} alt="" className='reservationContainerDivRightContainerTopContainerFirstContainerLeftImage' />
                                            </div>
                                            <div className="reservationContainerDivRightContainerTopContainerFirstContainerMiddle">
                                                <p className="reservationContainerDivRightContainerTopContainerFirstContainerMiddleText">
                                                    Reservation
                                                </p>
                                            </div>
                                            <div className="reservationContainerDivRightContainerTopContainerFirstContainerRight">
                                                <img src={assets.rightArrow} alt="" className='reservationContainerDivRightContainerTopContainerFirstContainerRightImage' />
                                            </div>
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
                                                    <input type="text" className='reservationContainerDivRightContainerTopContainerThirdContainerFirstContainerInput' placeholder='Name' />
                                                </div>
                                            </div>

                                            {/* Second Part */}
                                            <div className="reservationContainerDivRightContainerTopContainerThirdContainerSecond">
                                                <div className="reservationContainerDivRightContainerTopContainerThirdContainerSecondContainer">
                                                    <input type="text" className='reservationContainerDivRightContainerTopContainerThirdContainerSecondContainerInput' placeholder='Phone Number' />
                                                </div>
                                            </div>

                                            {/* Third Part */}
                                            <div className="reservationContainerDivRightContainerTopContainerThirdContainerThird">
                                                <div className="reservationContainerDivRightContainerTopContainerThirdContainerThirdContainer">
                                                    <input type="text" className='reservationContainerDivRightContainerTopContainerThirdContainerThirdContainerInput' placeholder='Email' />
                                                </div>
                                            </div>

                                            {/* Fourth Part */}
                                            <div className="reservationContainerDivRightContainerTopContainerThirdContainerFourth">
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
                                                    <div className="reservationContainerDivRightContainerTopContainerThirdContainerFourthContainerRight">
                                                        <div className="reservationContainerDivRightContainerTopContainerThirdContainerFourthContainerRightContainer">
                                                            <p className="reservationContainerDivRightContainerTopContainerThirdContainerFourthContainerRightContainerText inter">
                                                                Time
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Fifth Part */}
                                            <div className="reservationContainerDivRightContainerTopContainerThirdContainerFifth">
                                                <div className="reservationContainerDivRightContainerTopContainerThirdContainerFifthContainer">
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
                                <div className="openGuestsModal" ref={modalRef}>
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
                                <div className="openGuestsModal" ref={modalRef}>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reservation