"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var ReactDOMServer = __importStar(require("react-dom/server"));
var react_helmet_1 = require("react-helmet");
var react_router_dom_1 = require("react-router-dom");
var Document_1 = require("./Document");
var After_1 = require("./After");
var loadInitialProps_1 = require("./loadInitialProps");
var utils = __importStar(require("./utils"));
var url = __importStar(require("url"));
var getAssets_1 = require("./getAssets");
var modPageFn = function (Page) {
    return function RenderAfteri(props) {
        return React.createElement(Page, __assign({}, props));
    };
};
function render(options) {
    return __awaiter(this, void 0, void 0, function () {
        var req, res, pureRoutes, assets, Document, customRenderer, chunks, _a, scrollToTop, rest, Doc, routes, context, autoScrollRef, _b, match, initialData, _c, redirectTo, statusCode, reactRouterMatch, _d, scripts, styles, afterData, data, renderPage, _e, html, docProps, props, doc;
        var _this = this;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    req = options.req, res = options.res, pureRoutes = options.routes, assets = options.assets, Document = options.document, customRenderer = options.customRenderer, chunks = options.chunks, _a = options.scrollToTop, scrollToTop = _a === void 0 ? true : _a, rest = __rest(options, ["req", "res", "routes", "assets", "document", "customRenderer", "chunks", "scrollToTop"]);
                    Doc = Document || Document_1.Document;
                    routes = utils.getAllRoutes(pureRoutes);
                    context = {};
                    autoScrollRef = { current: scrollToTop };
                    return [4 /*yield*/, loadInitialProps_1.loadInitialProps(routes, url.parse(req.url).pathname, __assign({ req: req,
                            res: res, scrollToTop: autoScrollRef }, rest))];
                case 1:
                    _b = _f.sent(), match = _b.match, initialData = _b.data;
                    if (initialData) {
                        _c = initialData, redirectTo = _c.redirectTo, statusCode = _c.statusCode;
                        if (statusCode) {
                            context.statusCode = statusCode;
                        }
                        if (redirectTo) {
                            res.redirect(statusCode || 302, redirectTo);
                            return [2 /*return*/];
                        }
                    }
                    if (match && match.redirectTo && match.path) {
                        res.redirect(301, req.originalUrl.replace(match.path, match.redirectTo));
                        return [2 /*return*/];
                    }
                    reactRouterMatch = react_router_dom_1.matchPath(req.url, match);
                    _d = getAssets_1.getAssets({ route: match, chunks: chunks }), scripts = _d.scripts, styles = _d.styles;
                    afterData = {
                        scrollToTop: autoScrollRef,
                    };
                    data = {
                        initialData: initialData,
                        afterData: afterData,
                    };
                    renderPage = function (fn) {
                        if (fn === void 0) { fn = modPageFn; }
                        return __awaiter(_this, void 0, void 0, function () {
                            var defaultRenderer, renderer, asyncOrSyncRender, renderedContent, helmet, statusCode, redirectTo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        defaultRenderer = function (element) { return ({
                                            html: ReactDOMServer.renderToString(element),
                                        }); };
                                        renderer = customRenderer || defaultRenderer;
                                        asyncOrSyncRender = renderer(React.createElement(react_router_dom_1.StaticRouter, { location: req.url, context: context }, fn(After_1.After)({ routes: routes, data: data, transitionBehavior: 'blocking' })));
                                        return [4 /*yield*/, asyncOrSyncRender];
                                    case 1:
                                        renderedContent = _a.sent();
                                        helmet = react_helmet_1.Helmet.renderStatic();
                                        statusCode = context.statusCode, redirectTo = context.url;
                                        if (redirectTo) {
                                            res.redirect(statusCode || 302, redirectTo);
                                        }
                                        if (statusCode) {
                                            res.status(statusCode);
                                        }
                                        return [2 /*return*/, __assign({ helmet: helmet }, renderedContent)];
                                }
                            });
                        });
                    };
                    return [4 /*yield*/, Doc.getInitialProps(__assign({ req: req,
                            res: res,
                            assets: assets,
                            renderPage: renderPage,
                            data: data, helmet: react_helmet_1.Helmet.renderStatic(), match: reactRouterMatch, scripts: scripts,
                            styles: styles, scrollToTop: autoScrollRef }, rest))];
                case 2:
                    _e = _f.sent(), html = _e.html, docProps = __rest(_e, ["html"]);
                    props = __assign(__assign(__assign({ assets: assets,
                        data: data,
                        scripts: scripts,
                        styles: styles, match: reactRouterMatch }, rest), docProps), { html: html });
                    doc = ReactDOMServer.renderToStaticMarkup(React.createElement(Document_1.__AfterContext.Provider, { value: props },
                        React.createElement(Doc, __assign({}, props))));
                    return [2 /*return*/, "<!doctype html>" + doc];
            }
        });
    });
}
exports.render = render;
//# sourceMappingURL=render.js.map