import React from 'react';
import styled from 'styled-components';
import MainImage from '../assets/black cat1.jpeg';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate('/question');
    }


    return (
        <Wrapper>
            <Header>예비집사 판별기</Header>
            <ContentWrapper>
                <Title>나에게 맞는 주인님은?</Title>
                <LogoImage>
                    <img
                        src={MainImage}
                        className="rounded-circle"
                        width={350}
                        height={350}
                        alt="시작 이미지"
                    />
                </LogoImage>
                <Description>MBTI를 기반으로 한 나와 잘 맞는 고양이 찾기 🐈</Description>
                <Button
                    style={{fontFamily: "Cafe24Oneprettynight", backgroundColor: "#ff815a", border: "none"}}
                    onClick={handleClickButton}
                >
                    테스트 시작하기
                </Button>
            </ContentWrapper>
        </Wrapper>
    );
}

export default Home;

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
  background-color: rgba(255, 181, 122, 0.79);

`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`