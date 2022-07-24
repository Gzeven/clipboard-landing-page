import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { links } from '../utils/contants';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Logo } from '../assets/index';
import {
  textSlideLeftAnimate,
  textSlideRightAnimate,
  textPopUpAnimate,
} from '../utils/variants';

function Footer() {
  return (
    <Wrapper>
      <motion.section
        className="company-info"
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <div className="company-logo">
          <motion.img
            src={Logo}
            alt="Company Logo"
            variants={textSlideLeftAnimate}
          />
        </div>
        <motion.div className="company-links" variants={textPopUpAnimate}>
          <ul class="company-links-group">
            {links.map((link) => {
              const { id, text } = link;
              return (
                <li key={id}>
                  <Link to="/">{text}</Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
        <motion.div
          className="company-social-links"
          variants={textSlideRightAnimate}
        >
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare size={24} />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
        </motion.div>
      </motion.section>
      <section>
        <p class="attribution">
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by
          <a
            href="https://www.frontendmentor.io/profile/Gzeven"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gerben van de Weerdhof
          </a>
          .
        </p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background: rgba(151, 151, 151, 0.1);
  a:hover {
    color: var(--clr-cyan);
  }
  .company-info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .company-logo {
      width: 3.056rem;
      padding: 2.889rem 0 2.5rem;
    }

    ul {
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 1.111rem;
    }
  }

  .company-social-links {
    padding: 2.667rem 0;
    display: flex;
    a {
      padding-inline: 1.111rem;
    }
  }

  @media (min-width: 1200px) {
    .company-info {
      flex-direction: row;
      justify-content: space-between;
      max-width: 1110px;
      margin: 0 auto;
      .company-logo {
        padding: 0;
      }
      .company-links {
        flex-basis: 100%;
        text-align: left;
      }

      ul {
        height: 4rem;
        margin: 2.167rem 7.5rem 1rem;
        gap: 0.667rem;
        width: 65%;
      }
    }

    .company-social-links {
      padding: 0;

      a {
        padding-inline: 0.667rem;
      }
    }
  }
`;

export default Footer;
