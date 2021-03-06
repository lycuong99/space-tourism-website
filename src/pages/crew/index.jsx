import React from "react"
import { useState } from "react"
import Layout from "../../components/layout"
import "../../styles/crew.scss"
import crew1 from "../../images/crew1.png"
import crew2 from "../../images/crew2.png"
import crew3 from "../../images/crew3.png"
import crew4 from "../../images/crew4.png"

import { motion, useCycle } from "framer-motion"

const crews = [
  {
    index: 0,
    name: "Douglas Hurley",
    role: "Commander",
    desciption:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    imgSrc: crew1,
  },
  {
    index: 1,
    name: "MARK SHUTTLEWORTH",
    role: "Mission Specialist",
    desciption:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    imgSrc: crew2,
  },
  {
    index: 2,
    name: "Victor Glover",
    role: "PILOT",
    desciption:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    imgSrc: crew3,
  },
  {
    index: 3,
    name: "Anousheh Ansari",
    role: "Flight Engineer",
    desciption:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    imgSrc: crew4,
  },
]

const slideVariants = {
  show: {
    x: "0",
    opacity: "1",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  hidden: {
    x: "20",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  pre_show: {
    x: "-20",
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
}

const CrewPage = () => {
  const [selectedCrew, setSelectedCrew] = useState(crews[0])
  const [selectedPrevCrew, setSelectedPrevCrew] = useState(null)

  const handleChangeSelectCrew = crew => {
    setSelectedPrevCrew(selectedCrew)
    setTimeout(() => {
      setSelectedCrew(crew)
    }, 100)
  }
  const isPrev = () => {
    if (selectedPrevCrew) {
      return selectedPrevCrew.index < selectedCrew.index
    }
    return false
  }
  const [slideAnimation, setSlideAnimation] = useCycle("hide", "show")

  return (
    <>
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="page crew-page"
        >
          <motion.div
            className="container"
            initial={{
              opacity: 0,
              transformStyle: "flat",
              x: "100vw",
              transition: {
                ease: "easeInOut",
                duration: 1,
              },
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
              <span>02</span>
              <span>Meet your crew</span>
            </h5>

            <div className="crew-page__content crew">
              <div className="crew__info">
                <motion.div
                  key={selectedCrew ? selectedCrew.name : "empty"}
                  variants={slideVariants}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  initial={{
                    opacity: 0,
                    x: isPrev() ? 20 : -20,
                  }}
                  exit={{
                    opacity: 0,
                    x: isPrev() ? -20 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                  onAnimationComplete={() => {
                    // setSelectedCrew(selectedPrevCrew)
                  }}
                >
                  <h4 className="crew__role">{selectedCrew.role}</h4>
                  <h3 className="crew__name">{selectedCrew.name}</h3>
                  <p className="body crew__description">
                    {selectedCrew.desciption}
                  </p>
                </motion.div>

                <div className="slide-indicators">
                  {crews.map((crew, i) => (
                    <span
                      id={crew.name}
                      key={i}
                      onClick={() => {
                        handleChangeSelectCrew(crew)
                      }}
                      className={`${
                        crew.name === selectedCrew.name ? "active" : ""
                      }`}
                    ></span>
                  ))}
                </div>
              </div>

              <motion.div
                key={selectedCrew ? "crew__img" + selectedCrew.name : "empty"}
                // variants={slideVariants}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 1, x: -20 }}
                className="crew__img"
              >
                <img src={selectedCrew.imgSrc} alt={selectedCrew.name} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Layout>
    </>
  )
}

export default CrewPage
