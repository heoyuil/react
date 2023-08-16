import { useEffect, useState } from 'react';
import MenuItem from '../components/MenuItem';
import { getMenuList} from '../api/MenuAPI';
import boxStyle from './Menu.module.css';
import { useNavigate } from 'react-router-dom';

function Menu(){

    const [menuList, setMenuList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    useEffect(
        () => {
            setMenuList(getMenuList());
        },
        []
    )

    const onClickHandler = () => {
        
        navigate(`/menu/search?menuName=${ searchValue}`);
        /* 첫번째 인자로는 링크를, 두번째 인자는 replace여부를 {replace:true}로전달가능*/
        // navigate(`/menu/search?menuName=${ searchValue}`, { replace: true});
        /* 첫번째 인자에 -1을 전달하면 뒤로 돌아가기(이전페이지)로 이동하게된다. */
        // navigate(-1);
    }
    return (
        <div>
            <h1>판매 메뉴 목록 </h1>
            <div>
                <input type="search" name="menuName" value={ searchValue } onChange={ e => setSearchValue(e.target.value)} />
                <button onClick= { onClickHandler }>검색</button>
            </div>
            <div className={ boxStyle.MenuBox}>
                { menuList.map(menu => <MenuItem key={ menu.menuCode} menu={ menu }/>)}
            </div>
        </div>
    )
}

export default Menu;