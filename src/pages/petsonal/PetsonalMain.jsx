import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import S from "./style";
import { Link } from "react-router-dom";

const PetsonalMain = () => {
  return (
    <div>
      <Header />
      <S.PetsonalContainer>
        <S.FirstImage>
        <S.StartImage>
          <S.MainFirst src= {`${process.env.PUBLIC_URL}/assets/images/petsonal/petsonal-main.png`} alt="메인" />
        </S.StartImage>
        <S.MainText>what’s your pet?</S.MainText>
        <Link className="go-to-start" to={"/my-pet/test-list"}>
           TEST START
        </Link>
        </S.FirstImage>

        <S.SecondImage>
          <S.SecondTextWrap >
            <S.SecondText>New to Pet Personal color? ✨</S.SecondText>
            <S.SecondSubText>
              POW POW에서는 펫스널컬러 검사를 통한 내 반려동물 탐구 서비스를
              지원해드리고 있어요.
            </S.SecondSubText>
          </S.SecondTextWrap >
          <S.BookWrap>
            <img src={`${process.env.PUBLIC_URL}/assets/images/petsonal/yellow-book.png`} alt="펫노랑책" />
            <div>
              <S.Big>펫스널컬러</S.Big>
              <S.Small>를 통해</S.Small>
              <S.Medium>반려동물의 꿀템 찾기!</S.Medium>
            </div>
          </S.BookWrap>
        </S.SecondImage>

        <S.ThirdImage>
          <S.SecondTextWrap >
            <S.SecondText> 반려동물을 8가지 색상으로 표현해본다면?</S.SecondText>
            <S.SecondSubText>
             당신의 반려동물은 어떤 색깔을 가졌을까요? POWPOW에서 특별한 탐구를 시작해보세요! 
            </S.SecondSubText>
            <img src={`${process.env.PUBLIC_URL}/assets/images/petsonal/petsonal-image.jpg`} alt="" />
          </S.SecondTextWrap >
         
        </S.ThirdImage>

        <S.SecondImage>
          <S.SecondTextWrap>
            <S.SecondText>색깔별 포스트를 구경해보세요 🔎</S.SecondText>
            <S.SecondSubText>
              다양한 소식들은 커뮤니티 메인 홈페이지에서 확인 가능해요.
            </S.SecondSubText>
          </S.SecondTextWrap>
          <S.BookWrap>
            <img src={`${process.env.PUBLIC_URL}/assets/images/petsonal/purple-book.png`} alt="펫보라책" />
            <S.TextButton>
              <div>
                <S.Big>펫스널컬러</S.Big>
                <S.Small>
                  를 <br /> 더 완벽하게 즐기는 방법
                </S.Small>
              </div>
              <Link to={"/community"}>
                <S.GoCommunityButton>POW POW 커뮤니티</S.GoCommunityButton >
              </Link>            
            </S.TextButton>
          </S.BookWrap>
        </S.SecondImage>
        <S.FinalImage>
          <S.FinalText>지금 바로 POW POW에서 만나보세요!✨</S.FinalText>
          <img src={`${process.env.PUBLIC_URL}/assets/images/petsonal/qr-code.png`} alt="qr" />
        </S.FinalImage>
      </S.PetsonalContainer>
      <Footer />
    </div>
  );
};

export default PetsonalMain;
