import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import TextLoop from "react-text-loop";

const Highlight = (props) => {
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
                    My name is Shijun Shen. Welcome!
                </h3>
            </Container>
        </Jumbotron>
    );
}

export default Highlight;