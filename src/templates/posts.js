import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { RichText } from "prismic-reactjs"
export const query = graphql`
query MyQuery($uid:String!) {
  prismic {
    post(uid:$uid, lang:"fr-fr"){
      title
    }
  }
}
`

export default ({ data: { prismic } }) => {
  const { post } = prismic
  if (!post) return null
  return (
    <Layout>
      <div>
        <h1>{RichText.asText(post.title)}</h1>
      </div>
    </Layout>
  )
}
