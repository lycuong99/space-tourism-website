import React from "react"
import Layout from "../../components/layout"
import "../../styles/tech.scss"

import tech01 from "../../images/tech1.png"
import tech01_1 from "../../images/tech01-1.png"
import tech02 from "../../images/tech2.png"
import tech03 from "../../images/tech3.png"
import tech2_down_lg from "../../images/tech2_down_lg.png"
import tech3_down_lg from "../../images/tech3_down_lg.png"
import { useState } from "react"
import { useEffect } from "react"
import { motion } from "framer-motion"

const techs = [
  {
    name: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    imgSrc: [tech01, tech01_1],
  },
  {
    name: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    imgSrc: [tech02, tech2_down_lg],
  },
  {
    name: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    imgSrc: [tech03, tech3_down_lg],
  },
]
const TechnologyPage = () => {
  const [matchUpLG, setMatchUpLG] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  )
  const [techSelected, setTechSelected] = useState(techs[0])

  useEffect(() => {
    window.matchMedia("(min-width: 1024px)").addEventListener("change", e => {
      setMatchUpLG(e.matches)
    })
  }, [])
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="page tech-page"
      >
        <div className="container">
          <h5 className="page__title">
            <span>03</span>
            <span>SPACE LAUNCH 101</span>
          </h5>
          <div className="technology">
            <div
              className="technology__img"
              data-src={`url(${tech01})`}
              style={{
                backgroundImage: `url(${
                  matchUpLG ? techSelected.imgSrc[0] : techSelected.imgSrc[1]
                })`,
              }}
            ></div>
            <div className="technology__content-wrapper">
              <div className="technology__slides-indicators">
                {techs.map((tech, index) => (
                  <span
                    key={index}
                    onClick={() => {
                      setTechSelected(tech)
                    }}
                    className={`${
                      techSelected.name === tech.name ? "active" : ""
                    }`}
                  >
                    {index}
                  </span>
                ))}
              </div>
              <div className="technology__content">
                <h5>THE TERMINOLOGY…</h5>
                <h3 className="technology__name">{techSelected.name}</h3>
                <p className="body technology__description">
                  {techSelected.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  )
}

export default TechnologyPage
