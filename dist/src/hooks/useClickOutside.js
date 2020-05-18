"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useClickOutside(onClickOutside) {
    var ref = react_1.useRef(null);
    react_1.useEffect(function () {
        var handler = function (event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside();
            }
        };
        document.addEventListener("click", handler, true);
        return function () { return document.removeEventListener("click", handler, true); };
    }, []);
    return ref;
}
exports.default = useClickOutside;
//# sourceMappingURL=useClickOutside.js.map