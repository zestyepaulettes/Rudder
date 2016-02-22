class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentQuestion: '',
      currentOptions: ['', ''],
      results: []
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
  componentDidMount(){
    var updateState = (results) => {
      console.log(results);
      this.setState({
        results: results
      });
    }
    getTechies(updateState);
  }

  render() {
    return(
    <div>
      <div>
        <Questions answered={false} onAnswer={this.onAnswer.bind(this)}/>
      </div>
      <div>
        <ResultList results={this.state.results}/>
      </div>
    </div>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));
