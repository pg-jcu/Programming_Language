import { init, exit } from "./jsPackage.js";
// import { addOne } from "myPackage";

init({ debug: true, url: "url" });
exit(1);

// addOne(1);