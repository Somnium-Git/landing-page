module.exports = {

"[project]/src/components/Button/Button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Text/Text.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const defaultStyleCommon = {
    width: "250px",
    height: "50px",
    backgroundColor: "#333333",
    color: "#FFFFFF",
    fontWeight: "bold",
    letterSpacing: "1px",
    borderRadius: "25px",
    cursor: "pointer"
};
const defaultStyleHover = {
    ...defaultStyleCommon,
    backgroundColor: "#111111"
};
const defaultClassCommon = "button-common";
const defaultClassHover = `${defaultClassCommon} button-hover`;
function Button({ styleCommon = defaultStyleCommon, styleHover = defaultStyleHover, classCommon = defaultClassCommon, classHover = defaultClassHover, click = ()=>console.log('mouse clicked!'), text = "", image = "", children }) {
    const [styleCss, setStyleCss] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(styleCommon);
    const [classCss, setClassCss] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(classCommon);
    const [isGradient, setIsGradient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleHover = ()=>{
        setStyleCss(styleHover);
        setClassCss(classHover);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(()=>{
            setIsGradient(true);
        }, 400);
    };
    const handleUnhover = ()=>{
        setStyleCss(styleCommon);
        setClassCss(classCommon);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(()=>{
            setIsGradient(false);
        }, 100);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            style: styleCss,
            className: classCss,
            onMouseEnter: handleHover,
            onMouseLeave: handleUnhover,
            onClick: click,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    size: "1.2em",
                    isGradient: isGradient,
                    children: text
                }, void 0, false, {
                    fileName: "[project]/src/components/Button/Button.tsx",
                    lineNumber: 81,
                    columnNumber: 17
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Button/Button.tsx",
            lineNumber: 74,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
const __TURBOPACK__default__export__ = Button;
}}),
"[project]/src/components/LightBall/LightBall.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "LightAnim": "LightBall-module__1pQTDW__LightAnim",
  "light1": "LightBall-module__1pQTDW__light1",
  "light2": "LightBall-module__1pQTDW__light2",
  "light3": "LightBall-module__1pQTDW__light3",
  "light4": "LightBall-module__1pQTDW__light4",
  "light5": "LightBall-module__1pQTDW__light5",
  "lightBall": "LightBall-module__1pQTDW__lightBall",
  "orbit": "LightBall-module__1pQTDW__orbit",
  "rotate": "LightBall-module__1pQTDW__rotate",
});
}}),
"[project]/src/components/LightBall/LightBall.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LightBall)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LightBall$2f$LightBall$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/LightBall/LightBall.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function LightBall({ x, y, width, height, isActive = false }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        // ponto do centro da viewport, relativo ao topo-esquerdo do elemento
        const originX = centerX - rect.left;
        const originY = centerY - rect.top;
        el.style.setProperty('--origin-x', `${originX}px`);
        el.style.setProperty('--origin-y', `${originY}px`);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LightBall$2f$LightBall$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lightBall} ${isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LightBall$2f$LightBall$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rotate : ''}`,
        style: {
            left: x,
            bottom: y,
            width,
            height
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LightBall$2f$LightBall$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].light1
            }, void 0, false, {
                fileName: "[project]/src/components/LightBall/LightBall.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LightBall$2f$LightBall$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].light2
            }, void 0, false, {
                fileName: "[project]/src/components/LightBall/LightBall.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LightBall$2f$LightBall$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].light3
            }, void 0, false, {
                fileName: "[project]/src/components/LightBall/LightBall.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LightBall$2f$LightBall$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].light4
            }, void 0, false, {
                fileName: "[project]/src/components/LightBall/LightBall.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LightBall$2f$LightBall$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].light5
            }, void 0, false, {
                fileName: "[project]/src/components/LightBall/LightBall.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LightBall/LightBall.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_components_97f8dccd._.js.map