import React from 'react';
import styled from 'styled-components';
import {ProgressBar, Button} from 'react-bootstrap';
import {QuestionData} from '../assets/data/questiondata';

const Question = () => {
    return (
        <Wrapper>
            <ProgressBar
                className="progress-bar progress-bar-striped bg-danger" role="progressbar"
                style={{marginTop: '15px'}}
            />
            <Title>{QuestionData[0].title}</Title>
            <Button_wrapper>
                <Button style={{height: "5em", minWidth: "14em", fontSize: "1em"}}>{QuestionData[0].answera}</Button>
                <Button style={{height: "5em", minWidth: "14em", fontSize: "1em", marginTop: "1em"}}>{QuestionData[0].answerb}</Button>
            </Button_wrapper>
        </Wrapper>
    )
}

export default Question;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`

const Title = styled.div`
  font-size: 2.3em;
  text-align: center;
  font-family: "Cafe24Oneprettynight";
`

const Button_wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Cafe24Oneprettynight";
`