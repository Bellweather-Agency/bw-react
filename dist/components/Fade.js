"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importStar(require("styled-components"));
const useReveal_1 = __importDefault(require("../hooks/useReveal"));
const Wrapper = styled_components_1.default.div `
    transition: all ${props => props.duration}ms;
    transition-delay: ${props => props.delay}ms;
    opacity: ${props => props.show ? 1 : 0};
    ${props => {
    var _a, _b;
    switch (props.direction) {
        case 'down':
            const downDistance = props.distance ? -props.distance : '-100%';
            return (0, styled_components_1.css) `
                    transform: translateY(${props.show ? 0 : downDistance});
                `;
        case 'up':
            const upDistance = (_a = props.distance) !== null && _a !== void 0 ? _a : '100%';
            return (0, styled_components_1.css) `
                    transform: translateY(${props.show ? 0 : upDistance});
                `;
        case 'left':
            const leftDistance = props.distance ? -props.distance : '-100%';
            return (0, styled_components_1.css) `
                    transform: translateX(${props.show ? 0 : leftDistance});
                `;
        case 'right':
            const rightDistance = (_b = props.distance) !== null && _b !== void 0 ? _b : '100%';
            return (0, styled_components_1.css) `
                    transform: translateX(${props.show ? 0 : rightDistance});
                `;
    }
}}
`;
function Fade(props) {
    const { duration = 800, delay = 0, direction, distance, repeat = false, immediate = false, spy, threshold = 0, className = '', style = {}, children = react_1.default.createElement(react_1.default.Fragment, null), as = 'div' } = props;
    const { ref, show } = (0, useReveal_1.default)({
        threshold,
        repeat,
        immediate,
        delay,
        spy
    });
    return (react_1.default.createElement(Wrapper, { duration: show ? duration : 0, delay: show ? delay : 0, direction: direction, distance: distance, show: show, ref: ref, className: className, style: style, as: as }, children));
}
exports.default = Fade;
//# sourceMappingURL=Fade.js.map