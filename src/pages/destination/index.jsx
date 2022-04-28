import React, { useState } from "react"
import Layout from "../../components/layout"
import "../../styles/destination.scss"
import moonImg from "../../images/moon.png"
import marsImg from "../../images/mars.png"
import europaImg from "../../images/europa.png"
import titanImg from "../../images/titan.png"

const planets = [
  {
    name: "Moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distanceAvg: "384,400 KM",
    estimateTravelTime: "3 days",
    imgSrc: moonImg,
  },
  {
    name: "Mars",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distanceAvg: "225 MIL. km",
    estimateTravelTime: "9 months",
    imgSrc: marsImg,
  },
  {
    name: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distanceAvg: "628 MIL. km",
    estimateTravelTime: "3 years",
    imgSrc: europaImg,
  },
  {
    name: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distanceAvg: "1.6 BIL. km",
    estimateTravelTime: "7 years",
    imgSrc: titanImg,
  },
]
const DestinationPage = () => {
  const [planetSelected, setPlanetSelected] = useState(planets[0])

  return (
    <Layout>
      <div className="page destination-page">
        <div className="container">
          <h5 className="destination-page__title">
            <span>01</span>
            <span>Pick your destination</span>
          </h5>

          <div className="destination-page__content planet">
            <div className="planet__img">
              <img
                width={"100%"}
                height={"100%"}
                src={planetSelected.imgSrc}
                alt={planetSelected.name}
              />
            </div>
            <div className="planet__info">
              <div className="tabs">
                {planets.map(planet => (
                  <div
                    key={planet.name}
                    className={`tab ${
                      planetSelected.name == planet.name && "tab--active"
                    }`}
                    onClick={() => {
                      setPlanetSelected(planet)
                    }}
                  >
                    {planet.name}
                  </div>
                ))}
              </div>
              <div className="tab_content">
                <h2 className="planet__name">{planetSelected.name}</h2>
                <p className="body planet__description">
                  {planetSelected.description}
                </p>
                <div className="divider" />
                <div className="planet__detail-infos">
                  <div className="planet__detail-info">
                    <div className="subheading2">AVG. DISTANCE</div>
                    <span className="subheading1">
                      {planetSelected.distanceAvg}
                    </span>
                  </div>
                  <div className="planet__detail-info">
                    <div className="subheading2">Est. travel time</div>
                    <span className="subheading1">
                      {planetSelected.estimateTravelTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DestinationPage
