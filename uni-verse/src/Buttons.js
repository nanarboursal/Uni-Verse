import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import './Buttons.css';

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            usermajor: '',
            gender: '',
            social: '',
            major: '',
            hobby: '',
        };
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
    }

    myChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        // if ([event.target.name] == "gender") {
        //     if (event.target.value == "Male") {
        //         this.setState({ gender: 0 })
        //     }
        //     if (event.target.value == "Female") {
        //         this.setState({ gender: 1 })
        //     }
        // }
    }

    render() {
        return (
            <>

                <div class="row">
                    <div class="column">
                        <div class="card">
                            <div class="container">
                                <p>WELCOME</p>
                                <p>Please choose options below!</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <MajorGroup /> 
            <LikesGroup />  */}



                <div class="background-container">
                    <Row>
                        <Col >
                            <div>
                                <form onSubmit={this.mySubmitHandler}>
                                    Enter your name {"  "}
                                    <input
                                        type="text"
                                        name="username"
                                        onChange={this.myChangeHandler}
                                        className="boxInput"
                                    />  {"  "}
                                    <input
                                        type='submit'
                                        className="submitInput"

                                    />
                                </form>
                            </div>
                        {/* </Col>
                        <Col> */}
                            <br />
                            <div>
                                <form onSubmit={this.mySubmitHandler}>
                                    Enter your major  {"  "}
                                    <input
                                        type="text"
                                        name="usermajor"
                                        onChange={this.myChangeHandler}
                                        className="boxInput"

                                    />  {"  "}
                                    <input
                                        type='submit'
                                        className="submitInput"
                                    />
                                </form>
                            </div>
                        {/* </Col>
                        <Col> */}
                            <br />
                            {/* <div>
                                <Row>
                                    <form onSubmit={this.mySubmitHandler}>
                                        <Col className="title-styles">
                                            Gender {"  "}
                                        </Col>
                                        <Col>
                                            <button type="submit" name="gender" value="0" onClick={this.myChangeHandler}>Male</button>
                                            {"  "}
                                            <button type="submit" name="gender" value="1" onClick={this.myChangeHandler}>Female</button>
                                        </Col>
                                    </form>
                                </Row>
                            </div> */}
                            <Col>
                             <div>
                                    <form onSubmit={this.mySubmitHandler}>
                                        <Col className="title-styles">
                                            Gender {"  "}
                                        </Col>
                                        <Col>
                                            <button type="submit" name="gender" value="0" onClick={this.myChangeHandler}>Male</button>
                                            {"  "}
                                            <button type="submit" name="gender" value="1" onClick={this.myChangeHandler}>Female</button>
                                        </Col>
                                    </form>
                            </div>
                            </Col>
                        {/* </Col> */}
                        <div className="block-space"></div>
                        {/* <Col> */}
                            <div className="subcontainer-styles">
                                    <form onSubmit={this.mySubmitHandler}>
                                        Social Personality
                                <Col>
                                            <button type="submit" name="social" value="1" onClick={this.myChangeHandler}>Outgoing</button>
                                            {"  "}
                                            <button type="submit" name="social" value="2" onClick={this.myChangeHandler}>Homebody</button>
                                        </Col>
                                    </form>
                            </div>
                        {/* </Col> */}
                        <div className="block-space"></div>
                        {/* <Col> */}
                            <div className="subcontainer-styles">
                                    <form onSubmit={this.mySubmitHandler}>
                                        Match your major?
                                <Col>
                                            <button type="submit" name="major" value="1" onClick={this.myChangeHandler}>Yes</button>
                                            {"  "}
                                            <button type="submit" name="major" value="2" onClick={this.myChangeHandler}>No</button>
                                        </Col>
                                    </form>
                            </div>
                        {/* </Col> */}
                        <div className="block-space"></div>
                        {/* <Col> */}
                            <div className="subcontainer-styles">
                                    <form onSubmit={this.mySubmitHandler}>
                                        Hobbies
                                <Col>
                                            <button type="submit" name="hobby" value="1" onClick={this.myChangeHandler}>Arts | Painting</button>
                                            {"  "}
                                            <button type="submit" name="hobby" value="2" onClick={this.myChangeHandler}>Workout | Gym</button>
                                            {"  "}
                                            <button type="submit" name="hobby" value="3" onClick={this.myChangeHandler}>Hike | Trekking | Adventures</button>
                                            {"  "}
                                            <button type="submit" name="hobby" value="4" onClick={this.myChangeHandler}>Music | Singing </button>
                                        </Col>
                                    </form>
                                {console.log(this.state.major)}
                            </div>
                        </Col>
                    </Row>
                </div>

            </>
        );
    }
}

export default Buttons;

