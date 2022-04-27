
import * as React from "react"
import PropTypes from "prop-types"


import Header from "../header";
import "normalize.css"
import '../../styles/app.scss';
import '../../styles/header.scss';

// FONT
import "@fontsource/barlow-condensed";
import "@fontsource/bellefair";
import "@fontsource/barlow";
const Layout = ({ children }) => {


  return (
    <div className="layout">
      <Header siteTitle={`Title`} />
      <main className="main">
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
