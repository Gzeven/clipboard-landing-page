import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import {
  BackgroundHeaderDesktop,
  BackgroundHeaderMobile,
  Logo,
} from '../assets';
import { textPopUpAnimate } from '../utils/variants';

function IntroLogo() {
  return (
    <Wrapper
      className="intro-logo"
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.4 }}
    >
      <div className="background-image"></div>

      <motion.img src={Logo} alt="Clipboard Logo" variants={textPopUpAnimate} />
    </Wrapper>
  );
}

const Wrapper = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 363px;
  position: relative;
  text-align: center;
  background-image: url(${BackgroundHeaderMobile});
  background-repeat: no-repeat;
  background-position: fixed;
  background-size: cover;

  img {
    width: 125px;
    margin: 56px;
  }

  @media (min-width: 1200px) {
    background-image: url(${BackgroundHeaderDesktop});
    background-repeat: no-repeat;
    background-position: fixed;
    background-size: cover;
  }
`;

export default IntroLogo;
