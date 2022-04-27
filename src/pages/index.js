import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout";
import Seo from "../components/seo"
import HomePage from "./home";

const IndexPage = () => (
  <Layout>
    <HomePage />
  </Layout>
)

export default IndexPage
