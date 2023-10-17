import feedStyle from "./InstaFeed.module.css";
import CommentPotal from "./commentPotal";
import Leftbar from "./LeftBar";
import RightBar from "./rightBar";

function InstaFeed() {
    //피드
    // 0: 조코딩 1:MBC 2:노마스코더 3: 코딩애플 4:코딩애플티켓팅5. 페이커 6.후드식 할로윈 7.과학수업
    const imgSrc = [
        "https://yt3.googleusercontent.com/JuRcVt9OFQgqh7UL1LjihpVLEbjdNXt3tGq-IQfqRMT8wVXgWg_tzyz0S_GVsgqkB3ucBC5fqeY=s176-c-k-c0x00ffffff-no-rj",
        "https://yt3.googleusercontent.com/ytc/AOPolaT5LWfEumJ4sdIxsGXGamIv4hyU1oIa2KkaLES3Ow=s176-c-k-c0x00ffffff-no-rj",
        "https://yt3.googleusercontent.com/ytc/AOPolaSn88PvVXWN_Wy5vSr-5Eo_NGDdw_apL6bM7QKfCw=s176-c-k-c0x00ffffff-no-rj",
        "https://yt3.googleusercontent.com/ytc/AOPolaTw2ZRRi6UzhNeunJh03HOeAnKScgRJygpN7_MsVQ=s176-c-k-c0x00ffffff-no-rj",
        "https://yt3.googleusercontent.com/ytc/AOPolaTw2ZRRi6UzhNeunJh03HOeAnKScgRJygpN7_MsVQ=s176-c-k-c0x00ffffff-no-rj",
        "https://yt3.googleusercontent.com/Rkxji0X3j1vCBbIoGYVVp7oTFGRm5hJXW9mqE6wuhhNU5-lPf-5b74CpIVCisq5oRLsDhpMmFA=s176-c-k-c0x00ffffff-no-rj",
        "https://yt3.googleusercontent.com/h_u4bk8hCMEtZsCv3O3wLtpdrbr92-5h5Ev5np-bAk9KWStOCTFy2pXxzvG_yso4gwWXIHIBZA=s176-c-k-c0x00ffffff-no-rj",
        "https://yt3.googleusercontent.com/hHXn5mxN3cVf-S8Q3IJtHbVdD5cxwsZt3tfTTgUK0y7AVZSBQaM9HvYfqHaKhD9eLwEzsgzz=s176-c-k-c0x00ffffff-no-rj",
    ];
    const idSrc = [
        "@jocoding",
        "@MBCNEWS11",
        "@nomadcoders",
        "@codingapple",
        "@codingapple",
        "@T1.Shorts",
        "@hpmemes",
        "@dh.science",
    ];
    const Period = ["1주", "3시간", "4주", "1주", "46억년", "1년", "1년", "10개월"];

    const shortUrl = [
        "https://www.youtube.com/embed/m98gsRfj0Yo",
        "https://www.youtube.com/embed/q8G9V2Dkfhc",
        "https://www.youtube.com/embed/3Y7e7SIRMyo",
        "https://www.youtube.com/embed/dmMsrNdvh8M",
        "https://www.youtube.com/embed/dWo5vFuS2cU",
        "https://www.youtube.com/embed/QBI4GwKlIiw",
        "https://www.youtube.com/embed/EXNNKcckSWM",
        "https://www.youtube.com/embed/uAd8akVAssk",
    ];

    const shortTitle = [
        "📑이제 엑셀에서 파이썬을 사용할 수 있습니다!🧑🏻‍💻 #shorts",
        '수갑 풀고 도망쳤는데‥"석방했다" 허위 보고 #Shorts (MBC뉴스)',
        "업무 효율성을 2배로? 아이젠하워 매트릭스! #shorts",
        "자바스크립트 초전도체 발견",
        "숙련된 프로그래머의 티켓팅 시범",
        "페이커를 이기면 선물을 드립니다! (ft. 문도 피구)",
        "후드식 할로윈",
        "과학수업 재미있게 수업하는 선생님👨‍🏫 #대훈T #과학 #실험",
    ];

    const Random = [];
    function RandomNum() {
        while (Random.length < 8) {
            let i = parseInt(Math.random() * 8);
            if (Random.includes(i)) {
            } else {
                Random.push(i);
            }
        }
    }
    RandomNum();

    const ran10T = [];
    function randomlike() {
        while (ran10T.length < 10) {
            let i = parseInt(Math.random() * 100000 + 1);
            if (i > 5000) {
                let j = parseInt(i / 1000) / 10;
                ran10T.push(j + "만");
            } else {
                return randomlike();
            }
        }
    }
    randomlike();

    return (
        <>
            <Leftbar></Leftbar>
            <RightBar></RightBar>
            <div className={feedStyle.happyCat}>
                {imgSrc.map((v, i) => {
                    return (
                        <div className={feedStyle.Feed}>
                            <li /*style={{ border: '1px solid red' }}*/>
                                <ul>
                                    <h3></h3>
                                    {/* 유저 이미지와 썸네일 영역 */}
                                    <div className={feedStyle.idArea}>
                                        <div className={feedStyle.userThum}>
                                            <img src={imgSrc[Random[i]]} alt='thum'></img>
                                        </div>
                                        <char className={feedStyle.idText}>
                                            <div>&nbsp;{idSrc[Random[i]]}</div>
                                            <div className='xi-check-circle-o'></div>
                                            <div>
                                                <char>&nbsp;&nbsp;•&nbsp;</char>
                                                {Period[Random[i]]}
                                                <char>&nbsp;&nbsp;</char>
                                            </div>
                                            {/* <div>{Random[i]}</div> */}
                                        </char>
                                        <div></div>
                                    </div>
                                </ul>
                                <ul className={feedStyle.shorts}>
                                    <iframe
                                        width='468'
                                        height='585'
                                        src={shortUrl[Random[i]]}
                                        title={shortTitle[Random[i]]}
                                        frameborder='0'
                                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                        allowfullscreen
                                    />
                                </ul>
                                <ul className={feedStyle.mainText}>
                                    <div className={feedStyle.mainTextIcon}>
                                        <div>
                                            <i className='xi-heart-o xi-2x' />
                                            <i className='xi-speech-o xi-2x' />
                                            <i className='xi-telegram xi-2x' />
                                        </div>
                                        <i className='xi-bookmark-o xi-2x'></i>
                                    </div>
                                    <div className={feedStyle.feedText}>
                                        <span>좋아요&nbsp;{ran10T[i]}개</span>
                                        <span>
                                            <div>{idSrc[Random[i]]}&nbsp;</div>
                                            <div>문장&nbsp;</div>
                                            <div>해시태그&nbsp;</div>
                                        </span>
                                        <span>
                                            {/* 댓글보기는 페이지 구현입니다. */}

                                            <CommentPotal />
                                        </span>
                                    </div>
                                </ul>
                            </li>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
export default InstaFeed;
