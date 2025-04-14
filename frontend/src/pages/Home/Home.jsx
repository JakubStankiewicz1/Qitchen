import React from 'react';
import "./home.css";
import { PiInstagramLogoLight } from "react-icons/pi";
import { PiFacebookLogo } from "react-icons/pi";
import { PiTwitterLogoLight } from "react-icons/pi";
import assets from '../../assets/assets';
import HomeElement from '../../components/HomeElement/HomeElement';

const Home = () => {
  return (
    <div className="home">
        <div className="homeContainer">

            {/* Left Part */}
            <div className="homeContainerLeft">
                <div className="homeContainerLeftContainer">

                    {/* Image Container */}
                    <div className="homeContainerLeftContainerImage">
                        <div className="homeContainerLeftContainerImageContainer">
                            <img src={assets.homeImage} alt="" className="homeContainerLeftContainerImageContainerImage" />
                        </div>
                    </div>

                    {/* Title Container */}
                    <div className="homeContainerLeftContainerTitle">
                        <div className="homeContainerLeftContainerTitleContainer">
                            <p className="homeContainerLeftContainerTitleContainerTextOne">
                                Sushi
                            </p>
                            <p className="homeContainerLeftContainerTitleContainerTextTwo">
                                Sensation
                            </p>
                        </div>
                    </div>

                    {/* Social Media Container */}
                    <div className="homeContainerLeftContainerSocialMedia">
                        <div className="homeContainerLeftContainerSocialMediaContainer">
                            {/* Instagram */}
                            <div className="homeContainerLeftContainerSocialMediaContainerInstagram">
                                <div className="homeContainerLeftContainerSocialMediaContainerInstagramContainer">
                                    <PiInstagramLogoLight className="homeContainerLeftContainerSocialMediaContainerInstagramContainerIcon" />
                                </div>
                            </div>

                            {/* Facebook */}
                            <div className="homeContainerLeftContainerSocialMediaContainerFacebook">
                                <div className="homeContainerLeftContainerSocialMediaContainerFacebookContainer">
                                    <PiFacebookLogo className="homeContainerLeftContainerSocialMediaContainerFacebookContainerIcon" />
                                </div>
                            </div>

                            {/* Twitter */}
                            <div className="homeContainerLeftContainerSocialMediaContainerTwitter">
                                <div className="homeContainerLeftContainerSocialMediaContainerTwitterContainer">
                                    <PiTwitterLogoLight className="homeContainerLeftContainerSocialMediaContainerTwitterContainerIcon" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Right Part */}
            <div className="homeContainerRight">
                <div className="homeContainerRightContainer">
                    <div className="homeContainerRightContainerDiv">
                        <HomeElement image={assets.houseElementImageOne} text="Menu" link="/menu" style={{ flex: 1 }} />
                        <HomeElement image={assets.houseElementImageTwo} text="Reservation" link="/reservation" style={{ flex: 1 }} />
                        <HomeElement image={assets.houseElementImageThree} text="Our Restaurant" link="/about" style={{ flex: 1 }} />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Home