import React, { Component } from 'react';
import "./Writing.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
class Writing extends React.Component {
    //     constructor() {
    //         super();
    //         this.handleClick = this.handleClick.bind(this);
    //     }

    //     state = {
    //         clicked: false,
    //     }
        
    //     // this.handleClick = this.handleClick.bind(this);


    // handleClick() {
    //     this.setState({
    //         clicked: true
    //     });
    // }



    render() { 
        return (
          <div id="bigBody">
            <div id="main">
              <header id="header">
                <p id="logo">
                  <a id="btn-dark"></a>
                </p>
                <nav id="menu">
                  <a id="active" href="/components/About">
                    {/* onClick={this.handleClick()} */}
                    About
                    {/* {this.state.clicked ? <About /> : null} */}
                  </a>
                  <a id="active2" href="/components/Writing">
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
              <div id="text">
                <section id="post-content">
                  <article>
                    <h2 id="h2text">
                      <a id="aaa" href="/post/MinorityBlueprint">
                        A Minority's Blueprint to Computer Science
                      </a>
                    </h2>
                    <time id="time">Feb 10, 2022</time>
                  </article>
                </section>
                <hr id="hrr" />
                <footer id="footer">
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
          </div>
        );
    }
}
 
export default Writing;