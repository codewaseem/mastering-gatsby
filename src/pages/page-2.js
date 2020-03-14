import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "typeface-allerta"

const SecondPage = () => (
  <Layout>
    <section
      style={{
        fontFamily: "Allerta",
      }}
    >
      <h1>Hi from the second page, I have a different font-family</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </section>
  </Layout>
)

export default SecondPage
