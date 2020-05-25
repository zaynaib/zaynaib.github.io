import React from "react"

import { Link } from "gatsby"
import layoutStyles from "./layout.module.css"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.layout}>
    <header style={{ marginBottom: `1.5rem` }}>
    <h1>Hi I'm Ola</h1>

    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
    </Link>
    <ul style={{ listStyle: `none`, float: `right` }}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </ul>
  </header>
      {children}
    </div>
  )
}