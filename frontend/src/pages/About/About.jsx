import React from 'react';
import "./about.css";
import assets from '../../assets/assets';

const About = () => {
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
                                        <p className="aboutContainerRightContainerFirstContainerLeftContainerBottomText">
                                            Where culinary craftsmanship meets modern elegance. Indulge in the finest sushi, expertly curated to elevate your dining experience.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Part */}
                            <div className="aboutContainerRightContainerFirstContainerRight">
                                <div className="aboutContainerRightContainerFirstContainerRightContainer">

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Part */}
                    <div className="aboutContainerRightContainerSecond">
                        <div className="aboutContainerRightContainerSecondContainer">
                            {/* Element */}
                            <div className="aboutContainerRightContainerSecondContainerElement"></div>

                            {/* Element */}
                            <div className="aboutContainerRightContainerSecondContainerElement"></div>

                            {/* Element */}
                            <div className="aboutContainerRightContainerSecondContainerElement"></div>
                        </div>
                    </div>

                    {/* Third Part */}
                    <div className="aboutContainerRightContainerThird">
                        <div className="aboutContainerRightContainerThirdContainer">
                            {/* Left Part */}
                            <div className="aboutContainerRightContainerThirdContainerLeft"></div>

                            {/* Right Part */}
                            <div className="aboutContainerRightContainerThirdContainerRight"></div>
                        </div>
                    </div>

                    {/* Fourth Part */}
                    <div className="aboutContainerRightContainerFourth">
                        <div className="aboutContainerRightContainerFourthContainer">
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default About