import React from 'react';
import "./blog.css";
import assets from '../../assets/assets';
import BlogElement from '../../components/BlogElement/BlogElement';

const Blog = () => {
  return (
    <div className="blog">
      <div className="blogContainer">
        <div className="blogContainerDiv">
          {/* Left Part */}
          <div className="blogContainerLeft">
            <div className="blogContainerLeftContainer">
              {/* Image */}
              <div className="blogContainerLeftContainerImage">
                <div className="blogContainerLeftContainerImageContainer">
                  <img src={assets.blogImageOne} alt="" className="blogContainerLeftContainerImageContainerImage" />
                </div>
              </div>

              {/* Title */}
              <div className="blogContainerLeftContainerTitle">
                <div className="blogContainerLeftContainerTitleContainer">
                  <p className="blogContainerLeftContainerTitleContainerText">Blog</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Part */}
          <div className="blogContainerRight">
            <div className="blogContainerRightContainer">
              {/* Top Part */}
              <div className="blogContainerRightContainerTop">
                <div className="blogContainerRightContainerTopContainer">
                  <div className="blogContainerRightContainerTopContainerLeft">
                    <img src={assets.leftArrow} alt="" className="blogContainerRightContainerTopContainerLeftImage" />
                  </div>
                  <div className="blogContainerRightContainerTopContainerMiddle">
                    <p className="blogContainerRightContainerTopContainerMiddleTextOne">Behind the Scenes</p>
                    <p className="blogContainerRightContainerTopContainerMiddleTextTwo">& Latest News</p>
                  </div>
                  <div className="blogContainerRightContainerTopContainerRight">
                    <img src={assets.rightArrow} alt="" className="blogContainerRightContainerTopContainerRightImage" />
                  </div>
                </div>
              </div>

              {/* Bottom Part */}
              <div className="blogContainerRightContainerBottom">
                <div className="blogContainerRightContainerBottomContainer">
                  <BlogElement
                    id="1"
                    image={assets.blogImageTwo}
                    date={"24th Aug 2023"}
                    title={"How Qitchen Redefines Flavor Harmony in Every Bite"}
                    text={"Experience an orchestra of tastes as Qitchen's sushi unveils a symphony of perfectly balanced flavors."}
                  />
                  <BlogElement
                    id="2"
                    image={assets.blogImageThree}
                    date={"24th Aug 2023"}
                    title={"Unveiling the Mastery Behind Our Culinary Craftsmanship"}
                    text={"Explore the meticulous artistry and dedication that create Qitchen's renowned sushi perfection."}
                  />
                  <BlogElement
                    id="3"
                    image={assets.blogImageFour}
                    date={"24th Aug 2023"}
                    title={"Journey through Freshness Exquisite Sushi Selection"}
                    text={"Embark on a seafood adventure, guided by Qitchen's fresh and exquisite sushi creations from the sea."}
                  />
                  <BlogElement
                    id="4"
                    image={assets.blogImageFive}
                    date={"24th Aug 2023"}
                    title={"Palate with Qitchen's Unsurpassed Sushi Delicacies"}
                    text={"Immerse in Qitchen's passion for culinary excellence, where sushi is more than a dish—it's an experience."}
                  />
                  <BlogElement
                    id="5"
                    image={assets.blogImageSix}
                    date={"24th Aug 2023"}
                    title={"The Qitchen Experience Beyond Sushi"}
                    text={"Immerse in Qitchen's passion for culinary excellence, where sushi is more than a dish—it's an experience."}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog