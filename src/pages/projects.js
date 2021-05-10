import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import Project from "../components/Project"
const ProjectsPage = ({
  data: {
    allStrapiProject: { nodes: projects },
  },
}) => {
  return (
    <>
      <main>
        <section className="projects-page">
          <Projects title="Projelerim" projects={projects} />
        </section>
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

export default ProjectsPage
