import React from 'react';
import "./reservation.css";
import assets from '../../assets/assets';

const Reservation = () => {
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
                                <div className="reservationContainerDivRightContainerTopContainerThird"></div>
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
                </div>





            </div>
        </div>
    </div>
  )
}

export default Reservation