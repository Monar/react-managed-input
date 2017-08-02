/*
  Copyright (C) 2017 Piotr Tomasz Monarski.
  Licensed under the MIT License (MIT), see
  https://github.com/Monar/react-manged-input
*/

import React from 'react';
import PropTypes from 'prop-types';


export class Input extends React.Component {

  static displayName = 'Input';

  static propTypes = {
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
  };

  state = {
    setSelection: null,
  };

  componentWillUnmount() {
    document.removeEventListener('selectionchange', this.handleSelectionChange);
  }

  componentDidUpdate() {
    if(this.state.setSelection !== null) {
      const { start, end ,direction } = this.state.setSelection;

      this.setState(
        { setSelection: null },
        () => this.node.setSelectionRange(start, end, direction),
      );
    }
  }

  render() {
    return (
      <input
        {...this.props}
        ref={this.setRefNode}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      />
    );
  }

  setRefNode = (node) => {
    this.node = node;
  };

  setSelectionRange = (start, end, direction='forward') => {
    this.setState({
      setSelection: {
        start,
        end: end || start,
        direction,
      },
    });
  };

  handleSelectionChange = () => {
    const {
      selectionStart: start,
      selectionEnd: end,
      selectionDirection: direction,
    } = this.node;

    this.setState({ selection: { start, end, direction } });
  };

  handleFocus = (event) => {
    document.addEventListener('selectionchange', this.handleSelectionChange);
    if(this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleBlur = (event) => {
    this.setState({ selection: null });

    document.removeEventListener('selectionchange', this.handleSelectionChange);
    if(this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  handleChange = (event) => {
    if (this.props.onChange) {
      const { target: { value } } = event;
      const {
        selectionStart: start,
        selectionEnd: end,
        selectionDirection: direction,
      } = this.node;

      this.props.onChange(
        value,
        { start, end, direction },
        this.state.selection,
        event
      );
    }
  };
}

export default Input;
