import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`
const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`
const User = props => (
  <>
    <Avatar src={props.avatar} alt={props.username} />
    <Username>{props.username}</Username>
  </>
)

const IndexPage = () => (
  <Layout>
    <section style={{ display: "grid" }}>
      <Link to="/page-2">Page 2</Link>
      <Link to="/auto">Another page auto generated</Link>
      <Link to="/section/about">Nested page link</Link>
    </section>
    <Container>
      <h1>About Styled Components</h1>
      <p>Styled Components is cool</p>
      <User
        username="Waseem Ahmed"
        avatar="https://media-exp1.licdn.com/dms/image/C5103AQHgq6PMyzXXKA/profile-displayphoto-shrink_200_200/0?e=1589414400&v=beta&t=A9bU-Ta2ZzyHggbuP6NNkUIBRNiJqAA7C8cNgMt3Y1E"
      />
      <User
        username="Waseem Ahmed"
        avatar="https://media-exp1.licdn.com/dms/image/C5103AQHgq6PMyzXXKA/profile-displayphoto-shrink_200_200/0?e=1589414400&v=beta&t=A9bU-Ta2ZzyHggbuP6NNkUIBRNiJqAA7C8cNgMt3Y1E"
      />
    </Container>
  </Layout>
)

export default IndexPage
