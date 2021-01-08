import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import './Buttons.css';
// Watch the Button tutorial
// http://react.school/ui/button

// Free React training
// http://react.school/join

// Free Material-UI template
// http://react.school/material-ui/templates

const theme = {
    blue: {
        default: "#3f51b5",
        hover: "#283593"
    },
    pink: {
        default: "#e91e63",
        hover: "#ad1457"
    }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
    theme: "blue"
};

function clickMe() {
    alert("You clicked me!");
}

const ButtonToggle = styled(Button)`
  opacity: 0.7;
  ${({ active }) =>
        active &&
        `
    opacity: 1; 
  `}
`;

const Tab = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
        active &&
        `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

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



                <div class="name-container">
                    <div class="row">
                        <form onSubmit={this.mySubmitHandler}>
                            Enter your name {"  "}
                            <input
                                type="text"
                                name="username"
                                onChange={this.myChangeHandler}
                            />  {"  "}
                            <input
                                type='submit'
                            />
                        </form>
                    </div>
                    <br />
                    <div class="row">
                        <form onSubmit={this.mySubmitHandler}>
                            Enter your major  {"  "}
                            <input
                                type="text"
                                name="usermajor"
                                onChange={this.myChangeHandler}
                            />  {"  "}
                            <input
                                type='submit'
                            />
                        </form>
                    </div>
                    <br />
                    <div>
                        <Row>
                            <form onSubmit={this.mySubmitHandler}>
                                <Col>
                                    Gender {"  "}
                                </Col>
                                <Col>
                                    <button type="submit" name="gender" value="0" onClick={this.myChangeHandler}>Male</button>
                                    {"  "}
                                    <button type="submit" name="gender" value="1" onClick={this.myChangeHandler}>Female</button>
                                </Col>
                            </form>
                        </Row>
                    </div>
                    <div className="block-space"></div>
                    <div>
                        <Row>
                            <form onSubmit={this.mySubmitHandler}>
                                Social Personality
                                <Col>
                                    <button type="submit" name="social" value="1" onClick={this.myChangeHandler}>Outgoing</button>
                                    {"  "}
                                    <button type="submit" name="social" value="2" onClick={this.myChangeHandler}>Homebody</button>
                                </Col>
                            </form>
                        </Row>
                    </div>
                    <div className="block-space"></div>
                    <div>
                        <Row>
                            <form onSubmit={this.mySubmitHandler}>
                                Major
                                <Col>
                                    <button type="submit" name="major" value="1" onClick={this.myChangeHandler}>SE/CS/CE</button>
                                    {"  "}
                                    <button type="submit" name="major" value="2" onClick={this.myChangeHandler}>Nutrition</button>
                                    {"  "}
                                    <button type="submit" name="major" value="3" onClick={this.myChangeHandler}>Business</button>
                                    {"  "}
                                    <button type="submit" name="major" value="4" onClick={this.myChangeHandler}>Arts and Humanities</button>
                                </Col>
                            </form>
                        </Row>
                        <div className="block-space"></div>
                        <div>
                            <Row>
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
                            </Row>
                            {console.log(this.state.major)}

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Buttons;

