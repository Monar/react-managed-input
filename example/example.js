var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pasteThis = '          can             '.replace(/\s/g, '\xA0');
var inputWidth = 250;

var Example = function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    _classCallCheck(this, Example);

    var _this = _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this, props));

    _this.state = { value1: 'we go', value2: 'we go' };

    _this.handleChange1 = function (value, selection, prevSelection, event) {
      var superValue = value.replace(/\s+/g, ' ');
      var diff = value.length - superValue.length;
      var newStart = selection.start - diff;

      _this.setState({ value1: superValue });
      _this.input.setSelectionRange(newStart);
    };

    _this.handleChange2 = function (event) {
      var superValue = event.target.value.replace(/\s+/g, ' ');
      _this.setState({ value2: superValue });
    };
    return _this;
  }

  _createClass(Example, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        Box,
        {
          alignItems: 'center',
          justifyContent: 'center',
          margin: '100px auto 0',
          flexFlow: 'column nowrap'
        },
        React.createElement(
          Box,
          { flexFlow: 'column nowrap', alignItems: 'flex-start' },
          React.createElement(
            'p',
            null,
            'Both inputs trim multiple whitespace, like this:'
          ),
          React.createElement(
            'p',
            null,
            React.createElement(
              'code',
              null,
              'value.replace(/\\s+/g, \' \')'
            )
          ),
          React.createElement(
            'p',
            null,
            'Try to paste this: "',
            pasteThis,
            '" after ',
            React.createElement(
              'strong',
              null,
              'we'
            )
          )
        ),
        React.createElement(
          Box,
          { padding: 15, alignItems: 'center', flexFlow: 'column nowrap' },
          React.createElement(
            'code',
            null,
            '<Input ref={setRef} onChange={handleChange1} value={value1}/>'
          ),
          React.createElement(Input, {
            ref: function ref(n) {
              return _this2.input = n;
            },
            style: { width: inputWidth },
            onChange: this.handleChange1,
            value: this.state.value1
          })
        ),
        React.createElement(
          Box,
          { padding: 15, alignItems: 'center', flexFlow: 'column nowrap' },
          React.createElement(
            'code',
            null,
            '<input value={value2} onChange={handleChange2}/>'
          ),
          React.createElement('input', {
            style: { width: inputWidth },
            value: this.state.value2,
            onChange: this.handleChange2
          })
        )
      );
    }
  }]);

  return Example;
}(React.Component);

ReactDOM.render(React.createElement(Example, null), document.getElementById('example'));
