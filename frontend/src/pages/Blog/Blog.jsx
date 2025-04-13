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
                                <p className="blogContainerLeftContainerTitleContainerText">
                                    Blog
                                </p>
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
                                    <img src={assets.leftArrow} alt="" className='blogContainerRightContainerTopContainerLeftImage' />
                                </div>
                                <div className="blogContainerRightContainerTopContainerMiddle">
                                    <p className="blogContainerRightContainerTopContainerMiddleTextOne">
                                        Behind the Scenes
                                    </p>
                                    <p className="blogContainerRightContainerTopContainerMiddleTextTwo">
                                        & Latest News
                                    </p>
                                </div>
                                <div className="blogContainerRightContainerTopContainerRight">
                                    <img src={assets.rightArrow} alt="" className="blogContainerRightContainerTopContainerRightImage" />
                                </div>
                            </div>
                        </div>

                        {/* Bottom Part */}
                        <div className="blogContainerRightContainerBottom">
                            <div className="blogContainerRightContainerBottomContainer">
                                <BlogElement image={assets.blogImageTwo} date={"24th Aug 2023"} title={"How Qitchen Redefines Flavor Harmony in Every Bite"} text={"Experience an orchestra of tastes as Qitchen's sushi unveils a symphony of perfectly balanced flavors."} />
                                <BlogElement image={assets.blogImageTwo} date={"24th Aug 2023"} title={"How Qitchen Redefines Flavor Harmony in Every Bite"} text={"Experience an orchestra of tastes as Qitchen's sushi unveils a symphony of perfectly balanced flavors."} />
                                <BlogElement image={assets.blogImageTwo} date={"24th Aug 2023"} title={"How Qitchen Redefines Flavor Harmony in Every Bite"} text={"Experience an orchestra of tastes as Qitchen's sushi unveils a symphony of perfectly balanced flavors."} />
                                <BlogElement image={assets.blogImageTwo} date={"24th Aug 2023"} title={"How Qitchen Redefines Flavor Harmony in Every Bite"} text={"Experience an orchestra of tastes as Qitchen's sushi unveils a symphony of perfectly balanced flavors."} />
                                <BlogElement image={assets.blogImageTwo} date={"24th Aug 2023"} title={"How Qitchen Redefines Flavor Harmony in Every Bite"} text={"Experience an orchestra of tastes as Qitchen's sushi unveils a symphony of perfectly balanced flavors."} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog