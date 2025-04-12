import React from 'react';
import "./menu.css";
import assets from '../../assets/assets';
import { NavLink } from 'react-router-dom';
import MenuTitle from '../../components/MenuTitle/MenuTitle';
import MenuProductElement from '../../components/MenuProductElement/MenuProductElement';

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
                    <div className="menuContainerRightContainerTopContainerSecond">
                      <div className="menuContainerRightContainerTopContainerSecondContainer">
                        <MenuTitle title={"Maki"} />
                      </div>
                    </div>

                    {/* Third Part */}
                    <div className="menuContainerRightContainerTopContainerThird">
                      <div className="menuContainerRightContainerTopContainerThirdContainer">
                        <MenuProductElement image={assets.spicyTunaMakiImage} title={"Spicy Tuna Maki"} icon={assets.leafIcon} price={"5"} description={"A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice."} />
                        <MenuProductElement image={assets.mangoMakiImage} title={"Mango Maki"} price={"5"} description={"Tempura-fried shrimp, cucumber, and cream cheese embrace a center of fresh avocado, delivering a satisfying contrast of textures."} />
                        <MenuProductElement image={assets.salmonMakiImage} title={"Salmon Maki"} price={"5"} description={"Shiitake mushrooms, avocado, and pickled daikon radish nestle within a roll of seasoned rice, coated with nutty sesame seeds."} />
                        <MenuProductElement image={assets.tunaMakiImage} title={"Tuna Maki"} price={"5"} description={"A vibrant assortment of julienned carrots, bell peppers, and cucumber, tightly encased in a nori-wrapped rice roll."} />
                      </div>
                    </div>

                    {/* Fourth Part */}
                    <div className="menuContainerRightContainerTopContainerFourth">
                      <div className="menuContainerRightContainerTopContainerFourthContainer">
                        <MenuTitle title={"Uramaki"} />
                      </div>
                    </div>

                    {/* Fifth Part */}
                    <div className="menuContainerRightContainerTopContainerFifth">
                      <div className="menuContainerRightContainerTopContainerFifthContainer">
                        <MenuProductElement image={assets.volcanoDelightImage} title={"Volcano Delight"} icon={assets.leafIcon} price={"12"} description={"Creamy crab salad, avocado, and cucumber rolled inside, topped with spicy tuna and drizzled with fiery sriracha sauce."} />
                        <MenuProductElement image={assets.rainbowFusionImage} title={"Rainbow Fusion"} price={"12"} description={"A colorful blend of fresh tuna, salmon, yellowtail, and avocado, enveloping a core of cucumber and crab stick."} />
                        <MenuProductElement image={assets.dragonEleganceImage} title={"Dragon Elegance"} price={"12"} description={"Grilled eel and avocado nestled within the roll, draped with slices of ripe avocado resembling dragon scales."} />
                        <MenuProductElement image={assets.sunsetSerenityImage} title={"Sunset Serenity"} price={"12"} description={"Tempura shrimp, cucumber, and spicy mayo embraced by a roll of soy paper, crowned with slices of creamy mango."} />
                        <MenuProductElement image={assets.mysticGardenImage} title={"Mystic Garden"} price={"12"} description={"Shiitake mushrooms, asparagus, and cucumber intermingle with crispy tempura bits, blanketed by a layer of sesame seeds."} />
                        <MenuProductElement image={assets.oceanBreezeImage} title={"Ocean Breeze"} price={"12"} description={"A medley of fresh shrimp, crab stick, and avocado, laced with a gentle touch of zesty yuzu-infused tobiko."} />
                        <MenuProductElement image={assets.tokyoBlossomImage} title={"Tokyo Blossom"} price={"12"} description={"Delicate pink soy paper envelopes a blend of tuna, crab stick, and cucumber, embellished with edible flower petals."} />
                      </div>
                    </div>

                    {/* Sixth Part */}
                    <div className="menuContainerRightContainerTopContainerSixth">
                      <div className="menuContainerRightContainerTopContainerSixthContainer">
                        <MenuTitle title={"Special Rolls"} />
                      </div>
                    </div>

                    {/* Seventh Part */}
                    <div className="menuContainerRightContainerTopContainerSeventh">
                      <div className="menuContainerRightContainerTopContainerSeventhContainer">
                        <MenuProductElement image={assets.sunriseBlissImage} title={"Sunrise Bliss"} icon={assets.leafIcon} price={"16"} description={"A delicate combination of fresh salmon, cream cheese, and asparagus, rolled in orange-hued tobiko for a burst of sunrise-inspired flavors."} />
                        <MenuProductElement image={assets.mangoTangoFusionImage} title={"Mango Tango Fusion"} icon={assets.leafIcon} price={"16"} description={"Tempura shrimp, cucumber, and avocado dance alongside sweet mango slices, drizzled with a tangy mango sauce."} />
                        <MenuProductElement image={assets.TruffleIndlugenceImage} title={"Truffle Indulgence"} icon={assets.leafIcon} price={"16"} description={"Decadent slices of black truffle grace a roll of succulent wagyu beef, cucumber, and microgreens, culminating in an exquisite umami symphony."} />
                        <MenuProductElement image={assets.pacificFirecrackerImage} title={"Pacific Firecracker"} icon={assets.leafIcon} price={"16"} description={"Spicy crab salad, tempura shrimp, and jalapeño peppers combine in a fiery ensemble, accented with a chili-infused aioli."} />
                        <MenuProductElement image={assets.EternalEllEnchantment} title={"Eternal Eel Enchantment"} icon={assets.leafIcon} price={"16"} description={"An enchanting blend of eel tempura, foie gras, and cucumber, elegantly layered with truffle oil and gold leaf for a touch of opulence."} />
                      </div>
                    </div>

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