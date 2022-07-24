import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { IntroLogo, Footer } from '../components/index';
import {
  IconBlacklist,
  Text,
  Preview,
  Google,
  IBM,
  Microsoft,
  HewlettPackard,
  VectorGraphics,
  Computer,
  Devices,
} from '../assets';
import {
  textSlideLeftAnimate,
  textSlideRightAnimate,
  textSlideUpAnimate,
  textSlideDownAnimate,
  textPopUpAnimate,
  imageAnimate,
} from '../utils/variants';

const LandingPage = () => {
  return (
    <Wrapper>
      <IntroLogo />
      <div className="container">
        <motion.section
          className="intro"
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.3 }}
        >
          <motion.h1 className="heading-1" variants={textSlideDownAnimate}>
            A history of everything you copy
          </motion.h1>
          <motion.p className="text-1" variants={textSlideUpAnimate}>
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </motion.p>
          <motion.div className="button-group" variants={textPopUpAnimate}>
            <button className="download-ios">Download for iOS</button>

            <button className="download-mac">Download for Mac</button>
          </motion.div>
        </motion.section>

        <motion.section
          className="keep-track"
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div
            className="keep-track-header"
            variants={textSlideDownAnimate}
          >
            <h2 className="heading-2">Keep track of your snippets</h2>
            <p className="text-2">
              Clipboard instantly stores any item you copy in the cloud, meaning
              you can access your snippets immediately on all your devices. Our
              Mac and iOS apps will help you organize everything.
            </p>
          </motion.div>
          <div className="tracking">
            <motion.img src={Computer} alt="" variants={imageAnimate} />
            <div className="track-items">
              <motion.div className="item" variants={textSlideRightAnimate}>
                <h4 className="heading-4"> Quick Search</h4>
                <p className="text-3">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </motion.div>
              <motion.div className="item" variants={textSlideRightAnimate}>
                <h4 className="heading-4"> iCloud Sync</h4>
                <p className="text-3">
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </motion.div>
              <motion.div className="item" variants={textSlideRightAnimate}>
                <h4 className="heading-4">Complete History</h4>
                <p className="text-3">
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="access"
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.3 }}
        >
          <motion.h2 className="heading-2" variants={textSlideLeftAnimate}>
            Access Clipboard Anywhere
          </motion.h2>
          <motion.p className="text-2" variants={textSlideRightAnimate}>
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </motion.p>

          <motion.img src={Devices} alt="" variants={imageAnimate} />
        </motion.section>

        <motion.section
          className="supercharge"
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h3 className="heading-3" variants={textSlideRightAnimate}>
            Supercharge your workflow
          </motion.h3>
          <motion.p className="text-2" variants={textSlideLeftAnimate}>
            We’ve got the tools to boost your productivity.
          </motion.p>

          <div className="supercharge-items">
            <motion.div
              className="supercharge-item"
              variants={textSlideUpAnimate}
            >
              <img src={IconBlacklist} alt="" />
              <h5 className="heading-5"> Create blacklists</h5>
              <p className="text-3">
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </p>
            </motion.div>
            <motion.div
              className="supercharge-item"
              variants={textSlideUpAnimate}
            >
              <img src={Text} alt="" />

              <h5 className="heading-5"> Plain text snippets</h5>
              <p className="text-3">
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </motion.div>
            <motion.div
              className="supercharge-item"
              variants={textSlideUpAnimate}
            >
              <img src={Preview} alt="" />
              <h5 className="heading-5">Sneak preview</h5>
              <p className="text-3">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="companies"
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.4 }}
        >
          <motion.img
            src={Google}
            alt="Google"
            variants={textSlideDownAnimate}
          />
          <motion.img src={IBM} alt="IBM" variants={textSlideUpAnimate} />
          <motion.img
            src={Microsoft}
            alt="Microsoft"
            variants={textSlideDownAnimate}
          />
          <motion.img
            src={HewlettPackard}
            alt="Hewlett Packard"
            variants={textSlideUpAnimate}
          />
          <motion.img
            src={VectorGraphics}
            alt="Vector Graphics"
            variants={textSlideDownAnimate}
          />
        </motion.section>
        <motion.section
          className="download"
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h2 className="heading-2" variants={textSlideDownAnimate}>
            Clipboard for iOS and Mac OS
          </motion.h2>
          <motion.p className="text-2" variants={textSlideUpAnimate}>
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you’re ready to start adding to your clipboard.
          </motion.p>

          <motion.div className="button-group" variants={textPopUpAnimate}>
            <button className="download-ios">Download for iOS</button>
            <button className="download-mac">Download for Mac</button>
          </motion.div>
        </motion.section>
      </div>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  p {
    max-width: 29.5ch;
    margin: 0 auto;
  }
  .container {
    padding-inline: 1.75rem;
  }

  .download-ios {
    margin: 0 0.889rem 1.333rem;
  }

  .intro {
    margin-bottom: 8.889rem;
    p {
      padding-bottom: 2.667rem;
    }
  }

  .keep-track {
    margin-bottom: 7.666rem;

    img {
      padding: 3.611rem 0 3.111rem;
      margin: 0 auto;
    }
    .item {
      padding-bottom: 2.667rem;
    }

    .item:last-child {
      padding-bottom: 0;
    }
  }

  .access {
    margin-bottom: 7.222rem;

    img {
      padding-top: 3.5556rem;
      margin: 0 auto;
    }
  }

  .supercharge {
    margin-bottom: 7.278rem;
    .supercharge-items {
      padding-top: 4rem;
      img {
        margin: 0 auto;
        padding-bottom: 2.222rem;
      }
      .supercharge-item {
        padding-bottom: 3.111rem;

        img {
          height: 65px;
        }
      }
      .supercharge-item:last-child {
        padding-bottom: 0;
      }
    }
  }

  .companies {
    padding-bottom: 9.444rem;
    img {
      margin: 0 auto;
      padding-bottom: 3.167rem;
    }
    img:last-child {
      padding-bottom: 0;
    }
  }

  .download {
    margin-bottom: 10.625rem;
    p {
      padding-bottom: 2.556rem;
    }
  }
  @media (min-width: 1200px) {
    p {
      max-width: 57ch;
    }
    .container {
      padding-inline: 0;
    }
    .download-ios {
    }
    .intro {
      margin-bottom: 8.333rem;

      p {
        padding-bottom: 2.667rem;
      }
    }

    .keep-track {
      margin-bottom: 8.333rem;

      .tracking {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: -8rem;
        text-align: left;
      }
      img {
        padding: 3.611rem 0 0;
        margin: 0 6.875rem 0 -10rem;
      }
      .item {
        width: 350px;
        p {
          text-align: left;
        }
        padding-bottom: 3.111rem;
      }
    }

    .access {
      margin-bottom: 5.222rem;
    }

    .supercharge {
      margin-bottom: 8.333rem;
      .supercharge-items {
        display: flex;
        width: 1110px;
        justify-content: space-between;

        margin: 0 auto;

        .supercharge-item {
          padding-bottom: 0;
          width: 350px;
          padding-inline: 1rem;
        }
      }
    }

    .companies {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 8.333rem;
      margin: 0 auto;
      max-width: 1110px;

      img {
        padding: 0;
      }
    }
    .download {
      margin-bottom: 8.333rem;
      p {
        padding-bottom: 2.667rem;
      }
    }
  }
`;

export default LandingPage;
