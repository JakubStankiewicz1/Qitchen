import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
        <div className="contactContainer">
            <div className="contactContainerDiv">

                {/* Left Part */}
                <div className="contactContainerDivLeft">
                    <div className="contactContainerDivLeftContainer">
                        {/* Image Container */}
                        <div className="contactContainerDivLeftContainerImage">
                            <div className="contactContainerDivLeftContainerImageContainer">

                            </div>
                        </div>

                        {/* Title Container */}
                        <div className="contactContainerDivLeftContainerTitle">
                            <div className="contactContainerDivLeftContainerTitleContainer">
                                <p className="contactContainerDivLeftContainerTitleContainerText">
                                    Contact
                                </p>
                            </div>
                        </div>
                    </div>
                </div>







                {/* Right Part */}
                <div className="contactContainerDivRight">
                    <div className="contactContainerDivRightContainer">
                        {/* First Part */}
                        <div className="contactContainerDivRightContainerFirst">
                            <div className="contactContainerDivRightContainerFirstContainer">
                                <div className="contactContainerDivRightContainerFirstContainerLeft"></div>

                                <div className="contactContainerDivRightContainerFirstContainerRight">
                                    <div className="contactContainerDivRightContainerFirstContainerRightTop">
                                        <div className="contactContainerDivRightContainerFirstContainerRightTopContainer">
                                            <div className="contactContainerDivRightContainerFirstContainerRightTopContainerImage">
                                                <div className="contactContainerDivRightContainerFirstContainerRightTopContainerImageContainer">
                                                    <img src="" alt="" />
                                                </div>
                                                <div className="contactContainerDivRightContainerFirstContainerRightTopContainerImageHover">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="contactContainerDivRightContainerFirstContainerRightBottom">
                                        <div className="contactContainerDivRightContainerFirstContainerRightBottomContainer">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Part */}
                        <div className="contactContainerDivRightContainerSecond"></div>

                        {/* Third Part */}
                        <div className="contactContainerDivRightContainerThird"></div>
                    </div>
                </div>





            </div>
        </div>
    </div>
  )
}

export default Contact