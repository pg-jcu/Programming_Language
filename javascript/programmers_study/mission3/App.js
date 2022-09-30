import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";
import SearchHistory from "./components/SearchHistory.js";
import { setItem, getItem } from "./utils/historyStorage.js";
import { STORAGE_KEY } from "./constants.js";

export default function App($target, initialState) {
  if (!new.target) {
    throw new Error('Not used new keyword!!');
  }

  this.state = initialState;

  const historyData = getItem(STORAGE_KEY, []);

  this.setState = nextState => {
    this.state = nextState;
    searchResult.setState(nextState);
  }

  const setResult = nextData => {
    this.setState(nextData);
  };

  const setHistory = nextData => {
    if (!historyData.includes(nextData)) {
      historyData.push(nextData);
    }

    if (historyData.length > 5) {
      historyData.shift();
    }

    searchHistory.render();
    setItem(STORAGE_KEY, historyData);
  };

  new SearchInput({ $target, setResult, setHistory });
  const searchResult = new SearchResult({ $target, initialState: this.state, setResult });
  const searchHistory = new SearchHistory({ $target, initialState: historyData, setResult });
}
