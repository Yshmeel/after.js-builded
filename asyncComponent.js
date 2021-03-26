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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
/**
 * Returns a new React component, ready to be instantiated.
 * Note the closure here protecting Component, and providing a unique
 * instance of Component to the static implementation of `load`.
 */
function asyncComponent(_a) {
    var loader = _a.loader, Placeholder = _a.Placeholder, chunkName = _a.chunkName;
    // keep Component in a closure to avoid doing this stuff more than once
    var Component = null;
    return /** @class */ (function (_super) {
        __extends(AsyncRouteComponent, _super);
        function AsyncRouteComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                Component: Component,
            };
            _this.updateState = function () {
                // Only update state if we don't already have a reference to the
                // component, this prevent unnecessary renders.
                if (_this.state.Component !== Component) {
                    _this.setState({
                        Component: Component,
                    });
                }
            };
            return _this;
        }
        /**
         * Static so that you can call load against an uninstantiated version of
         * this component. This should only be called one time outside of the
         * normal render path.
         */
        AsyncRouteComponent.load = function () {
            return loader().then(function (ResolvedComponent) {
                Component = ResolvedComponent.default || ResolvedComponent;
            });
        };
        AsyncRouteComponent.getChunkName = function () {
            return chunkName;
        };
        AsyncRouteComponent.getInitialProps = function (ctx) {
            // Need to call the wrapped components getInitialProps if it exists
            if (Component !== null) {
                return Component.getInitialProps
                    ? Component.getInitialProps(ctx)
                    : Promise.resolve(null);
            }
        };
        AsyncRouteComponent.prototype.componentDidMount = function () {
            AsyncRouteComponent.load().then(this.updateState);
        };
        AsyncRouteComponent.prototype.render = function () {
            var ComponentFromState = this.state.Component;
            if (ComponentFromState) {
                return React.createElement(ComponentFromState, __assign({}, this.props));
            }
            if (Placeholder) {
                return React.createElement(Placeholder, __assign({}, this.props));
            }
            return null;
        };
        return AsyncRouteComponent;
    }(React.Component));
}
exports.asyncComponent = asyncComponent;
//# sourceMappingURL=asyncComponent.js.map