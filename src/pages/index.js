import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <section style={{ display: "grid" }}>
      <Link to="/page-2">Page 2</Link>
      <Link to="/auto">Another page auto generated</Link>
      <Link to="/section/about">Nested page link</Link>
    </section>
  </Layout>
)

export default IndexPage
