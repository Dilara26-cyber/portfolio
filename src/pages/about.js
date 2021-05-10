import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"

const About = ({ data }) => {
  const {
    strapiAbout: { Photo, info, stack },
  } = data
  return (
    <>
      <section className="about-page">
        <div className="section-center about-center">
          <img src={Photo.publicURL} alt="Hakkımda" className="about-img-svg" />
          <article className="about-text">
            <Title title="Hakkımda" />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(s => {
                return <span key={s.id}>{s.stack}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  {
    strapiAbout {
      Title
      info
      stack {
        id
        stack
      }
      Photo {
        publicURL
      }
    }
  }
`

export default About
