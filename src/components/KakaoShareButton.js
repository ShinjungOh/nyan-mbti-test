import React, {useEffect} from 'react'
import Button from 'react-bootstrap/Button';

const {Kakao} = window;

const KakaoShareButton = ({data}) => {
    const url = "https://nyan-mbti-test.netlify.app/"
    const resultUrl = window.location.href;

    const shareKakao = () => {
        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: '예비집사 판별기 결과 🐈',
                description: `예비 집사님과 찰떡궁합인 고양이는 ${data.name}입니다.`,
                imageUrl: url + data.image,
                link: {
                    mobileWebUrl: resultUrl,
                    webUrl : resultUrl,
                },
            },
            buttons: [
                {
                    title: '테스트 하러가기 👈',
                    link: {
                        mobileWebUrl: resultUrl,
                        webUrl : resultUrl,
                    },
                },
            ]
        });
    }

    useEffect(() => {
        Kakao.cleanup();
        Kakao.init('12d9facdb5d851b4cce6bfd29fec90c6');
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
                boxShadow: 'unset',
            }}
            onClick={shareKakao}
        >
            카카오톡 공유하기
        </Button>
    );
}

export default KakaoShareButton;