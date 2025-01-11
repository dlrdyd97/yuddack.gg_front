import ResultItem from "../../components/result/ResultItem";
import SearchBar from "../../components/searchBar/SearchBar";
function Result() {
  return (
    <>
      <div className="ex-container">
        <SearchBar />
        <ResultItem />
      </div>
    </>
  );
}

export default Result;
