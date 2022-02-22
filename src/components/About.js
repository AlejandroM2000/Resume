import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                
                <div className='card'>
                    <div className='card-content'>
                        <h6 className='mt-bottom'>
                            <strong>ABOUT ME</strong>
                        </h6>
                        <p className='grey-text'>
                            Hi! I am currently a Fourth Year Computer Engineering student attending
                            the University of California, San Diego.
                        </p>
                    </div> 
                    <div className='card-action'>
                        <h6>
                            <strong>PERSONAL INFO</strong>
                        </h6>
                        <div className='row mt'>
                            <div className='col xl7 l6 m6 s12'>
                                <p>
                                    <strong>Address:</strong> 3899 Nobel Drive, Apt. 1206, La Jolla, CA, 92122
                                </p>
                                <p>
                                    <strong>Phone Number:</strong> (209)662-8131
                                </p>
                                <p>
                                    <strong>Email:</strong> amalanche1010@gmail.com
                                </p>
                            </div>
                            <div className="col xl5 l6 m6 s12">
                                <p>
                                    <strong>Main Language</strong> - English
                                </p>
                                <p>
                                    <strong>Second Language</strong> - Spanish
                                </p>
                         </div>
                        </div>
                       
                        
                    </div> 
                </div>
            </div>
        );
    }
}

export default About;
