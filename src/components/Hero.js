import React from "react"
import { Link } from "gatsby"
import { data, separate } from "../constants/social_links"
import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Dilara Aksoy</h1>
            <h4>Front-End Developer</h4>
            <Link to="/projects" className="btn">
              Projeler
            </Link>
            <div className="social-links">
              {data.map(link => {
                return (
                  <a href={link.url} key={link.id} className="social-link">
                    {link.icon}
                  </a>
                )
              })}
              {separate.map(link => {
                return (
                  <a
                    href={`mailto: ${link.url}`}
                    key={link.id}
                    className="social-link"
                  >
                    {link.icon}{" "}
                  </a>
                )
              })}
            </div>
          </div>
        </article>
        <img
          src={heroImg}
          alt="An illustration showing a female developer"
          className="hero-img-svg"
        />
      </section>
    </header>
  )
}

export default Hero
