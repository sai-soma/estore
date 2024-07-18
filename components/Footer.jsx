import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook, AiFillYoutube } from 'react-icons/ai'

const Footer = () => {

  const handleClick = (url) => {
    window.location.href = url;
  }

  const insta = "https://www.instagram.com/saieeshsoma/";
  const twi = "https://x.com/SomaSaieesh";
  const fb = "https://www.facebook.com/saieeshsoma";
  const yt = "https://www.youtube.com/@sneakerhood_shop";

  return (
    <div className='footer-container'>
        <p>2024@SS Sneakerhood. All Rights reserved</p>  
        <p className='icons'>
            <AiFillInstagram onClick={() => handleClick(insta)}/>
            <AiOutlineTwitter onClick={() => handleClick(twi)}/>
            <AiFillFacebook onClick={() => handleClick(fb)}/>
            <AiFillYoutube onClick={() => handleClick(yt)}/>
        </p>    
    </div>
  )
}

export default Footer
