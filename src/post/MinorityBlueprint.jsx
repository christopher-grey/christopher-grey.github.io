import React, { Component } from 'react';

import './MinorityBlueprint.css';
class MinorityBlueprint extends React.Component {
    render() { 
        return (
          <div>
            <div id="bigBody">
              <div id="main">
                <header id="header">
                  <p id="logo">
                    <a id="btn-dark"></a>
                  </p>
                  <nav id="menu">
                    <a id="active" href="/components/About">
                      About
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
                  <h1>A Minority's Blueprint to Computer Science</h1>
                  <h2 id="h2">
                    A guide to help underrepresented students navigate the CS
                    community at Cal.
                  </h2>
                  <p>
                    <img
                      id="img"
                      src="https://miro.medium.com/max/1400/1*CVEYjssWCdai99abnsk8qQ.jpeg"
                    />
                  </p>
                  <section>
                    <p id="p">
                      In early 2017, I opened my acceptance letter to the #1
                      public university in the world. I’d be spending the next 4
                      years of my life as a Berkeley student — I was thrilled.
                      But the moment I stepped foot into my first computer
                      science class, something felt off.
                    </p>
                    <p id="p">
                      Among Computer Science graduates,{" "}
                      <a
                        id="aa"
                        href="https://www.nytimes.com/2016/02/26/upshot/dont-blame-recruiting-pipeline-for-lack-of-diversity-in-tech.html"
                      >
                        only 6 % are African American.
                      </a>
                    </p>
                    <p id="p">I immediately felt like an outsider.</p>
                    <p id="p">
                      How will I fit into a class of two thousand people?
                    </p>
                    <p id="p">
                      Will I understand the concepts as well as everyone else?
                    </p>
                    <p id="p">Who can I seek out for help?</p>
                    <p id="p">
                      Are there people who look like, think like, and talk like
                      me?
                    </p>
                    <p id="p">
                      These questions ran through my mind as I searched for a
                      sense of belonging in a school filled with so many
                      unknowns.
                    </p>
                    <p id="p">
                      That’s why I wrote this guide for you. My goal is to help
                      you navigate through the intricacies of being part of an
                      underrepresented minority in the CS community at Cal, so
                      that you don’t have to make the same mistakes I did.
                    </p>
                    <h2>Build A Fruitful Community</h2>
                    <p id="p">
                      <img
                        id="img"
                        src="https://miro.medium.com/max/1400/1*-L_EYgixttslArWjgAviKw.jpeg"
                      />
                    </p>
                    <p id="p">
                      To make the most out of your experience at Berkeley,
                      become friends with your classmates early.
                    </p>
                    <p id="p">
                      Regardless of your background, collaboration is crucial
                      for success in the CS world. Everyone brings their own
                      unique perspectives and approaches to the challenging
                      concepts you will come across.
                    </p>
                    <p id="p">
                      But as an underrepresented minority at Berkeley, finding
                      students that look, talk, and act like you to collaborate
                      with may be difficult. Here are some strategies that
                      worked for me:
                    </p>
                    <ol>
                      <li>
                        Never hesitate to ask questions. Spend time with peers
                        on Piazza, and work with other people to solve problems.
                        It’s all about integrating yourself within the community
                        and finding your niche of individuals.
                      </li>
                      <li>
                        Attend office hours and CSM study sessions. With a core
                        study group, you’ll do more than just spend long nights
                        together configuring data structures or creating
                        classification models. You’ll build a sense of
                        community.
                      </li>
                    </ol>
                    <h2>Understand That You Are Here For a Reason</h2>
                    <p>
                      The realization that I really do belong at Berkeley was a
                      difficult barrier to cross for me.
                    </p>
                    <p>
                      Even in an introductory course like CS61A, there were so
                      many accomplished individuals who had already built entire
                      apps all on their own. I immediately felt like the playing
                      field was not level, but what kept me motivated was the
                      innate belief that I was on this campus for a reason.
                    </p>
                    <p>
                      When the nights are late, the mornings are early, and the
                      office hour queues are long, remind yourself of why you
                      are doing this.
                    </p>
                    <p>
                      I think for a lot of minorities, including myself, I
                      pursue this path for my family. My hard work is dedicated
                      to my family, who have sacrificed countless hours for me
                      to be where I am in today.
                    </p>
                    <h2>Seek Mentorship</h2>
                    <p>
                      RateMyProfessor can only go so far in guiding what classes
                      you take. Make friends with upperclassmen early, and seek
                      them out to learn what the best classes are.
                    </p>
                    <p>
                      Upperclassmen know which classes are necessary for the
                      real-world and which ones are the most interesting. They
                      can also provide tips and tools to best approach difficult
                      classes.
                    </p>
                    <p>
                      Having an older mentor on campus is essential, especially
                      one who is also part of an underrepresented group because
                      they have been through the gauntlet that is Berkeley CS,
                      and they understand first-hand the secrets of navigating
                      the industry.
                    </p>
                    <p>
                      When I was a freshman, a senior on my soccer team taught
                      me how to be more strategic with planning my classes so
                      that my schedule wouldn’t be too difficult to manage in
                      any single semester.
                    </p>
                    <p>
                      Without his advice, I would’ve never been able to manage
                      competing as a student athlete and taking the rigorous CS
                      courses that Berkeley has to offer.
                    </p>
                    <h2>Join a Club!</h2>
                    <p>
                      <img src="https://miro.medium.com/max/560/1*Py-b-n5IgyJDKlwCwP_X0Q.png" />
                    </p>
                    <p>Join one early.</p>
                    <p>
                      It’s the best way to meet like-minded individuals who
                      share your academic passions. Clubs not only give you some
                      great friends, but also help with professional development
                      and allow you to work on projects outside of academia.
                    </p>
                    <p>
                      Even though I waited until Junior year to do so, joining{" "}
                      {""}
                      <a id="aa" href="https://calblueprint.org/">
                        Blueprint
                      </a>{" "}
                      was one of the best decisions I’ve made in college.
                      Blueprint has allowed me to apply the skills that I’ve
                      learned in my classes to make the world a better place.
                    </p>
                    <p>
                      This semester, my team has been designing a web
                      application for a program called as{" "}
                      <a id="aa" href="https://www.un-loop.org/">
                        Unloop
                      </a>
                      , which delivers quality software development education
                      for individuals who are incarcerated.
                    </p>
                    <p>
                      You can learn more about tech clubs on campus in this
                      article here.
                    </p>
                    <h2>Relish the Struggle</h2>
                    <p>
                      Finally, enjoy the experience. You’re at one of the top
                      schools in the country for computer science!
                    </p>
                    <p>
                      It’s also important to never compare yourself to anyone
                      else. Remember that computer science for some is a slow
                      grind and that is totally fine — a little progress every
                      day and a relentless will to become a great programmer
                      will take you far.
                    </p>
                    <p>Be confident in yourself and remember, Go Bears!</p>
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
            </div>
          </div>
        );
    }
}
 
export default MinorityBlueprint;