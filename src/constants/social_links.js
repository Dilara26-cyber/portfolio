import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { RiMailOpenFill } from "react-icons/ri"
const data = [
  {
    id: 1,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/Dilara26-cyber",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com",
  },
]

const separate = [
  {
    id: 3,
    icon: <RiMailOpenFill className="social-icon"></RiMailOpenFill>,
    url: "dilaraaksoy5454@gmail.com",
  },
]
export { data, separate }
