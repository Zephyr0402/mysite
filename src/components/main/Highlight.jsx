import React, { Component } from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import TextLoop from "react-text-loop";
import Particles from "react-tsparticles";
import particlesOptions from "../../data/particles.json";

class Highlight extends Component {
    render (){
        return (
            <Jumbotron fluid>
                <Container>
                    <h1>
                        <TextLoop interval={1800} springConfig={{ damping: 10 }}>
                            <span>Hello</span>
                            <span>Hola</span>
                            <span>你好</span>
                            <span>Bonjour</span>
                            <span>こんにちは</span>
                            <span>여보세요</span>
                            <span>Здравствуйте</span>
                        </TextLoop>{", "}
                    </h1>
                    <h3>
                            My name is Shijun Shen. Welcome to my webpage.
                    </h3>
                </Container>
            </Jumbotron>
        );
    }
}

export default Highlight;