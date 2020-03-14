import React from "react"
import Layout from "../components/layout"

const AutoPage = () => {
  return (
    <Layout>
      <section>
        <h1>Automatically Creating Pages</h1>
        <p>
          React components which are exported as default inside the /pages
          directory are automatically created as pages with their folder/file
          name structure
        </p>
      </section>
    </Layout>
  )
}

export default AutoPage
