import App from "./App.js";
import { getItem } from "./utils/historyStorage.js";
import { STORAGE_KEY } from "./constants.js";

const $target = document.querySelector('#App');
const state = { history: getItem(STORAGE_KEY, []), result: [] };
new App($target, state);
