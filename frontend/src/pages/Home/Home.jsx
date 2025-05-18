import React, { useEffect, useState } from 'react';
import "./home.css";
import { PiInstagramLogoLight } from "react-icons/pi";
import { PiFacebookLogo } from "react-icons/pi";
import { PiTwitterLogoLight } from "react-icons/pi";
import assets from '../../assets/assets';
import HomeElement from '../../components/HomeElement/HomeElement';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="home">
        <div className="homeContainer">

            {/* Left Part */}
            <div className="homeContainerLeft">
                <div className="homeContainerLeftContainer">

                    {/* Image Container */}
                    <div className="homeContainerLeftContainerImage">
                        <div className="homeContainerLeftContainerImageContainer">
                            <img src={assets.homeImage} alt="Sushi restaurant main image" className="homeContainerLeftContainerImageContainerImage" />
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
                            <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <div className="homeContainerLeftContainerSocialMediaContainerInstagram">
                                    <div className="homeContainerLeftContainerSocialMediaContainerInstagramContainer">
                                        <PiInstagramLogoLight className="homeContainerLeftContainerSocialMediaContainerInstagramContainerIcon" />
                                    </div>
                                </div>
                            </Link>

                            {/* Facebook */}
                            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <div className="homeContainerLeftContainerSocialMediaContainerFacebook">
                                    <div className="homeContainerLeftContainerSocialMediaContainerFacebookContainer">
                                        <PiFacebookLogo className="homeContainerLeftContainerSocialMediaContainerFacebookContainerIcon" />
                                    </div>
                                </div>
                            </Link>

                            {/* Twitter */}
                            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <div className="homeContainerLeftContainerSocialMediaContainerTwitter">
                                    <div className="homeContainerLeftContainerSocialMediaContainerTwitterContainer">
                                        <PiTwitterLogoLight className="homeContainerLeftContainerSocialMediaContainerTwitterContainerIcon" />
                                    </div>
                                </div>
                            </Link>
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