import React from "react"
import Layout from "../components/layout"
import Nav from "../components/nav";
import "./content.css"

const About = () => (
    <React.Fragment>
        <Nav />
        <Layout>
            <h1>About</h1>
            <div className="content-box">
                <p>
                    Welcome to my blog. My name is Kris Pinter. I am a Javascript
                    developer, based in Manchester, UK.
                </p>
                <p>
                    I am originally from Hungary and I have lived in the UK since 2012. I have a first
                    class honours degree in BSc Web Development from Manchester Metropolitan
                    University.
                </p>
                <p>I am currently employed at Booking.com as a Software engineer, working with
                NodeJS/TypeScript/React. I am passionate about building highly usable interfaces
                    following user centered design process.</p>
                <p>I have made this space with the intention of creating a catalog of my
                thoughts, experiments and learnings in the world of Javascript development. If
                    you have any queries please feel free to contact me.</p>
            </div>
        </Layout>
    </React.Fragment>

)

export default About
