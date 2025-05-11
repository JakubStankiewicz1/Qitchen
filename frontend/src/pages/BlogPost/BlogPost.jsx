import React, { useRef } from "react";
import "./blogPost.css";
import { useParams } from "react-router-dom";
import assets from "../../assets/assets";
import { useEffect } from "react";
import { useState } from "react";

const BlogPost = () => {
  const { id } = useParams();
  const contentRef = useRef(null);

  const scrollToContent = () => {
    contentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const blogPosts = {
    1: {
      image: assets.blogImageOneCon,
      date: "24th Aug 2023",
      title: "How Qitchen Redefines Flavor Harmony in Every Bite",
      textEle: [
        {
          title: "Unveiling Culinary Artistry: A Journey into Qitchen's Soul",
          text: "In a world where dining experiences often blend into the ordinary, Qitchen stands as an emblem of culinary passion redefined. Beyond being a restaurant that serves sushi, Qitchen is an embodiment of dedication, creativity, and a profound love for the art of gastronomy. As you step through its doors, you're not merely entering an eatery; you're immersing yourself in an experience that goes beyond the boundaries of a traditional dining encounter.",
        },
        {
          title: "Crafting a Feast for the Senses",
          text: "The heart of Qitchen's allure lies in its meticulous attention to every detail, from the selection of ingredients to the presentation of each dish. While renowned for its exceptional sushi, Qitchen's passion for perfection extends to every facet of the culinary journey. The talented chefs curate a symphony of flavors, seamlessly blending textures, colors, and aromas to create a multisensory masterpiece.\n\nThe ambiance itself speaks of a story where modern elegance meets warmth, inviting patrons to relish not only the food but also the atmosphere that envelopes them. Each dish that graces the table is not just a meal; it's a tale told through taste—a testament to the tireless commitment Qitchen has toward crafting an experience that resonates with food enthusiasts and connoisseurs alike.",
        },
        {
          title: "Beyond Sushi: Nurturing Connections",
          text: "While the gastronomic delights are undoubtedly the centerpiece, Qitchen goes beyond being a culinary haven. It's a place that fosters connections, where conversations flow as smoothly as the sake, and moments turn into cherished memories. The passionate team at Qitchen believes that dining is an act of bonding—a chance to share joy, laughter, and stories over a beautifully laid table.\n\nThe Qitchen experience transcends the physical walls of the restaurant. It's an invitation to step out of the ordinary and into a world where passion for food is an art, and every guest is a cherished canvas. Through the symphony of flavors, the artistry of presentation, and the warmth of connection, Qitchen invites you to witness passion personified in every aspect of your dining journey.",
        }
      ],
    },
    2: {
      image: assets.blogImageOneCon,
      date: "24th Aug 2023",
      title: "How Qitchen Redefines Flavor Harmony in Every Bite 2",
      textEle: [
        {
          title: "title 2",
          text: "Explore the meticulous artistry and dedication that create Qitchen's renowned sushi perfection.",
        },
      ],
    },
    3: {
      image: assets.blogImageOneCon,
      date: "24th Aug 2023",
      title: "How Qitchen Redefines Flavor Harmony in Every Bite 3",
      textEle: [
        {
          title: "title 3",
          text: "Explore the meticulous artistry and dedication that create Qitchen's renowned sushi perfection.",
        },
      ],
    },
    4: {
      image: assets.blogImageOneCon,
      date: "24th Aug 2023",
      title: "title 4",
      textEle: [
        {
          title: "Unveiling the Mastery Behind Our Culinary Craftsmanship",
          text: "Explore the meticulous artistry and dedication that create Qitchen's renowned sushi perfection.",
        },
      ],
    },
    5: {
      image: assets.blogImageOneCon,
      date: "24th Aug 2023",
      title: "title 5",
      textEle: [
        {
          title: "Unveiling the Mastery Behind Our Culinary Craftsmanship",
          text: "Explore the meticulous artistry and dedication that create Qitchen's renowned sushi perfection.",
        },
      ],
    },
  };

  const post = blogPosts[id];

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="blogPost">
      <div className="blogPostContainer">
        {/* Left Part */}
        <div className="blogPostContainerLeft">
          <div className="blogPostContainerLeftContainer">
            {/* Image Container */}
            <div className="blogPostContainerLeftContainerImage">
              <div className="blogPostContainerLeftContainerImageContainer">
                <img src={post.image} alt="" className="blogPostContainerLeftContainerImageContainerImage" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Part */}
        <div className="blogPostContainerRight">
          <div className="blogPostContainerRightContainer">
            {/* Div Border */}
            <div className="blogPostContainerRightContainerDivBorder">
              {/* Navigation */}
              <div className="blogPostContainerRightContainerTop">
                <div className="blogPostContainerRightContainerTopContainer">
                  <div className="blogPostContainerRightContainerTopContainerFirst">
                    <img
                      src={assets.leftArrow}
                      alt="Previous"
                      className="blogPostContainerRightContainerTopContainerFirstIcon"
                    />
                    <p className="blogPostContainerRightContainerTopContainerFirstText inter">{post.date}</p>
                    <img
                      src={assets.rightArrow}
                      alt="Next"
                      className="blogPostContainerRightContainerTopContainerFirstIcon"
                    />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="blogPostContainerRightContainerTopContainerSecond">
                <p className="blogPostContainerRightContainerTopContainerSecondContainer">{post.title}</p>
              </div>

              <div className="blogPostContainerRightContainerDivBorderGapEle">
                <div className="blogPostContainerRightContainerDivBorderGapEleContainer">
                  <img src={assets.gridIcon} alt="" className="blogPostContainerRightContainerDivBorderGapEleContainerIcon" />
                </div>
              </div>

              {/* Content */}
              <div className="blogPostContainerRightContainerTopContainerThird" ref={contentRef}>
                {post.textEle.map((textEle, index) => (
                  <div key={index} className="blogPostContainerRightContainerTopContainerThirdContainer">
                    <div className="blogPostContainerRightContainerTopContainerThirdContainerOne">
                      <p className="blogPostContainerRightContainerTopContainerThirdContainerTitle">{textEle.title}</p>
                    </div>

                    <div className="blogPostContainerRightContainerTopContainerThirdContainerTwo">
                      <p
                        className="blogPostContainerRightContainerTopContainerThirdContainerText inter"
                        dangerouslySetInnerHTML={{
                          __html: textEle.text.replace(/\n/g, "<br />"),
                        }}
                      ></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="blogPostContainerRightContainerBottom">
              <div className="blogPostContainerRightContainerBottomContainer">
                <p className="blogPostContainerRightContainerBottomContainerFirstContainerText inter">By Kuba Stankiewicz</p>
                <img src={assets.diamondIcon} alt="Diamond" className="blogPostContainerRightContainerBottomContainerDiamondIcon" />
                <p className="blogPostContainerRightContainerBottomContainerSecondContainerText inter">Licensing</p>
                <img src={assets.diamondIcon} alt="Diamond" className="blogPostContainerRightContainerBottomContainerDiamondIcon" />
                <p className="blogPostContainerRightContainerBottomContainerThirdContainerText inter">Styleguide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
