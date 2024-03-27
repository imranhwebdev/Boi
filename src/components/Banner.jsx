import React from 'react';
import bannerTopImg from "../assets/img/heroTopImg.png";
import btnImg from "../assets/img/btnImg.png";
import workintImg from "../assets/img/workintImg.png";
import CopyToClipboard from './CopyToClipboard';
export default function Banner() {
  return (
    <section className='banner-area'>
      <div className="container">
        <div className="banner-content">
            <div className="banner-topImg">
                <p>Boi iz happy</p>
                <img src={bannerTopImg} alt="" />
            </div>
            <h1>$boi</h1>
            <h3>boi iz happy</h3>
            <h2>BOI WANNA BUY</h2>
            <div className="btns">
                <figure className='workintImg'>
                    <img src={workintImg} alt="" />
                </figure>
                <a href="#" className='boxed-btn dark-bg'>BUY NOW</a>
                <a href="#" className='boxed-btn'>MEME GALLERY <img src={btnImg} alt="" /></a>
            </div>
            <CopyToClipboard />
        </div>
      </div>
    </section>
  )
}
