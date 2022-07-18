import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {ResultData} from '../assets/data/resultdata';
import KakaoShareButton from '../components/KakaoShareButton';

const Result = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const mbti = searchParams.get('mbti');
    const [resultData, setResultData] = useState({});

    useEffect(() => {
        const result = ResultData.find(e => e.best === mbti);
        setResultData(result);
    }, [mbti]);


    return (
        <Wrapper>
            <Header>예비집사 판별기</Header>
            <ContentWrapper>
                <Title>결과 보기</Title>
                <LogoImage>
                    <img
                        src={resultData.image}
                        className="rounded-circle"
                        width={320}
                        height={320}
                        alt="결과 이미지"
                    />
                </LogoImage>
                <Description>예비 집사님과 찰떡궁합인 고양이는 {resultData.name}입니다. <br/><br/>
                    {resultData.desc}
                </Description>
                <ButtonWrapper>
                    <Button
                        style={{
                            fontFamily: "Cafe24Oneprettynight",
                            backgroundColor: "#ff815a",
                            border: "none",
                            marginTop: "1rem",
                            marginBottom: "7em",
                        }}
                        onClick={() => navigate('/')}
                    >
                        테스트 다시하기
                    </Button>
                    <KakaoShareButton/>
                </ButtonWrapper>
            </ContentWrapper>
        </Wrapper>
    )
}

export default Result;


const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #faeedb;
`

const Header = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Cafe24Oneprettynight";
  background-color: rgb(255, 181, 122);
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #faeedb;
`

const Title = styled.div`
  font-size: 2em;
  margin-top: 2.2rem;
  font-family: "Cafe24Oneprettynight";
`

const LogoImage = styled.div`
  margin-top: 1em;
`

const Description = styled.div`
  font-size: 1.1em;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  font-family: "Cafe24Oneprettynight";
  text-align: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`