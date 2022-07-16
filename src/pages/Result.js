import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import {ResultData} from '../assets/data/resultdata';

const Result = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Header>예비집사 판별기</Header>
            <Content_wrapper>
                <Title>결과 보기</Title>
                <LogoImage>
                    <img
                        src={ResultData[0].image}
                        className="rounded-circle"
                        width={350}
                        height={350}
                    />
                </LogoImage>
                <Description>예비 집사님과 찰떡궁합인 고양이는 {ResultData[0].name}입니다.</Description>
                <Button
                    style={{fontFamily: "Cafe24Oneprettynight"}}
                    onClick={()=> navigate('/')}
                >
                    테스트 다시하기
                </Button>
            </Content_wrapper>
        </Wrapper>
    )
}

export default Result;


const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`

const Header = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Cafe24Oneprettynight";
`

const Content_wrapper = styled.div`
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