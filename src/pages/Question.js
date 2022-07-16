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

    // console.log('totalScore: ', totalScore);
    // console.log('type: ', QuestionData[questionNum].type);

    const handleClickButton = (num, type) => {
        const newScore = totalScore.map(e =>
            e.id === type ? {id: e.id, score: e.score + num} : e
        );

        setTotalScore(newScore);
        console.log('newScore:', newScore);

        if (QuestionData.length !== questionNum + 1) {
            setQuestionNum(questionNum + 1);
        } else {
            const mbti = newScore.reduce((acc, curr) =>
                acc + (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)), ""
            );
            console.log('mbti', mbti);

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
            <ProgressBar
                striped variant="danger"
                style={{marginTop: '15px', width: '100%'}} now={(questionNum / QuestionData.length) * 100}
            />
            <Title>{QuestionData[questionNum].title}</Title>
            <Button_wrapper>
                <Button
                    onClick={() => handleClickButton(1, QuestionData[questionNum].type)}
                    style={{
                        height: "5em",
                        minWidth: "20em",
                        maxWidth: "20em",
                        fontSize: "1em"
                    }}>{QuestionData[questionNum].answera}</Button>
                <Button
                    onClick={() => handleClickButton(0, QuestionData[questionNum].type)}
                    style={{
                        height: "5em",
                        minWidth: "20em",
                        maxWidth: "20em",
                        fontSize: "1em",
                        marginTop: "1em"
                    }}>{QuestionData[questionNum].answerb}</Button>
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
  margin-top: 2.5em;
`

const Button_wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 13rem;
  font-family: "Cafe24Oneprettynight";
`