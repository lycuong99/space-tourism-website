import React from "react"
import Layout from "../../components/layout"
import "../../styles/tech.scss"

import tech01 from "../../images/tech1.png"
import tech01_1 from "../../images/tech01-1.png"
import tech02 from "../../images/tech2.png"
import tech03 from "../../images/tech3.png"
import { useState } from "react"
import { useEffect } from "react"

const TechnologyPage = () => {
  const [matchUpLG, setMatchUpLG] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  )
  useEffect(() => {
    window.matchMedia("(min-width: 1024px)").addEventListener("change", e => {
      setMatchUpLG(e.matches)
    })
  }, [])
  return (
    <Layout>
      <div className="page tech-page">
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
                backgroundImage: `url(${matchUpLG ? tech01 : tech01_1})`,
              }}
            ></div>
            
            <div className="technology__content">
              <div className="technology__slides-indicators">
                <span className="active">1</span>
                <span>2</span>
                <span>3</span>
              </div>
              <h5>THE TERMINOLOGY…</h5>
              <h3 className="technology__name">LAUNCH VEHICLE</h3>
              <p className="body technology__description">
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earth's surface to space, usually
                to Earth orbit or beyond. Our WEB-X carrier rocket is the most
                powerful in operation. Standing 150 metres tall, it's quite an
                awe-inspiring sight on the launch pad!
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TechnologyPage
