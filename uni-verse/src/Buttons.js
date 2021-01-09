import React from "react";
import { Row, Col } from 'reactstrap';
import './Buttons.css';
import Navbar from './Components/Navigation/Navbar';
import SignUp from './Components/Pages/SignUp';
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
            bio: '',
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
                    <div class="welcome-container">
                        <h2>Tell us more about yourself to find some new friends from your university!</h2>
                </div>
                {/* <MajorGroup /> 
            <LikesGroup />  */}



                <div class="background-container">
                    <Row>
                        <Col >
                            {/* </Col>
                        <Col> */}
                            <br />
                            <div>
                                <form onSubmit={this.mySubmitHandler}>
                                    Your major  {"  "}
                                    <input
                                        type="text"
                                        name="usermajor"
                                        onChange={this.myChangeHandler}
                                        className="boxInput"

                                    />  {"  "}
                                </form>
                            </div>
                            {/* </Col>
                        <Col> */}
                            <br />
                            <div>
                                <form onSubmit={this.mySubmitHandler}>
                                    More about yourself  {"  "}
                                    <input
                                        type="text"
                                        name="bio"
                                        onChange={this.myChangeHandler}
                                        className="boxInput"

                                    />  {"  "}

                                </form>
                            </div>
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
                            <br />

                            <Col>
                                <div>
                                    <form onSubmit={this.mySubmitHandler}>
                                        <Col className="title-styles">
                                            Your Gender {"  "}
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
                                    Social smoker and/or drinker?
                                <Col>
                                        <button type="submit" name="hobby" value="1" onClick={this.myChangeHandler}>Yeaa!</button>
                                        {"  "}
                                        <button type="submit" name="hobby" value="2" onClick={this.myChangeHandler}>Nope!</button>
                                    </Col>
                                </form>
                                {console.log(this.state.major)}
                            </div>
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
                            <div className="block-space"></div>
                            {/* <Col> */}
                            <div className="subcontainer-styles">
                                <form onSubmit={this.mySubmitHandler}>
                                    Gamer?
                                <Col>
                                        <button type="submit" name="hobby" value="1" onClick={this.myChangeHandler}>Yes</button>
                                        {"  "}
                                        <button type="submit" name="hobby" value="2" onClick={this.myChangeHandler}>No</button>
                                    </Col>
                                </form>
                                {console.log(this.state.major)}
                            </div>

                        </Col>
                    </Row>
                    <br />
                    {/* <input
                        type='submit'
                        className="submitInput"
                    /> */}
                </div>

            </>
        );
    }
}

export default Buttons;

