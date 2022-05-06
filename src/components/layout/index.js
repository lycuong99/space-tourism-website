
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

import { AnimatePresence, motion } from "framer-motion";

const Layout = ({ children, location }) => {


  useEffect(() => {
    console.log("Load lan dau", location);

  }, []);

  return (
    <div className="layout">
      <Header siteTitle={`Title`} />

      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="main">
        {children}
      </motion.main>



    </div>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
