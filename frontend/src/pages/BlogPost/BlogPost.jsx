import React from 'react';
import "./blogPost.css";
import { useParams } from 'react-router-dom';
import assets from '../../assets/assets';

const BlogPost = () => {
  const { id } = useParams();

  // This would typically come from an API or database
  const blogPosts = {
    "1": {
      image: assets.blogImageOneCon,
      date: "24th Aug 2023",
      textEle: [
        {
          title: "How Qitchen Redefines Flavor Harmony in Every Bite",
          text: "In a world where dining experiences often blend into the ordinary, Qitchen stands as an emblem of culinary passion redefined. Beyond being a restaurant that serves sushi, Qitchen is an embodiment of dedication, creativity, and a profound love for the art of gastronomy."
        },
        {
          title: "Crafting a Feast for the Senses",
          text: "The heart of Qitchen's allure lies in its meticulous attention to every detail, from the selection of ingredients to the presentation of each dish."
        }
      ]
    },
    "2": {
      image: assets.blogImageOneCon,
      date: "24th Aug 2023",
      textEle: [
        {
          title: "Unveiling the Mastery Behind Our Culinary Craftsmanship",
          text: "Explore the meticulous artistry and dedication that create Qitchen's renowned sushi perfection."
        }
      ]
    },
    "3": {
      image: assets.blogImageOneCon,
      date: "24th Aug 2023",
      title: "Journey through Freshness Exquisite Sushi Selection",
      text: "Embark on a seafood adventure, guided by Qitchen's fresh and exquisite sushi creations from the sea."
    },
    "4": {
      image: assets.blogImageOneCon,
      date: "24th Aug 2023",
      title: "Palate with Qitchen's Unsurpassed Sushi Delicacies",
      text: "Immerse in Qitchen's passion for culinary excellence, where sushi is more than a dish—it's an experience."
    },
    "5": {
      image: assets.blogImageOneCon,
      date: "24th Aug 2023",
      title: "The Qitchen Experience Beyond Sushi",
      text: "Immerse in Qitchen's passion for culinary excellence, where sushi is more than a dish—it's an experience."
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="blogPost">
      <div className="blogPostContainer">
        <div className="blogPostContainerDiv">

          {/* Left Part */}
          <div className="blogPostContainerDivLeft">
            <div className="blogPostContainerDivLeftContainer">
              {/* Image Container */}
              <div className="blogPostContainerDivLeftContainerImage">
                <img src={post.image} alt="" className="blogPostContainerDivLeftContainerImageImage" />
              </div>
            </div>
          </div>

          {/* Right Part */}
          <div className="blogPostContainerDivRight">
            <div className="blogPostContainerDivRightContainer">

              <div className="blogPostContainerDivRightContainerFirst">
                <div className="blogPostContainerDivRightContainerFirstContainer">

                  <div className="blogPostContainerDivRightContainerFirstContainerLeft">
                    <img src={assets.leftArrow} alt="" className='blogPostContainerDivRightContainerFirstContainerLeftIcon' />
                  </div>

                  <div className="blogPostContainerDivRightContainerFirstContainerMiddle">
                    <p className="blogPostContainerDivRightContainerFirstContainerMiddleText inter">
                      {post.date}
                    </p>
                  </div>

                  <div className="blogPostContainerDivRightContainerFirstContainerRight">
                    <img src={assets.rightArrow} alt="" className='blogPostContainerDivRightContainerFirstContainerRightIcon' />
                  </div>

                </div>
              </div>

              <div className="blogPostContainerDivRightContainerSecond">
                <div className="blogPostContainerDivRightContainerSecondContainer">
                  <div className="blogPostContainerDivRightContainerSecondContainerOne">
                    <p className="blogPostContainerDivRightContainerSecondContainerOneText">
                      {post.textEle ? post.textEle[0].title : post.title}
                    </p>
                  </div>
                  <div className="blogPostContainerDivRightContainerSecondContainerTwo"></div>
                </div>
              </div>

              {/* <p className="blogPostDate">{post.date}</p> */}
              {post.textEle ? (
                post.textEle.map((item, index) => (
                  <div key={index}>
                    {/* <h2 className="blogPostTitle">{item.title}</h2> */}
                    {/* <p className="blogPostText">{item.text}</p> */}
                  </div>
                ))
              ) : (
                <>
                  {/* <h2 className="blogPostTitle">{post.title}</h2> */}
                  {/* <p className="blogPostText">{post.text}</p> */}
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogPost;