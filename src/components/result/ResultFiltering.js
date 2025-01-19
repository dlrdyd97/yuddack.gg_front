function ResultFiltering() {
  return (
    <>
        <div className="result-filtering">
            <div className="result-filtering-each">
                <p>매수</p>
                <select className="result-rare-select" name="sort" id="ea">
                    <option value="recent">1</option>
                    <option value="low-price">2</option>
                    <option value="high-price">3</option>
                </select>
            </div>
            <div className="result-filtering-select">
                <select className="result-rare-select" name="sort" id="sort">
                    <option value="recent">노말</option>
                    <option value="low-price">슈레</option>
                    <option value="high-price">울레</option>
                </select>
            </div>
            <div className="result-filtering-deck">
                <input className="result-deck-select" type="checkbox" id="deck" name="deck" value="deck"/>
                <p>
                    묶어팔기 제외
                </p>
            </div>
        </div>
    </>
  );
}

export default ResultFiltering;