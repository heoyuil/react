/*================================================================ */
/*
  1. npm install react-router-dom@6 명령어를 cmd에서 실행하여 패키지 의존성을 추가해준다.
  2. 사용할 컴포넌트를 임포트한다
  3. <BrowserRouter>와 <Routes>, <Route> 컴포넌트를 이용하여 라우팅 설정을 해준다
*/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 루트 요청 시 Main으로 이동하도록 설정 */}
          {/* <Route path="/" element= { <Main />} /> */}

          {/* 인덱스로 설정해두면 위의 설정(루트 요청)과 동일하다.  */}
          <Route index element={ <Main />}/>

          <Route path="/about" element={ <About />}/>
          <Route path="/menu" element={ <Menu />}/>
          
        </Routes>
      </BrowserRouter>
    </>
    );
}

export default App;