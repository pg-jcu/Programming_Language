import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";
import SearchHistory from "./components/SearchHistory.js";
import { setItem } from "./utils/historyStorage.js";
import { STORAGE_KEY } from "./constants.js";

export default function App($target, initialState) {
  if (!new.target) {
    throw new Error('Not used new keyword!!');
  }

  this.state = initialState;

  this.setState = nextState => {
    this.state = nextState;
    searchResult.setState(nextState);
    searchHistory.setState(nextState);
  }

  const setResult = nextData => {
    const nextState = { 
      ...this.state, 
      result: nextData 
    };
    
    this.setState(nextState);
  };

  const setHistory = nextData => {
    if (this.state.history.includes(nextData)) {
      return;
    }

    const nextState = { 
      ...this.state,
      history: this.state.history.concat(nextData)
    };

    if (nextState.history.length > 5) {
      nextState.history = nextState.history.slice(1);
    }

    setItem(STORAGE_KEY, nextState.history);
    this.setState(nextState);
  };

  new SearchInput({ $target, setResult, setHistory });
  const searchResult = new SearchResult({ $target, initialState: this.state, setResult });
  const searchHistory = new SearchHistory({ $target, initialState: this.state, setResult });
}
