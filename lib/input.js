(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types'], factory) :
	(factory((global.window = global.window || {}),global.React,global.PropTypes));
}(this, (function (exports,React,PropTypes) { 'use strict';

React = React && 'default' in React ? React['default'] : React;
PropTypes = PropTypes && 'default' in PropTypes ? PropTypes['default'] : PropTypes;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
  Copyright (C) 2017 Piotr Tomasz Monarski.
  Licensed under the MIT License (MIT), see
  https://github.com/Monar/react-manged-input
*/

var Input = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      setSelection: null
    }, _this.setRefNode = function (node) {
      _this.node = node;
    }, _this.setSelectionRange = function (start, end) {
      var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'forward';

      _this.setState({
        setSelection: {
          start: start,
          end: end || start,
          direction: direction
        }
      });
    }, _this.handleSelectionChange = function () {
      var _this$node = _this.node,
          start = _this$node.selectionStart,
          end = _this$node.selectionEnd,
          direction = _this$node.selectionDirection;


      _this.setState({ selection: { start: start, end: end, direction: direction } });
    }, _this.handleFocus = function (event) {
      document.addEventListener('selectionchange', _this.handleSelectionChange);
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleBlur = function (event) {
      _this.setState({ selection: null });

      document.removeEventListener('selectionchange', _this.handleSelectionChange);
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleChange = function (event) {
      if (_this.props.onChange) {
        var value = event.target.value;
        var _this$node2 = _this.node,
            start = _this$node2.selectionStart,
            end = _this$node2.selectionEnd,
            direction = _this$node2.selectionDirection;


        _this.props.onChange(value, { start: start, end: end, direction: direction }, _this.state.selection, event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Input, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('selectionchange', this.handleSelectionChange);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      if (this.state.setSelection !== null) {
        var _state$setSelection = this.state.setSelection,
            start = _state$setSelection.start,
            end = _state$setSelection.end,
            direction = _state$setSelection.direction;


        this.setState({ setSelection: null }, function () {
          return _this2.node.setSelectionRange(start, end, direction);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement('input', _extends({}, this.props, {
        ref: this.setRefNode,
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      }));
    }
  }]);

  return Input;
}(React.Component);

Input.displayName = 'Input';
Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};

exports.Input = Input;
exports['default'] = Input;

Object.defineProperty(exports, '__esModule', { value: true });

})));
