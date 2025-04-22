(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/Button/Button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Text/Text.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const [styleCss, setStyleCss] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(styleCommon);
    const [classCss, setClassCss] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(classCommon);
    const [isGradient, setIsGradient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            style: styleCss,
            className: classCss,
            onMouseEnter: handleHover,
            onMouseLeave: handleUnhover,
            onClick: click,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(Button, "qwHI1qDVxB472S8RPampQwgvMY4=");
_c = Button;
const __TURBOPACK__default__export__ = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/LightBall/LightBall.module.css [app-client] (css module)": ((__turbopack_context__) => {

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
"[project]/src/components/LightBall/LightBall.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LightBall)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LightBall$2f$LightBall$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/LightBall/LightBall.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function LightBall({ x, y, width, height, isActive = false }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "LightBall.useLayoutEffect": ()=>{
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
        }
    }["LightBall.useLayoutEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LightBall$2f$LightBall$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lightBall} ${isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LightBall$2f$LightBall$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rotate : ''}`,
        style: {
            left: x,
            bottom: y,
            width,
            height
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LightBall$2f$LightBall$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].light1
            }, void 0, false, {
                fileName: "[project]/src/components/LightBall/LightBall.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LightBall$2f$LightBall$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].light2
            }, void 0, false, {
                fileName: "[project]/src/components/LightBall/LightBall.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LightBall$2f$LightBall$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].light3
            }, void 0, false, {
                fileName: "[project]/src/components/LightBall/LightBall.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LightBall$2f$LightBall$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].light4
            }, void 0, false, {
                fileName: "[project]/src/components/LightBall/LightBall.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LightBall$2f$LightBall$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].light5
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
_s(LightBall, "JkctLsMDw5W2MbVlMaFRM76c/8g=");
_c = LightBall;
var _c;
__turbopack_context__.k.register(_c, "LightBall");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LightBall$2f$LightBall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LightBall/LightBall.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Home() {
    _s();
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                text: "Saiba mais",
                click: ()=>setIsActive(true)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LightBall$2f$LightBall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                x: "40vw",
                y: "-40vh",
                width: "70vw",
                height: "70vw",
                isActive: isActive
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LightBall$2f$LightBall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                x: "-7vw",
                y: "75vh",
                width: "60vw",
                height: "60vw",
                isActive: isActive
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LightBall$2f$LightBall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                x: "-15vw",
                y: "-60vh",
                width: "50vw",
                height: "50vw",
                isActive: isActive
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(Home, "OFRYOMGmWDzfQ4dzLF00ag1mHo0=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_1426c89c._.js.map