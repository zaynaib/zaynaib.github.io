import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import Talk from "../components/talks"


export default function Home() {
  return (
    <Layout>

      <Talk month="October" year= "2017" link="http://chicago.act-w.org/" name="ACT-W Chicktech Chicago" description= "Is FreeCodeCamp a Good Way to Learn How to Code? - Intro to Data Analysis with R"/>
     
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
  )
}
