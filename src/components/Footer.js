import React from "react"
import { data, separate } from "../constants/social_links"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
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
        <h4>
          Copyright &copy; {new Date().getFullYear()}
          <span> Dilara Aksoy</span> All rights reserved.
        </h4>
      </div>
    </footer>
  )
}

export default Footer
