import React, { useState, useEffect } from "react";
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">

        <div className="homeContainerTop">
          <div className="homeContainerTopContainer">
            <p className="homeContainerTopContainerTextOne">
              Restaurant Dashboard
            </p>

            <p className="homeContainerTopContainerTextTwo inter">
            Welcome to your management console
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;