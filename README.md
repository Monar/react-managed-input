[![npm version](https://badge.fury.io/js/react-managed-input.svg)](https://badge.fury.io/js/react-managed-input)

# react-managed-input

### Motivation

Have you ever needed to write managed input modifying value on the fly? Like this one:
```js

class TrimmingInput extends React.Component {
  state = { value: '' };

  handleChange = (event) => {
    const value = event.target.value;
    const trimmedValue = value.replace(/\s+/g, ' ').trimLeft();
    this.setState({ value: trimmedValue });
  };

  render() {
    return <input value={this.state.value} onChange={this.handleChange} />
  }
}
```

You probably encountered problems with caret jumping at the end of the input
whenever you try to input value that will be trimmed. So this component will
allow you to manage caret position and handle properly this kinds of problems.

Check the [**example**](https://monar.github.io/react-managed-input/index.html)
to see what I'm writing about ([source code](https://github.com/Monar/react-managed-input/blob/master/example/index.js)).


### Browser compatibility

This component uses [Selection API](https://developer.mozilla.org/en-US/docs/Web/API/Selection_API)
check if you can use it. ([check here](http://caniuse.com/#feat=selection-api))

### Prop Types

##### onChange
`(value: string, selection: Selection,  prevSelection: Selection, event: object): void`

Callback invoked whenever value of the input is changed.
Selection is object of type: `{ start: number, end: number, direction: string }`.

##### innerRef
`(node: Node):void`

Callback invoked at mount time allows assigning inner component.

### Public Methods

##### setSelectionRange 

`(start: number, end: number, direction: string = 'forward'): void`

Will set selection after next render. When `end` argument is not provided then
is set to the same value as `start`.
