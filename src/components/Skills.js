import React, { Component } from 'react';

 class Skills extends Component {
    render() {
        return (
            <div>
            <div className="card">
              <div className="card-content">
                <h6>
                  <strong>SKILLS</strong>
                </h6>
                <div className="row mt-top">
                  <div className="col s6">
                    <p>HTML</p>
                    <div className="progress grey lighten-1">
                      <div
                        className="determinate blue"
                        style={{ width: '70%' }}
                      ></div>
                    </div>
                  </div>
                  <div className="col s6">
                    <p>CSS</p>
                    <div className="progress grey lighten-1">
                      <div
                        className="determinate blue"
                        style={{ width: '70%' }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col s6">
                    <p>JAVASCRIPT</p>
                    <div className="progress grey lighten-1">
                      <div
                        className="determinate blue"
                        style={{ width: '60%' }}
                      ></div>
                    </div>
                  </div>
                  <div className="col s6">
                    <p>JAVA</p>
                    <div className="progress grey lighten-1">
                      <div
                        className="determinate blue"
                        style={{ width: '85%' }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col s6">
                    <p>C++</p>
                    <div className="progress grey lighten-1">
                      <div
                        className="determinate blue"
                        style={{ width: '80%' }}
                      ></div>
                    </div>
                  </div>
                  <div className="col s6">
                    <p>SELENIDE</p>
                    <div className="progress grey lighten-1">
                      <div
                        className="determinate blue"
                        style={{ width: '90%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Skills;
