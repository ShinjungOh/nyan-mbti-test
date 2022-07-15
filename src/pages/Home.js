import React from 'react';
import styled from 'styled-components';
import MainImage from '../assets/black cat1.jpeg';
import Button from 'react-bootstrap/Button';


const Home = () => {
    return (
        <Wrapper>
            <Header>예비집사 판별기</Header>
            <Content_wrapper>
                <Title>나에게 맞는 주인님은?</Title>
                <LogoImage>
                    <img
                        src={MainImage}
                        className="rounded-circle"
                        width={350}
                        height={350}
                    />
                </LogoImage>
                <Description>MBTI를 기반으로 한 나와 잘 맞는 고양이 찾기 🐈</Description>
                <Button>테스트 시작하기</Button>
            </Content_wrapper>
        </Wrapper>
    );
}

export default Home;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`

const Header = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content_wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  font-size: 30px;
  margin-top: 40px;
`

const LogoImage = styled.div`
  margin-top: 10px;
`

const Description = styled.div`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`