import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { RichText } from "prismic-reactjs"
export const query = graphql`
query MyHomepageQuery {
prismic {
  allHomepages {
    edges {
      node {
        title
      }
    }
  }
}
}`

export default ({ data }) => {
  const doc = data.prismic.allHomepages.edges.slice(0, 1).pop()
  if (!doc) return null
  return (
    <Layout>
      <div>
        <h1>{RichText.asText(doc.node.title)}</h1>
      </div>
    </Layout>
  )
}
