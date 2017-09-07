const pasteThis =  '          can             '.replace(/\s/g, '\u00A0');
const inputWidth = 250;

class Example extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value1: 'we go', value2: 'we go'  };

    this.handleChange1 = (value, selection, prevSelection, event) => {
      const superValue = value.replace(/\s+/g, ' ');
      const diff = value.length - superValue.length;
      const newStart = selection.start - diff;


      this.setState({ value1: superValue });
      this.input.setSelectionRange(newStart);
    };

    this.handleChange2 = (event) => {
      const superValue = event.target.value.replace(/\s+/g, ' ');
      this.setState({ value2: superValue });
    };
  }

  render() {
    return (
      <Box
        alignItems="center"
        justifyContent="center"
        margin="100px auto 0"
        flexFlow="column nowrap"
      >
        <Box flexFlow="column nowrap" alignItems="flex-start">
          <p>Both inputs trim multiple whitespace, like this:</p>
          <p><code>value.replace(/\s+/g, ' ')</code></p>
          <p>Try to paste this: "{pasteThis}" after <strong>we</strong></p>
        </Box>
        <Box padding={15} alignItems="center" flexFlow="column nowrap">
          <code>
            {'<Input ref={setRef} onChange={handleChange1} value={value1}/>'}
          </code>
          <Input
            ref={(n) => this.input = n}
            style={{ width: inputWidth }}
            onChange={this.handleChange1}
            value={this.state.value1}
          />
        </Box>
        <Box padding={15} alignItems="center" flexFlow="column nowrap">
          <code>
            {'<input value={value2} onChange={handleChange2}/>'}
          </code>
          <input
            style={{ width: inputWidth }}
            value={this.state.value2}
            onChange={this.handleChange2}
          />
        </Box>
      </Box>
    );
  }
}


ReactDOM.render(<Example/>, document.getElementById('example'));
