"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_intersection_observer_1 = require("react-intersection-observer");
function useReveal(options) {
    const { threshold, repeat, immediate, delay, spy } = options;
    const { ref, inView } = (0, react_intersection_observer_1.useInView)({
        threshold,
        triggerOnce: !repeat
    });
    const [show, setShow] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        let timeoutID;
        if (immediate) {
            timeoutID = setTimeout(() => setShow(true), delay);
        }
        return () => clearTimeout(timeoutID);
    }, []);
    (0, react_1.useEffect)(() => {
        setShow(inView);
    }, [inView]);
    (0, react_1.useEffect)(() => {
        let timeoutID;
        if (spy !== undefined) {
            setShow(false);
            timeoutID = setTimeout(() => setShow(true), delay);
        }
        return () => clearTimeout(timeoutID);
    }, [spy]);
    return { ref, show };
}
exports.default = useReveal;
//# sourceMappingURL=useReveal.js.map