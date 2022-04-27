import { motion } from "framer-motion"
import React from "react"
import "../../styles/home.scss"
const HomePage = () => {
  const textVariants = {
    hidden: {
      y: "120%",
      opacity: 0.3,
      skewY: 7,
    },
    visible: {
      y: 0,
      skewY: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 3,
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

  return (
    <div className="home-page page ">
      <div className="container">
        <div className="home-page__content">
          <motion.div
            className="home-page__left"
            variants={containerVariants}
            hidden="hidden"
            animate="visible"
          >
            <motion.h5 className="line">
              <motion.span
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                SO, YOU WANT TO TRAVEL TO
              </motion.span>
            </motion.h5>
            <motion.h1 className="line">
              <motion.span
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                SPACE
              </motion.span>
            </motion.h1>
            <motion.p className="body line">
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
            </motion.p>
          </motion.div>

          <button className="landing-page-btn">EXPLORE</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
