import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaLaptop, FaYoutube } from "react-icons/fa"
import { Link } from "gatsby"
const Project = ({
  Title,
  Description,
  GithubRepo,
  LiveLink,
  index,
  slug,
  videoURL,
  Stack,
  Media,
}) => {
  return (
    <article className="project">
      <GatsbyImage
        image={getImage(Media)}
        className="project-img"
        alt={Title}
      />
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <a
          href={LiveLink}
          className="project-slug"
          target="_blank"
          rel="noopener"
        >
          <h3>{Title}</h3>
        </a>
        <p className="project-desc">{Description}</p>
        <div className="project-stack">
          {Stack.map(item => {
            return <span key={item.id}>{item.stack}</span>
          })}
        </div>
        <div className="project-links">
          <a href={GithubRepo} className="project-icon" title="Github">
            {" "}
            <FaGithubSquare />
          </a>
          <a href={LiveLink} className="project-icon" title="Site">
            {" "}
            <FaLaptop />
          </a>
          <a href={videoURL} className="project-icon" title="Video">
            {" "}
            <FaYoutube />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
