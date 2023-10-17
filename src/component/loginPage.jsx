import loginStyle from "./loginPage.module.css";
import catstargram from "../img/catstargram.jpg";
import appStore from "../img/dl_AppStore.png";
import playStore from "../img/dl_PlayStore.png";
import phone from "../img/phone.png";
// import { useEffect } from "react";

// 아이디 입력 및 패스워드 8자 이상 시 로그인 버튼 활성화
// let actionBtn = false;

// const pwCount = (type) => {
// 	if (userId.value.length > 6 && userPw.value.length >= 8) {
// 		actionBtn = true;
// 	} else {
// 		actionBtn = false;
// 	}

// 	if (actionBtn === true) {
// 		passBtn.classList.remove("hidden");
// 	} else {
// 		passBtn.classList.add("hidden");
// 	}
// };

const click = (event) => {
	window.location.href = "./InstaFeed";
};

function LoginPage() {
	// useEffect(() => {
	//    const userId = document.querySelector("#userId");
	//    const userPw = document.querySelector("#userPw");
	//    const passBtn = document.querySelector("#loginBtn");
	// })
	return (
		<>
			<div className={loginStyle.allArea}>
				<div className={loginStyle.mainArea}>
					<div className={loginStyle.phoneImageArea}>
						<img src={phone} alt="noImage" className={loginStyle.phoneImage} />
					</div>
					<div className={loginStyle.rightArea}>
						<div className={loginStyle.loginArea}>
							<div className={loginStyle.loginLogoArea}>
								<a href="./">
									<img
										src={catstargram}
										alt="noImage"
										className={loginStyle.loginLogo}
									/>
								</a>
							</div>

							<form>
								<div className={loginStyle.loginInputArea}>
									<input
										type="text"
										name="userId"
										placeholder="전화번호, 사용자 이름 또는 이메일"
										id="userId"
										className={loginStyle.loginUserId}
									/>
								</div>
								<div className={loginStyle.loginInputArea}>
									<input
										type="password"
										name="userPw"
										placeholder="비밀번호"
										id="userPw"
										className={loginStyle.loginPw}
										// onKeyUp={pwCount}
									/>
								</div>
								<div className={loginStyle.loginBtnArea}>
									{/* <input
								type="submit"
								value="로그인"
								id="loginBtn"
								className={loginStyle.loginBtn}
							/> */}
									{/* 조건 충족시 활성화 되는 버튼 - 보류 */}
									<input
										type="button"
										value="로그인"
										id={loginStyle.realLoginBtn}
										onClick={click}
										// className={loginStyle.hidden}
									></input>
								</div>
							</form>

							{/* --- 또는 --- */}
							<div className={loginStyle.orArea}>
								<div className={loginStyle.or_Line}></div>
								<div className={loginStyle.or_Text}>또는</div>
								<div className={loginStyle.or_Line}></div>
							</div>
							<div>
								<a
									href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Dko_KR%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%25221qorx5fjad9x4dk0yom1ob0n8j1awnqgv1t0dyq111ucsvg3lxoxl%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D4935afae-55c9-4451-ad8d-d6d59648cc31%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221qorx5fjad9x4dk0yom1ob0n8j1awnqgv1t0dyq111ucsvg3lxoxl%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=ko_KR&pl_dbl=0"
									className={loginStyle.fbLoginArea}
								>
									<img
										src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
										alt="no"
										className={loginStyle.fbIcon}
									/>
									<div className={loginStyle.fbLogin}>FaceBook으로 로그인</div>
								</a>
							</div>
							<div className={loginStyle.forgetPw}>비밀번호를 잊으셨나요?</div>
						</div>
						<div className={loginStyle.signInArea}>
							<div>계정이 없으신가요?</div>
							<div className={loginStyle.singInClick}>가입하기</div>
						</div>

						<div>
							<div className={loginStyle.appDLText}>앱을 다운로드하세요.</div>
						</div>
						<div className={loginStyle.storeBtnArea}>
							<a
								href="https://apps.apple.com/app/instagram/id389801252?hl=ko&vt=lo"
								className={loginStyle.storeBtn}
							>
								<img
									src={appStore}
									alt="noImgae"
									className={loginStyle.appStore_img}
								/>
							</a>
							<a
								href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DF02BB6A2-9056-4E3B-B7E7-C99939692EE2%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge&hl=ko"
								className={loginStyle.storeBtn}
							>
								<img
									src={playStore}
									alt="noImage"
									className={loginStyle.playStore_img}
								/>
							</a>
						</div>
					</div>
				</div>
				{/* 약관 등 하단 링크 */}
				<div className={loginStyle.bottomContent}>
					<div className={loginStyle.contentText}>
						<span className={loginStyle.contentLink}>Cats</span>
						<span className={loginStyle.contentLink}>소개</span>
						<span className={loginStyle.contentLink}>블로그</span>
						<span className={loginStyle.contentLink}>채용</span>
						<span className={loginStyle.contentLink}>정보</span>
						<span className={loginStyle.contentLink}>도움말</span>
						<span className={loginStyle.contentLink}>API</span>
						<span className={loginStyle.contentLink}>개인정보처리방침</span>
						<span className={loginStyle.contentLink}>약관</span>
						<span className={loginStyle.contentLink}>위치</span>
						<span className={loginStyle.contentLink}>Catsagram</span>
						<span className={loginStyle.contentLink}>Lite</span>
						<span className={loginStyle.contentLink}>Threads</span>
						<span className={loginStyle.contentLink}>
							연락처 업로드 & 비사용자
						</span>
						<span className={loginStyle.contentLink}>Cats Verified</span>
					</div>
					<div className={loginStyle.lang_copyright}>
						<span>
							<select
								name="language"
								id="selectLanguage"
								className={loginStyle.selectLang}
							>
								<option value="af">Afrikaans</option>
								<option value="cs">Čeština</option>
								<option value="da">Dansk</option>
								<option value="ja">日本語</option>
								<option value="ko" selected>
									한국어
								</option>
								<option value="nl">Nederlands</option>
								<option value="ru">Русский</option>
								<option value="zh-cn">中文(简体)</option>
								<option value="zh-tw">中文(台灣)</option>
								<option value="sk">Slovenčina</option>
							</select>
						</span>
						<div className={loginStyle.copyright}>
							© 2023 Instagram from Cats
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default LoginPage;
