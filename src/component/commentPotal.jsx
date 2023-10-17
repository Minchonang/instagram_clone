import React, { useState } from "react";
import commentStyle from "./commentPotal.module.css";
import Modal from "react-overlays/Modal";

const ranT = [];
function RancomComment() {
    while (ranT.length < 10) {
        let i = parseInt(Math.random() * 10000 + 1);
        let j = 0;
        if (i > 10000) {
            j = parseInt(i / 1000) / 10;
            ranT.push(j + "만");
        } else if (i > 1000) {
            j = parseInt(i / 1000);
            ranT.push(j + "천");
        } else {
            return RancomComment();
        }
    }
}
RancomComment();
console.log(ranT);

export default function CommentPotal() {
    // React state to control Modal visibility
    const [showModal, setShowModal] = useState(false);

    // Backdrop JSX code
    const renderBackdrop = (props) => <div className='backdrop' {...props} />;

    var handleClose = () => setShowModal(false);

    var handleSuccess = () => {
        console.log("success");
    };
    const testImgUrl =
        "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*";
    const instagramLogoUrl =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1280px-Instagram_logo_2022.svg.png";
    return (
        <div className={commentStyle.modalexample}>
            <div>
                <div className={commentStyle.button} type='button' onClick={() => setShowModal(true)}>
                    <div>댓글&nbsp;{ranT[0]}개&nbsp;</div>
                    <div>모두보기</div>
                </div>
            </div>
            <p></p>

            <Modal className={commentStyle.modal} show={showModal} onHide={handleClose} renderBackdrop={renderBackdrop}>
                <div className={commentStyle.videoModal}>
                    <div className={commentStyle.video}>
                        <img
                            src='https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
                            alt='큰썸네일'
                        />
                    </div>
                    <div className={commentStyle.Text}>
                        <div className={commentStyle.modalheader}>
                            <div className={commentStyle.modaltitle}>제목을 입력하세요</div>
                            <div>
                                <span className={commentStyle.closebutton} onClick={handleClose}>
                                    <i className='xi-close-thin'></i>
                                </span>
                            </div>
                        </div>
                        <div className={commentStyle.mainTexts}>
                            <div className={commentStyle.modaldesc}>
                                <div className={commentStyle.thum}>
                                    <img src={testImgUrl} alt='임시' />
                                </div>
                                <div className={commentStyle.mainText}>
                                    <div>Dog</div>
                                    <i className='xi-check-circle-o'></i>
                                    <div className={commentStyle.mainText}>내용</div>
                                </div>
                                <div className='xi-heart-o'></div>
                            </div>
                        </div>

                        <div className={commentStyle.modalfooter}>
                            <div className={commentStyle.footerIcons}>
                                <div>
                                    <i className='xi-heart-o xi-2x' />
                                    <i className='xi-speech-o xi-2x' />
                                    <i className='xi-send xi-2x' />
                                </div>
                                <div>
                                    <i className='xi-bookmark-o xi-2x' />
                                </div>
                            </div>
                            <div>좋아요 {ranT[0]}개</div>
                            <div>
                                <button className={commentStyle.secondarybutton} onClick={handleClose}>
                                    Close
                                </button>
                                <button className={commentStyle.primarybutton} onClick={handleSuccess}>
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
