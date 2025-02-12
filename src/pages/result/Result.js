import ResultFiltering from "../../components/result/ResultFiltering";
import ResultItem from "../../components/result/ResultItem";
import SearchBar from "../../components/searchBar/SearchBar";
function Result() {
    return (
      <>
        <div className="ex-container">
          <div className="ex-search-bar">
            <SearchBar/>
          </div>
          <div className="result-list">
            <div className="result-header">
              <ResultFiltering/>
            </div>
            <ResultItem/>
            <ResultItem/>
            <ResultItem/>
            <ResultItem/>
            <ResultItem/>
            <div style={{height: "320px"}}>            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Result;
  
