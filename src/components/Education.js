import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from  './Navbar'

 class Education extends Component {
    render() {
        return (
            <div>
                
                <div className='card'>
                    <div className='card-action'>
                        <h6>
                            <strong>Education</strong>
                        </h6>
                        <div className='row mt xl12'>
                            <div className='col xl7 l6 m6 s12'>
                                    <p  id='school'>
                                        University of California San Diego
                                    </p>
                                    <p id='major'>
                                        <b><i>Bachelor's of Science: Computer Engineering</i></b>
                                    </p>
                            </div>
                            <div className='col xl5 l6 m6 s12' id='grad-year'>
                                    <p><i>2018-2022</i></p>                     
                                    <ul id='important-courses'>
                                        <li> <b><i>Relevant Coursework</i></b>
                                            <li>Data Structures And Algorithms</li>
                                            <li>Operating Systems</li>
                                            <li>Software Engineering</li>
                                            <li>Computer Architecure And Digital Design</li>
                                        </li>
                                        

                                    </ul>
                            </div>
                            
                        </div>
                       
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;
