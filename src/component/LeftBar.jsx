import React, { useState, useEffect } from "react";
import leftStyle from "./LeftBar.module.css";
import Brand_logo from "../img/catstargram.jpg";
import Cat_img from "../img/3_1.jpg";

function Leftbar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    //반응형 웹사이트 캣 이미지, 브랜드로고
    function logoSize(windowWidth) {
        if (windowWidth < 1200) {
            return Cat_img;
        } else {
            return Brand_logo;
        }
    }
    // 아이콘 1200기준으로 나눠놨습니다. 1200기준으로 다른 아이콘 적용해도 됩니다.
    function iconSize(windowWidth) {
        if (windowWidth < 1200) {
            return "small";
        } else if (windowWidth >= 1200) {
            return "medium";
        }
    }
    // 1200보다 작을 경우 출력없음, 1200보다 큰 경우 글자 출력
    function nameSize(windowWidth) {
        if (windowWidth < 1200) {
            return "";
        } else if (windowWidth >= 1200) {
            return ["  홈", "  검색", "  릴스", "  메세지", "  설정", "로그아웃"];
        }
    }

    return (
        <>
            <aside className={leftStyle.aside}>
                <div>
                    <div>
                        {/* 로고 영역입니다. */}
                        <a href='http://localhost:3000/InstaFeed'>
                            <img src={logoSize(windowWidth)} className={leftStyle.Logo2} alt='logo2' />
                        </a>
                    </div>
                    {/* 아이콘 및, 글자 영역입니다. */}
                    <div id={leftStyle.icon}>
                        <ul>
                            <li className={leftStyle.icomImage}>
                                <a href='http://localhost:3000/InstaFeed'>
                                    <i
                                        className={
                                            iconSize(windowWidth) === "small"
                                                ? "xi-home-o xi-2x small"
                                                : iconSize(windowWidth) === "medium"
                                                ? "xi-home-o xi-2x medium"
                                                : iconSize(windowWidth) === "large"
                                                ? "xi-apps xi-3x large"
                                                : ""
                                        }
                                    ></i>
                                    <div>{nameSize(windowWidth)[0]}</div>
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li className={leftStyle.icomImage}>
                                <a href='http://google.com'>
                                    <i
                                        className={
                                            iconSize(windowWidth) === "small"
                                                ? "xi-search xi-2x"
                                                : iconSize(windowWidth) === "medium"
                                                ? "xi-search xi-2x"
                                                : iconSize(windowWidth) === "large"
                                                ? "xi-apps xi-3x"
                                                : ""
                                        }
                                    ></i>
                                    <div>{nameSize(windowWidth)[1]}</div>
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li className={leftStyle.icomImage}>
                                <a href='http://localhost:3000/Reels'>
                                    <i
                                        className={
                                            iconSize(windowWidth) === "small"
                                                ? "xi-youtube-play xi-2x"
                                                : iconSize(windowWidth) === "medium"
                                                ? "xi-youtube-play xi-2x"
                                                : iconSize(windowWidth) === "large"
                                                ? "xi-apps xi-3x"
                                                : ""
                                        }
                                    ></i>
                                    <div>{nameSize(windowWidth)[2]}</div>
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li className={leftStyle.icomImage}>
                                <a href='임시주소'>
                                    <i
                                        className={
                                            iconSize(windowWidth) === "small"
                                                ? "xi-message-o xi-2x"
                                                : iconSize(windowWidth) === "medium"
                                                ? "xi-message-o xi-2x"
                                                : iconSize(windowWidth) === "large"
                                                ? "xi-apps xi-3x"
                                                : ""
                                        }
                                    ></i>
                                    <div>{nameSize(windowWidth)[3]}</div>
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li className={leftStyle.icomImage}>
                                <a href='임시주소'>
                                    <i
                                        className={
                                            iconSize(windowWidth) === "small"
                                                ? "xi-wrench xi-2x"
                                                : iconSize(windowWidth) === "medium"
                                                ? "xi-wrench xi-2x"
                                                : iconSize(windowWidth) === "large"
                                                ? "xi-apps xi-3x"
                                                : ""
                                        }
                                    ></i>
                                    <div>{nameSize(windowWidth)[4]}</div>
                                </a>
                            </li>
                        </ul>
                        <ul className={leftStyle.logOutBox}>
                            <li className={leftStyle.icomImage}>
                                <a href='http://localhost:3000/Loginpage'>
                                    <i
                                        className={
                                            iconSize(windowWidth) === "small"
                                                ? "xi-log-out"
                                                : iconSize(windowWidth) === "medium"
                                                ? "xi-log-out"
                                                : iconSize(windowWidth) === "large"
                                                ? "xi-log-out"
                                                : ""
                                        }
                                    ></i>
                                    <p>{nameSize(windowWidth)[5]}</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Leftbar;
