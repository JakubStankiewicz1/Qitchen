import React from 'react';
import "./menuTitle.css";
import assets from '../../assets/assets';

const MenuTitle = ({ title }) => {
  return (
    <div className="menuTitle">
        <div className="menuTitleContainer">
            {/* Left Part */}
            <div className="menuTitleLeft">
                <div className="menuTitleLeftContainer">
                    <img src={assets.menuTitleImgOne} alt="" className="menuTitleLeftContainerImage" />
                </div>
            </div>

            {/* Middle Part */}
            <div className="menuTitleMiddle">
                <div className="menuTitleMiddleContainer">
                    <p className="menuTitleMiddleContainerText">
                        {title}
                    </p>
                </div>
            </div>

            {/* Right Part */}
            <div className="menuTitleRight">
                <div className="menuTitleRightContainer">
                    <img src={assets.menuTitleImgTwo} alt="" className="menuTitleRightContainerImage" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenuTitle