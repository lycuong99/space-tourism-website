
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"


import Header from "../header";
import "normalize.css"
import '../../styles/app.scss';
import '../../styles/header.scss';

// FONT
import "@fontsource/barlow-condensed";
import "@fontsource/bellefair";
import "@fontsource/barlow";

import { motion } from "framer-motion";

const Layout = ({ children }) => {

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    console.log("Load lan dau");
    window.pageExitTime = 10000;
  }, []);

  return (
    <div className="layout">
      <Header siteTitle={`Title`} />
      {
        !isLoading && (<main className="main">
          {children}
        </main>)
      }

      <motion.div className="loading-page"
        style={{
          display: isLoading ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        initial={{
          opacity: 1,
          transition: {
            duration: 3,
          }
        }}
        onAnimationComplete={() => {
          setIsLoading(false);
        }}
        animate={{
          opacity: 0,
          transition: {
            duration: 3
          }
        }}
      >
        <motion.div style={{
          border: '16px solid #f3f3f3',
          borderTop: '16px solid #3498db',
          borderRadius: '50%',
          height: 200,
          width: 200
        }}
          animate={{
            rotate: ['0deg', '360deg'],

            transition: {

              repeat: Infinity,
              yoyo: Infinity
            }
          }}>

        </motion.div>
      </motion.div>
    </div>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
