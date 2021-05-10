import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <main className="error-page">
        <div className="error-container">
          <h1>Üzgünüm, aradığınız sayfa mevcut değil.</h1>
          <Link to="/" className="btn">
            Ana Sayfa
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error
