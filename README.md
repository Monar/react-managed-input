# react-managed-input

This is simple component to handle problems with jumping caret when changing
value in `onChange` handler and passing it to value.

Check [this](https://monar.github.io/react-managed-input/index.html) simple
example to see what it's all about.

This component uses [selection api](https://developer.mozilla.org/en-US/docs/Web/API/Selection_API)

[Check if you can use it](http://caniuse.com/#feat=selection-api)

## API

### Prop Types

##### onChange `(value: string, selection: Selection,  preSelection: Selection, event: object): void`

Callback invoked whenever value of the input is changed.
Selection is object of type: `{ start: number, end: number, direction: string }`.

##### innerRef `(node: Node):void`

Callback invoked at mount time allows assigning inner component.

### Public Methods

##### setSelectionRange (start: number, end: number, direction: string = 'forward'): void

Will set selection after next render. If only first "start" argument then end value is set equal with start. 
