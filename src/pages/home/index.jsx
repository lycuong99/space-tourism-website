import { motion } from "framer-motion"
import React, { useEffect } from "react"
import "../../styles/home.scss"
import gsap, { Power0, Power1, Power3, Power4, Back, Expo } from "gsap"
import { CSSRulePlugin } from "gsap/CSSRulePlugin"
const HomePage = () => {
  const textVariants = {
    hidden: {
      y: "-150%",
      opacity: 0.3,
      skewY: 7,
    },
    visible: {
      y: 0,
      skewY: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 1.5,
        ease: "easeOut",
      },
    },
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 2,
        when: "beforeChildren",
        ease: "easeIn",
      },
    },
  }

  const buttonVariants = {
    hidden: {
      "&::before": {
        x: 0,
        y: 0,
      },
    },
    visible: {
      "&::before": {
        x: "100%",
        y: "100%",
      },
      transition: {
        duration: 0.5,
      },
    },
  }

  useEffect(() => {
    const tl = gsap.timeline()

    tl.to(".landing-page-btn .front-planet-wrapper .front-planet", {
      duration: 4,
      delay: 1,
      x: "-100%",
      y: "-100%",
      ease: Power1.easeInOut,
    })
      // .to(".landing-page-btn", {
      //   boxShadow: "0 0 3px #fff",
      //   filter: `drop-shadow(0 0 0px #fff) drop-shadow(0 0 2px #fff)
      //   drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #fff)`,
      //   textShadow: "2px 2px 5px #0c0c0c",
      //   duration: 0.8,
      //   delay: -1.6,
      //   ease: Power0.easeOut,
      // })
      // .to(".landing-page-btn", {
      //   boxShadow: "0 0 0px #fff",
      //   filter: `drop-shadow(0 0 0px #fff) drop-shadow(0 0 0px #fff)
      //   drop-shadow(0 0 2px #fff)  drop-shadow(0 0 5px #fff)`,
      //   textShadow: "0px 0px 0px #0c0c0c",
      //   duration: 0.8,
      //   delay: -0.4,
      //   ease: Power0.easeNone,
      // })
      .to(".landing-page-btn", {
        boxShadow: "0 0 0px #fff",
        textShadow: "0px 0px 0px #0c0c0c",
        filter: `drop-shadow(0 0 0px #fff) drop-shadow(0 0 0px #fff)
        drop-shadow(0 0 0px #fff)  drop-shadow(0 0 0px #fff)`,
        duration: 0.8,
        delay: -0.4,
        ease: Power1.easeInOut,
      })
      .set(".landing-page-btn .front-planet-wrapper", {
        display: "none",
      })
      .set(".landing-page-btn", {
        // overflow: "visible",
        filter: "none",
        boxShadow: "none",
      })
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        x: "-100vw",
        transition: {
          duration: 1,
          transition: {
            ease: "easeInOut",
          },
        },
      }}
      className="home-page page "
    >
      <div className="container">
        <div className="home-page__content">
          <motion.div
            className="home-page__left"
            variants={containerVariants}
            hidden="hidden"
            animate="visible"
          >
            <h5 className="line">
              <motion.span
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                SO, YOU WANT TO TRAVEL TO
              </motion.span>
            </h5>
            <h1 className="line">
              <motion.span
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                SPACE
              </motion.span>
            </h1>
            <p className="body line">
              <motion.span
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </motion.span>
            </p>
          </motion.div>

          <motion.button
            className="landing-page-btn"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            EXPLORE
            <div className="front-planet-wrapper">
              <span className="front-planet"></span>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default HomePage
