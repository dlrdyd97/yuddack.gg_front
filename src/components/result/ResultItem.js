import '../../styles/components/result/result-item.css';
import exImage from '../../styles/images/1-9d6deab7.png';

function ResultItem() {
    return (
        <>
            <div className="result-item">
                <div className='result-item-container'>
                    {/* 프로필 이미지 */}
                    <div className="result-avatar">
                        <img
                        src={exImage} // 실제 이미지를 여기에 추가
                        alt=""
                        className="avatar-img"
                        />
                    </div>

                    {/* 텍스트 정보 */}
                    <div className="result-info">
                        <p className="item-description">
                        하루 우라라
                        </p>
                        <span className="item-tag">#묶어팔기</span>
                    </div>

                    {/* 가격 및 판매자 정보 */}
                    <div className="result-details">
                        <p className="item-price">최소 30,000원</p>
                        <p className="seller-info">김판매자</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ResultItem;