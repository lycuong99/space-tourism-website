import React from "react"
import { useState } from "react"
import Layout from "../../components/layout"
import "../../styles/crew.scss"
import crew1 from "../../images/crew1.png"
import crew2 from "../../images/crew2.png"
import crew3 from "../../images/crew3.png"
import crew4 from "../../images/crew4.png"
import { useEffect } from "react"
import { useCallback } from "react"
import { motion } from "framer-motion"

const crews = [
  {
    name: "Douglas Hurley",
    role: "Commander",
    desciption:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    imgSrc: crew1,
  },
  {
    name: "MARK SHUTTLEWORTH",
    role: "Mission Specialist",
    desciption:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    imgSrc: crew2,
  },
  {
    name: "Victor Glover",
    role: "PILOT",
    desciption:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    imgSrc: crew3,
  },
  {
    name: "Anousheh Ansari",
    role: "Flight Engineer",
    desciption:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    imgSrc: crew4,
  },
]

const CrewPage = () => {
  const [selectedCrew, setSelectedCrew] = useState(crews[0])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const autoSlide = useCallback(() => {
    let nextIndex = selectedIndex + 1
    if (selectedIndex == crews.length - 1) {
      nextIndex = 0
    }
    console.log(selectedIndex)
    // console.log(nextIndex)

    setSelectedCrew(crews[nextIndex])
    setSelectedIndex(nextIndex)
  }, [selectedIndex])

  // useEffect(() => {
  //   setTimeout(autoSlide, 5000);
  // }, [selectedIndex])

  useEffect(() => {
    // let interval = setInterval(autoSlide, 1000)

    return () => {
      // clearInterval(interval)
    }
  }, [])

  return (
    <>
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="page crew-page"
        >
          <div className="container">
            <h5 className="page__title">
              <span>02</span>
              <span>Meet your crew</span>
            </h5>

            <div className="crew-page__content crew">
              <div className="crew__info">
                <div>
                  <h4 className="crew__role">{selectedCrew.role}</h4>
                  <h3 className="crew__name">{selectedCrew.name}</h3>
                  <p className="body crew__description">
                    {selectedCrew.desciption}
                  </p>
                </div>

                <div className="slide-indicators">
                  {crews.map((crew, i) => (
                    <span
                      id={crew.name}
                      key={i}
                      onClick={() => {
                        setSelectedCrew(crew)
                        setSelectedIndex(i)
                      }}
                      className={`${
                        crew.name === selectedCrew.name ? "active" : ""
                      }`}
                    ></span>
                  ))}
                </div>
              </div>

              <div className="crew__img">
                <img src={selectedCrew.imgSrc} alt={selectedCrew.name} />
              </div>
            </div>
          </div>
        </motion.div>
      </Layout>
    </>
  )
}

export default CrewPage
