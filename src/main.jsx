import React from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Menu from './Menu'
import Education from './Education'
createRoot(document.getElementById('menu')).render(
  <Menu/>
)
createRoot(document.getElementById('header')).render(
  <Header/>
)
createRoot(document.getElementById('about')).render(
  <><About/></>
)
{/* <Letsconnect fname={"about"} lname={"me"}/> */}
createRoot(document.getElementById('skills')).render(
 <><Skills/></>)
// )<Letsconnect fname={"technical"} lname={"skills"}/>
createRoot(document.getElementById('education')).render(
  <><Education /></>
)
createRoot(document.getElementById('projects')).render(
  <><Projects/></>
)
createRoot(document.getElementById('contact')).render(
  <Contact/>
)