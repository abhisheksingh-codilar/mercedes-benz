import React, { Component } from "react";
import "./grid.css";
import img1 from "./images/01-mercedes-benz-classic-sl-special-2560x1440.webp";
import img2 from "./images/00-mercedes-benz-sports-esports-league-of-legends-world-championship-ring-2560x1440 .jpeg";
import img3 from "./images/00-time-for-a-new-era-the-new-eqs-2560x1440.webp";
import img4 from "./images/00-mercedes-benz-sports-esports-highlight-for-the-worlds-2021-trophy-ceremony-2560x1440 .webp";
import img5 from "./images/Studio-Odeonsplatz-Hidden-Heroes-Dirk-Bonn-Lithium-Installation-2560x1440.webp";
import img6 from "./images/img6.webp";
import img7 from "./images/img7.webp";
import img8 from "./images/img8.webp";
import img9 from "./images/img9.webp";
import img10 from "./images/img10.webp";
import img11 from "./images/img11.webp";
import img12 from "./images/img12.webp";
import img13 from "./images/img13.webp";
import img14 from "./images/img14.webp";
class Grid extends Component {
  render() {
    return (
      <>
        <div className="grid-container">
          <div className="item item1">
            <img src={img1} alt="img" />
            <div className="item1-content-container">
              The Mercedes-Benz SL.
              <p className="item1-content">
                There is no end to the fascination of the Mercedes-Benz SL: each
                generation is a chapter in this tradition ...
              </p>
            </div>
          </div>
          <div className="item item2">
            <img src={img2} alt="img" />
            <div className="item2-content-container">
              League of Legends World Championship Ring.
              <p className="item2-content">
                Mercedes-EQ and Riot Games create Championship Ring for the
                Worlds – for the first time in LoL Esports hist...
              </p>
            </div>
          </div>
          <div className="item item3">
            <img src={img3} alt="img" />
            <div className="item3-content-container">
              Time for a new era: The new EQS.
              <p className="item3-content">
                It is time for a new era. Join us on major steps into a world of
                progressive luxury and innovation, design ...
              </p>
            </div>
          </div>
          <div className="item item4">
            <img src={img4} alt="img" />
            <div className="item4-content-container">
              Highlight for the Worlds 2021 Trophy Ceremony.
              <p className="item4-content">
                Mercedes-EQ and Riot Games create an iconic masterpiece to
                honour the Worlds Champions. World premiere: 21 ...
              </p>
            </div>
          </div>
          <div className="item item5">
            <img src={img5} alt="img" />
            <div className="item5-content-container">
              Hidden Heroes at Studio Odeonsplatz by Mercedes-Benz.
              <p className="item5-content">Beyond the visible.</p>
            </div>
          </div>
          <div className="item item6">
            <img src={img6} alt="img" />
            <div className="item6-content-container">
              Campaigns at Studio Odeonsplatz by Mercedes-Benz.
              <p className="item6-content">
                Constantly changing campaigns, exclusive themed worlds and
                cutting-edge installations.
              </p>
            </div>
          </div>
          <div className="item item7">
            <img src={img7} alt="img" />
            <div className="item7-content-container">
              Studio Odeonsplatz by Mercedes-Benz.
              <p className="item7-content">
                Discover our unique Brand Experience Space in the very heart of
                Munich.
              </p>
            </div>
          </div>
          <div className="item item8">
            <img src={img8} alt="img" />
            <div className="item8-content-container">
              Manufacturer’s expert assessment.
              <p className="item8-content">
                The unique confirmation of the originality of your classNameic:
                reliable, transparent, from Mercedes-Benz className...
              </p>
            </div>
          </div>
          <div className="item item9">
            <img src={img9} alt="img" />
            <div className="item9-content-container">
              Mercedes-EQ and SK Gaming launch Project Avarosa.
              <p className="item9-content">
                Mercedes-Benz has been a partner of the Esports organization SK
                Gaming since 2019, now they launch the Proj...
              </p>
            </div>
          </div>
          <div className="item item10">
            <img src={img10} alt="img" />
            <div className="item10-content-container">
              The EQS electrifies the 2021 Laver Cup in Boston.
              <p className="item10-content">
                The Laver Cup, initiated by Mercedes-Benz Brand Ambassador Roger
                Federer, can finally be staged again this ...
              </p>
            </div>
          </div>
          <div className="item item11">
            <img src={img11} alt="img" />
            <div className="item11-content-container">
              Master of Silver Arrows.
              <p className="item11-content">
                Rudolf Caracciola is the most successful German racing driver of
                the 1930s. Hot on his heels at the Mercede...
              </p>
            </div>
          </div>
          <div className="item item12">
            <img src={img12} alt="img" />
            <div className="item12-content-container">
              Special exhibition: The Fascination of the SL.
              <p className="item12-content">
                Special exhibition “The Fascination of the SL – a Dream Car for
                70 Years” from 22 October 2021 to 15 May 20...
              </p>
            </div>
          </div>
          <div className="item item13">
            <img src={img13} alt="img" />
            <div className="item13-content-container">
              Stylish and safe on the road.
              <p className="item13-content">
                Wheels should just look good? Of course, appearance matters.
                However, many drivers don’t realize that wheel...
              </p>
            </div>
          </div>
          <div className="item item14">
            <img src={img14} alt="img" />
            <div className="item14-content-container">
              Stylish and safe on the road.
              <p className="item14-content">
                Wheels should just look good? Of course, appearance matters.
                However, many drivers don’t realize that wheel...
              </p>
            </div>
          </div>
        </div>
        <div class="show-more-container">
          <div class="show-more-inner">
            <a href="#" class="show-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 33.5 19.992"
                width="0.8571428571428571rem"
                height="1rem"
                class="brandhub-icon"
              >
                <path
                  d="M33.5 0v5.223L16.63 19.992 0 5.343V.12l16.63 12.908z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Show more</span>
            </a>
          </div>
        </div>
        <div class="space"></div>
      </>
    );
  }
}

export default Grid;
