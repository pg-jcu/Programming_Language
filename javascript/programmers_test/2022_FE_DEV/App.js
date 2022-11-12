import SearchInput from "./SearchInput.js";
import Suggestion from "./Suggestion.js";
import SelectedLanguage from "./SelectedLanguage.js";
import { get } from "./api.js";

export default function App({ $target }) {
    this.state = {
        suggested: [],
        selected: JSON.parse(localStorage.getItem('selected')) || []
    };

    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState
        };
        suggestion.setState({
            items: this.state.suggested,
            selectedIndex: 0
        });
        selectedLanguage.setState(this.state.selected);
        localStorage.setItem('selected', JSON.stringify(this.state.selected));
    };

    const onChange = async (data) => {
        if (data.length === 0) {
            this.setState({
                suggested: []
            });
        } else {
            const nextData = await get(data);
            this.setState({
                suggested: nextData
            });
        }
    };

    const onSelect = (data) => {
        alert(data);

        let list = this.state.selected;

        if (list.includes(data)) {
            const idx = list.indexOf(data);
            list = [ ...list.slice(0, idx), ...list.slice(idx + 1), data ];
        } else if (list.length === 5) {
            list = [ ...list.slice(1), data ];
        } else {
            list = [ ...list, data ];
        }
        
        this.setState({
            selected: list
        });
    };

    new SearchInput({ $target, onChange });
    const suggestion = new Suggestion({ $target, onSelect });
    const selectedLanguage = new SelectedLanguage({ $target });
}