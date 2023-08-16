import menus from '../data/menu-detail.json';

/* 전체 메뉴 리스트 조회 */
export function getMenuList() {

    return menus;
}

/* 메뉴 코드를 이용하여 메뉴 한개의 상세 내용 조회 */
export function getMenuDetail(menuCode) {

    return menus.filter(menu => menu.menuCode === parseInt(menuCode))[0];
}

/* 메뉴 이름을 전달 받아 메뉴 이름을 포함하고 있는 메뉴 목록 반환 */
export function searchMenu(menuName) {

    return menus.filter(menu => menu.menuName.match(menuName));
}