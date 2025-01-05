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
        <ResultItem/>
          <div className="ex-footer">
            푸터자리
          </div>
        </div>
      </>
    );
  }
  
  export default Result;
  