import React, { Component } from 'react';

class Experience extends Component {
    render() {
        return (
            <div>
                <div className='card'>      
                    <div className='card-action'>
                        <h6>
                            <strong>EXPERIENCE</strong>
                        </h6>
                        <div className='row mt xl12'>
                            <div className='col xl7 l6 m6 s12'>
                                <div className='idtech-job'>
                                    <h6>
                                        <p><strong>Online Instructor</strong></p>
                                        <p><i>ID Tech, REMOTE</i></p>
                                    </h6>
                                    <blockquote>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                                    culpa qui officia deserunt mollit anim id est laborum."
                                    </blockquote>

                                </div>
                            </div>
                            <div className='col xl5 l6 m6 s12' id='grad-year'>
                                    <p><i>June 2020 - August 2020</i></p>    
                            </div>
                        </div>
                        <div className='row mt xl12'>
                            <div className='col xl7 l6 m6 s12'>
                                <div className='QA-job'>
                                    <h6>
                                        <p><strong>Software QA Engineer Intern</strong></p>
                                        <p><i>PRA Health Sciences, REMOTE</i></p>
                                    </h6>
                                    <blockquote>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                                    culpa qui officia deserunt mollit anim id est laborum."
                                    </blockquote>

                                </div>
                            </div>
                            <div className='col xl5 l6 m6 s12' id='grad-year'>
                                    <p><i>June 2021 - August 2021</i></p>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;
