import React from 'react';
import home1 from '../img/home1.png';
import styled from 'styled-components';
import {About, Description, Image, Hide} from "../styles";

const AboutSection = () => {
    return(
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span></h2>
                    </Hide>
                    <Hide>
                        <h2>come true.</h2>
                    </Hide>
                </div>
                <p>Contact us for any photography or videographye ideas that you have. We are professionnals with amazing skills.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="Guy with a camera"/>
            </Image>
        </About>
    )
}


export default AboutSection;