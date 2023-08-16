import { useSearchParams } from 'react-router-dom';
import boxStyle from './Menu.module.css';
import { useEffect, useState } from 'react';
import MenuItem from '../components/MenuItem';
import { searchMenu } from '../api/MenuAPI';


function MenuSearchResult() {

    /* useSearchParams훅스를 이용하면 쿼리스트링 형태로 전달된값을 받을 수 있다. */
    const [searchParams] = useSearchParams();

    /* 쿼리스트링의 key값을 get함수에 전달하여 해당 파라미터 값을 읽어온다. */
    const menuName = searchParams.get('menuName');

    const [menuList, setMenuList] = useState([]);

    useEffect(
        () => {
            /* 검색어를 전달하여 해당 이름이 포함된 메뉴를 검색한 후 결과를 배열로 반환받는다. */
            setMenuList(searchMenu(menuName));
        },
        [menuName]
    )

    return (
        <div>
            <h1>검색된 메뉴</h1>
            <div className={ boxStyle.MenuBox }>
                { menuList.map(menu => <MenuItem key={menu.menuCode} menu={ menu }/>)}
            </div>
        </div>
    )
}

export default MenuSearchResult;