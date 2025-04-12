import React from 'react';
import "./menu.css";
import assets from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="menu">
        <div className="menuContainer">
            {/* Left Part */}
            <div className="menuContainerLeft">
              <div className="menuContainerLeftContainer">
                {/* Image Container */}
                <div className="menuContainerLeftContainerImage">
                  <div className="menuContainerLeftContainerImageContainer">
                    <img src={assets.menuImage} alt="" className="menuContainerLeftContainerImageContainerImage" />
                  </div>
                </div>

                {/* Titile Container */}
                <div className="menuContainerLeftContainerTitle">
                  <div className="menuContainerLeftContainerTitleContainer">
                    <p className="menuContainerLeftContainerTitleContainerText">
                      Menu
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Part */}
            <div className="menuContainerRight">
              <div className="menuContainerRightContainer">
                {/* Top Container */}
                <div className="menuContainerRightContainerTop">
                  <div className="menuContainerRightContainerTopContainer">
                    {/* First Part */}
                    <div className="menuContainerRightContainerTopContainerFirst">
                      <div className="menuContainerRightContainerTopContainerFirstContainer">

                        {/* NavLink Element */}
                        <NavLink to="/" className="menuContainerRightContainerTopContainerFirstContainerNavLink">
                          <div className="menuContainerRightContainerTopContainerFirstContainerNavLinkContainer">
                            <div className="menuContainerRightContainerTopContainerFirstContainerNavLinkContainerDiv">
                              <p className="menuContainerRightContainerTopContainerFirstContainerNavLinkContainerDivText inter">
                                Maki
                              </p>
                            </div>
                          </div>
                        </NavLink>

                        {/* NavLink Element */}
                        <NavLink to="/" className="menuContainerRightContainerTopContainerFirstContainerNavLink">
                          <div className="menuContainerRightContainerTopContainerFirstContainerNavLinkContainer">
                            <div className="menuContainerRightContainerTopContainerFirstContainerNavLinkContainerDiv">
                              <p className="menuContainerRightContainerTopContainerFirstContainerNavLinkContainerDivText inter">
                                Uramaki
                              </p>
                            </div>
                          </div>
                        </NavLink>

                        {/* NavLink Element */}
                        <NavLink to="/" className="menuContainerRightContainerTopContainerFirstContainerNavLink">
                          <div className="menuContainerRightContainerTopContainerFirstContainerNavLinkContainer">
                            <div className="menuContainerRightContainerTopContainerFirstContainerNavLinkContainerDiv">
                              <p className="menuContainerRightContainerTopContainerFirstContainerNavLinkContainerDivText inter">
                                Special rolls
                              </p>
                            </div>
                          </div>
                        </NavLink>


                      </div>
                    </div>

                    {/* Second Part */}
                    <div className="menuContainerRightContainerTopContainerSecond"></div>

                    {/* Third Part */}
                    <div className="menuContainerRightContainerTopContainerThird"></div>

                    {/* Fourth Part */}
                    <div className="menuContainerRightContainerTopContainerFourth"></div>

                    {/* Fifth Part */}
                    <div className="menuContainerRightContainerTopContainerFifth"></div>

                    {/* Sixth Part */}
                    <div className="menuContainerRightContainerTopContainerSixth"></div>

                    {/* Seventh Part */}
                    <div className="menuContainerRightContainerTopContainerSeventh"></div>

                  </div>
                </div>

                {/* Bottom Container */}
                <div className="menuContainerRightContainerBottom">
                  <div className="menuContainerRightContainerBottomContainer">
                    {/* First Part */}
                    <div className="menuContainerRightContainerBottomContainerFirst"></div>

                    {/* Second Part */}
                    <div className="menuContainerRightContainerBottomContainerSecond"></div>

                    {/* Third Part */}
                    <div className="menuContainerRightContainerBottomContainerThird"></div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Menu