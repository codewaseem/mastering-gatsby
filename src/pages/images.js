import React from "react"
import astroImg from "../images/gatsby-astronaut.png"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => {
  return (
    <section>
      <h1>
        Image from static folder, without importing, path is relative to the
        static folder
      </h1>
      <img width="200" height="200" src="gatsby-icon.png" />

      <h1>Image imported from import statement (webpack-loader)</h1>
      <img width="200" height="200" src={astroImg} />

      <h1>
        Large Image optimized by image-transformer plugins used in gatsby-image
        component
      </h1>
      <Img fluid={data.colorImage.childImageSharp.fluid} />

      <h1>Image transformed by plugin</h1>
      <Img fluid={data.grayscaleImage.childImageSharp.fluid} />
    </section>
  )
}

export const query = graphql`
  {
    colorImage: file(relativePath: { eq: "unoptimized.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    grayscaleImage: file(relativePath: { eq: "unoptimized.png" }) {
      childImageSharp {
        fluid(grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
