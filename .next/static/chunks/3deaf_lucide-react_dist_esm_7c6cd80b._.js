(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "hasA11yProp": (()=>hasA11yProp),
    "mergeClasses": (()=>mergeClasses),
    "toCamelCase": (()=>toCamelCase),
    "toKebabCase": (()=>toKebabCase),
    "toPascalCase": (()=>toPascalCase)
});
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>defaultAttributes)
});
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>Icon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>createLucideIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Menu)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M4 12h16",
            key: "1lakjw"
        }
    ],
    [
        "path",
        {
            d: "M4 18h16",
            key: "19g7jn"
        }
    ],
    [
        "path",
        {
            d: "M4 6h16",
            key: "1o0s65"
        }
    ]
];
const Menu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("menu", __iconNode);
;
 //# sourceMappingURL=menu.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Menu": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>X)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
];
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x", __iconNode);
;
 //# sourceMappingURL=x.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "X": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>ChartColumn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M3 3v16a2 2 0 0 0 2 2h16",
            key: "c24i48"
        }
    ],
    [
        "path",
        {
            d: "M18 17V9",
            key: "2bz60n"
        }
    ],
    [
        "path",
        {
            d: "M13 17V5",
            key: "1frdt8"
        }
    ],
    [
        "path",
        {
            d: "M8 17v-3",
            key: "17ska0"
        }
    ]
];
const ChartColumn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chart-column", __iconNode);
;
 //# sourceMappingURL=chart-column.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BarChart3": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Target)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "6",
            key: "1vlfrh"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "2",
            key: "1c9p78"
        }
    ]
];
const Target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("target", __iconNode);
;
 //# sourceMappingURL=target.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Target": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>ShieldCheck)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
];
const ShieldCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("shield-check", __iconNode);
;
 //# sourceMappingURL=shield-check.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ShieldCheck": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/dynamicIconImports.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>dynamicIconImports)
});
const dynamicIconImports = {
    "a-arrow-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/a-arrow-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "a-arrow-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/a-arrow-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "a-large-small": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/a-large-small.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "accessibility": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/accessibility.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "activity": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "air-vent": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/air-vent.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "airplay": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/airplay.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "alarm-clock-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/alarm-clock-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "alarm-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/alarm-clock-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "alarm-clock-minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/alarm-clock-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "alarm-minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/alarm-clock-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "alarm-clock-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/alarm-clock-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "alarm-clock-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/alarm-clock-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "alarm-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/alarm-clock-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "alarm-clock": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/alarm-clock.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "alarm-smoke": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/alarm-smoke.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "album": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/album.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-center-horizontal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-center-horizontal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-center-vertical": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-center-vertical.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-center": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-center.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-end-horizontal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-end-horizontal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-end-vertical": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-end-vertical.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-horizontal-distribute-center": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-horizontal-distribute-center.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-horizontal-distribute-end": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-horizontal-distribute-end.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-horizontal-distribute-start": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-horizontal-distribute-start.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-horizontal-justify-center": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-horizontal-justify-center.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-horizontal-justify-end": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-horizontal-justify-end.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-horizontal-justify-start": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-horizontal-justify-start.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-horizontal-space-around": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-horizontal-space-around.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-horizontal-space-between": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-horizontal-space-between.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-justify": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-justify.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-start-horizontal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-start-horizontal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-start-vertical": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-start-vertical.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-vertical-distribute-center": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-vertical-distribute-center.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-vertical-distribute-end": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-vertical-distribute-end.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-vertical-distribute-start": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-vertical-distribute-start.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-vertical-justify-center": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-vertical-justify-center.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-vertical-justify-end": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-vertical-justify-end.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-vertical-justify-start": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-vertical-justify-start.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-vertical-space-around": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-vertical-space-around.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "align-vertical-space-between": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/align-vertical-space-between.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ambulance": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ambulance.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ampersand": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ampersand.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ampersands": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ampersands.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "amphora": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/amphora.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "anchor": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/anchor.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "angry": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/angry.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "annoyed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/annoyed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "antenna": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/antenna.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "anvil": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/anvil.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "aperture": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/aperture.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "app-window-mac": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/app-window-mac.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "app-window": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/app-window.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "apple": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/apple.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "archive-restore": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/archive-restore.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "archive-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/archive-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "archive": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/archive.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "armchair": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/armchair.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-big-down-dash": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-big-down-dash.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-big-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-big-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-big-left-dash": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-big-left-dash.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-big-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-big-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-big-right-dash": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-big-right-dash.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-big-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-big-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-big-up-dash": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-big-up-dash.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-big-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-big-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-down-0-1": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-down-0-1.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-down-01": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-down-0-1.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-down-1-0": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-down-1-0.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-down-10": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-down-1-0.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-down-a-z": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-down-a-z.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-down-az": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-down-a-z.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-down-from-line": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-down-from-line.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-down-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-down-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-down-narrow-wide": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-down-narrow-wide.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-down-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-down-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-down-to-dot": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-down-to-dot.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-down-to-line": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-down-to-line.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-down-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-down-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-down-wide-narrow": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-down-wide-narrow.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sort-desc": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-down-wide-narrow.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-down-z-a": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-down-z-a.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-down-za": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-down-z-a.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-left-from-line": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-left-from-line.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-left-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-left-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-left-to-line": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-left-to-line.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-right-from-line": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-right-from-line.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-right-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-right-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-right-to-line": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-right-to-line.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-up-0-1": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-up-0-1.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-up-01": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-up-0-1.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-up-1-0": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-up-1-0.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-up-10": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-up-1-0.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-up-a-z": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-up-a-z.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-up-az": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-up-a-z.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-up-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-up-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-up-from-dot": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-up-from-dot.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-up-from-line": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-up-from-line.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-up-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-up-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-up-narrow-wide": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-up-narrow-wide.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sort-asc": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-up-narrow-wide.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-up-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-up-to-line": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-up-to-line.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-up-wide-narrow": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-up-wide-narrow.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-up-z-a": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-up-z-a.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-up-za": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-up-z-a.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrows-up-from-line": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrows-up-from-line.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "asterisk": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/asterisk.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "at-sign": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/at-sign.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "atom": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/atom.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "audio-lines": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/audio-lines.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "audio-waveform": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/audio-waveform.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "award": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "axe": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/axe.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "axis-3d": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/axis-3d.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "axis-3-d": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/axis-3d.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "baby": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/baby.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "backpack": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/backpack.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "badge-alert": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/badge-alert.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "badge-cent": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/badge-cent.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "badge-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/badge-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "verified": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/badge-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "badge-dollar-sign": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/badge-dollar-sign.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "badge-euro": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/badge-euro.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "badge-indian-rupee": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/badge-indian-rupee.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "badge-info": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/badge-info.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "badge-japanese-yen": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/badge-japanese-yen.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "badge-minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/badge-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "badge-percent": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/badge-percent.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "badge-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/badge-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "badge-pound-sterling": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/badge-pound-sterling.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "badge-question-mark": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/badge-question-mark.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "badge-help": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/badge-question-mark.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "badge-russian-ruble": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/badge-russian-ruble.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "badge-swiss-franc": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/badge-swiss-franc.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "badge-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/badge-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "badge": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/badge.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "baggage-claim": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/baggage-claim.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ban": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ban.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "banana": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/banana.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bandage": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bandage.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "banknote-arrow-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/banknote-arrow-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "banknote-arrow-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/banknote-arrow-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "banknote-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/banknote-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "banknote": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/banknote.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "barcode": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/barcode.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "barrel": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/barrel.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "baseline": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/baseline.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bath": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bath.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "battery-charging": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/battery-charging.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "battery-full": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/battery-full.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "battery-low": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/battery-low.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "battery-medium": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/battery-medium.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "battery-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/battery-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "battery-warning": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/battery-warning.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "battery": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/battery.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "beaker": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/beaker.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bean-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bean-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bean": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bean.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bed-double": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bed-double.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bed-single": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bed-single.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "beef": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/beef.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "beer-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/beer-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "beer": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/beer.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bell-dot": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bell-dot.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bell-electric": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bell-electric.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bell-minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bell-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bell-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bell-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bell-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bell-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bell-ring": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bell-ring.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bell": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "between-horizontal-end": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/between-horizontal-end.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "between-horizonal-end": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/between-horizontal-end.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "between-horizontal-start": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/between-horizontal-start.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "between-horizonal-start": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/between-horizontal-start.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "between-vertical-end": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/between-vertical-end.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "between-vertical-start": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/between-vertical-start.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "biceps-flexed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/biceps-flexed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bike": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bike.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "binary": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/binary.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "binoculars": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/binoculars.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "biohazard": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/biohazard.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bird": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bird.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bitcoin": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bitcoin.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "blend": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/blend.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "blinds": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/blinds.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "blocks": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/blocks.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bluetooth-connected": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bluetooth-connected.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bluetooth-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bluetooth-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bluetooth-searching": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bluetooth-searching.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bluetooth": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bluetooth.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bold": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bold.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bolt": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bolt.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bomb": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bomb.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bone": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bone.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book-a": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-a.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book-alert": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-alert.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book-audio": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-audio.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book-copy": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-copy.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book-dashed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-dashed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book-template": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-dashed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book-headphones": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-headphones.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book-heart": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-heart.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book-image": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-image.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book-key": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-key.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book-lock": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-lock.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book-marked": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-marked.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book-minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book-open-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-open-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book-open-text": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-open-text.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book-open": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book-text": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-text.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book-type": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-type.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book-up-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-up-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book-user": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-user.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "book": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bookmark-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bookmark-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bookmark-minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bookmark-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bookmark-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bookmark-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bookmark-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bookmark-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bookmark": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "boom-box": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/boom-box.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bot-message-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bot-message-square.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bot-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bot-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bot": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bottle-wine": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bottle-wine.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bow-arrow": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bow-arrow.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "box": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/box.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "boxes": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/boxes.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "braces": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/braces.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "curly-braces": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/braces.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "brackets": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/brackets.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "brain-circuit": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "brain-cog": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/brain-cog.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "brain": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "brick-wall-fire": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/brick-wall-fire.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "brick-wall": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/brick-wall.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "briefcase-business": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/briefcase-business.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "briefcase-conveyor-belt": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/briefcase-conveyor-belt.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "briefcase-medical": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/briefcase-medical.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "briefcase": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bring-to-front": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bring-to-front.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "brush-cleaning": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/brush-cleaning.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "brush": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/brush.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bubbles": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bubbles.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bug-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bug-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bug-play": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bug-play.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bug": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bug.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "building-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "building": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bus-front": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bus-front.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cable-car": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cable-car.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cable": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cable.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cake-slice": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cake-slice.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cake": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cake.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "calculator": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "calendar-1": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar-1.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "calendar-arrow-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar-arrow-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "calendar-arrow-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar-arrow-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "calendar-check-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar-check-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "calendar-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "calendar-clock": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar-clock.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "calendar-cog": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar-cog.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "calendar-days": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "calendar-fold": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar-fold.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "calendar-heart": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar-heart.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "calendar-minus-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar-minus-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "calendar-minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "calendar-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "calendar-plus-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar-plus-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "calendar-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "calendar-range": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar-range.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "calendar-search": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar-search.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "calendar-sync": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar-sync.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "calendar-x-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar-x-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "calendar-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "calendar": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "camera-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/camera-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "camera": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "candy-cane": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/candy-cane.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "candy-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/candy-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "candy": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/candy.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cannabis": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cannabis.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "captions-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/captions-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "captions": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/captions.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "subtitles": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/captions.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "car-front": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/car-front.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "car-taxi-front": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/car-taxi-front.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "car": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/car.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "caravan": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/caravan.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "card-sim": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/card-sim.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "carrot": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/carrot.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "case-lower": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/case-lower.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "case-sensitive": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/case-sensitive.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "case-upper": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/case-upper.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cassette-tape": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cassette-tape.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cast": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cast.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "castle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/castle.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cat": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cat.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cctv": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cctv.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chart-area": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-area.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "area-chart": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-area.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chart-bar-big": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-bar-big.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bar-chart-horizontal-big": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-bar-big.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chart-bar-decreasing": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-bar-decreasing.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chart-bar-increasing": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-bar-increasing.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chart-bar-stacked": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-bar-stacked.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chart-bar": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-bar.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bar-chart-horizontal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-bar.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chart-candlestick": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-candlestick.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "candlestick-chart": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-candlestick.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chart-column-big": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-column-big.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bar-chart-big": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-column-big.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chart-column-decreasing": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-column-decreasing.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chart-column-increasing": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-column-increasing.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bar-chart-4": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-column-increasing.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chart-column-stacked": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-column-stacked.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chart-column": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bar-chart-3": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chart-gantt": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-gantt.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chart-line": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-line.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "line-chart": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-line.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chart-network": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-network.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chart-no-axes-column-decreasing": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column-decreasing.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chart-no-axes-column-increasing": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column-increasing.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bar-chart": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column-increasing.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chart-no-axes-column": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "bar-chart-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chart-no-axes-combined": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-no-axes-combined.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chart-no-axes-gantt": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-no-axes-gantt.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "gantt-chart": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-no-axes-gantt.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chart-pie": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pie-chart": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chart-scatter": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-scatter.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "scatter-chart": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-scatter.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chart-spline": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-spline.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "check-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/check-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "check-line": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/check-line.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chef-hat": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chef-hat.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cherry": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cherry.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chevron-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chevron-first": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevron-first.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chevron-last": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevron-last.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chevron-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chevron-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chevron-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chevrons-down-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevrons-down-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chevrons-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevrons-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chevrons-left-right-ellipsis": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevrons-left-right-ellipsis.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chevrons-left-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevrons-left-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chevrons-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevrons-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chevrons-right-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevrons-right-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chevrons-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevrons-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chevrons-up-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chevrons-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevrons-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chrome": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chrome.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "church": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/church.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cigarette-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cigarette-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cigarette": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cigarette.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-alert": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "alert-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-arrow-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-arrow-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-down-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-arrow-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-arrow-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-arrow-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-left-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-arrow-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-arrow-out-down-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-arrow-out-down-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-down-left-from-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-arrow-out-down-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-arrow-out-down-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-arrow-out-down-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-down-right-from-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-arrow-out-down-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-arrow-out-up-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-arrow-out-up-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-up-left-from-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-arrow-out-up-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-arrow-out-up-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-arrow-out-up-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-up-right-from-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-arrow-out-up-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-arrow-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-arrow-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-right-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-arrow-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-arrow-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-arrow-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-up-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-arrow-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-check-big": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "check-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "check-circle-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-chevron-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-chevron-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chevron-down-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-chevron-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-chevron-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-chevron-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chevron-left-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-chevron-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-chevron-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-chevron-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chevron-right-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-chevron-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-chevron-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-chevron-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chevron-up-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-chevron-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-dashed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-dashed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-divide": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-divide.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "divide-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-divide.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-dollar-sign": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-dollar-sign.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-dot-dashed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-dot-dashed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-dot": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-dot.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-ellipsis": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-ellipsis.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-equal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-equal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-fading-arrow-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-fading-arrow-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-fading-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-fading-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-gauge": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-gauge.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "gauge-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-gauge.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "minus-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-parking-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-parking-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "parking-circle-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-parking-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-parking": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-parking.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "parking-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-parking.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-pause": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-pause.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pause-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-pause.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-percent": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-percent.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "percent-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-percent.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-play": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "play-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "plus-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-pound-sterling": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-pound-sterling.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-power": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-power.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "power-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-power.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-question-mark": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "help-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-help": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-slash-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-slash-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-slashed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-slash-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-slash": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-slash.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-small": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-small.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-stop": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-stop.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "stop-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-stop.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-user-round": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-user-round.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-circle-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-user-round.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-user": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-user.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-user.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "x-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "circuit-board": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circuit-board.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "citrus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/citrus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clapperboard": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clapperboard.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clipboard-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clipboard-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clipboard-copy": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clipboard-copy.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clipboard-list": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clipboard-minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clipboard-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clipboard-paste": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clipboard-paste.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clipboard-pen-line": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clipboard-pen-line.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clipboard-signature": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clipboard-pen-line.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clipboard-pen": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clipboard-pen.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clipboard-edit": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clipboard-pen.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clipboard-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clipboard-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clipboard-type": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clipboard-type.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clipboard-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clipboard-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clipboard": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clipboard.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clock-1": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clock-1.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clock-10": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clock-10.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clock-11": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clock-11.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clock-12": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clock-12.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clock-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clock-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clock-3": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clock-3.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clock-4": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clock-4.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clock-5": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clock-5.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clock-6": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clock-6.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clock-7": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clock-7.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clock-8": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clock-8.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clock-9": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clock-9.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clock-alert": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clock-alert.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clock-arrow-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clock-arrow-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clock-arrow-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clock-arrow-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clock-fading": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clock-fading.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clock-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clock-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clock": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cloud-alert": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cloud-alert.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cloud-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cloud-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cloud-cog": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cloud-cog.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cloud-download": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cloud-download.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "download-cloud": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cloud-download.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cloud-drizzle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cloud-drizzle.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cloud-fog": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cloud-fog.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cloud-hail": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cloud-hail.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cloud-lightning": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cloud-lightning.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cloud-moon-rain": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cloud-moon-rain.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cloud-moon": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cloud-moon.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cloud-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cloud-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cloud-rain-wind": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cloud-rain-wind.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cloud-rain": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cloud-rain.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cloud-snow": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cloud-snow.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cloud-sun-rain": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cloud-sun-rain.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cloud-sun": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cloud-sun.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cloud-upload": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cloud-upload.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "upload-cloud": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cloud-upload.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cloud": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cloudy": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cloudy.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "clover": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clover.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "club": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/club.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "code-xml": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "code-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "code": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "codepen": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/codepen.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "codesandbox": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/codesandbox.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "coffee": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cog": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cog.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "coins": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/coins.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "columns-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/columns-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "columns": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/columns-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "columns-3-cog": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/columns-3-cog.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "columns-settings": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/columns-3-cog.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "table-config": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/columns-3-cog.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "columns-3": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/columns-3.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panels-left-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/columns-3.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "columns-4": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/columns-4.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "combine": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/combine.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "command": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/command.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "compass": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "component": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/component.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "computer": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/computer.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "concierge-bell": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/concierge-bell.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cone": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cone.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "construction": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/construction.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "contact-round": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/contact-round.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "contact-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/contact-round.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "contact": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/contact.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "container": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/container.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "contrast": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/contrast.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cookie": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cookie.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cooking-pot": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cooking-pot.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "copy-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/copy-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "copy-minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/copy-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "copy-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/copy-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "copy-slash": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/copy-slash.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "copy-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/copy-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "copy": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "copyleft": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/copyleft.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "copyright": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/copyright.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "corner-down-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/corner-down-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "corner-down-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/corner-down-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "corner-left-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/corner-left-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "corner-left-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/corner-left-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "corner-right-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/corner-right-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "corner-right-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/corner-right-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "corner-up-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/corner-up-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "corner-up-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/corner-up-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cpu": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "creative-commons": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/creative-commons.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "credit-card": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "croissant": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/croissant.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "crop": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/crop.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cross": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cross.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "crosshair": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/crosshair.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "crown": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cuboid": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cuboid.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cup-soda": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cup-soda.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "currency": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/currency.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "cylinder": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cylinder.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "dam": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/dam.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "database-backup": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/database-backup.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "database-zap": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/database-zap.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "database": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "decimals-arrow-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/decimals-arrow-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "decimals-arrow-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/decimals-arrow-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "delete": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/delete.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "dessert": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/dessert.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "diameter": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/diameter.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "diamond-minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/diamond-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "diamond-percent": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/diamond-percent.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "percent-diamond": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/diamond-percent.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "diamond-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/diamond-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "diamond": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/diamond.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "dice-1": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/dice-1.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "dice-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/dice-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "dice-3": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/dice-3.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "dice-4": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/dice-4.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "dice-5": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/dice-5.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "dice-6": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/dice-6.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "dices": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/dices.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "diff": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/diff.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "disc-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/disc-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "disc-3": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/disc-3.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "disc-album": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/disc-album.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "disc": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/disc.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "divide": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/divide.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "dna-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/dna-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "dna": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/dna.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "dock": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/dock.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "dog": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/dog.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "dollar-sign": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "donut": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/donut.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "door-closed-locked": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/door-closed-locked.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "door-closed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/door-closed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "door-open": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/door-open.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "dot": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/dot.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "download": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "drafting-compass": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/drafting-compass.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "drama": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/drama.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "dribbble": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/dribbble.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "drill": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/drill.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "drone": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/drone.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "droplet-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/droplet-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "droplet": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/droplet.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "droplets": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "drum": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/drum.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "drumstick": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/drumstick.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "dumbbell": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/dumbbell.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ear-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ear-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ear": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ear.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "earth-lock": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/earth-lock.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "earth": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/earth.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "globe-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/earth.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "eclipse": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/eclipse.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "egg-fried": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/egg-fried.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "egg-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/egg-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "egg": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/egg.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ellipsis-vertical": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "more-vertical": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ellipsis": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "more-horizontal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "equal-approximately": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/equal-approximately.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "equal-not": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/equal-not.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "equal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/equal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "eraser": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/eraser.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ethernet-port": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ethernet-port.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "euro": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/euro.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "expand": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/expand.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "external-link": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "eye-closed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/eye-closed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "eye-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "eye": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "facebook": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "factory": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/factory.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "fan": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/fan.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "fast-forward": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/fast-forward.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "feather": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/feather.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "fence": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/fence.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ferris-wheel": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ferris-wheel.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "figma": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/figma.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-archive": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-archive.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-audio-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-audio-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-audio": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-audio.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-axis-3d": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-axis-3d.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-axis-3-d": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-axis-3d.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-badge-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-badge-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-badge": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-badge.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-box": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-box.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-chart-column-increasing": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-chart-column-increasing.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-bar-chart": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-chart-column-increasing.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-chart-column": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-chart-column.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-bar-chart-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-chart-column.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-chart-line": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-chart-line.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-line-chart": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-chart-line.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-chart-pie": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-chart-pie.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-pie-chart": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-chart-pie.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-check-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-check-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-clock": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-clock.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-code-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-code-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-code": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-code.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-cog": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-cog.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-cog-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-cog.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-diff": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-diff.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-digit": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-digit.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-heart": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-heart.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-image": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-image.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-input": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-input.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-json-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-json-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-json": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-json.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-key-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-key-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-key": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-key.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-lock-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-lock-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-lock": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-lock.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-minus-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-minus-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-music": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-music.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-output": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-output.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-pen-line": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-pen-line.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-signature": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-pen-line.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-pen": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-pen.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-edit": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-pen.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-plus-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-plus-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-question-mark": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-question-mark.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-question": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-question-mark.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-scan": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-scan.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-search-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-search-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-search": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-search.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-sliders": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-sliders.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-spreadsheet": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-stack": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-stack.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-symlink": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-symlink.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-terminal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-terminal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-text": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-type-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-type-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-type": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-type.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-user": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-user.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-video-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-video-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-video": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-video.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-volume-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-volume-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-volume": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-volume.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-warning": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-warning.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-x-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-x-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "file": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "files": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/files.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "film": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "fingerprint": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/fingerprint.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "fire-extinguisher": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/fire-extinguisher.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "fish-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/fish-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "fish-symbol": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/fish-symbol.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "fish": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/fish.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "flag-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/flag-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "flag-triangle-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/flag-triangle-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "flag-triangle-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/flag-triangle-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "flag": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/flag.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "flame-kindling": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/flame-kindling.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "flame": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "flashlight-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/flashlight-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "flashlight": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/flashlight.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "flask-conical-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/flask-conical-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "flask-conical": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "flask-round": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/flask-round.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "flip-horizontal-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/flip-horizontal-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "flip-horizontal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/flip-horizontal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "flip-vertical-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/flip-vertical-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "flip-vertical": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/flip-vertical.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "flower-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/flower-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "flower": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/flower.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "focus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/focus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "fold-horizontal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/fold-horizontal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "fold-vertical": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/fold-vertical.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-archive": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-archive.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-clock": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-clock.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-closed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-closed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-code": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-code.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-cog": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-cog.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-cog-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-cog.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-dot": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-dot.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-git-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-git-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-git": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-git.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-heart": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-heart.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-input": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-input.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-kanban": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-kanban.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-key": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-key.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-lock": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-lock.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-open-dot": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-open-dot.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-open": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-output": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-output.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-pen": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-pen.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-edit": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-pen.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-root": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-root.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-search-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-search-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-search": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-search.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-symlink": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-symlink.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-sync": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-sync.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-tree": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-tree.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folder": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "folders": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folders.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "footprints": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/footprints.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "forklift": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/forklift.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "forward": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/forward.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "frame": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/frame.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "framer": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/framer.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "frown": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/frown.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "fuel": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/fuel.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "fullscreen": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/fullscreen.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "funnel-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/funnel-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "funnel-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/funnel-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "filter-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/funnel-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "funnel": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "filter": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "gallery-horizontal-end": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/gallery-horizontal-end.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "gallery-horizontal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/gallery-horizontal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "gallery-thumbnails": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/gallery-thumbnails.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "gallery-vertical-end": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/gallery-vertical-end.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "gallery-vertical": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/gallery-vertical.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "gamepad-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "gamepad": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/gamepad.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "gauge": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/gauge.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "gavel": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/gavel.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "gem": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/gem.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "georgian-lari": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/georgian-lari.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ghost": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ghost.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "gift": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/gift.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "git-branch-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/git-branch-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "git-branch": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "git-commit-horizontal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/git-commit-horizontal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "git-commit": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/git-commit-horizontal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "git-commit-vertical": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/git-commit-vertical.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "git-compare-arrows": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/git-compare-arrows.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "git-compare": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/git-compare.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "git-fork": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/git-fork.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "git-graph": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/git-graph.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "git-merge": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/git-merge.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "git-pull-request-arrow": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/git-pull-request-arrow.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "git-pull-request-closed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/git-pull-request-closed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "git-pull-request-create-arrow": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/git-pull-request-create-arrow.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "git-pull-request-create": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/git-pull-request-create.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "git-pull-request-draft": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/git-pull-request-draft.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "git-pull-request": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/git-pull-request.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "github": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "gitlab": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/gitlab.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "glass-water": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/glass-water.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "glasses": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/glasses.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "globe-lock": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/globe-lock.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "globe": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "goal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/goal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "gpu": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/gpu.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "grab": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/grab.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "graduation-cap": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "grape": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/grape.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "grid-2x2-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/grid-2x2-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "grid-2-x-2-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/grid-2x2-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "grid-2x2-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/grid-2x2-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "grid-2-x-2-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/grid-2x2-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "grid-2x2-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/grid-2x2-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "grid-2-x-2-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/grid-2x2-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "grid-2x2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/grid-2x2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "grid-2-x-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/grid-2x2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "grid-3x2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/grid-3x2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "grid-3x3": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "grid": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "grid-3-x-3": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "grip-horizontal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/grip-horizontal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "grip-vertical": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/grip-vertical.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "grip": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/grip.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "group": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/group.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "guitar": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/guitar.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ham": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ham.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "hamburger": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hamburger.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "hammer": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hammer.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "hand-coins": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hand-coins.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "hand-heart": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hand-heart.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "hand-helping": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hand-helping.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "helping-hand": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hand-helping.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "hand-metal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hand-metal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "hand-platter": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hand-platter.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "hand": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hand.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "handshake": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/handshake.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "hard-drive-download": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hard-drive-download.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "hard-drive-upload": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hard-drive-upload.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "hard-drive": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hard-drive.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "hard-hat": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hard-hat.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "hash": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "haze": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/haze.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "hdmi-port": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hdmi-port.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "heading-1": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heading-1.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "heading-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heading-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "heading-3": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heading-3.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "heading-4": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heading-4.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "heading-5": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heading-5.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "heading-6": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heading-6.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "heading": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heading.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "headphone-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/headphone-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "headphones": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/headphones.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "headset": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/headset.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "heart-crack": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heart-crack.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "heart-handshake": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heart-handshake.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "heart-minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heart-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "heart-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heart-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "heart-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heart-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "heart-pulse": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heart-pulse.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "heart": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "heater": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heater.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "hexagon": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hexagon.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "highlighter": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/highlighter.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "history": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "hop-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hop-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "hop": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hop.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "hospital": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hospital.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "hotel": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hotel.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "hourglass": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hourglass.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "house-plug": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/house-plug.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "house-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/house-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "house-wifi": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/house-wifi.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "house": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "home": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ice-cream-bowl": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ice-cream-bowl.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ice-cream-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ice-cream-bowl.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ice-cream-cone": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ice-cream-cone.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ice-cream": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ice-cream-cone.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "id-card-lanyard": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/id-card-lanyard.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "id-card": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/id-card.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "image-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/image-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "image-minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/image-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "image-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/image-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "image-play": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/image-play.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "image-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/image-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "image-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/image-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "image-upscale": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/image-upscale.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "image": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "images": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/images.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "import": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/import.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "inbox": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/inbox.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "indent-decrease": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/indent-decrease.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "outdent": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/indent-decrease.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "indent-increase": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/indent-increase.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "indent": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/indent-increase.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "indian-rupee": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/indian-rupee.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "infinity": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/infinity.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "info": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "inspection-panel": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/inspection-panel.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "instagram": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "italic": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/italic.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "iteration-ccw": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/iteration-ccw.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "iteration-cw": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/iteration-cw.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "japanese-yen": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/japanese-yen.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "joystick": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/joystick.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "kanban": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/kanban.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "key-round": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/key-round.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "key-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/key-square.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "key": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/key.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "keyboard-music": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/keyboard-music.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "keyboard-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/keyboard-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "keyboard": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/keyboard.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "lamp-ceiling": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/lamp-ceiling.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "lamp-desk": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/lamp-desk.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "lamp-floor": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/lamp-floor.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "lamp-wall-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/lamp-wall-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "lamp-wall-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/lamp-wall-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "lamp": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/lamp.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "land-plot": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/land-plot.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "landmark": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/landmark.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "languages": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/languages.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "laptop-minimal-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/laptop-minimal-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "laptop-minimal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/laptop-minimal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "laptop-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/laptop-minimal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "laptop": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/laptop.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "lasso-select": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/lasso-select.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "lasso": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/lasso.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "laugh": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/laugh.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "layers-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/layers-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "layers": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "layers-3": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "layout-dashboard": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "layout-grid": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "layout-list": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/layout-list.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "layout-panel-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/layout-panel-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "layout-panel-top": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/layout-panel-top.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "layout-template": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/layout-template.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "leaf": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "leafy-green": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/leafy-green.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "lectern": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/lectern.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "letter-text": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/letter-text.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "library-big": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/library-big.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "library": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/library.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "life-buoy": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/life-buoy.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ligature": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ligature.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "lightbulb-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/lightbulb-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "lightbulb": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "line-squiggle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/line-squiggle.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "link-2-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/link-2-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "link-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/link-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "link": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "linkedin": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "list-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/list-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "list-checks": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/list-checks.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "list-collapse": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/list-collapse.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "list-end": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/list-end.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "list-filter-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/list-filter-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "list-filter": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/list-filter.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "list-minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/list-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "list-music": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/list-music.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "list-ordered": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/list-ordered.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "list-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/list-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "list-restart": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/list-restart.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "list-start": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/list-start.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "list-todo": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/list-todo.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "list-tree": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/list-tree.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "list-video": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/list-video.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "list-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/list-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "list": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "loader-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "loader-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "loader-pinwheel": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/loader-pinwheel.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "loader": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/loader.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "locate-fixed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/locate-fixed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "locate-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/locate-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "locate": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/locate.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "location-edit": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/location-edit.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "lock-keyhole-open": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/lock-keyhole-open.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "unlock-keyhole": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/lock-keyhole-open.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "lock-keyhole": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/lock-keyhole.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "lock-open": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/lock-open.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "unlock": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/lock-open.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "lock": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "log-in": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/log-in.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "log-out": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "logs": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/logs.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "lollipop": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/lollipop.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "luggage": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/luggage.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "magnet": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/magnet.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mail-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mail-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mail-minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mail-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mail-open": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mail-open.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mail-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mail-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mail-question-mark": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mail-question-mark.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mail-question": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mail-question-mark.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mail-search": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mail-search.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mail-warning": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mail-warning.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mail-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mail-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mail": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mailbox": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mailbox.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mails": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mails.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "map-pin-check-inside": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/map-pin-check-inside.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "map-pin-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/map-pin-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "map-pin-house": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/map-pin-house.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "map-pin-minus-inside": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/map-pin-minus-inside.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "map-pin-minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/map-pin-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "map-pin-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/map-pin-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "map-pin-plus-inside": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/map-pin-plus-inside.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "map-pin-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/map-pin-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "map-pin-x-inside": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/map-pin-x-inside.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "map-pin-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/map-pin-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "map-pin": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "map-pinned": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/map-pinned.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "map-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/map-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "map": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mars-stroke": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mars-stroke.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mars": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mars.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "martini": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/martini.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "maximize-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "maximize": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/maximize.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "medal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/medal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "megaphone-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/megaphone-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "megaphone": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "meh": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/meh.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "memory-stick": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/memory-stick.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "menu": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "merge": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/merge.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-circle-code": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-circle-code.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-circle-dashed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-circle-dashed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-circle-heart": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-circle-heart.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-circle-more": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-circle-more.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-circle-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-circle-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-circle-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-circle-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-circle-question-mark": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-circle-question-mark.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-circle-question": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-circle-question-mark.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-circle-reply": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-circle-reply.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-circle-warning": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-circle-warning.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-circle-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-circle-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-square-code": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-square-code.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-square-dashed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-square-dashed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-square-diff": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-square-diff.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-square-dot": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-square-dot.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-square-heart": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-square-heart.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-square-lock": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-square-lock.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-square-more": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-square-more.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-square-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-square-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-square-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-square-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-square-quote": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-square-quote.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-square-reply": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-square-reply.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-square-share": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-square-share.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-square-text": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-square-text.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-square-warning": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-square-warning.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-square-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-square-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "message-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "messages-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/messages-square.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mic-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mic-vocal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mic-vocal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mic-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mic-vocal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mic": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "microchip": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/microchip.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "microscope": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/microscope.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "microwave": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/microwave.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "milestone": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/milestone.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "milk-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/milk-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "milk": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/milk.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "minimize-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "minimize": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/minimize.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "monitor-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/monitor-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "monitor-cog": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/monitor-cog.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "monitor-dot": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/monitor-dot.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "monitor-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/monitor-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "monitor-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/monitor-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "monitor-pause": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/monitor-pause.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "monitor-play": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/monitor-play.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "monitor-smartphone": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/monitor-smartphone.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "monitor-speaker": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/monitor-speaker.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "monitor-stop": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/monitor-stop.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "monitor-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/monitor-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "monitor-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/monitor-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "monitor": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "moon-star": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/moon-star.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "moon": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mountain-snow": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mountain-snow.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mountain": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mountain.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mouse-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mouse-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mouse-pointer-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mouse-pointer-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mouse-pointer-ban": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mouse-pointer-ban.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mouse-pointer-click": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mouse-pointer": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mouse-pointer.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mouse": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mouse.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "move-3d": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/move-3d.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "move-3-d": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/move-3d.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "move-diagonal-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/move-diagonal-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "move-diagonal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/move-diagonal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "move-down-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/move-down-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "move-down-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/move-down-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "move-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/move-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "move-horizontal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/move-horizontal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "move-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/move-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "move-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/move-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "move-up-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/move-up-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "move-up-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/move-up-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "move-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/move-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "move-vertical": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/move-vertical.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "move": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/move.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "music-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/music-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "music-3": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/music-3.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "music-4": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/music-4.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "music": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "navigation-2-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/navigation-2-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "navigation-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/navigation-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "navigation-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/navigation-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "navigation": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/navigation.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "network": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/network.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "newspaper": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/newspaper.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "nfc": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/nfc.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "non-binary": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/non-binary.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "notebook-pen": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/notebook-pen.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "notebook-tabs": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/notebook-tabs.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "notebook-text": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/notebook-text.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "notebook": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/notebook.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "notepad-text-dashed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/notepad-text-dashed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "notepad-text": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/notepad-text.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "nut-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/nut-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "nut": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/nut.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "octagon-alert": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/octagon-alert.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "alert-octagon": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/octagon-alert.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "octagon-minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/octagon-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "octagon-pause": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/octagon-pause.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pause-octagon": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/octagon-pause.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "octagon-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/octagon-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "x-octagon": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/octagon-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "octagon": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/octagon.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "omega": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/omega.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "option": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/option.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "orbit": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/orbit.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "origami": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/origami.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "package-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/package-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "package-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/package-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "package-minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/package-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "package-open": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/package-open.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "package-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/package-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "package-search": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/package-search.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "package-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/package-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "package": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "paint-bucket": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/paint-bucket.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "paint-roller": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/paint-roller.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "paintbrush-vertical": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/paintbrush-vertical.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "paintbrush-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/paintbrush-vertical.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "paintbrush": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/paintbrush.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "palette": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panda": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panda.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panel-bottom-close": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panel-bottom-close.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panel-bottom-dashed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panel-bottom-dashed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panel-bottom-inactive": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panel-bottom-dashed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panel-bottom-open": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panel-bottom-open.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panel-bottom": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panel-bottom.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panel-left-close": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panel-left-close.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sidebar-close": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panel-left-close.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panel-left-dashed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panel-left-dashed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panel-left-inactive": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panel-left-dashed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panel-left-open": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panel-left-open.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sidebar-open": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panel-left-open.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panel-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panel-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sidebar": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panel-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panel-right-close": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panel-right-close.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panel-right-dashed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panel-right-dashed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panel-right-inactive": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panel-right-dashed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panel-right-open": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panel-right-open.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panel-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panel-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panel-top-close": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panel-top-close.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panel-top-dashed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panel-top-dashed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panel-top-inactive": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panel-top-dashed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panel-top-open": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panel-top-open.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panel-top": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panel-top.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panels-left-bottom": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panels-left-bottom.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panels-right-bottom": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panels-right-bottom.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panels-top-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "layout": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "paperclip": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "parentheses": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/parentheses.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "parking-meter": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/parking-meter.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "party-popper": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/party-popper.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pause": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "paw-print": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/paw-print.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pc-case": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pc-case.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pen-line": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "edit-3": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pen-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pen-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pen-tool": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pen-tool.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pen": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "edit-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pencil-line": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pencil-line.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pencil-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pencil-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pencil-ruler": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pencil-ruler.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pencil": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pentagon": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pentagon.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "percent": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/percent.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "person-standing": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/person-standing.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "philippine-peso": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/philippine-peso.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "phone-call": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/phone-call.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "phone-forwarded": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/phone-forwarded.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "phone-incoming": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/phone-incoming.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "phone-missed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/phone-missed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "phone-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/phone-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "phone-outgoing": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/phone-outgoing.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "phone": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pi": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pi.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "piano": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/piano.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pickaxe": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pickaxe.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "picture-in-picture-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/picture-in-picture-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "picture-in-picture": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/picture-in-picture.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "piggy-bank": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/piggy-bank.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pilcrow-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pilcrow-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pilcrow-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pilcrow-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pilcrow": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pilcrow.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pill-bottle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pill-bottle.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pill": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pill.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pin-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pin-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pin": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pin.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pipette": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pipette.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pizza": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pizza.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "plane-landing": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/plane-landing.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "plane-takeoff": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/plane-takeoff.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "plane": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/plane.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "play": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "plug-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/plug-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "plug-zap": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/plug-zap.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "plug-zap-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/plug-zap.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "plug": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/plug.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pocket-knife": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pocket-knife.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pocket": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pocket.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "podcast": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/podcast.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pointer-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pointer-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pointer": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pointer.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "popcorn": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/popcorn.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "popsicle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/popsicle.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pound-sterling": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pound-sterling.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "power-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/power-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "power": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/power.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "presentation": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/presentation.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "printer-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/printer-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "printer": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "projector": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/projector.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "proportions": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/proportions.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "puzzle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/puzzle.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pyramid": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pyramid.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "qr-code": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/qr-code.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "quote": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "rabbit": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rabbit.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "radar": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/radar.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "radiation": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/radiation.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "radical": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/radical.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "radio-receiver": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/radio-receiver.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "radio-tower": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/radio-tower.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "radio": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "radius": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/radius.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "rail-symbol": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rail-symbol.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "rainbow": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rainbow.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "rat": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rat.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ratio": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ratio.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "receipt-cent": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/receipt-cent.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "receipt-euro": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/receipt-euro.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "receipt-indian-rupee": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/receipt-indian-rupee.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "receipt-japanese-yen": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/receipt-japanese-yen.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "receipt-pound-sterling": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/receipt-pound-sterling.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "receipt-russian-ruble": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/receipt-russian-ruble.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "receipt-swiss-franc": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/receipt-swiss-franc.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "receipt-text": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/receipt-text.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "receipt": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "rectangle-circle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rectangle-circle.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "rectangle-ellipsis": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rectangle-ellipsis.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "form-input": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rectangle-ellipsis.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "rectangle-goggles": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rectangle-goggles.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "rectangle-horizontal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rectangle-horizontal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "rectangle-vertical": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rectangle-vertical.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "recycle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/recycle.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "redo-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/redo-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "redo-dot": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/redo-dot.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "redo": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/redo.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "refresh-ccw-dot": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/refresh-ccw-dot.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "refresh-ccw": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/refresh-ccw.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "refresh-cw-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/refresh-cw-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "refresh-cw": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "refrigerator": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/refrigerator.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "regex": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/regex.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "remove-formatting": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/remove-formatting.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "repeat-1": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/repeat-1.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "repeat-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/repeat-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "repeat": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/repeat.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "replace-all": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/replace-all.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "replace": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/replace.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "reply-all": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/reply-all.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "reply": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/reply.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "rewind": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rewind.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ribbon": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ribbon.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "rocket": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "rocking-chair": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rocking-chair.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "roller-coaster": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/roller-coaster.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "rotate-3d": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rotate-3d.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "rotate-3-d": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rotate-3d.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "rotate-ccw-key": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rotate-ccw-key.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "rotate-ccw-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rotate-ccw-square.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "rotate-ccw": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "rotate-cw-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rotate-cw-square.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "rotate-cw": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rotate-cw.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "route-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/route-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "route": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/route.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "router": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/router.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "rows-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rows-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "rows": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rows-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "rows-3": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rows-3.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "panels-top-bottom": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rows-3.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "rows-4": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rows-4.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "rss": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rss.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ruler-dimension-line": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ruler-dimension-line.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ruler": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ruler.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "russian-ruble": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/russian-ruble.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sailboat": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sailboat.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "salad": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/salad.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sandwich": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sandwich.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "satellite-dish": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/satellite-dish.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "satellite": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/satellite.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "saudi-riyal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/saudi-riyal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "save-all": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/save-all.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "save-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/save-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "save": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "scale-3d": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/scale-3d.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "scale-3-d": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/scale-3d.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "scale": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "scaling": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/scaling.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "scan-barcode": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/scan-barcode.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "scan-eye": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/scan-eye.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "scan-face": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/scan-face.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "scan-heart": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/scan-heart.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "scan-line": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/scan-line.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "scan-qr-code": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/scan-qr-code.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "scan-search": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/scan-search.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "scan-text": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/scan-text.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "scan": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/scan.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "school": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/school.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "scissors-line-dashed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/scissors-line-dashed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "scissors": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/scissors.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "screen-share-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/screen-share-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "screen-share": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/screen-share.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "scroll-text": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/scroll-text.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "scroll": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/scroll.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "search-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/search-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "search-code": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/search-code.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "search-slash": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/search-slash.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "search-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/search-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "search": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "section": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/section.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "send-horizontal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/send-horizontal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "send-horizonal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/send-horizontal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "send-to-back": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/send-to-back.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "send": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "separator-horizontal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/separator-horizontal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "separator-vertical": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/separator-vertical.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "server-cog": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/server-cog.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "server-crash": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/server-crash.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "server-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/server-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "server": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "settings-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "settings": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shapes": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shapes.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "share-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "share": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/share.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sheet": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sheet.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shell": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shell.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shield-alert": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shield-ban": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shield-ban.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shield-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shield-ellipsis": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shield-ellipsis.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shield-half": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shield-half.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shield-minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shield-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shield-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shield-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shield-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shield-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shield-question-mark": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shield-question-mark.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shield-question": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shield-question-mark.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shield-user": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shield-user.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shield-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shield-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shield-close": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shield-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shield": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ship-wheel": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ship-wheel.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ship": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ship.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shirt": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shirt.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shopping-bag": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shopping-basket": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shopping-basket.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shopping-cart": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shovel": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shovel.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shower-head": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shower-head.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shredder": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shredder.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shrimp": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shrimp.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shrink": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shrink.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shrub": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shrub.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "shuffle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shuffle.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sigma": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sigma.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "signal-high": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/signal-high.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "signal-low": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/signal-low.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "signal-medium": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/signal-medium.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "signal-zero": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/signal-zero.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "signal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/signal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "signature": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/signature.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "signpost-big": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/signpost-big.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "signpost": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/signpost.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "siren": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/siren.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "skip-back": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/skip-back.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "skip-forward": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "skull": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/skull.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "slack": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/slack.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "slash": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/slash.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "slice": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/slice.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sliders-horizontal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sliders-vertical": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sliders-vertical.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sliders": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sliders-vertical.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "smartphone-charging": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/smartphone-charging.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "smartphone-nfc": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/smartphone-nfc.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "smartphone": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "smile-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/smile-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "smile": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/smile.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "snail": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/snail.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "snowflake": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/snowflake.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "soap-dispenser-droplet": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/soap-dispenser-droplet.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sofa": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sofa.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "soup": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/soup.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "space": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/space.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "spade": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/spade.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sparkle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sparkle.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sparkles": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "stars": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "speaker": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/speaker.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "speech": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/speech.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "spell-check-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/spell-check-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "spell-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/spell-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "spline-pointer": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/spline-pointer.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "spline": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/spline.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "split": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/split.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "spool": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/spool.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "spray-can": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/spray-can.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sprout": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sprout.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-activity": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-activity.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "activity-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-activity.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-arrow-down-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-arrow-down-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-down-left-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-arrow-down-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-arrow-down-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-arrow-down-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-down-right-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-arrow-down-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-arrow-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-arrow-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-down-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-arrow-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-arrow-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-arrow-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-left-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-arrow-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-arrow-out-down-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-arrow-out-down-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-down-left-from-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-arrow-out-down-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-arrow-out-down-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-arrow-out-down-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-down-right-from-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-arrow-out-down-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-arrow-out-up-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-up-left-from-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-arrow-out-up-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-up-right-from-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-arrow-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-arrow-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-right-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-arrow-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-arrow-up-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-arrow-up-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-up-left-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-arrow-up-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-arrow-up-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-arrow-up-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-up-right-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-arrow-up-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-arrow-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-arrow-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "arrow-up-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-arrow-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-asterisk": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-asterisk.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "asterisk-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-asterisk.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-bottom-dashed-scissors": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-bottom-dashed-scissors.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "scissors-square-dashed-bottom": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-bottom-dashed-scissors.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-chart-gantt": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-chart-gantt.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "gantt-chart-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-chart-gantt.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-gantt-chart": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-chart-gantt.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-check-big": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "check-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "check-square-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-chevron-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-chevron-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chevron-down-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-chevron-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-chevron-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-chevron-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chevron-left-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-chevron-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-chevron-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-chevron-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chevron-right-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-chevron-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-chevron-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-chevron-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "chevron-up-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-chevron-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-code": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-code.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "code-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-code.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-dashed-bottom-code": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-dashed-bottom-code.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-dashed-bottom": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-dashed-bottom.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-dashed-kanban": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-dashed-kanban.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "kanban-square-dashed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-dashed-kanban.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-dashed-mouse-pointer": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-dashed-mouse-pointer.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "mouse-pointer-square-dashed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-dashed-mouse-pointer.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-dashed-top-solid": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-dashed-top-solid.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-dashed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-dashed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "box-select": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-dashed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-divide": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-divide.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "divide-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-divide.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-dot": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-dot.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "dot-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-dot.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-equal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-equal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "equal-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-equal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-function": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-function.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "function-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-function.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-kanban": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-kanban.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "kanban-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-kanban.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-library": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-library.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "library-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-library.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-m": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-m.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "m-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-m.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-menu": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-menu.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "menu-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-menu.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "minus-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-mouse-pointer": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-mouse-pointer.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "inspect": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-mouse-pointer.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-parking-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-parking-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "parking-square-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-parking-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-parking": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-parking.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "parking-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-parking.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-pen": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pen-box": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "edit": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pen-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-percent": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-percent.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "percent-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-percent.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-pi": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-pi.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pi-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-pi.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-pilcrow": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-pilcrow.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "pilcrow-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-pilcrow.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-play": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-play.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "play-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-play.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "plus-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-power": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-power.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "power-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-power.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-radical": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-radical.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-round-corner": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-round-corner.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-scissors": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-scissors.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "scissors-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-scissors.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-sigma": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-sigma.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sigma-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-sigma.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-slash": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-slash.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "slash-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-slash.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-split-horizontal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-split-horizontal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "split-square-horizontal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-split-horizontal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-split-vertical": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-split-vertical.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "split-square-vertical": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-split-vertical.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-square.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-stack": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-stack.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-terminal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-terminal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "terminal-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-terminal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-user-round": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-user-round.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-square-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-user-round.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-user": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-user.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-user.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "x-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "squares-exclude": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/squares-exclude.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "squares-intersect": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/squares-intersect.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "squares-subtract": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/squares-subtract.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "squares-unite": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/squares-unite.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "squircle-dashed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/squircle-dashed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "squircle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/squircle.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "squirrel": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/squirrel.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "stamp": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/stamp.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "star-half": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/star-half.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "star-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/star-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "star": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "step-back": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/step-back.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "step-forward": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/step-forward.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "stethoscope": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sticker": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sticker.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sticky-note": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sticky-note.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "store": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/store.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "stretch-horizontal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/stretch-horizontal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "stretch-vertical": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/stretch-vertical.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "strikethrough": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/strikethrough.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "subscript": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/subscript.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sun-dim": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sun-dim.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sun-medium": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sun-medium.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sun-moon": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sun-moon.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sun-snow": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sun-snow.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sun": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sunrise": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sunrise.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sunset": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sunset.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "superscript": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/superscript.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "swatch-book": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/swatch-book.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "swiss-franc": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/swiss-franc.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "switch-camera": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/switch-camera.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "sword": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sword.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "swords": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/swords.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "syringe": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/syringe.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "table-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/table-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "table-cells-merge": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/table-cells-merge.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "table-cells-split": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/table-cells-split.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "table-columns-split": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/table-columns-split.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "table-of-contents": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/table-of-contents.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "table-properties": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/table-properties.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "table-rows-split": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/table-rows-split.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "table": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/table.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tablet-smartphone": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tablet-smartphone.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tablet": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tablet.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tablets": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tablets.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tag": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tags": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tags.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tally-1": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tally-1.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tally-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tally-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tally-3": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tally-3.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tally-4": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tally-4.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tally-5": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tally-5.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tangent": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tangent.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "target": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "telescope": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/telescope.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tent-tree": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tent-tree.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tent": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tent.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "terminal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "test-tube-diagonal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/test-tube-diagonal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "test-tube-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/test-tube-diagonal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "test-tube": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/test-tube.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "test-tubes": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/test-tubes.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "text-cursor-input": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/text-cursor-input.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "text-cursor": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/text-cursor.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "text-quote": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/text-quote.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "text-search": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/text-search.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "text-select": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/text-select.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "text-selection": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/text-select.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "text": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/text.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "theater": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/theater.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "thermometer-snowflake": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/thermometer-snowflake.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "thermometer-sun": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/thermometer-sun.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "thermometer": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/thermometer.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "thumbs-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/thumbs-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "thumbs-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ticket-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ticket-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ticket-minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ticket-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ticket-percent": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ticket-percent.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ticket-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ticket-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ticket-slash": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ticket-slash.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ticket-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ticket-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ticket": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ticket.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tickets-plane": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tickets-plane.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tickets": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tickets.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "timer-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/timer-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "timer-reset": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/timer-reset.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "timer": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "toggle-left": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/toggle-left.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "toggle-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/toggle-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "toilet": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/toilet.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tool-case": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tool-case.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tornado": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tornado.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "torus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/torus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "touchpad-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/touchpad-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "touchpad": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/touchpad.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tower-control": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tower-control.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "toy-brick": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/toy-brick.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tractor": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tractor.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "traffic-cone": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/traffic-cone.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "train-front-tunnel": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/train-front-tunnel.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "train-front": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/train-front.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "train-track": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/train-track.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tram-front": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tram-front.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "train": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tram-front.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "transgender": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/transgender.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "trash-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "trash": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/trash.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tree-deciduous": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tree-deciduous.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tree-palm": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tree-palm.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "palmtree": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tree-palm.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tree-pine": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tree-pine.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "trees": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/trees.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "trello": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/trello.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "trending-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "trending-up-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/trending-up-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "trending-up": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "triangle-alert": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "alert-triangle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "triangle-dashed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/triangle-dashed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "triangle-right": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/triangle-right.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "triangle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/triangle.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "trophy": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "truck-electric": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/truck-electric.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "truck": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "turtle": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/turtle.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tv-minimal-play": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tv-minimal-play.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tv-minimal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tv-minimal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tv-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tv-minimal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "tv": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tv.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "twitch": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/twitch.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "twitter": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "type-outline": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/type-outline.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "type": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/type.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "umbrella-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/umbrella-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "umbrella": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/umbrella.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "underline": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/underline.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "undo-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/undo-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "undo-dot": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/undo-dot.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "undo": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/undo.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "unfold-horizontal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/unfold-horizontal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "unfold-vertical": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/unfold-vertical.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "ungroup": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ungroup.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "university": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/university.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "school-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/university.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "unlink-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/unlink-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "unlink": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/unlink.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "unplug": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/unplug.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "upload": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "usb": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/usb.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-cog": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user-cog.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-lock": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user-lock.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-pen": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user-pen.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-round-check": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user-round-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-check-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user-round-check.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-round-cog": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user-round-cog.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-cog-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user-round-cog.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-round-minus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user-round-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-minus-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user-round-minus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-round-pen": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user-round-pen.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-round-plus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user-round-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-plus-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user-round-plus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-round-search": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user-round-search.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-round-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user-round-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-x-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user-round-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-round": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user-round.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user-round.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-search": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user-search.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "user": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "users-round": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/users-round.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "users-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/users-round.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "users": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "utensils-crossed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/utensils-crossed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "fork-knife-crossed": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/utensils-crossed.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "utensils": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/utensils.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "fork-knife": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/utensils.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "utility-pole": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/utility-pole.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "variable": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/variable.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "vault": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/vault.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "vector-square": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/vector-square.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "vegan": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/vegan.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "venetian-mask": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/venetian-mask.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "venus-and-mars": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/venus-and-mars.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "venus": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/venus.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "vibrate-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/vibrate-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "vibrate": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/vibrate.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "video-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/video-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "video": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "videotape": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/videotape.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "view": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/view.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "voicemail": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/voicemail.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "volleyball": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/volleyball.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "volume-1": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/volume-1.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "volume-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "volume-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/volume-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "volume-x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "volume": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/volume.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "vote": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/vote.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "wallet-cards": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/wallet-cards.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "wallet-minimal": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/wallet-minimal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "wallet-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/wallet-minimal.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "wallet": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "wallpaper": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/wallpaper.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "wand-sparkles": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/wand-sparkles.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "wand-2": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/wand-sparkles.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "wand": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/wand.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "warehouse": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/warehouse.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "washing-machine": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/washing-machine.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "watch": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/watch.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "waves-ladder": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/waves-ladder.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "waves": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/waves.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "waypoints": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/waypoints.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "webcam": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/webcam.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "webhook-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/webhook-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "webhook": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/webhook.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "weight": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/weight.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "wheat-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/wheat-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "wheat": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/wheat.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "whole-word": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/whole-word.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "wifi-cog": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/wifi-cog.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "wifi-high": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/wifi-high.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "wifi-low": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/wifi-low.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "wifi-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/wifi-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "wifi-pen": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/wifi-pen.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "wifi-zero": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/wifi-zero.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "wifi": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "wind-arrow-down": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/wind-arrow-down.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "wind": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/wind.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "wine-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/wine-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "wine": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/wine.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "workflow": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/workflow.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "worm": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/worm.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "wrap-text": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/wrap-text.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "wrench": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "x": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "youtube": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "zap-off": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/zap-off.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "zap": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "zoom-in": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/zoom-in.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
    "zoom-out": ()=>__turbopack_context__.r("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/zoom-out.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i)
};
;
 //# sourceMappingURL=dynamicIconImports.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/DynamicIcon.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DynamicIcon),
    "iconNames": (()=>iconNames)
});
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$dynamicIconImports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/dynamicIconImports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
"use strict";
"use client";
;
;
;
const iconNames = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$dynamicIconImports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
async function getIconNode(name) {
    if (!(name in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$dynamicIconImports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])) {
        throw new Error("[lucide-react]: Name in Lucide DynamicIcon not found");
    }
    const icon = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$dynamicIconImports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][name]();
    return icon.__iconNode;
}
const DynamicIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ name, fallback: Fallback, ...props }, ref)=>{
    const [iconNode, setIconNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DynamicIcon.useEffect": ()=>{
            getIconNode(name).then(setIconNode).catch({
                "DynamicIcon.useEffect": (error)=>{
                    console.error(error);
                }
            }["DynamicIcon.useEffect"]);
        }
    }["DynamicIcon.useEffect"], [
        name
    ]);
    if (iconNode == null) {
        if (Fallback == null) {
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(Fallback);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref,
        ...props,
        iconNode
    });
});
;
 //# sourceMappingURL=DynamicIcon.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Database)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "ellipse",
        {
            cx: "12",
            cy: "5",
            rx: "9",
            ry: "3",
            key: "msslwz"
        }
    ],
    [
        "path",
        {
            d: "M3 5V19A9 3 0 0 0 21 19V5",
            key: "1wlel7"
        }
    ],
    [
        "path",
        {
            d: "M3 12A9 3 0 0 0 21 12",
            key: "mv7ke4"
        }
    ]
];
const Database = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("database", __iconNode);
;
 //# sourceMappingURL=database.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Database": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/id-card.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>IdCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 10h2",
            key: "8sgtl7"
        }
    ],
    [
        "path",
        {
            d: "M16 14h2",
            key: "epxaof"
        }
    ],
    [
        "path",
        {
            d: "M6.17 15a3 3 0 0 1 5.66 0",
            key: "n6f512"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "11",
            r: "2",
            key: "yxgjnd"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "5",
            width: "20",
            height: "14",
            rx: "2",
            key: "qneu4z"
        }
    ]
];
const IdCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("id-card", __iconNode);
;
 //# sourceMappingURL=id-card.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/id-card.js [app-client] (ecmascript) <export default as IdCard>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IdCard": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$id$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$id$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/id-card.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>ChevronDown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
];
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-down", __iconNode);
;
 //# sourceMappingURL=chevron-down.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ChevronDown": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Mail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
            key: "132q7q"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "4",
            width: "20",
            height: "16",
            rx: "2",
            key: "izxlao"
        }
    ]
];
const Mail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("mail", __iconNode);
;
 //# sourceMappingURL=mail.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Mail": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Users)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "path",
        {
            d: "M16 3.128a4 4 0 0 1 0 7.744",
            key: "16gr8j"
        }
    ],
    [
        "path",
        {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ]
];
const Users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("users", __iconNode);
;
 //# sourceMappingURL=users.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Users": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>TrendingUp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 7h6v6",
            key: "box55l"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.5 8.5-5-5L2 17",
            key: "1t1m79"
        }
    ]
];
const TrendingUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("trending-up", __iconNode);
;
 //# sourceMappingURL=trending-up.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TrendingUp": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=3deaf_lucide-react_dist_esm_7c6cd80b._.js.map