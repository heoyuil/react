/* 다른 페이지 링크 설정
    1. Link 컴포넌트를 임포트한다.
    2. Link 컴포넌트의 to 속성에 연결할 url을 작성하고, 텍스트노드로 보여줄 텍스트를 설정한다. 
*/

import { Link } from 'react-router-dom';

function Main() {

    return (
        <div>
            <h1>메인</h1>
        <nav>
            <Link to="/">HOME</Link>
            <Link to="/about">소개</Link>
            <Link to="/menu">메뉴 목록</Link>
        </nav>
        </div>   
    )
}

export default Main;