import React from "react"
import Layout from "../../components/layout"

const CrewPage = () => {
  return (
    <>
      <Layout>
        <div className="page crew-page">
          <div className="container">
            <h5 className="page__title">
              <span>02</span>
              <span>Meet your crew</span>
            </h5>

            <div className="crew-page__content">
              <div className="crew__info">
                <div>
                  <h4>Commander</h4>
                  <h3>Douglas Hurley</h3>
                  <p className="body">
                    Douglas Gerald Hurley is an American engineer, former Marine
                    Corps pilot and former NASA astronaut. He launched into
                    space for the third time as commander of Crew Dragon Demo-2.
                  </p>
                </div>

                <div className="slide-indicators">
                  <span></span>
                </div>
              </div>

              <div>
                <img />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default CrewPage
