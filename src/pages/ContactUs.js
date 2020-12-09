import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';
import styled from 'styled-components';


const contactUs = () => {
    return (
        <ContactStyle exit="exit" variants={pageAnimation} initial="hidden" animate="show" style={{ background: "#fff" }}>
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim} >Get in <span>touch</span>.</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnim} >
                        <Circle />
                        <p>Send Us A Message</p>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim} >
                        <Circle />
                        <p>Send A Email</p>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim} >
                        <Circle />
                        <p>Social Media</p>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media (max-width: 1300px) {
        padding: 2rem;
        font-size: 1rem;
    }
`;

const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
    span {
        color: #23d997;
    }
    @media (max-width: 1300px) {
        margin-top: 5rem;
    }
    @media (max-width: 768px) {
        text-align: center;
        h2 {
            font-size: 3rem;
        }
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #23d997;
    @media (max-width: 768px) {
        width: 2rem;
        height: 2rem;
    }
`;

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    p {
        color: #353535;
        font-size: 3rem;
        margin: 2rem;
    }
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        p {
            font-size: 2.2rem;
        }
    }
`;


export default contactUs;