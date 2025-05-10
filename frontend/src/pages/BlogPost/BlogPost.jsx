import React, { useRef } from "react";
import "./blogPost.css";
import { useParams } from "react-router-dom";
import assets from "../../assets/assets";

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
      title: "How Qitchen Redefines Flavor Harmony in Every Bite 1",
      textEle: [
        {
          title: "Unveiling Culinary Artistry: A Journey into Qitchen's Soul",
          text: "In a world where dining experiences often blend into the ordinary, \n\nQitchen stands as an emblem of culinary passion redefined. Beyond being a restaurant that serves sushi, Qitchen is an embodiment of dedication, creativity, and a profound love for the art of gastronomy.",
        },
        {
          title: "Crafting a Feast for the Senses",
          text: "The heart of Qitchen's allure lies in its meticulous attention to every detail, from the selection of ingredients to the presentation of each dish.",
        },
        {
          title: "Crafting a Feast for the Senses",
          text: "The heart of Qitchen's allure lies in its meticulous attention to every detail, from the selection of ingredients to the presentation of each dish.",
        },
        {
          title: "Crafting a Feast for the Senses",
          text: "The heart of Qitchen's allure lies in its meticulous attention to every detail, from the selection of ingredients to the presentation of each dish.",
        },
        {
          title: "Crafting a Feast for the Senses",
          text: "The heart of Qitchen's allure lies in its meticulous attention to every detail, from the selection of ingredients to the presentation of each dish.",
        },
        {
          title: "Crafting a Feast for the Senses",
          text: "The heart of Qitchen's allure lies in its meticulous attention to every detail, from the selection of ingredients to the presentation of each dish.",
        },
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

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="blogPost">
      <div className="blogPostContainer">
        {/* Left Part */}
        <div className="blogPostContainerLeft">
          <div className="blogPostContainerLeftContainer">
            <div className="blogPostContainerLeftContainerImage">
              <div className="blogPostContainerLeftContainerImageOverlay" />
              <img
                src={post.image}
                alt=""
                className="blogPostContainerLeftContainerImageImage"
              />
            </div>
            <div className="blogPostContainerLeftContainerTitle">
              <p className="blogPostContainerLeftContainerTitleText">
                Blog Post
              </p>
            </div>
          </div>
        </div>

        {/* Right Part */}
        <div className="blogPostContainerRight">
          <div className="blogPostContainerRightContainer">
            {/* Navigation */}
            <div className="blogPostContainerRightContainerNav">
              <div className="blogPostContainerRightContainerNavLeft">
                <img
                  src={assets.leftArrow}
                  alt="Previous"
                  className="blogPostContainerRightContainerNavIcon"
                  onClick={scrollToContent}
                />
              </div>
              <div className="blogPostContainerRightContainerNavDate">
                <p>{post.date}</p>
              </div>
              <div className="blogPostContainerRightContainerNavRight">
                <img
                  src={assets.rightArrow}
                  alt="Next"
                  className="blogPostContainerRightContainerNavIcon"
                  onClick={scrollToContent}
                />
              </div>
            </div>

            {/* Title */}
            <div className="blogPostContainerRightContainerTitle">
              <p>{post.title}</p>
            </div>

            {/* Content */}
            <div
              className="blogPostContainerRightContainerContent"
              ref={contentRef}
            >
              {post.textEle.map((textEle, index) => (
                <div key={index} className="blogPostContainerRightContainerText">
                  <h3>{textEle.title}</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: textEle.text.replace(/\n/g, "<br />"),
                    }}
                  ></p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="blogPostContainerRightContainerFooter">
              <p>By Kuba Stankiewicz</p>
              <img src={assets.diamondIcon} alt="Diamond" />
              <p>Licensing</p>
              <img src={assets.diamondIcon} alt="Diamond" />
              <p>Styleguide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
