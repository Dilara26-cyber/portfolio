import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiJsBadge,
  DiReact,
  DiCode,
} from "react-icons/di"
import { SiGatsby, SiGraphql } from "react-icons/si"
import { FaLaptopCode } from "react-icons/fa"

const services = [
  {
    id: 1,
    icon: <DiHtml5 className="service-icon" />,
    title: "HTML",
  },
  {
    id: 2,
    icon: <DiCss3 className="service-icon" />,
    title: "CSS",
  },
  {
    id: 3,
    icon: <DiSass className="service-icon" />,
    title: "SASS",
  },
  {
    id: 4,
    icon: <DiJsBadge className="service-icon" />,
    title: "JAVASCRIPT",
  },
  {
    id: 5,
    icon: <DiReact className="service-icon" />,
    title: "REACT JS",
  },
  {
    id: 6,
    icon: <SiGatsby className="service-icon" />,
    title: "GATSBY JS",
  },
  {
    id: 7,
    icon: <SiGraphql className="service-icon" />,
    title: "GRAPHQL",
  },
  {
    id: 8,
    icon: <FaLaptopCode className="service-icon" />,
    title: "RESPONSIVE DESIGN",
  },
  {
    id: 9,
    icon: <DiCode className="service-icon" />,
    title: "MOBILE FIRST APPROACH",
  },
]

export default services
