function ResultFiltering() {
  return (
    <>
        <div className="result-filtering">
            <div className="result-filtering-each">
                <p>매수</p>
                <p>2</p>
            </div>
            <div className="result-filtering-select">
                <select name="sort" id="sort">
                    <option value="recent">노말</option>
                    <option value="low-price">슈레</option>
                    <option value="high-price">울레</option>
                </select>
            </div>
            <div className="result-filtering-deck">
                <input type="checkbox" id="deck" name="deck" value="deck"/>
            </div>
        </div>
    </>
  );
}

export default ResultFiltering;