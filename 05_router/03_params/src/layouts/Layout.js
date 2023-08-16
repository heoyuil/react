import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
/*
    Outlet 사용
    Outlet 컴포넌트는 라우팅되는 컴포넌트를 대체하기 위한 마커 역할을 한다.
    헤더나 공통적인 역할을 수행하는 nav영역 같은 경우 레이아웃으로 위치를 지정하고
    Outlet으로 라우팅 될 컴포넌트를 대체하기 위해 표기해두면, Outlet에 해당하는
    부분만 변경이 되게 된다.
*/
function Layout(){

    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
        </>
    )
}    

export default Layout;