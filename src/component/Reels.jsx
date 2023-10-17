import "./Reels.css";
import React, { useState, useEffect } from "react";
import comment from "../img/comment.jpg";
import plus from "../img/plus.png";
import Share from "../img/Share.png";
import Favorites from "../img/Favorites.png";
import Video from "../img/Video.png";
import CommentPotal1 from "./commentPotal";
import Leftbar from "./LeftBar";
import RightBar from "./rightBar";

function Reels() {
    const [likes, setLikes] = useState({});
    const [isListVisible, setListVisible] = useState({});

    const [commentsVisible, setCommentsVisible] = useState({});
    const [comments, setComments] = useState({});

    const handleCommentClick = (videoId) => {
        setCommentsVisible((prevState) => ({ ...prevState, [videoId]: !prevState[videoId] }));
    };

    const handleCommentSubmit = (event, videoId) => {
        event.preventDefault();
        const commentText = event.target.elements.comment.value;
        setComments((prevState) => ({
            ...prevState,
            [videoId]: [...(prevState[videoId] || []), commentText],
        }));
        event.target.elements.comment.value = "";
    };

    const handleClick = (videoId) => {
        setListVisible((prevState) => ({ ...prevState, [videoId]: !prevState[videoId] }));
    };

    const handleLike = (videoId) => {
        setLikes({ ...likes, [videoId]: !likes[videoId] });
    };

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const [videos, setVideos] = useState([
        "n2Q8npH7FVg",
        "0HwbnAPkH6c",
        "tojB7SgqNv8",
        "B1tK6EVptYU",
        "70e22PDidpE",
        "kStQkpR87Yc",
        "FcOXV62-Jjc",
        "eTPk78qBORw",
        "a_qNm3MVYtA",
        "Sz8UJ3N0icg",
    ]);

    const handleScroll = () => {
        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        const scrollHeight =
            (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        if (scrollTop + window.innerHeight >= scrollHeight) {
            setCurrentVideoIndex(currentVideoIndex + 1);
            setVideos([...videos, "새로운비디오ID"]);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [videos]);

    return (
        <div>
            <div>
                <Leftbar></Leftbar>
                <RightBar></RightBar>
            </div>
            <div className='shortbox-container'>
                <div className='shorts1'></div>
                {videos.map((videoId, index) => (
                    <div className={`shortbox ${index === currentVideoIndex ? "active" : ""}`} key={videoId}>
                        <iframe
                            width='360'
                            height='640'
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title='YouTube video player'
                            allowFullScreen
                        ></iframe>
                        <div className='submenu1'>
                            <div
                                className={likes[videoId] ? "xi-heart xi-5x" : "xi-heart-o xi-5x"}
                                style={{ width: "100%" }}
                                onClick={() => handleLike(videoId)}
                                alt='like button'
                            />
                            <img className='comment0' src={comment} onClick={() => handleCommentClick(videoId)} />
                            <img className='plus0' src={plus} onClick={() => handleClick(videoId)} />
                        </div>
                        {commentsVisible[videoId] && (
                            <>
                                <form
                                    className='comment_comment'
                                    onSubmit={(event) => handleCommentSubmit(event, videoId)}
                                >
                                    <div className='abc'>
                                        <input type='text' name='comment' placeholder='메모장' />
                                        <button type='submit' className='com_btn'>
                                            버튼
                                        </button>
                                    </div>
                                </form>
                                <div className='commentss'>
                                    <ul className='comment_con'>
                                        {comments[videoId]?.map((commentText, index) => (
                                            <li key={index}>{commentText}</li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        )}

                        {isListVisible[videoId] && (
                            <div className='F0'>
                                <img className='Share0' src={Share} />
                                <img className='Favorites0' src={Favorites} />
                                <img className='Video0' src={Video} />
                                <CommentPotal1 />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reels;
