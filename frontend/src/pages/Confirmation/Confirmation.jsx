import React from 'react';
import "./confirmation.css";
import assets from '../../assets/assets';
import { FaStar } from "react-icons/fa";

const Confirmation = () => {
    return (
        <div className="confirmation">
            <div className="confirmationContainer">
                <div className="confirmationContent">
                    {/* Icon */}
                    <div className="confirmationIcon">
                        <FaStar className="confirmationContentIcon" />
                        <FaStar className="confirmationContentIcon" />
                        <p className="confirmationIconText">
                            Qitchen
                        </p>
                        <FaStar className='confirmationContentIcon' />
                        <FaStar className='confirmationContentIcon' />
                    </div>

                    {/* Title */}
                    <div className="confirmationTitle">
                        <h1 className="confirmationTitleText">Reservation Confirmed!</h1>
                    </div>

                    {/* Message */}
                    <div className="confirmationMessage">
                        <p className="confirmationMessageText inter">
                            Thank you for confirming your reservation at Qitchen. We look forward to serving you an exceptional dining experience!
                        </p>
                    </div>

                    {/* Back to Home Button */}
                    <div className="confirmationButton">
                        <a href="/" className="confirmationButtonLink">
                            <button className="confirmationButtonStyle">Back to Home</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Ensure there is no <Router> here
export default Confirmation;
