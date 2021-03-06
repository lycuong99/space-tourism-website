import React, { useState } from "react"
import Layout from "../../components/layout"
import "../../styles/destination.scss"
import moonImg from "../../images/moon.png"
import marsImg from "../../images/mars.png"
import europaImg from "../../images/europa.png"
import titanImg from "../../images/titan.png"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"

const planets = [
  {
    key: 1,
    name: "Moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distanceAvg: "384,400 KM",
    estimateTravelTime: "3 days",
    imgSrc: moonImg,
  },
  {
    key: 2,
    name: "Mars",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distanceAvg: "225 MIL. km",
    estimateTravelTime: "9 months",
    imgSrc: marsImg,
  },
  {
    key: 3,
    name: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distanceAvg: "628 MIL. km",
    estimateTravelTime: "3 years",
    imgSrc: europaImg,
  },
  {
    key: 4,
    name: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distanceAvg: "1.6 BIL. km",
    estimateTravelTime: "7 years",
    imgSrc: titanImg,
  },
]
const DestinationPage = () => {
  const [planetSelected, setPlanetSelected] = useState(planets[0].key)

  const getPlanetByKey = key => {
    return planets.filter(p => p.key === key)[0]
  }
  return (
    <Layout>
      <motion.div
        initial={{
          opacity: 0,
          transition: {
            ease: "easeInOut",
            transformStyle: "flat",
            duration: 1,
          },
        }}
        animate={{
          opacity: 1,
        }}
        exit={{ opacity: 0 }}
        className="page destination-page"
      >
        <motion.div
          className="container"
          initial={{
            opacity: 0,
            transformStyle: "flat",
            x: "100vw",
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              ease: "easeInOut",
              duration: 1,
              delay: -1,
            },
          }}
          exit={{
            opacity: 0,
            x: "-100vw",
            transition: {
              ease: "easeInOut",
              duration: 1,
            },
          }}
        >
          <h5 className="page__title">
            <span>01</span>
            <span>Pick your destination</span>
          </h5>

          <motion.div className="destination-page__content planet">
            <motion.div
              key={planetSelected ? "planet__img" + planetSelected : "empty"}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 1, x: -20 }}
              className="planet__img"
            >
              <img
                width={"100%"}
                height={"100%"}
                src={getPlanetByKey(planetSelected).imgSrc}
                alt={getPlanetByKey(planetSelected).name}
              />
            </motion.div>
            <div className="planet__info">
              <div className="tabs">
                {planets.map((planet, i) => (
                  <div
                    key={i}
                    className={`tab ${
                      getPlanetByKey(planetSelected).name === planet.name &&
                      "tab--active"
                    }`}
                    onClick={() => {
                      setPlanetSelected(planet.key)
                    }}
                  >
                    {planet.name}
                  </div>
                ))}
              </div>
              <motion.div
                key={planetSelected ? "tab_content" + planetSelected : "empty"}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="tab_content"
              >
                <h2 className="planet__name">
                  {getPlanetByKey(planetSelected).name}
                </h2>
                <p className="body planet__description">
                  {getPlanetByKey(planetSelected).description}
                </p>
                <div className="divider" />
                <div className="planet__detail-infos">
                  <div className="planet__detail-info">
                    <div className="subheading2">AVG. DISTANCE</div>
                    <span className="subheading1">
                      {getPlanetByKey(planetSelected).distanceAvg}
                    </span>
                  </div>
                  <div className="planet__detail-info">
                    <div className="subheading2">Est. travel time</div>
                    <span className="subheading1">
                      {getPlanetByKey(planetSelected).estimateTravelTime}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Layout>
  )
}

export default DestinationPage
