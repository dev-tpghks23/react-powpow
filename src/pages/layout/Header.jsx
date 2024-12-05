import React, { useState } from 'react';
import S from "./style";
import { Link } from 'react-router-dom'

const Header = () => {

    const member = "";
    const [isHover, setIsHover] = useState(false);
    const [isSearch, setIsSearch] = useState(false);

    const handleMouseOver = () => {
        setIsHover(true);
    }
    const handleMouseOut = () => {
        setIsHover(false);
    }
    const handleShowSearch = () => {
        setIsSearch(!isSearch)
    }
    return (
        <S.HeaderWrap className={ isHover ? "active" : "" } onMouseOut={handleMouseOut}>
            <S.Header>
                <S.LogoWrap>
                    <Link to={"/"}><img src={`${process.env.PUBLIC_URL}/assets/images/layout/logo.png`} alt="로고" /></Link>
                </S.LogoWrap>
                <S.MenuWrap onMouseOver={handleMouseOver}>
                    <S.MainMenu>
                        <li><Link to={"/petsonal"}>펫스널컬러</Link></li>
                        <li><Link to={"/store"}>스토어</Link></li>
                        <li><Link to={"/community"}>커뮤니티</Link></li>
                        <li><Link to={"/myhome"}>마이홈</Link></li>
                    </S.MainMenu>
                    <S.SubMenuWrap className={ isHover ? "active" : "" } >
                        <S.SubMenu>
                            <li><Link to={"/petsonal"}>테스트</Link></li>
                            <li></li>
                        </S.SubMenu>
                        <S.SubMenu>
                            <li><Link to={"/store-dog"}>강아지</Link></li>
                            <li><Link to={"/store-cat"}>고양이</Link></li>
                        </S.SubMenu>
                        <S.SubMenu>
                            <li><Link to={"/post"}>추천 바구니</Link></li>
                            <li><Link to={"/my-post-list"}>내 게시물</Link></li>
                        </S.SubMenu>
                        <S.SubMenu>
                            <li><Link to={"profile-update"}>나의 정보</Link></li>
                            <li><Link to={"/my-pet"}>반려동물 정보</Link></li>
                        </S.SubMenu>
                    </S.SubMenuWrap>
                </S.MenuWrap>
                <S.IconWrap>
                    { isSearch ? (
                        <S.SearchWrap>
                             <input type="text" />
                             <img
                                className='icon' 
                                src={`${process.env.PUBLIC_URL}/assets/images/layout/search.png`} alt="로고"
                                onClick={handleShowSearch}
                             />
                        </S.SearchWrap>
                    ) : (
                        <img 
                            src={`${process.env.PUBLIC_URL}/assets/images/layout/search.png`} alt="로고"
                            onClick={handleShowSearch}
                        />
                    )}
                    <Link to={""} ><img src={`${process.env.PUBLIC_URL}/assets/images/layout/delivery.png`} alt="로고"/></Link>
                    <Link to={"/cart"} ><img src={`${process.env.PUBLIC_URL}/assets/images/layout/cart.png`} alt="로고"/></Link>
                    <p>|</p>
                    { member ? (
                        <Link to={"/logout"}>로그아웃</Link>
                    ) : (
                        <Link to={"/login"}>로그인</Link>
                    )}
                </S.IconWrap>
            </S.Header>
        </S.HeaderWrap>
    );
};

export default Header;