import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import LeftBar from "./component/LeftBar";
import InstaFeed from "./component/InstaFeed";
// import Reels from "./component/Reels";
// import RightBar from "./component/rightBar";
import Reels from "./component/Reels";
import LoginPage from "./component/loginPage";
// import Topbar from "./component/Topbar";

function App() {
    return (
        <>
            <BrowserRouter>
                <div id='leftFeedRight'>
                    {/* <InstaFeed></InstaFeed> */}
                    {/* <Topbar /> */}
                    <Routes>
                        <Route path='/LoginPage' element={<LoginPage />}></Route>
                        <Route path='/' element={<LoginPage />}></Route>
                        <Route path='/InstaFeed' element={<InstaFeed />}></Route>
                        <Route path='/Reels' element={<Reels />}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
