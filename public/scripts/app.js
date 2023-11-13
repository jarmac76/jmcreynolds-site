"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var McreynoldsApp = function (_React$Component) {
  _inherits(McreynoldsApp, _React$Component);

  function McreynoldsApp() {
    _classCallCheck(this, McreynoldsApp);

    return _possibleConstructorReturn(this, (McreynoldsApp.__proto__ || Object.getPrototypeOf(McreynoldsApp)).apply(this, arguments));
  }

  _createClass(McreynoldsApp, [{
    key: "render",
    value: function render() {
      var title = "Jared McReynolds Site";

      return React.createElement(
        "div",
        { className: "parent-container" },
        React.createElement(Header, null),
        React.createElement(Content, null),
        React.createElement(Footer, null)
      );
    }
  }]);

  return McreynoldsApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "header" },
        React.createElement(
          "div",
          { className: "header-band" },
          React.createElement(
            "figure",
            { className: "logo-image" },
            React.createElement("img", { src: "../images/Logo1.png", alt: "JM logo" })
          )
        ),
        React.createElement(
          "div",
          { className: "menu-band" },
          React.createElement(
            "div",
            { className: "menu" },
            React.createElement(
              "div",
              { className: "menu-item" },
              React.createElement(
                "a",
                { href: "#" },
                "About"
              )
            ),
            React.createElement(
              "div",
              { className: "menu-item" },
              React.createElement(
                "a",
                { href: "#" },
                "Blog"
              )
            ),
            React.createElement(
              "div",
              { className: "menu-item" },
              React.createElement(
                "a",
                { href: "#" },
                "Skills"
              )
            ),
            React.createElement(
              "div",
              { className: "menu-item" },
              React.createElement(
                "a",
                { href: "#" },
                "Resume"
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Content = function (_React$Component3) {
  _inherits(Content, _React$Component3);

  function Content() {
    _classCallCheck(this, Content);

    return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
  }

  _createClass(Content, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "main-band" },
        React.createElement(
          "div",
          { className: "main" },
          React.createElement(
            "h2",
            null,
            "ME"
          ),
          React.createElement(
            "h3",
            null,
            "I am a developer, which is a funny way of saying that I take great ideas and see them through the problems until they become what they were meant to be."
          )
        )
      );
    }
  }]);

  return Content;
}(React.Component);

var Footer = function (_React$Component4) {
  _inherits(Footer, _React$Component4);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "footer-band" },
        React.createElement(
          "div",
          { className: "footer" },
          React.createElement(
            "p",
            null,
            "@2022"
          )
        )
      );
    }
  }]);

  return Footer;
}(React.Component);

ReactDOM.render(React.createElement(McreynoldsApp, null), document.getElementById('app'));
