"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var react_router_dom_1 = require("react-router-dom");
var loadInitialProps_1 = require("./loadInitialProps");
var utils_1 = require("./utils");
var Afterparty = /** @class */ (function (_super) {
    __extends(Afterparty, _super);
    function Afterparty() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            data: _this.props.data.initialData,
            previousLocation: null,
            currentLocation: _this.props.location,
            isLoading: false,
        };
        _this.prefetcherCache = {};
        _this.NotfoundComponent = utils_1.get404Component(_this.props.routes);
        _this.prefetch = function (pathname) {
            loadInitialProps_1.loadInitialProps(_this.props.routes, pathname, {
                history: _this.props.history,
            })
                .then(function (_a) {
                var _b;
                var data = _a.data;
                _this.prefetcherCache = __assign(__assign({}, _this.prefetcherCache), (_b = {}, _b[pathname] = data, _b));
            })
                .catch(function (e) { return console.log(e); });
        };
        return _this;
    }
    Afterparty.getDerivedStateFromProps = function (props, state) {
        var currentLocation = props.location;
        var previousLocation = state.currentLocation;
        var navigated = (currentLocation === null || currentLocation === void 0 ? void 0 : currentLocation.pathname) !== (previousLocation === null || previousLocation === void 0 ? void 0 : previousLocation.pathname);
        if (navigated) {
            return {
                previousLocation: state.previousLocation || previousLocation,
                currentLocation: currentLocation,
                isLoading: true,
            };
        }
        return null;
    };
    Afterparty.prototype.componentDidUpdate = function (_prevProps, prevState) {
        var _this = this;
        var _a, _b;
        var navigated = ((_a = prevState.currentLocation) === null || _a === void 0 ? void 0 : _a.pathname) !== ((_b = this.state.currentLocation) === null || _b === void 0 ? void 0 : _b.pathname);
        if (navigated) {
            var _c = this.props, location_1 = _c.location, history_1 = _c.history, routes = _c.routes, data = _c.data, transitionBehavior = _c.transitionBehavior, 
            // we don't want to pass these
            // to loadInitialProps()
            match = _c.match, staticContext = _c.staticContext, children = _c.children, rest = __rest(_c, ["location", "history", "routes", "data", "transitionBehavior", "match", "staticContext", "children"]);
            var scrollToTop_1 = data.afterData.scrollToTop;
            var instantMode_1 = utils_1.isInstantTransition(transitionBehavior);
            // Only for page changes, prevent scroll up for anchor links
            if (prevState.currentLocation &&
                prevState.currentLocation.pathname !== location_1.pathname &&
                // Only Scroll if scrollToTop is not false
                scrollToTop_1.current === true &&
                instantMode_1 === true) {
                window.scrollTo(0, 0);
            }
            loadInitialProps_1.loadInitialProps(routes, location_1.pathname, __assign({ location: location_1,
                history: history_1,
                scrollToTop: scrollToTop_1 }, rest))
                .then(function (_a) {
                var data = _a.data;
                if (_this.state.currentLocation !== location_1)
                    return;
                // Only for page changes, prevent scroll up for anchor links
                if (prevState.currentLocation &&
                    prevState.currentLocation.pathname !== location_1.pathname &&
                    // Only Scroll if scrollToTop is not false
                    scrollToTop_1.current === true &&
                    instantMode_1 === false) {
                    window.scrollTo(0, 0);
                }
                _this.setState({ previousLocation: null, data: data, isLoading: false });
            })
                .catch(function (e) {
                // @todo we should more cleverly handle errors???
                console.log(e);
            });
        }
    };
    Afterparty.prototype.render = function () {
        var _this = this;
        var _a = this.state, previousLocation = _a.previousLocation, data = _a.data, isLoading = _a.isLoading;
        var _b = this.props, currentLocation = _b.location, transitionBehavior = _b.transitionBehavior;
        var initialData = this.prefetcherCache[currentLocation.pathname] || data;
        var instantMode = utils_1.isInstantTransition(transitionBehavior);
        // when we are in the instant mode we want to pass the right location prop
        // to the <Route /> otherwise it will render previous matche component
        var location = instantMode
            ? currentLocation
            : previousLocation || currentLocation;
        return (React.createElement(react_router_dom_1.Switch, { location: location },
            (initialData === null || initialData === void 0 ? void 0 : initialData.statusCode) === 404 && (React.createElement(react_router_dom_1.Route, { component: this.NotfoundComponent, path: location.pathname })),
            (initialData === null || initialData === void 0 ? void 0 : initialData.redirectTo) && React.createElement(react_router_dom_1.Redirect, { to: initialData.redirectTo }),
            utils_1.getAllRoutes(this.props.routes).map(function (r, i) { return (React.createElement(react_router_dom_1.Route, { key: "route--" + i, path: r.path, exact: r.exact, render: function (props) {
                    return React.createElement(r.component, __assign(__assign({}, initialData), { history: props.history, match: props.match, prefetch: _this.prefetch, location: location,
                        isLoading: isLoading }));
                } })); })));
    };
    Afterparty.defaultProps = {
        transitionBehavior: 'blocking',
    };
    return Afterparty;
}(React.Component));
exports.After = react_router_dom_1.withRouter(Afterparty);
//# sourceMappingURL=After.js.map