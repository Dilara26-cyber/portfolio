import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Contact from "../components/Contact"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const IndexPage = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
  } = data
  return (
    <>
      <main>
        <Hero />
        <Projects title="Projelerim" projects={projects} />
        <Services />
        <Contact />
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject {
      nodes {
        Description
        GithubRepo
        LiveLink
        Title
        slug
        id
        videoURL
        Stack {
          id
          stack
        }
        Media {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
`

export default IndexPage
