import React, { useState, useEffect } from 'react';
import "./about.css";
import assets from '../../assets/assets';

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 576);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
      setIsSmallScreen(window.innerWidth <= 768);
      setIsMobileView(window.innerWidth <= 576);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="about">
        <div className="aboutContainer">
            {/* Left Part */}
            <div className="aboutContainerLeft">
                <div className="aboutContainerLeftContainer">
                    {/* Image Container */}
                    <div className="aboutContainerLeftContainerImage">
                        <div className="aboutContainerLeftContainerImageContainer">
                            <img src={assets.aboutImageOne} alt="" className='aboutContainerLeftContainerImageContainerImage' />
                        </div>
                    </div>

                    {/* Title Container */}
                    <div className="aboutContainerLeftContainerTitle">
                        <div className="aboutContainerLeftContainerTitleText">
                            <p className="aboutContainerLeftContainerTitleTextText">
                                About
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Part */}
            <div className="aboutContainerRight">
                <div className="aboutContainerRightContainer">
                    {/* First Part */}
                    <div className="aboutContainerRightContainerFirst">
                        <div className="aboutContainerRightContainerFirstContainer">
                            {/* Left Part */}
                            <div className="aboutContainerRightContainerFirstContainerLeft">
                                <div className="aboutContainerRightContainerFirstContainerLeftContainer">
                                    <div className="aboutContainerRightContainerFirstContainerLeftContainerTop">
                                        <p className="aboutContainerRightContainerFirstContainerLeftContainerTopTextOne">
                                            Sushi Artistry
                                        </p>

                                        <p className="aboutContainerRightContainerFirstContainerLeftContainerTopTextTwo">
                                            Redefined
                                        </p>
                                    </div>

                                    <div className="aboutContainerRightContainerFirstContainerLeftContainerBottom">
                                        <p className="aboutContainerRightContainerFirstContainerLeftContainerBottomText inter">
                                            Where culinary craftsmanship meets modern elegance. Indulge in the finest sushi, expertly curated to elevate your dining experience.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Part */}
                            {(!isSmallScreen || isMobileView) && (
                                <div className="aboutContainerRightContainerFirstContainerRight">
                                    <div className="aboutContainerRightContainerFirstContainerRightContainer">
                                        <img src={assets.aboutImageTwo} alt="" className='aboutContainerRightContainerFirstContainerRightContainerImage' />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Second Part */}
                    <div className="aboutContainerRightContainerSecond">
                        <div className="aboutContainerRightContainerSecondContainer">
                            {/* Element */}
                            <div className="aboutContainerRightContainerSecondContainerElement">
                                <div className="aboutContainerRightContainerSecondContainerElementContainer">
                                    {/* Top Part */}
                                    <div className="aboutContainerRightContainerSecondContainerElementContainerTop">
                                        <div className="aboutContainerRightContainerSecondContainerElementContainerTopContainer">
                                            <img src={assets.aboutStarIcon} alt="" className="aboutContainerRightContainerSecondContainerElementContainerTopContainerImage" />
                                            <img src={assets.aboutStarIcon} alt="" className="aboutContainerRightContainerSecondContainerElementContainerTopContainerImage" />
                                            <img src={assets.aboutStarIcon} alt="" className="aboutContainerRightContainerSecondContainerElementContainerTopContainerImage" />
                                            <img src={assets.aboutStarIcon} alt="" className="aboutContainerRightContainerSecondContainerElementContainerTopContainerImage" />
                                            <img src={assets.aboutStarIcon} alt="" className="aboutContainerRightContainerSecondContainerElementContainerTopContainerImage" />
                                        </div>
                                    </div>

                                    {/* Middle Part */}
                                    <div className="aboutContainerRightContainerSecondContainerElementContainerMiddle">
                                        <div className="aboutContainerRightContainerSecondContainerElementContainerMiddleContainer">
                                            <p className="aboutContainerRightContainerSecondContainerElementContainerMiddleContainerText">
                                                Trip advisor
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom Part */}
                                    <div className="aboutContainerRightContainerSecondContainerElementContainerBottom">
                                        <div className="aboutContainerRightContainerSecondContainerElementContainerBottomContainer">
                                            <p className="aboutContainerRightContainerSecondContainerElementContainerBottomContainerText inter">
                                                Best steak hosue prague
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Element */}
                            {!isMobileView && (
                                <div className="aboutContainerRightContainerSecondContainerElement">
                                    <div className="aboutContainerRightContainerSecondContainerElementContainer">
                                        {/* Top Part */}
                                        <div className="aboutContainerRightContainerSecondContainerElementContainerTop">
                                            <div className="aboutContainerRightContainerSecondContainerElementContainerTopContainer">
                                                <img src={assets.aboutStarIcon} alt="" className="aboutContainerRightContainerSecondContainerElementContainerTopContainerImage" />
                                                <img src={assets.aboutStarIcon} alt="" className="aboutContainerRightContainerSecondContainerElementContainerTopContainerImage" />
                                                <img src={assets.aboutStarIcon} alt="" className="aboutContainerRightContainerSecondContainerElementContainerTopContainerImage" />
                                                <img src={assets.aboutStarIcon} alt="" className="aboutContainerRightContainerSecondContainerElementContainerTopContainerImage" />
                                                <img src={assets.aboutStarIcon} alt="" className="aboutContainerRightContainerSecondContainerElementContainerTopContainerImage" />
                                            </div>
                                        </div>

                                        {/* Middle Part */}
                                        <div className="aboutContainerRightContainerSecondContainerElementContainerMiddle">
                                            <div className="aboutContainerRightContainerSecondContainerElementContainerMiddleContainer">
                                                <p className="aboutContainerRightContainerSecondContainerElementContainerMiddleContainerText">
                                                    Michelin Guide
                                                </p>
                                            </div>
                                        </div>

                                        {/* Bottom Part */}
                                        <div className="aboutContainerRightContainerSecondContainerElementContainerBottom">
                                            <div className="aboutContainerRightContainerSecondContainerElementContainerBottomContainer">
                                                <p className="aboutContainerRightContainerSecondContainerElementContainerBottomContainerText inter">
                                                Best Steak House Prague
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Element */}
                            {!isSmallScreen && (
                                <div className="aboutContainerRightContainerSecondContainerElement">
                                    <div className="aboutContainerRightContainerSecondContainerElementContainer">
                                        {/* Top Part */}
                                        <div className="aboutContainerRightContainerSecondContainerElementContainerTop">
                                            <div className="aboutContainerRightContainerSecondContainerElementContainerTopContainer">
                                                <img src={assets.aboutStarIcon} alt="" className="aboutContainerRightContainerSecondContainerElementContainerTopContainerImage" />
                                                <img src={assets.aboutStarIcon} alt="" className="aboutContainerRightContainerSecondContainerElementContainerTopContainerImage" />
                                                <img src={assets.aboutStarIcon} alt="" className="aboutContainerRightContainerSecondContainerElementContainerTopContainerImage" />
                                                <img src={assets.aboutStarIcon} alt="" className="aboutContainerRightContainerSecondContainerElementContainerTopContainerImage" />
                                                <img src={assets.aboutStarIcon} alt="" className="aboutContainerRightContainerSecondContainerElementContainerTopContainerImage" />
                                            </div>
                                        </div>

                                        {/* Middle Part */}
                                        <div className="aboutContainerRightContainerSecondContainerElementContainerMiddle">
                                            <div className="aboutContainerRightContainerSecondContainerElementContainerMiddleContainer">
                                                <p className="aboutContainerRightContainerSecondContainerElementContainerMiddleContainerText">
                                                    Star Dining
                                                </p>
                                            </div>
                                        </div>

                                        {/* Bottom Part */}
                                        <div className="aboutContainerRightContainerSecondContainerElementContainerBottom">
                                            <div className="aboutContainerRightContainerSecondContainerElementContainerBottomContainer">
                                                <p className="aboutContainerRightContainerSecondContainerElementContainerBottomContainerText inter">
                                                    Best steak hosue prague
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Third Part */}
                    <div className="aboutContainerRightContainerThird">
                        <div className="aboutContainerRightContainerThirdContainer">
                            {/* Left Part */}
                            {!isSmallScreen && (
                                <div className="aboutContainerRightContainerThirdContainerLeft">
                                    <div className="aboutContainerRightContainerThirdContainerLeftContainer">
                                        <img src={assets.aboutImageThree} alt="" className="aboutContainerRightContainerThirdContainerLeftContainerImage" />
                                    </div>
                                </div>
                            )}

                            {/* Right Part */}
                            <div className="aboutContainerRightContainerThirdContainerRight">
                                <div className="aboutContainerRightContainerThirdContainerRightContainer">
                                    {/* Top Part */}
                                    <div className="aboutContainerRightContainerThirdContainerRightContainerTop">
                                        <div className="aboutContainerRightContainerThirdContainerRightContainerTopContainer">
                                            {!isMobileView && (
                                                <div className="aboutContainerRightContainerThirdContainerRightContainerTopContainerLeft">
                                                    <div className="aboutContainerRightContainerThirdContainerRightContainerTopContainerLeftContainer">
                                                        <img src={assets.leftArrow} alt="" className="aboutContainerRightContainerThirdContainerRightContainerTopContainerLeftContainerImage" />
                                                    </div>
                                                </div>
                                            )}

                                            <div className="aboutContainerRightContainerThirdContainerRightContainerTopContainerMiddle">
                                                <p className="aboutContainerRightContainerThirdContainerRightContainerTopContainerMiddleText">
                                                    Our story
                                                </p>
                                            </div>

                                            {!isMobileView && (
                                                <div className="aboutContainerRightContainerThirdContainerRightContainerTopContainerRight">
                                                    <div className="aboutContainerRightContainerThirdContainerRightContainerTopContainerRightContainer">
                                                        <img src={assets.rightArrow} alt="" className="aboutContainerRightContainerThirdContainerRightContainerTopContainerRightContainerImage" />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Bottom Part */}
                                    <div className="aboutContainerRightContainerThirdContainerRightContainerBottom">
                                        <p className="aboutContainerRightContainerThirdContainerRightContainerBottomText inter">
                                            Founded with a passion for culinary excellence, Qitchen's journey began in the heart of Prague. Over years, it evolved into a haven for sushi enthusiasts, celebrated for its artful mastery and devotion to redefining gastronomy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fourth Part */}
                    <div className="aboutContainerRightContainerFourth">
                        <div className="aboutContainerRightContainerFourthContainer">
                            {/* First Part */}
                            <div className="aboutContainerRightContainerFourthContainerFirst">
                                <p className="aboutContainerRightContainerFourthContainerFirstText inter">
                                    By Kuba Stankiewicz
                                </p>
                            </div>

                            {/* Second Part */}
                            <div className="aboutContainerRightContainerFourthContainerSecond">
                                <img src={assets.diamondIcon} alt="" className='aboutContainerRightContainerFourthContainerSecondIcon' />
                            </div>

                            {/* Third Part */}
                            <div className="aboutContainerRightContainerFourthContainerThird">
                                <p className="aboutContainerRightContainerFourthContainerThirdText inter">
                                    Licensing
                                </p>
                            </div>

                            {/* Fourth Part */}
                            <div className="aboutContainerRightContainerFourthContainerFourth">
                                <img src={assets.diamondIcon} alt="" className='aboutContainerRightContainerFourthContainerFourthIcon' />
                            </div>

                            {/* Fifth Part */}
                            <div className="aboutContainerRightContainerFourthContainerFifth">
                                <p className="aboutContainerRightContainerFourthContainerFifthText inter">
                                    Styleguide
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default About