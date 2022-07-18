import React, {useEffect} from 'react'
import Button from 'react-bootstrap/Button';

const {Kakao} = window;

const KakaoShareButton = () => {
    const url = "https://nyan-mbti-test.netlify.app/"
    const resultUrl = window.location.href;

    // console.log(resultUrl, url);
    // console.log(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);

    const shareKakao = () => {
        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: '예비집사 판별기 결과',
                description: '예비 집사님이 고양이를 키운다면 가장 잘 맞는 고양이는 뱅갈입니다.',
                imageUrl:
                    'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
                link: {
                    mobileWebUrl: 'https://developers.kakao.com',
                    androidExecutionParams: 'test',
                },
            },
            buttons: [
                {
                    title: '테스트 하러가기',
                    link: {
                        mobileWebUrl: url,
                    },
                },
            ]
        });
    }

    useEffect(() => {
        Kakao.cleanup();
        Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
        // console.log(Kakao.isInitialized());  // 정상 초기화시 true
    }, []);


    return (
        <Button
            style={{
                fontFamily: "Cafe24Oneprettynight",
                backgroundColor: "#ff815a",
                border: "none",
                marginTop: "1rem",
                marginBottom: "7em",
                marginLeft: "0.8rem",
            }}
            onClick={shareKakao}
        >
            카카오톡 공유하기
        </Button>
    );
}

export default KakaoShareButton;