import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";

export default function App($target, initialState) {

  this.state = initialState;

  this.setState = nextState => {
    this.state = nextState;
    searchResult.setState(nextState);
    console.log(nextState);
  }

  const getData = nextData => {
    this.setState(nextData);
  };

  new SearchInput({ $target, getData });
  const searchResult = new SearchResult({ $target, initialState: this.state });
}
