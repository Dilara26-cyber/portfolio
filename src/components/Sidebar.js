import React from "react"
import links from "../constants/links"
import { data, separate } from "../constants/social_links"
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" type="button" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={isOpen ? "sidebar-links" : ""}>
          {links.map(link => {
            return (
              <li key={link.id}>
                <Link to={link.url} onClick={toggleSidebar}>
                  {link.text}
                </Link>
              </li>
            )
          })}
        </ul>
        <ul className={isOpen ? "social-links sidebar-icons" : ""}>
          {data.map(link => {
            return (
              <li key={link.id}>
                <a href={link.url} className="social-link">
                  {link.icon}
                </a>
              </li>
            )
          })}
          {separate.map(link => {
            return (
              <li key={link.id}>
                <a
                  href={`mailto: ${link.url}`}
                  key={link.id}
                  className="social-link"
                >
                  {link.icon}{" "}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
