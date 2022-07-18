import React, {useState} from 'react';
import {useNavigate, createSearchParams} from 'react-router-dom';
import styled from 'styled-components';
import {ProgressBar, Button} from 'react-bootstrap';
import {QuestionData} from '../assets/data/questiondata';

const Question = () => {
    const navigate = useNavigate();
    const [questionNum, setQuestionNum] = useState(0);
    const [totalScore, setTotalScore] = useState([
        {id: "EI", score: 0},
        {id: "SN", score: 0},
        {id: "TF", score: 0},
        {id: "JP", score: 0},
    ]);

    const handleClickButton = (num, type) => {
        const newScore = totalScore.map(e =>
            e.id === type ? {id: e.id, score: e.score + num} : e
        );

        setTotalScore(newScore);

        if (QuestionData.length !== questionNum + 1) {
            setQuestionNum(questionNum + 1);
        } else {
            const mbti = newScore.reduce((acc, curr) =>
                acc + (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)), ""
            );

            navigate({
                pathname: '/result',
                search: `?${createSearchParams({
                    mbti: mbti,
                })}`
            });
        }
    }


    return (
        <Wrapper>
            <ProgressBarStyled
                striped variant="danger"
                now={(questionNum / QuestionData.length) * 100}
            />
            <Title>{QuestionData[questionNum].title}</Title>
            <ButtonWrapper>
                <Button
                    onClick={() => handleClickButton(1, QuestionData[questionNum].type)}
                    style={{
                        height: "5em",
                        minWidth: "20em",
                        maxWidth: "20em",
                        fontSize: "1em",
                        backgroundColor: "#ff815a",
                        border: "none",
                        boxShadow: 'unset',
                    }}>{QuestionData[questionNum].answera}</Button>
                <Button
                    onClick={() => handleClickButton(0, QuestionData[questionNum].type)}
                    style={{
                        height: "5em",
                        minWidth: "20em",
                        maxWidth: "20em",
                        fontSize: "1em",
                        marginTop: "1em",
                        backgroundColor: "#ff815a",
                        border: "none",
                        boxShadow: 'unset',
                    }}>{QuestionData[questionNum].answerb}</Button>
            </ButtonWrapper>
        </Wrapper>
    )
}

export default Question;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #faeedb;
  padding-top: 15px;
`

const Title = styled.div`
  height: 110px;
  font-size: 2.3em;
  text-align: center;
  font-family: "Cafe24Oneprettynight";
  margin-top: 2em;
  background-color: #faeedb;
  padding-right: 1rem;
  padding-left: 1rem;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
  margin-left: 2rem;
  margin-right: 2rem;
  font-family: "Cafe24Oneprettynight";
`

const ProgressBarStyled = styled(ProgressBar)`
  margin-top: 0.2rem;
  width: 100%;
  color: #faeedb;
  background-color: #fffafa;
`