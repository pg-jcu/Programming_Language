import App from "./App.js";
import { USER_ID } from "./utils/constants.js";

const $target = document.querySelector('#App');
new App({ $target, userId: USER_ID });
