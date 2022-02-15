import React, { Component } from 'react'
import Bottom from './Bottom';
import './About.css';

class About extends React.Component {


    // changeBackground = () {
    //     let bodyClx=document.body.classList,btnDark=document.querySelector('.btn-dark'),
    // sysDark=window.matchMedia('(prefers-color-scheme: dark)'),
    // darkVal=localStorage.getItem('dark'),
    // setDark=a=>{bodyClx[a?'add':'remove']('dark'),
    // localStorage.setItem('dark',a?'yes':'no')};
    // setDark(darkVal?darkVal==='yes':sysDark.matches),
    // requestAnimationFrame(()=>bodyClx.remove('not-ready')),
    // btnDark.addEventListener('click',()=>setDark(!bodyClx.contains('dark'))),
    // sysDark.addEventListener('change',a=>setDark(a.matches));
    // }

    render() { 
        return (
          <div id="bigBody">
            <div id="main">
              <header id="header">
                <p id="logo">
                  <a id="btn-dark"></a>
                </p>
                {/* <script>
                    {this.changeBackground()}
                </script> */}
                <nav id="menu">
                  <a id="activelitt" href="/components/About">
                    About
                  </a>
                  <a id="active2litt" href="/components/Writing">
                    Writing
                  </a>
                  {/* <a id="active3" href="/soccer/">
                    Soccer
                  </a> */}
                </nav>
                <nav id="social">
                  <a
                    id="github"
                    href="https://github.com/christopher-grey"
                    target="_blank"
                  ></a>
                  <a
                    id="linkedin"
                    href="https://www.linkedin.com/in/christophergrey0/"
                    target="_blank"
                  ></a>
                </nav>
              </header>
              {/* <Container> */}
              <div id="text">
                <h1 id="title">Hi, I'm Christopher (he/him) </h1>
                <section id="post-content">
                  <p id="p">
                    I'm a software engineer living in San Jose, California. I
                    care about researching, solving, and exploring socially
                    impactful engineering problems. I'm broadly interested in
                    full stack engineering, data science and machine learning.
                  </p>
                  <p id="p">
                    Currently, I am finishing my undergraduate degree in
                    computer science and data science at UC Berkeley.
                    Previously, I was a software engineer at{" "}
                    <a
                      id="a"
                      href="https://www.microsoft.com/en-us/research/academic-program/undergraduate-research-internship-computing/"
                    >
                      Microsoft Research
                    </a>{" "}
                    and{" "}
                    <a id="a" href="https://www.salesforce.com/">
                      Salesforce
                    </a>{" "}
                    and a data scientist at{" "}
                    <a id="a" href="https://www.jnj.com/">
                      Johnson & Johnson
                    </a>
                    .
                  </p>
                  <p id="p">
                    As a software developer in{" "}
                    <a id="a" href="https://calblueprint.org/">
                      Blueprint
                    </a>{" "}
                    at UC Berkeley, I worked alongside fellow members to focus
                    on creating full-stack applications for non-profit
                    organizations. Our student-led organization offers pro-bono
                    software development to pursue social good initiatives.
                  </p>
                  <p id="p">
                    Outside of tech, I love cooking, reading and skateboarding.
                    View my resume or shoot me an email at{" "}
                    <a id="a" href="christophergrey@berkeley.edu">
                      christophergrey@berkeley.edu.
                    </a>
                  </p>
                </section>
                <hr />
                <footer id="footer2">
                  <p id="sig">
                    ©{" "}
                    <a id="sig" href="https://www.christophergrey.me">
                      Christopher Grey
                    </a>
                    , forever
                  </p>
                </footer>
              </div>
            </div>
            {/* </Container> */}
          </div>
        );
    }
}
 
export default About;