import { createRoot } from "react-dom/client";

import { Library } from "./library.jsx";

let root = createRoot(document.getElementById("app"));

root.render(<Library />);
