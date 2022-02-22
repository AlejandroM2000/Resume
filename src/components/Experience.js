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
                                      Created an online environment where I would teach at most 
                                      five students; taught Java, C++, and Scratch; worked as support
                                      for other instructors
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
                                    Worked with Selenide in Java to write automated test cases to
                                    ensure UI correctness of the MHP application. Also wrote bug tickets
                                    frequently along with manual testing of the application
                                    </blockquote>
                                </div>
                            </div>
                            <div className='col xl5 l6 m6 s12' id='grad-year'>
                                    <p><i>June 2021 - August 2021</i></p>    
                            </div>
                        </div>
                        <div className='row mt xl12'>
                            <div className='col xl7 l6 m6 s12'>
                                <div className='student-job'>
                                    <h6>
                                        <p><strong>Student Infrastructure Assistant</strong></p>
                                        <p><i>UCSD Health Sciences</i></p>
                                    </h6>
                                    <blockquote>
                                    Use ServiceNow to aid everyday tasks such as adding
					                people to a listserv. Also aiding in the redesign of the 
					                company's website using the school's CMS
                                    </blockquote>
                                </div>
                            </div>
                            <div className='col xl5 l6 m6 s12' id='position-year'>
                                    <p><i>August 2021 - Present</i></p>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;
