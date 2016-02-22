class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results: null
    };
  }
  onAnswer(query) {
    var ajaxCallback = (returnData) => {
      this.setState({
      results: returnData
      });
    };
    searchTechies({TODO}, ajaxCallback);
  }

  render() {
    return(
    <div>
      <div>
        <Questions answered={false} onAnswer={this.onAnswer.bind(this)}/>
      </div>
      <div>
        <ResultList/>
      </div>
    </div>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));
