import React from 'react';
import "./blogElement.css";
import assets from '../../assets/assets';

const BlogElement = ({ image, date, title, text }) => {
  return (
    <div className="blogElement">
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
                        <img src={assets.leftArrow} alt="" className="blogElementContainerRightContainerDateImage" />
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
    </div>
  )
}

export default BlogElement