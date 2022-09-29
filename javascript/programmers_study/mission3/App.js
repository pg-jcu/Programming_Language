import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";
import SearchHistory from "./components/SearchHistory.js";

export default function App($target, initialState) {
  if (!new.target) {
    throw new Error('Not used new keyword!!');
  }

  this.state = initialState;

  const historyArr = [];

  this.setState = nextState => {
    this.state = nextState;
    searchResult.setState(nextState);
    // searchHistory.setState(nextState);
  }

  const setResult = nextData => {
    this.setState(nextData);
  };

  const setHistory = nextData => {
    if (historyArr.length > 5) {
      historyArr.shift();
    }

    historyArr.push(nextData);
    searchHistory.render();
  };

  new SearchInput({ $target, setResult, setHistory });
  const searchResult = new SearchResult({ $target, initialState: this.state });
  const searchHistory = new SearchHistory({ $target, initialState: historyArr, setResult });
}
