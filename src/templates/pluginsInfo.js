import React from "react"

const PluginsInfo = ({ pageContext }) => {
  return (
    <section>
      <article>
        <h1>Plugins Info</h1>
        <h3>Your site as {pageContext.data.totalCount} plugins</h3>

        <ul>
          {pageContext.data.names.map(name => {
            return <li>{name}</li>
          })}
        </ul>
      </article>
    </section>
  )
}

export default PluginsInfo
