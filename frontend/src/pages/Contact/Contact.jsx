import React from "react";
import "./contact.css";
import assets from "../../assets/assets";
import { GoArrowRight } from "react-icons/go";
import { PiFacebookLogo, PiInstagramLogoLight, PiTwitterLogoLight } from "react-icons/pi";

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
                  <img src={assets.contactImageOne} alt="" className="contactContainerDivLeftContainerImageContainerImage" />
                </div>
              </div>

              {/* Title Container */}
              <div className="contactContainerDivLeftContainerTitle">
                <div className="contactContainerDivLeftContainerTitleContainer">
                  <p className="contactContainerDivLeftContainerTitleContainerText">Contact</p>
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
                  <div className="contactContainerDivRightContainerFirstContainerLeft">
                    {/* Top Part */}
                    <div className="contactContainerDivRightContainerFirstContainerLeftTop">
                      <div className="contactContainerDivRightContainerFirstContainerLeftTopContainer">
                        <img src={assets.leftArrow} alt="" className="contactContainerDivRightContainerFirstContainerLeftTopContainerImage" />
                        <p className="contactContainerDivRightContainerFirstContainerLeftTopContainerText">Opening hours</p>
                        <img src={assets.rightArrow} alt="" className="contactContainerDivRightContainerFirstContainerLeftTopContainerImage" />
                      </div>
                    </div>

                    {/* Bottom Part */}
                    <div className="contactContainerDivRightContainerFirstContainerLeftBottom">
                      <div className="contactContainerDivRightContainerFirstContainerLeftBottomContainer">
                        <div className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElement">
                          <div className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElementContainer">
                            <p className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElementContainerTextOne inter">Monday</p>
                            <div className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElementContainerDots"></div>
                            <p className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElementContainerTextTwo inter">
                              16:00 - 22:30
                            </p>
                          </div>
                        </div>

                        <div className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElement">
                          <div className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElementContainer">
                            <p className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElementContainerTextOne inter">Tuesday</p>
                            <div className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElementContainerDots"></div>
                            <p className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElementContainerTextTwo inter">
                              16:00 - 22:30{" "}
                            </p>
                          </div>
                        </div>

                        <div className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElement">
                          <div className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElementContainer">
                            <p className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElementContainerTextOne inter">
                              Wednesday
                            </p>
                            <div className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElementContainerDots"></div>
                            <p className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElementContainerTextTwo inter">
                              16:00 - 22:30{" "}
                            </p>
                          </div>
                        </div>

                        <div className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElement">
                          <div className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElementContainer">
                            <p className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElementContainerTextOne inter">
                              Thursday
                            </p>
                            <div className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElementContainerDots"></div>
                            <p className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElementContainerTextTwo inter">
                              16:00 - 22:30{" "}
                            </p>
                          </div>
                        </div>

                        <div className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElement">
                          <div className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElementContainer">
                            <p className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElementContainerTextOne inter">Friday</p>
                            <div className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElementContainerDots"></div>
                            <p className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElementContainerTextTwo inter">
                              16:00 - 22:30{" "}
                            </p>
                          </div>
                        </div>

                        <div className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElement">
                          <div className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElementContainer">
                            <p className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElementContainerTextOne inter">
                              Saturday & Sunday
                            </p>
                            <div className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElementContainerDots"></div>
                            <p className="contactContainerDivRightContainerFirstContainerLeftBottomContainerElementContainerTextTwo inter">
                              16:00 - 22:30{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="contactContainerDivRightContainerFirstContainerRight">
                    <div className="contactContainerDivRightContainerFirstContainerRightTop">
                      <img src={assets.contactImageTwo} alt="" className="contactImage" />
                      <img src={assets.contactImageTwo} alt="" className="contactImage" />
                    </div>
                    <div className="contactContainerDivRightContainerFirstContainerRightBottom">
                      <img src={assets.contactImageThree} alt="" className="contactImage" />
                      <img src={assets.contactImageFour} alt="" className="contactImage" />
                    </div>
                  </div>
                </div>
              </div>
              

              {/* Second Part */}
              <div className="contactContainerDivRightContainerSecond">
                <div className="contactContainerDivRightContainerSecondContainer">


                  <div className="contactContainerDivRightContainerSecondContainerLeft">
                    <div className="contactContainerDivRightContainerSecondContainerLeftContainer">
                        {/* Image Container */}
                        <div className="contactContainerDivRightContainerSecondContainerLeftContainerImage">
                            <img src={assets.contactImageFive} alt="" className="contactContainerDivRightContainerSecondContainerLeftContainerImageImg" />
                        </div>

                        <div className="contactContainerDivRightContainerSecondContainerLeftContainerDiv">
                            <div className="contactContainerDivRightContainerSecondContainerLeftContainerDivContainer">
                                <p className="contactContainerDivRightContainerSecondContainerLeftContainerDivText">
                                    Show route
                                </p>

                                <div className="contactContainerDivRightContainerSecondContainerLeftContainerDivContainerDiv">
                                    <GoArrowRight className="contactContainerDivRightContainerSecondContainerLeftContainerDivContainerDivIcon" />
                                </div>
                                {/* <GoArrowRight className="homeElementContainerTitleContainerIconContainerIcon" /> */}
                            </div>
                            
                        </div>
                    </div>
                  </div>




                  <div className="contactContainerDivRightContainerSecondContainerRight">
                    <div className="contactContainerDivRightContainerSecondContainerRightContainer">
                        {/* Top Part */}
                        <div className="contactContainerDivRightContainerSecondContainerRightContainerTop">
                            <div className="contactContainerDivRightContainerSecondContainerRightContainerTopContainer">
                                <div className="contactContainerDivRightContainerSecondContainerRightContainerTopContainerLeft">
                                    <img src={assets.leftArrow} alt="" className="contactContainerDivRightContainerSecondContainerRightContainerTopContainerLeftImage" />
                                </div>

                                <div className="contactContainerDivRightContainerSecondContainerRightContainerTopContainerMiddle">
                                    <p className="contactContainerDivRightContainerSecondContainerRightContainerTopContainerMiddleText">
                                        Get in touch
                                    </p>
                                </div>

                                <div className="contactContainerDivRightContainerSecondContainerRightContainerTopContainerRight">
                                    <img src={assets.rightArrow} alt="" className="contactContainerDivRightContainerSecondContainerRightContainerTopContainerRightImage" />
                                </div>
                            </div>
                        </div>

                        {/* Bottom Part */}
                        <div className="contactContainerDivRightContainerSecondContainerRightContainerBottom">
                            <div className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainer">
                                {/* First */}
                                <div className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerFirst">
                                    <div className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerFirstLeft">
                                        <p className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerFirstLeftText inter">
                                            Address
                                        </p>
                                    </div>

                                    <div className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerFirstRight">
                                        <p className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerFirstRightTextOne inter">
                                            23 Greenfield Avenue,
                                        </p>
                                        <p className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerFirstRightTextTwo inter">
                                            Prague 120 00
                                        </p>
                                    </div>
                                </div>

                                {/* Second */}
                                <div className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerSecond">
                                    <div className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerSecondLeft">
                                        <p className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerSecondLeftText inter">
                                            Phone
                                        </p>
                                    </div>

                                    <div className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerSecondRight">
                                        <p className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerSecondRightText inter">
                                            +49 1234 567890
                                        </p>
                                    </div>
                                </div>

                                {/* Third */}
                                <div className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerThird">
                                    <div className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerThirdLeft">
                                        <p className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerThirdLeftText inter">
                                            Email
                                        </p>
                                    </div>

                                    <div className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerThirdRight">
                                        <p className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerThirdRightText inter">
                                            email@example.com
                                        </p>
                                    </div>
                                </div>

                                {/* Fourth */}
                                <div className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerFourth">
                                    <div className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerFourthLeft">
                                        <p className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerFourthLeftText inter">
                                            Follow
                                        </p>
                                    </div>

                                    <div className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerFourthRight">
                                        <div className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerFourthRightFacebook">
                                            <PiFacebookLogo className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerFourthRightFacebook" />
                                        </div>

                                        <div className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerFourthRightInstagram">
                                            <PiInstagramLogoLight className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerFourthRightInstagramIcon" />
                                        </div>

                                        <div className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerFourthRightTwitter">
                                            <PiTwitterLogoLight className="contactContainerDivRightContainerSecondContainerRightContainerBottomContainerFourthRightTwitterIcon" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                  </div>


                </div>
              </div>

              {/* Third Part */}
              <div className="contactContainerDivRightContainerThird">
                <div className="contactContainerDivRightContainerThirdThird">
                  {/* First Part */}
                  <div className="contactContainerDivRightContainerThirdThirdFirst">
                    <p className="contactContainerDivRightContainerThirdThirdFirstText inter">By Kuba Stankiewicz</p>
                  </div>

                  {/* Second Part */}
                  <div className="contactContainerDivRightContainerThirdThirdSecond">
                    <img src={assets.diamondIcon} alt="" className="contactContainerDivRightContainerThirdThirdSecondImage" />
                  </div>

                  {/* Third Part */}
                  <div className="contactContainerDivRightContainerThirdThirdThird">
                    <p className="contactContainerDivRightContainerThirdThirdThirdText inter">Licensing</p>
                  </div>

                  {/* Fourth Part */}
                  <div className="contactContainerDivRightContainerThirdThirdFourth">
                    <img src={assets.diamondIcon} alt="" className="contactContainerDivRightContainerThirdThirdFourthImage" />
                  </div>

                  {/* Fifth Part */}
                  <div className="contactContainerDivRightContainerThirdThirdFifth">
                    <p className="contactContainerDivRightContainerThirdThirdFifthText inter">Styleguide</p>
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

export default Contact;
