import React from "react"
import { Link as UnstyledLink } from "gatsby"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import style from "./index.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faReact,
  faNodeJs,
  faFreeCodeCamp,
} from "@fortawesome/free-brands-svg-icons"

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

const Link = styled(UnstyledLink)`
  color: white;
`

const IndexPage = () => (
  <Layout>
    <section style={{ display: "grid" }}>
      <Link to="/page-2">Page 2</Link>
      <Link to="/auto">Another page auto generated</Link>
      <Link to="/section/about">Nested page link</Link>
      <Link to="/emotion-sample" style={{ fontSize: "x-large" }}>
        Emotion sample
      </Link>
      <Link to="/runtime-data">Runtime Live Data</Link>
      <hr />

      <Link to="/images">Images</Link>
    </section>
    <Container className={style.feature}>
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
      <div>
        <FontAwesomeIcon size="5x" icon={faReact} />
        <FontAwesomeIcon size="5x" icon={faNodeJs} />
        <FontAwesomeIcon size="5x" icon={faFreeCodeCamp} />
      </div>
    </Container>
  </Layout>
)

export default IndexPage
