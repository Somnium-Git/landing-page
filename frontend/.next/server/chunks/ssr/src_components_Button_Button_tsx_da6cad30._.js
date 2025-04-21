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
//              estilo comum, estilo com hover,função 
function Button({ textConfig, styleCommon, styleHover, click }) {
    const styleCssCommon = styleCommon;
    const styleCssHover = styleHover;
    const [StyleCss, setStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(styleCssCommon);
    const changeStyle = ()=>{
        var a = JSON.stringify(styleCssCommon);
        var b = JSON.stringify(styleCssHover);
        var c = JSON.stringify(StyleCss);
        if (c == a) {
            // hover
            setStyle(styleCssHover);
        } else if (c == b) {
            // leave
            setStyle(styleCssCommon);
        } else {
            // else
            setStyle(styleCssCommon);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            style: StyleCss,
            onMouseEnter: changeStyle,
            onMouseLeave: changeStyle,
            onClick: click,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                text: textConfig.text,
                color: textConfig.color,
                size: textConfig.size,
                isGradient: textConfig.isGradient
            }, void 0, false, {
                fileName: "[project]/src/components/Button/Button.tsx",
                lineNumber: 66,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Button/Button.tsx",
            lineNumber: 60,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
Button.defaultProps = {
    textConfig: {
        text: "",
        color: "#FFFFFF",
        size: "1rem",
        isGradient: false
    },
    styleCommon: {
        width: "50px",
        height: "100px",
        backgroundColor: "#FFFFFF",
        color: "#000000"
    },
    styleHover: {
        width: "50px",
        height: "100px",
        backgroundColor: "#898b8c",
        color: "#000000"
    },
    click: ()=>console.log('mouseover')
};
const __TURBOPACK__default__export__ = Button;
}}),

};

//# sourceMappingURL=src_components_Button_Button_tsx_da6cad30._.js.map