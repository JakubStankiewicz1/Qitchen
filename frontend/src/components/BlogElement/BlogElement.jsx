import React, { useState, useEffect } from 'react';
import "./blogElement.css";
import assets from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const BlogElement = ({ image, date, title, text, id }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <NavLink to={`/blog/${id}`} className="blogElement">
        <div className="blogElementContainer">

            {/* Left Part */}
            <div className="blogElementContainerLeft">
                <div className="blogElementContainerLeftContainer">
                    <img src={image} alt="" className="blogElementContainerLeftContainerImage" />
                </div>
            </div>

            {/* Right Part */}
            <div className="blogElementContainerRight">
                <div className="blogElementContainerRightContainer">
                    <div className="blogElementContainerRightContainerDate">
                        {!isMobile && <img src={assets.leftArrow} alt="" className="blogElementContainerRightContainerDateImage" />}
                        <p className="blogElementContainerRightContainerDateText inter">{date}</p>
                    </div>
                    <div className="blogElementContainerRightContainerTitle">
                        <p className="blogElementContainerRightContainerTitleText">{title}</p>
                    </div>
                    <div className="blogElementContainerRightContainerText">
                        <p className="blogElementContainerRightContainerTextText inter">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    </NavLink>
  )
}

export default BlogElement