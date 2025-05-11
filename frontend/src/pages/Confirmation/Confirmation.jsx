import React from "react";
import "./confirmation.css";
import assets from "../../assets/assets";
import { FaStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";

const Confirmation = () => {
  return (
    <div className="confirmation">
      <div className="confirmationContainer">
        <div className="confirmationContainerDiv">
          <div className="confirmationContent">
            <div className="confirmationContentContainer">
              <div className="confirmationContentContainerDiv">
                {/* Icon */}
                <div className="confirmationIcon">
                  <div className="confirmationIconOne">
                    <MdOutlineStar className="confirmationContentIcon" />
                    <MdOutlineStar className="confirmationContentIcon" />
                  </div>

                  <div className="confirmationIconTwo">
                    <p className="confirmationIconText">Qitchen</p>
                  </div>

                  <div className="confirmationIconThree">
                    <MdOutlineStar className="confirmationContentIcon" />
                    <MdOutlineStar className="confirmationContentIcon" />
                  </div>
                </div>

                {/* Title */}
                <div className="confirmationTitle">
                  <p className="confirmationTitleText">Reservation Confirmed!</p>
                </div>

                {/* Message */}
                <div className="confirmationMessage">
                  <p className="confirmationMessageText inter">
                    Thank you for confirming your reservation at Qitchen. We look forward to serving you an exceptional dining experience!
                  </p>
                </div>

                <div class="confirmationButton">
                  <div class="confirmationButtonLink">
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
    </div>
  );
};

export default Confirmation;
