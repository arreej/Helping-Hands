import React from 'react'
import styled from "styled-components";
import axios from "axios";
import { useRoutes, Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


const Last = styled.div`
.footer {
    width: 100%;
    height: 60px;
    background-color: #424242;
    background: white;
    display: flex;
    justify-content: flex-start;;
    align-items: flex-start;
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 10px;
    flex-direction: row;
  }
  
  .Icons svg {
    color: black;
    margin: 10px;
    font-size: 30px;
    cursor: pointer;
    flex-direction: column;
  }
  
  .footer p {
    color:  #FCF8E8;
  }

  .footer h5
  {
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    flex-direction: column;
  }
`;

function Footer() {
  return (
    <Last>
    <div className='footer'>
        <div className='Icons'>
            <InstagramIcon/>
            <FacebookIcon/>
            <TwitterIcon/>
        </div>
        <h5> &copy; HelpingHands Foundation NGO  </h5>
      
    </div>
    </Last>
  );
}

export default Footer;