import rightStyle from "./rightBar.module.css";

// 계정 추천 array: accounts [
// photo: 계정 사진
// userId: 계정 아이디
// description: 추천 이유
// ]
const accounts = [
    {
        photo: "https://i.pinimg.com/originals/89/91/40/89914007d7e784f3f1b08abfd53f25f8.jpg",
        userId: "princess111",
        description: "Instagram 신규 가입",
    },
    {
        photo: "https://i.pinimg.com/originals/1c/cf/f0/1ccff0a256a5dfd24bf32782326582f7.jpg",
        userId: "mengu123",
        description: "Instagram 신규 가입",
    },
    {
        photo: "https://i.pinimg.com/originals/3a/ae/6b/3aae6b987876c31d80de542696dafb5b.jpg",
        userId: "tomcat",
        description: "kepco님 외 1명이 팔로우합니다",
    },
    {
        photo: "https://i.pinimg.com/originals/5f/e6/39/5fe639ef6c64fd6607b11bc7e90c5be6.png",
        userId: "tomassss",
        description: "allice님 외 4명이 팔로우합니다",
    },
    {
        photo: "https://i.pinimg.com/originals/36/fa/7b/36fa7b46c58c94ab0e5251ccd768d669.jpg",
        userId: "imhuman",
        description: "allikik님 외 1명이 팔로우합니다",
    },
    {
        photo: "https://i.pinimg.com/564x/87/66/ca/8766cae305c8df75bb1c1a2ff0e65ce5.jpg",
        userId: "xhtjd",
        description: "sldkfmtj님 외 2명이 팔로우합니다",
    },
    {
        photo: "https://i.pinimg.com/originals/23/e3/55/23e35564363820a6a03cd05ec983723a.jpg",
        userId: "alcccice",
        description: "falksdjgl님 외 3명이 팔로우합니다",
    },
    {
        photo: "https://i.pinimg.com/564x/60/80/21/608021ec03ae1bc37bb9554e9964846b.jpg",
        userId: "tmfvmstkfka",
        description: "Instagram 신규 가입",
    },
    {
        photo: "https://i.pinimg.com/564x/dc/6c/b0/dc6cb0521d182f959da46aaee82e742f.jpg",
        userId: "smilesdj",
        description: "Instagram 신규 가입",
    },
    {
        photo: "https://i.pinimg.com/564x/36/84/9a/36849a4b414516bf25ea2a28848b7068.jpg",
        userId: "lovvve",
        description: "Instagram 신규 가입",
    },
];

// 추천 계정 팔로우/팔로잉 버튼
// '팔로우' 버튼을 누르면 '팔로잉'과 함께 색이 바뀜 -> 현재 글자만 바뀜.

function click(event) {
    const target = event.target;
    if (target.innerText === "팔로우") {
        target.style.color = "#737373";
        target.innerText = "진행중";
        target.style.cursor = "default";
        setTimeout(() => {
            target.innerText = "팔로잉";
            target.style.color = "#00376b";
            target.style.cursor = "pointer";
            target.classList.remove("listFollow");
            target.classList.add("listUnfollow");
        }, 1000);
    } else {
        target.style.color = "#737373";
        target.innerText = "진행중";
        target.style.cursor = "default";
        setTimeout(() => {
            target.innerText = "팔로우";
            target.style.cursor = "pointer";
            target.style.color = "#1977f2";
            target.classList.remove("listUnfollow");
            target.classList.add("listFollow");
        }, 1000);
    }
}

// 우측 계정 추천
// 추천 계정 3개
function RightBar() {
    // 추천 계정 랜덤 선정
    const randomNum = [];
    const pickAccount = () => {
        while (randomNum.length < 5) {
            let ran = parseInt(Math.random() * 10);
            if (!randomNum.includes(ran)) {
                randomNum.push(ran);
            }
        }
    };
    pickAccount();

    return (
        <>
            <div className={rightStyle.rightSide}>
                {/* 내 계정 */}
                <div className={rightStyle.myProfile}>
                    <a href="/'" className={rightStyle.myProfile}>
                        <img
                            src='https://i.pinimg.com/564x/d3/f8/76/d3f87646e05cd0f3e72859e9b0352417.jpg'
                            alt='noMyPhoto'
                            className={rightStyle.listUserPhoto}
                        />
                        <div className={rightStyle.listUserText}>
                            <span className={rightStyle.listUserId}>myAccount</span>
                            <span className={rightStyle.listUserDesc}>인스타그램 하지 마세요</span>
                        </div>
                    </a>
                </div>

                {/* 회원님을 위한 추천 영역 */}
                <div className={rightStyle.userListArea}>
                    <div className={rightStyle.forYouArea}>
                        <span className={rightStyle.forYou}>회원님을 위한 추천</span>
                        <span>
                            <a href='https://www.instagram.com/explore/people/' className={rightStyle.seeAll}>
                                모두 보기
                            </a>
                        </span>
                    </div>
                    <ul>
                        <li className={rightStyle.listUser}>
                            <a href="/'" className={rightStyle.listUser}>
                                <img
                                    src={accounts[randomNum[0]].photo}
                                    className={rightStyle.listUserPhoto}
                                    alt='noProfile'
                                />
                                <div className={rightStyle.listUserText}>
                                    <span className={rightStyle.listUserId}>{accounts[randomNum[0]].userId}</span>
                                    <span className={rightStyle.listUserDesc}>
                                        {accounts[randomNum[0]].description}
                                    </span>
                                </div>
                            </a>
                            <button onClick={click} className={rightStyle.listFollowBtn} style={{ color: "#1977f2" }}>
                                팔로우
                            </button>
                        </li>

                        <li className={rightStyle.listUser}>
                            <a href='./' className={rightStyle.listUser}>
                                <img
                                    src={accounts[randomNum[1]].photo}
                                    className={rightStyle.listUserPhoto}
                                    alt='noProfile'
                                />
                                <div className={rightStyle.listUserText}>
                                    <span className={rightStyle.listUserId}>{accounts[randomNum[1]].userId}</span>
                                    <span className={rightStyle.listUserDesc}>
                                        {accounts[randomNum[1]].description}
                                    </span>
                                </div>
                            </a>
                            <button onClick={click} className={rightStyle.listFollowBtn} style={{ color: "#1977f2" }}>
                                팔로우
                            </button>
                        </li>

                        <li className={rightStyle.listUser}>
                            <a href="/'" className={rightStyle.listUser}>
                                <img
                                    src={accounts[randomNum[2]].photo}
                                    className={rightStyle.listUserPhoto}
                                    alt='noProfile'
                                />
                                <div className={rightStyle.listUserText}>
                                    <span className={rightStyle.listUserId}>{accounts[randomNum[2]].userId}</span>
                                    <span className={rightStyle.listUserDesc}>
                                        {accounts[randomNum[2]].description}
                                    </span>
                                </div>
                            </a>
                            <button onClick={click} className={rightStyle.listFollowBtn} style={{ color: "#1977f2" }}>
                                팔로우
                            </button>
                        </li>

                        <li className={rightStyle.listUser}>
                            <a href="/'" className={rightStyle.listUser}>
                                <img
                                    src={accounts[randomNum[3]].photo}
                                    className={rightStyle.listUserPhoto}
                                    alt='noProfile'
                                />
                                <div className={rightStyle.listUserText}>
                                    <span className={rightStyle.listUserId}>{accounts[randomNum[3]].userId}</span>
                                    <span className={rightStyle.listUserDesc}>
                                        {accounts[randomNum[3]].description}
                                    </span>
                                </div>
                            </a>
                            <button onClick={click} className={rightStyle.listFollowBtn} style={{ color: "#1977f2" }}>
                                팔로우
                            </button>
                        </li>

                        <li className={rightStyle.listUser}>
                            <a href="/'" className={rightStyle.listUser}>
                                <img
                                    src={accounts[randomNum[4]].photo}
                                    className={rightStyle.listUserPhoto}
                                    alt='noProfile'
                                />
                                <div className={rightStyle.listUserText}>
                                    <span className={rightStyle.listUserId}>{accounts[randomNum[4]].userId}</span>
                                    <span className={rightStyle.listUserDesc}>
                                        {accounts[randomNum[4]].description}
                                    </span>
                                </div>
                            </a>
                            <button onClick={click} className={rightStyle.listFollowBtn} style={{ color: "#1977f2" }}>
                                팔로우
                            </button>
                        </li>
                    </ul>
                    <div className={rightStyle.introduce}>소개 . 도움말 . 홍보 . 센터 . API . 채용 정보 .</div>
                    <div className={rightStyle.introduce}>개인정보처리방침 . 약관 . 위치 . 언어 . Cats Verified</div>
                    <br />
                    <div className={rightStyle.introduce}>© 2023 CATAGRAM FROM CATS</div>
                </div>
            </div>
        </>
    );
}

export default RightBar;
