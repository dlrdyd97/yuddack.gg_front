import ResultFiltering from "../../components/result/ResultFiltering";
import ResultItem from "../../components/result/ResultItem";
function Result() {
    return (
      <>
        <div className="ex-container">
          <div className="ex-header">
            헤더자리
          </div>
          <div className="ex-search-bar">
            검색창 자리
          </div>

          <div className="result-list">
            <div>
              <h1>검색결과</h1>
              <ResultFiltering/>
            </div>
            <ResultItem/>
            <ResultItem/>
            <ResultItem/>
            <ResultItem/>
            <ResultItem/>
          </div>
        
          <div className="ex-footer">
            푸터자리
          </div>
        </div>
      </>
    );
  }
  
  export default Result;
  
