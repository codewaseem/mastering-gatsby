import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"

const Image = styled.img`
  width: 100px;
  height: 100px;
`
const IndexPage = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    // get data from GitHub api
    fetch(`https://api.github.com/users/codewaseem`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        console.log(resultData)
        setData(resultData)
      }) // set data for the number of stars
  }, [])
  return (
    <section>
      {!data ? (
        <div style={{ color: "white" }}>Loading...</div>
      ) : (
        <section>
          <Image src={data.avatar_url} />
        </section>
      )}
    </section>
  )
}
export default IndexPage
