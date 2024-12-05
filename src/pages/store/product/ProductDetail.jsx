import React from 'react';
import {Link} from "react-router-dom";
// import S from './style';


// 더미데이터 확인용

const productList = [
    {
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 11_900,
        src : "/assets/images/store/dental-dog.png",
        productColor : "Orange",
        productSize : "M",
        reviewStar : 4.5,
        soldCount : 100,
        productDate : "2023-01-03"

    },
    {
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 5_900,
        src : "/assets/images/store/product2.png",
        productColor : "Gold",
        productSize : "S",
        reviewStar : 3,
        soldCount : 200,
        productDate : "2023-05-03"
    },
    {
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 6_500,
        src : "/assets/images/store/product3.png",
        productColor : "Gradation",
        productSize : "M",
        reviewStar : 2,
        soldCount : 300,
        productDate : "2023-07-03"
    },
    {
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 4_000,
        src : "/assets/images/store/product4.png",
        productColor : "Dark Purple",
        productSize : "L",
        reviewStar : 5,
        soldCount : 50,
        productDate : "2023-03-03"
    },
    {
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 12_900,
        src : "/assets/images/store/product5.png",
        productColor : "Light Purple",
        productSize : "L",
        reviewStar : 2,
        soldCount : 600,
        productDate : "2023-07-03"
    },
    {
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 14_000,
        src : "/assets/images/store/product6.png",
        productColor : "Gold",
        productSize : "S",
        reviewStar : 1,
        soldCount : 100,
        productDate : "2023-01-03"
    },
    {
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 7_900,
        src : "/assets/images/store/dental-dog.png",
        productColor : "Orange",
        productSize : "M",
        reviewStar : 4.5,
        soldCount : 130,
        productDate : "2023-01-07"
    },
    {
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 8_000,
        src : "/assets/images/store/product2.png",
        productColor : "Gradation",
        productSize : "L",
        reviewStar : 4,
        soldCount : 170,
        productDate : "2023-09-03"
    },
]

const products = productList.map(({productName, productPrice, src}, i) => (
    // <S.BestProduct key={i} >
    //     <Link to={"/product"}>
    //         <img src={src} alt={"상품" + (i + 1)} />
    //         <span>{productName}</span>
    //     </Link>
    //     <span style={{ fontWeight: 700 }}>{productPrice}<br/>원</span>
    //     <button>담기</button>
    // </S.BestProduct>
    <div key={i} >
        <Link to={"/product"}>
            <img src={src} alt={"상품" + (i + 1)} />
            <span>{productName}</span>
        </Link>
        <span style={{ fontWeight: 700 }}>{productPrice}<br/>원</span>
        <button>담기</button>
    </div>
))

// 하단 스위치 액션 넣기


const ProductDetail = () => {
    return (
        <div>

            product Detail
            <h1>{products}</h1>

            {/*    <div className="container3">*/}
            {/*        <div className="info-wrap">*/}
            {/*            <div className="tab-wrap">*/}
            {/*                <a className="info-btn" href="javascript:showInfo()">상품정보</a>*/}
            {/*                <a className="review-btn" href="javascript:showReveiw()">상품평</a>*/}
            {/*                <a className="delivery-btn" href="javascript:showDelivery()">주문/배송안내</a>*/}
            {/*                <a calss="change-btn" href="javascript:showChange()">교환/반품안내</a>*/}
            {/*            </div>*/}
            {/*            <div className="container btn1">*/}
            {/*                <table className="product-info2">*/}
            {/*                    <tr>*/}
            {/*                        <th colSpan="2">필수 표기정보</th>*/}
            {/*                    </tr>*/}
            {/*                    <tr>*/}
            {/*                        <td>제품명</td>*/}
            {/*                        <td>컨텐츠참조</td>*/}
            {/*                    </tr>*/}
            {/*                    <tr>*/}
            {/*                        <td>생산자 및 소재지</td>*/}
            {/*                        <td>컨텐츠참조</td>*/}
            {/*                    </tr>*/}
            {/*                    <tr>*/}
            {/*                        <td>포장단위별 내용물의 용량(중량), 수량</td>*/}
            {/*                        <td>210g X 24개</td>*/}
            {/*                    </tr>*/}
            {/*                    <tr>*/}
            {/*                        <td>영양성분</td>*/}
            {/*                        <td>컨텐츠참조</td>*/}
            {/*                    </tr>*/}
            {/*                    <tr>*/}
            {/*                        <td>소비자 안전을 위한 주의사항</td>*/}
            {/*                        <td>컨텐츠참조</td>*/}
            {/*                    </tr>*/}
            {/*                    <tr>*/}
            {/*                        <td>유전자변형식품에 해당하는 경우의 표시</td>*/}
            {/*                        <td>해당없음</td>*/}
            {/*                    </tr>*/}
            {/*                    <tr>*/}
            {/*                        <td>수입식품 문구</td>*/}
            {/*                        <td>해당없음</td>*/}
            {/*                    </tr>*/}
            {/*                    <tr>*/}
            {/*                        <td>소비자상담 관련 전화번호</td>*/}
            {/*                        <td>루쏘고객센터 1577-7011</td>*/}
            {/*                    </tr>*/}
            {/*                    <tr>*/}
            {/*                        <td>제조연월일, 소비기한 또는 품질유지기한</td>*/}
            {/*                        <td>소비기한 : 2025년 01월 21일 이거나 그 이후인 상품</td>*/}
            {/*                    </tr>*/}
            {/*                </table>*/}
            {/*            </div>*/}
            {/*            <div className="notice-wrap review-wrap btn2">*/}
            {/*                <div className="reveiw-title">*/}
            {/*                    <p>전체 상품평(301건)</p> <p id="product-star">★★★★★5/5</p>*/}
            {/*                </div>*/}
            {/*                <div className="sector"></div>*/}
            {/*                <div className="product-detail">*/}
            {/*                    <div className="user-info-wrap">*/}
            {/*                        <div className="user-info">*/}
            {/*                            <p id="product-star">★★★★★</p> <p>ita******</p>*/}
            {/*                        </div>*/}
            {/*                        <img src="./images/not-found.png"/>*/}
            {/*                    </div>*/}
            {/*                    <div className="product-review">*/}
            {/*                        <p className="p1">오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 69g</p>*/}
            {/*                        <p className="p2">2024-09-28 작성</p>*/}
            {/*                        <p className="p3">1+1이라 다이어트용으로 10개 주문햇어요.원플원이라 20개 잘받앗네요.개당 가격은 비싸지만 원플원이라 그나마*/}
            {/*                            괞네요.맛잇다고해서 한달 먹을꺼주문햇네요.유통기한은 10월24일까지라 3주 입니다.원플원이라 딱 10개 주문하면 무료배송에 20개 와서 하루에*/}
            {/*                            하나씩 먹으면 유통기한 전까지 먹을수 잇어요.다이어트용으로 좋아요.그리고 냉장보관 입니다.냉동보관이 아닙니다.냉동보관시 식감이 떨어질수*/}
            {/*                            잇어요.진공포장이라 김치냉장고에 보관하면 좀더 오래먹을수 잇을꺼 같아요.먹어보고 맛잇으면 또 주문할께요.전자렌지나 에어프라이어에 짧은시간에*/}
            {/*                            돌려서 먹을수 잇으니 간편합니다. </p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="sector"></div>*/}
            {/*                <div className="product-detail">*/}
            {/*                    <div className="user-info-wrap">*/}
            {/*                        <div className="user-info">*/}
            {/*                            <p id="product-star">★★★★★</p> <p>ita******</p>*/}
            {/*                        </div>*/}
            {/*                        <img src="./images/not-found.png"/>*/}
            {/*                    </div>*/}
            {/*                    <div className="product-review">*/}
            {/*                        <p className="p1">오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 69g</p>*/}
            {/*                        <p className="p2">2024-09-28 작성</p>*/}
            {/*                        <p className="p3">1+1이라 다이어트용으로 10개 주문햇어요.원플원이라 20개 잘받앗네요.개당 가격은 비싸지만 원플원이라 그나마*/}
            {/*                            괞네요.맛잇다고해서 한달 먹을꺼주문햇네요.유통기한은 10월24일까지라 3주 입니다.원플원이라 딱 10개 주문하면 무료배송에 20개 와서 하루에*/}
            {/*                            하나씩 먹으면 유통기한 전까지 먹을수 잇어요.다이어트용으로 좋아요.그리고 냉장보관 입니다.냉동보관이 아닙니다.냉동보관시 식감이 떨어질수*/}
            {/*                            잇어요.진공포장이라 김치냉장고에 보관하면 좀더 오래먹을수 잇을꺼 같아요.먹어보고 맛잇으면 또 주문할께요.전자렌지나 에어프라이어에 짧은시간에*/}
            {/*                            돌려서 먹을수 잇으니 간편합니다. </p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="sector"></div>*/}
            {/*                <div className="product-detail">*/}
            {/*                    <div className="user-info-wrap">*/}
            {/*                        <div className="user-info">*/}
            {/*                            <p id="product-star">★★★★★</p> <p>ita******</p>*/}
            {/*                        </div>*/}
            {/*                        <img src="./images/not-found.png"/>*/}
            {/*                    </div>*/}
            {/*                    <div className="product-review">*/}
            {/*                        <p className="p1">오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 69g</p>*/}
            {/*                        <p className="p2">2024-09-28 작성</p>*/}
            {/*                        <p className="p3">1+1이라 다이어트용으로 10개 주문햇어요.원플원이라 20개 잘받앗네요.개당 가격은 비싸지만 원플원이라 그나마*/}
            {/*                            괞네요.맛잇다고해서 한달 먹을꺼주문햇네요.유통기한은 10월24일까지라 3주 입니다.원플원이라 딱 10개 주문하면 무료배송에 20개 와서 하루에*/}
            {/*                            하나씩 먹으면 유통기한 전까지 먹을수 잇어요.다이어트용으로 좋아요.그리고 냉장보관 입니다.냉동보관이 아닙니다.냉동보관시 식감이 떨어질수*/}
            {/*                            잇어요.진공포장이라 김치냉장고에 보관하면 좀더 오래먹을수 잇을꺼 같아요.먹어보고 맛잇으면 또 주문할께요.전자렌지나 에어프라이어에 짧은시간에*/}
            {/*                            돌려서 먹을수 잇으니 간편합니다. </p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="btn3">*/}
            {/*                <div className="btn3-info">*/}
            {/*                    <p className="h6">배송지역</p>*/}
            {/*                    <ul>*/}
            {/*                        <li>전국</li>*/}
            {/*                        <li>일부 도서, 산간 지역은 배송불가하거나 배송기간이 길어질 수 있으며, 추가 배송비가 발생할 수 있습니다.</li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*                <div className="btn3-info">*/}
            {/*                    <p className="h6">배송비</p>*/}
            {/*                    <ul>*/}
            {/*                        <li>3만원 이상 구매 시 전 상품(냉장 배송 포함) 무료배송</li>*/}
            {/*                        <li>3만원 미만 주문 시 상온제품은 2,500원 / 냉장냉동제품은 3,500원의 배송비가 부과됩니다.</li>*/}
            {/*                        <li>단, 3만원 미만이라도 일부 상품은 무료배송 될 수 있으니 자세한 내용은 상품 개별 페이지를 확인해주시기 바랍니다.</li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*                <div className="btn3-info">*/}
            {/*                    <p className="h6">업체(제휴) 배송 제품</p>*/}
            {/*                    <ul>*/}
            {/*                        <li>업체배송 제품의 배송비는 업체별 배송정책에 따라 달라질 수 있습니다. 상품 개별 페이지에 배송비를 확인해 주시기 바랍니다.</li>*/}
            {/*                        <li>※ 각각의 주문 건에 대해 수령지가 일치할 경우 합포장 되어 배송될 수 있으며, 이로 인한 배송료 환불은 불가 합니다.</li>*/}
            {/*                        <li>※ 주문건에 대한 별도 포장을 원하시는 경우, 수령인명 (혹은 주소지)를 약간 다르게 표기하셔야 합니다.</li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*                <div className="btn3-info">*/}
            {/*                    <p className="h6">배송기간</p>*/}
            {/*                    <ul>*/}
            {/*                        <li>밴드배송/쿨밴드배송/업체(제휴)배송 상품</li>*/}
            {/*                        <li>통상 입금 확인일 기준으로 2일~3일소요됩니다. (주말제외)</li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*                <div className="btn3-info">*/}
            {/*                    <p className="h6">배송방식</p>*/}
            {/*                    <ul>*/}
            {/*                        <li>pow몰에서는 신선한 상품 유통을 위하여 상온, 냉장, 개별배송, 부분합배송, 합배송 등의 다양한 배송방식을 채택하고 있습니다.</li>*/}
            {/*                        <li>네이버페이로 주문/결제 시, ‘My 큐커 플랜’ 결제금액에 합산되지 않습니다.</li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*                <p className="h6">주문 및 배송에 관한 자세한 상담이나 궁금하신 점이 있을 경우 고객센터의 FAQ나 1:1상담 게시판, 또는 고객센터*/}
            {/*                    1588-3745를 통해서 안내 받으실 수 있습니다. </p>*/}
            {/*            </div>*/}
            {/*            <div className="btn4">*/}
            {/*                <div className="btn4-info">*/}
            {/*                    <p className="h6">교환/반품이 가능한 경우</p>*/}
            {/*                    <ul>*/}
            {/*                        <li>제품 수령일 기준 30일 이내 (단, 구매자 단순변심 반품일 경우 수령 후 7일 이내) 반품이 가능합니다.</li>*/}
            {/*                        <li>제품 수령 후 제품이 주문 내용과 다른 경우, 제품이 고객님께 인도될 당시 상품이 멸실 또는 훼손된 경우, 구매자 단순 변심(단, 냉장/냉동식품*/}
            {/*                            제외)의 경우 교환/반품이 가능합니다.*/}
            {/*                        </li>*/}
            {/*                        <li>전자상거래 등에서의 소비자보호에 관한 법률에 규정되어 있는 소비자 청약철회 가능범위에 해당되는 경우 교환/반품이 가능합니다.</li>*/}
            {/*                        <li>통신판매업자가 방문 판매 등에 관한 법률에서 규정하고 잇는 광고에 표시하여야 할 사항을 표시하지 아니한 경우 교환/반품이 가능합니다.</li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*                <div className="btn4-info">*/}
            {/*                    <p className="h6">교환/반품이 불가능한 경우</p>*/}
            {/*                    <ul>*/}
            {/*                        <li>고객님의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우</li>*/}
            {/*                        <li>고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 감소한 경우</li>*/}
            {/*                        <li>시간이 경과되어 재판매가 곤란할 정도로 상품의 가치가 상실된 경우(냉장, 냉동 제품 등)</li>*/}
            {/*                        <li>고객 주문 확인 후 상품제작에 들어가는 주문제작 상품(횟감 등)</li>*/}
            {/*                        <li>기타 전자상거래 등에서의 소비자 보호에 관한 법률이 정하는 소비자 청약철회 제한에 해당되는 경우</li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*                <p>제품을 교환/반품 하실 때의 배송비 비용에 대한 안내입니다.</p>*/}
            {/*                <div className="btn4-info">*/}
            {/*                    <p className="h6">※ powpow몰 부담</p>*/}
            {/*                    <ul>*/}
            {/*                        <li>상품하자 등의 문제로 교환/반품을 하실 경우 고객상담실로 직접 교환/반품 접수 후 도착한 택배사를 통해 인도하여 주시면 해당상품을 재발송 혹은*/}
            {/*                            주문취소 처리해 드리겠습니다.*/}
            {/*                        </li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*                <div className="btn4-info">*/}
            {/*                    <p className="h6">※ 고객님 부담</p>*/}
            {/*                    <ul>*/}
            {/*                        <li>단순 고객 변심에 의한 교환/반품인 경우 고객님께서 반품관련 왕복배송비를 부담하셔야 합니다.</li>*/}
            {/*                        <li>네이버페이 결제 후, 반품 신청시에 자동수거가 불가합니다.</li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*                <div className="btn4-info">*/}
            {/*                    <p className="h6">유의사항</p>*/}
            {/*                    <ul>*/}
            {/*                        <li>반품 접수 절차 없이 임의로 반송할 경우, 반품 내용을 확인할 수 없으므로 환불이 지연되거나 환불이 되지 않을 수 있습니다. 그러므로 반드시*/}
            {/*                            절차에 따라 교환 및 반품하여 주시기 바랍니다.*/}
            {/*                        </li>*/}
            {/*                        <li>고객 변심 등의 귀책사유 접수 후 반품 접수일로부터 7영업일 이내에 반품배송비를 입금하지 않는 경우 반품접수 철회됩니다.</li>*/}
            {/*                        <li>(단, 반품배송비 입금 및 반품처리 완료 후 고객센터로 연락시 3영업일 이내 환불 접수 진행)</li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*    <div className="banner-bottom">*/}
            {/*        <img src="./images/ad-banner.png"/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default ProductDetail;