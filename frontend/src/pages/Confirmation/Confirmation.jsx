import React from "react";
import "./confirmation.css";
import assets from "../../assets/assets";
import { FaStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();
  return (
    <div className="confirmation">
      <div className="confirmationContainer">
        {/* Left Part */}
        <div className="confirmationContainerLeft">
          <div className="confirmationContainerLeftContaienr">
            {/* Image Container */}
            <div className="confirmationContainerLeftContaienrImage">
              <div className="confirmationContainerLeftContaienrImageContainer">
                <img src={assets.reservationConfirmationImage} alt="" className="confirmationContainerLeftContaienrImageContainerImage" />
              </div>
            </div>

            {/* Title Container */}
            <div className="confirmationContainerLeftContaienrTitle">
              <div className="confirmationContainerLeftContaienrTitleContaienr">
                <p className="confirmationContainerLeftContaienrTitleContaienrText">Reservation Confirmation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Part */}
        <div className="confirmationContainerRight">
          <div className="confirmationContainerRightContainer">
            <div className="confirmationContent">
              <div className="confirmationContentContainer">
                <div className="confirmationContentContainerDiv">
                  {/* Top Part */}
                  <div className="confirmationContentContainerTop">
                    <div className="confirmationContentContainerTopContaienr">
                      <p className="confirmationContentContainerTopContaienrText">Qitchen</p>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="confirmationContentContainerDivMessage">
                    <div className="confirmationContentContainerDivMessageContainer">
                      <div className="confirmationContentContainerDivMessageContainerOne">
                        <p className="confirmationContentContainerDivMessageContainerOneText">
                          Thank you for confirming your reservation.
                        </p>
                      </div>

                      <div className="confirmationContentContainerDivMessageContainerTwo">
                        <p className="confirmationContentContainerDivMessageContainerTwoText inter">
                          We are truly honored to welcome you to Qitchen, where each dish is a symphony of flavor, crafted with precision, passion, and soul.
                        </p>
                      </div>

                      <div className="confirmationContentContainerDivMessageContainerThree">
                        <p className="confirmationContentContainerDivMessageContainerThreeText inter">
                          Your experience has been carefully curated — not only to satisfy your palate, but to stir your senses and stay with you long after the final course.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Second Part */}
                  <div className="confirmationContentContainerDivSecond">
                    <div className="confirmationContentContainerDivSecondContainer">
                      <p className="confirmationContentContainerDivSecondContainerText">
                        "We don't just serve food — we craft memories." ~ Qitchen
                      </p>
                    </div>
                  </div>

                  {/* Title */}
                  {/* <div className="confirmationTitle">
                    <p className="confirmationTitleText">Reservation Confirmed!</p>
                  </div> */}

                  {/* Message */}
                  {/* <div className="confirmationMessage">
                    <p className="confirmationMessageText inter">
                      Thank you for confirming your reservation at Qitchen. We look forward to serving you an exceptional dining experience!
                    </p>
                  </div> */}

                  <div onClick={() => navigate('/')} className="confirmationButton">
                    <div className="confirmationButtonLink">
                      <span>
                        <p className="confirmationButtonLinkText inter">Back to Home</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="confirmationContainerDiv"></div>
      </div>
    </div>
  );
};

export default Confirmation;
