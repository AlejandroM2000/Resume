import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';


 class Navbar extends Component {

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            const M = window.M;
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
          });        
    }

    render() {
        return (
                
                <>
                    <nav className='light-blue darken-4'>
                        <div className='container'>
                            <div classname='nav-wrapper'>
                                <Link to='/' className='brand-logo'>Resume</Link>
                                <Link to='/' data-target='side-nav' className='sidenav-trigger '>
                                    <i class='material-icons'>Menu</i>
                                </Link>
                                <ul className ='right hide-on-med-and-down'>
                                    <li>
                                        <Link to='/'>
                                            <i className='fas fa-home'></i>Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/skills'>
                                            <i className='fas fa-copy'></i>Skills
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/experiences'>
                                            <i className='fas fa-id-badge'></i>Experiences
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/education'>
                                            <i className='fas fa-graduation-cap'></i>Education
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/portfolio'>
                                            <i className='fas fa-address-card'></i>Portfolio
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <ul className='sidenav' id='side-nav'>
                            <li>
                                <Link to='/'>
                                    <i className='fas fa-home'></i>Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/skills'>
                                    <i className='fas fa-copy'></i>Skills
                                </Link>
                            </li>
                            <li>
                                <Link to='/experiences'>
                                    <i className='fas fa-id-badge'></i>Experiences
                                </Link>
                            </li>
                            <li>
                                <Link to='/education'>
                                    <i className='fas fa-graduation-cap'></i>Education
                                </Link>
                            </li>
                            <li>
                                <Link to='/portfolio'>
                                    <i className='fas fa-address-card'></i>Portfolio
                                </Link>
                            </li>
                        </ul>
            </>

            
        );
    }
}

export default Navbar;
