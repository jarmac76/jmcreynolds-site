"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("./App.css");

var _header = require("./components/header");

var _header2 = _interopRequireDefault(_header);

var _footer = require("./components/footer");

var _footer2 = _interopRequireDefault(_footer);

var _reactRouterDom = require("react-router-dom");

var _aboutUs = require("./pages/about-us");

var _aboutUs2 = _interopRequireDefault(_aboutUs);

var _skills = require("./pages/skills");

var _skills2 = _interopRequireDefault(_skills);

var _resume = require("./pages/resume");

var _resume2 = _interopRequireDefault(_resume);

var _blog = require("./pages/blog");

var _blog2 = _interopRequireDefault(_blog);

var _home = require("./pages/home");

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return React.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    React.createElement(_header2.default, null),
    React.createElement(
      _reactRouterDom.Routes,
      null,
      React.createElement(_reactRouterDom.Route, { path: "/", element: React.createElement(_home2.default, null) }),
      React.createElement(_reactRouterDom.Route, { path: "/about", element: React.createElement(_aboutUs2.default, null) }),
      React.createElement(_reactRouterDom.Route, { path: "/Skills", element: React.createElement(_skills2.default, null) }),
      React.createElement(_reactRouterDom.Route, { path: "/resume", element: React.createElement(_resume2.default, null) }),
      React.createElement(_reactRouterDom.Route, { path: "/blog", element: React.createElement(_blog2.default, null) })
    ),
    React.createElement(_footer2.default, null)
  );
}
exports.default = App;
