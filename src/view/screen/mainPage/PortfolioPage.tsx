// eslint-disable-next-line no-unused-vars
import React from 'react'
import About from '../about/About'
import Skills from '../skills/Skills'
import Projects from '../projects/Projects'
import Education from '../education/Education'
import Contact from '../contact/Contact'
import Work from '../work/Work'

const PortfolioPage:React.FC = () => {
    return (
        <>
            <About />
            <Skills />
            <Work />
            <Projects />
            <Education />
            <Contact />
        </>
    )
}

export default PortfolioPage