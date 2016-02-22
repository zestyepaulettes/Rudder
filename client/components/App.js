class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentQuestion: '',
      currentOptions: ['', ''],
<<<<<<< HEAD
      results: null
=======
      results: []
>>>>>>> 72a93b2d1129abfbfce1536faf29cbbe27f0c71a
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
<<<<<<< HEAD
    var updateState = function(results){
      this.setState({
        results: results;
=======
    var updateState = (results) => {
      console.log(results);
      this.setState({
        results: results
>>>>>>> 72a93b2d1129abfbfce1536faf29cbbe27f0c71a
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
