import React, { Component } from 'react';
import Skills from "./Skills";
import Experience from "./Experience";
import Navbar from "./Navbar";
import Portfolios from "./Portfolios";
import Profile from "./Profile";
import Education from "./Education";
import About from "./About";



 class Home extends Component {
    render() {
        return (
            <section>
                
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m3">
                                <Profile />
                            </div>
                            
                            <div className ="col s12 m9">
                                <About/>
                                <Education />
                                <Experience />
                                <Skills />
                                
                                <Portfolios />
                            </div>
                        </div>
                    </div>   
            </section>
        );
    }
}

export default Home;
