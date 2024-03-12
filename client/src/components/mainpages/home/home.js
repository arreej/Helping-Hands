import React from "react";
//import React, { useState } from "react";
// import { GlobalState } from "../../../GlobalState";
import axios from "axios";
import styled from "styled-components";
import { useRoutes, Link } from "react-router-dom";
// import { Container, Row, Col, Carousel } from "react-bootstrap";
import AccountDetails from "./AccountDetails";

import Flood from "../../../assets/Images/flood.jpg"
import Clothes from "../../../assets/Images/clothes.jpg"
import sdg1 from "../../../assets/Images/SDG1.PNG"
import sdg2 from "../../../assets/Images/SDG2.PNG"
import sdg4 from "../../../assets/Images/SDG4.PNG"
import sdg13 from "../../../assets/Images/SDG13.jpg"
import sdg3 from "../../../assets/Images/SDG3.png"

import SDGlogo from "../../../assets/Images/SDGlogo.png"

import medical from "../../../assets/Images/medical.jpg"
import Mosque from "../../../assets/Images/masjid.jpg"

const Cont = styled.div`
  min-height: 70vh;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #f2f2f2;
  font-weight: bold;  
`;
const Accountcontainer = styled.div`
  margin: 20px;
  padding-top: 10px;
  height: auto;
  margin:10px;
  border: 4px solid white;
  box-sizing: border-box;

  
  // margin-bottom: 20px;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // flex-direction: column;
  // border-radius: 7px;
  // padding: 40px;
  // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  font-family: "Overpass Mono", monospace;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  margin: 10px;

  .card {
    width: 520px;
    height: 300px;
    border-radius: 5px;
    perspective: 1000px;
    background:white;

    &:hover .card-inner {
      transform: rotateY(180deg);
    }

    &-inner {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      transition: transform 600ms ease;
      transform-style: preserve-3d;
      box-shadow: 0 0 25px 2px rgba(black, 0.2);
    }

    &-front,
    &-back {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      overflow: hidden;
      backface-visibility: hidden;
      background: linear-gradient(321.03deg, #01adef 0%, #0860bf 91.45%);
    }

    &-front {
      border-radius: 10px;
      overflow: hidden;
      position: relative;
      transition: transform 300ms ease-in-out;
    }

    &-back {
      transform: rotateY(180deg);

      &::before {
        content: "";
        position: absolute;
        top: 40%;
        left: 20%;
        width: 180%;
        height: 120%;
        border-radius: 100%;
        background-image: linear-gradient(
          to right top,
          #a3d4e7,
          #a7d5e6,
          #abd5e4,
          #aed6e3,
          #b2d6e2,
          #aed4e2,
          #abd3e1,
          #a7d1e1,
          #9bcee1,
          #8ecae1,
          #81c7e1,
          #73c3e1
        );
        filter: blur(10px);
        opacity: 0.15;
      }

      &::after {
        content: "";
        position: absolute;
        top: 15%;
        width: 100%;
        height: 40px;
        background-image: linear-gradient(
          to right top,
          #021318,
          #07191f,
          #0a1f26,
          #0b262e,
          #0c2c35,
          #0c2c35,
          #0c2c35,
          #0c2c35,
          #0b262e,
          #0a1f26,
          #07191f,
          #021318
        );
      }
    }

    &-bg {
      position: absolute;
      top: -20px;
      right: -120px;
      width: 380px;
      height: 250px;
      background: linear-gradient(321.03deg, #01adef 0%, #0860bf 91.45%);
      border-top-left-radius: 100%;

      &::before {
        content: "";
        position: absolute;
        top: -20px;
        right: -80px;
        width: 380px;
        height: 250px;
        background: linear-gradient(321.03deg, #01adef 0%, #0860bf 91.45%);
        border-top-left-radius: 100%;
      }

      &::after {
        content: "";
        position: absolute;
        top: -20px;
        right: -120px;
        width: 380px;
        height: 250px;
        background: linear-gradient(321.03deg, #01adef 0%, #0860bf 91.45%);
        border-top-left-radius: 100%;
      }
    }

    &-glow {
      position: absolute;
      top: -140px;
      left: -65px;
      height: 200px;
      width: 400px;
      background: rgba(#00b7ff, 0.4);
      filter: blur(10px);
      border-radius: 100%;
      transform: skew(-15deg, -15deg);
    }

    &-contactless {
      position: absolute;
      right: 15px;
      top: 55px;
      transform: scale(0.5);
    }

    &-chip {
      position: absolute;
      top: 65px;
      left: 25px;
      width: 45px;
      height: 34px;
      border-radius: 5px;
      background-color: #ffda7b;
      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        left: 49%;
        top: -7%;
        transform: translateX(-50%);
        background: #ffda7b;
        border: 1px solid #a27c1f;
        width: 25%;
        height: 110%;
        border-radius: 100%;
        z-index: 2;
      }

      &::after {
        content: "";
        position: absolute;
        top: 30%;
        left: -10%;
        background: transparent;
        border: 1px solid #a27c1f;
        width: 120%;
        height: 33%;
      }
    }

    &-holder {
      position: absolute;
      left: 25px;
      bottom: 30px;
      color: white;
      font-size: 14px;
      letter-spacing: 0.2em;
      filter: drop-shadow(1px 1px 1px rgba(black, 0.3));
    }

    &-number {
      position: absolute;
      left: 25px;
      bottom: 65px;
      color: white;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0.2em;
      filter: drop-shadow(1px 1px 1px rgba(black, 0.3));
    }

    &-valid {
      position: absolute;
      right: 25px;
      bottom: 30px;
      color: white;
      font-size: 14px;
      letter-spacing: 0.2em;
      filter: drop-shadow(1px 1px 1px rgba(black, 0.3));

      &::before {
        content: "GOOD THRU";
        position: absolute;
        top: 1px;
        left: -35px;
        width: 50px;
        font-size: 7px;
      }
    }

    &-signature {
      position: absolute;
      top: 120px;
      left: 15px;
      width: 90%;
      height: 30px;
      background: rgb(238, 236, 236);
      display: flex;
      justify-content: center;
      align-items: center;
      color: #021318;
      font-family: "Mr Dafoe", cursive;
      font-size: 38px;
      font-weight: 400;

      &::before {
        content: "Authorized Signature";
        position: absolute;
        top: -15px;
        left: 0;
        font-family: "Overpass Mono", monospace;
        font-size: 9px;
        color: rgb(238, 236, 236);
      }
    }
    .account {
      display: flex;
      align-items: center;
      height: 100%;
      justify-content: center;
      z-index: 10000;
      color: white;
      color: relative;
      position: relative;
      font-size: 19px;
      font-weight: bold;
    }

    &-seccode {
      position: absolute;
      top: 125px;
      left: 245px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 17px;
      color: #021318;
      background-color: rgb(238, 236, 236);
      text-align: center;
      font-size: 11px;
    }
  }

  @media only screen and (max-width: 600px) {
    .card {
      width: 300px;
      .account {
        font-size: 15px;
      }
    }
  }

  .logo {
    position: absolute;
    right: 25px;
    top: 30px;
  }

  .hint {
    padding: 2em 0;
    font-family: "Noto Sans KR", sans-serif;
    letter-spacing: 0.025em;
    font-weight: 400;
    color: black;
  }
`;

const Button = styled.button`
  color: white;
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 20px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #008080;
`;

const Achieve = styled.div`
  min-height: 20vh;
  height: auto;
  width: 100%;
  background: #424242;
  border: 2px solid black;
  box-sizing: border-box;
  padding: 20px;
  text-align:center;
  color: white;

  .column {
    float: left;
    width: 33.33%;
    padding: 10px;
    // height: 300px; /* Should be removed. Only for demonstration */
    text-align: center;
    padding: 40px;
  }

  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
`;
const SDG = styled.div`
  margin-top: 40px;
  min-height: 20vh;
  height: auto;
  width: 100%;
  background: white;
  padding: 20px;
  align-items:center;
  text-align:center;
  backgroundImage:100px;

  .column {
    float: left;
    width: 33.33%;
    padding: 10px;
    justify-content:center;
    // height: 300px; 
    text-align: center;
    padding: 40px;
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  .zom-image {
    transition: transform 0.3s ease;
    height: 230px;
    border-radius: 15px;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
    background-color: white;
    padding:10px;
    margin:5px;
  }
  
  .zom-image:hover {
    transform: scale(1.1);
    cursor: default;
    box-shadow: 0px 3px 15px rgba(235, 209, 209, 0.5);
  }
`;

const WORK = styled.div`
  margin-top: 20px;
  min-height: 10vh;
  height: auto;
  width: 100%;
  box-sizing: border-box;
  background: #424242;
  justify-content:center;
  text-align:center;

  padding: 30px;
  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  color: white;
  font-weight: bold;
  font-style: italic;

  .column {
    float: left;
    width: 50%;
    padding: 10px;
    // height: 300px; /* Should be removed. Only for demonstration */
    text-align: center;
    display: inline-block;

  }
  .zoom-image {
    transition: transform 0.3s ease;
    height: 230px;
    border-radius: 15px;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
    background-color: white;
    padding:10px;
    margin:5px;
  }
  
  .zoom-image:hover {
    transform: scale(1.1);
    cursor: default;
    box-shadow: 0px 3px 15px rgba(235, 209, 209, 0.5);
  }
`;
function Home() {
  return (
    <Cont>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-mdb-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={Flood}
              class="d-block w-100"
              alt="Flood drive"
              width={400}
              height={600}
            />
            <div class="carousel-caption d-none d-md-block">
              <h4>Flood Drive</h4>
              <p>Helped the flood affected families</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={Clothes}
              class="d-block w-100"
              alt="Clothes"
              width={3000}
              height={600}
            />
            <div class="carousel-caption d-none d-md-block">
              <h4>Clothes Distrubution</h4>
              <p>Share your not in use Clothes with the needy Families</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={medical}
              class="d-block w-100"
              alt="medical"
              width={1000}
              height={600}
            />
            <div class="carousel-caption d-none d-md-block">
              <h4>Medicine Distribution Drive</h4>
              <p>
                Distribution of medicine among the needy and flood affected people
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselExampleCaptions"
          data-mdb-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-mdb-target="#carouselExampleCaptions"
          data-mdb-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <AccountDetails />

      <Link to="/campaigns">
        <Button>Browse Our Campaign</Button>
      </Link>
      <Achieve>
        <h2><i>ACHIEVEMENTS</i></h2>
        <div class="row">
          <div class="column">
            <h1 style={{ color: " #FFD700" }}>5500 +</h1>
            <p style={{ color: " #FFD700" }}>Meals Fed</p>
          </div>
          <div class="column">
            <h1 style={{ color: " #FFD700" }}>8800 +</h1>
            <p style={{ color: " #FFD700" }}>Ration bags were distrubuted</p>
          </div>
          <div class="column">
            <h1 style={{ color: " #FFD700" }}>15 +</h1>
            <p style={{ color: " #FFD700" }}>NGO Partners</p>
          </div>
        </div>
      </Achieve>
      <SDG>
        <h2>SDGS</h2>
        <p><b><i>Working on SDG 2 Zero Hunger and SDG 12 Sustainable Consumption and Production to Create, we are gladly supporting the Sustainable Development Goals.</i></b></p>
        <div class="row">
          <div class="column">
            <img
              src={sdg1}
              class="zom-image"
              alt="sdg1"
            />
            <p><i>Our NGO has also financially supported multiple people to start a new business in order to overcome poverty</i></p>
          </div>
          <div class="column">
            <img
              src={sdg2}
              class="zom-image"
              alt="sdg2"
            />
            <p><i>By Providing Food and ration our NGO is eliminating hunger</i></p>
          </div>
          <div class="column">
            <img
              src={sdg4}
              class="zom-image"
              alt="sdg4"
            />
            <p><i>Our NGO has also been active in providing Quality education as we are in collaboration with a school in Karachi, as well as books and stationary distribution to underpriviledged are also one our goals </i></p>

          </div>
        </div>
      </SDG>
      <WORK>
        <div className="row">
          <h2>Currently Working On</h2>
          <div class="column">
            <h3>SDG 13</h3>
            <img
                src={sdg13}
                class="zoom-image"
                alt="Mosque"
              />
          </div>
          <div class="column">
            <h3>SDG 03</h3>
            <img
                src={sdg3}
                class="zoom-image"
                alt="Mosque"
              />
          </div>
          <div
            className="row"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              textAlign:"center",
            }}
          >
            <p>We have also completed one of our major goal</p>
            The Development of mosque in Bela, Pakistan.
            <div class="column">
              <img
                src={Mosque}
                class="zoom-image"
                alt="Mosque"
                width={500}
              />
            </div>
          </div>
        </div>
      </WORK>
    </Cont>
  );
}

export default Home;